pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "lifestyles-app"
        DOCKER_TAG = "latest"
        REGISTRY = "hannandevops/lifestyles" 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh """
                    docker build -t $DOCKER_IMAGE:$DOCKER_TAG .
                    """
                }
            }
        }

        stage('Push to Registry') {
            when {
                expression { return env.REGISTRY != null && env.REGISTRY != "" }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker tag $DOCKER_IMAGE:$DOCKER_TAG $REGISTRY:$DOCKER_TAG
                    docker push $REGISTRY:$DOCKER_TAG
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                sh """
                docker stop lifestyles-app || true
                docker rm lifestyles-app || true
                docker run -d --name lifestyles-app -p 80:80 $DOCKER_IMAGE:$DOCKER_TAG
                """
            }
        }
    }

    post {
        always {
            echo "Pipeline finished!"
        }
        failure {
            echo "Build failed ❌"
        }
        success {
            echo "Build succeeded ✅"
        }
    }
}
