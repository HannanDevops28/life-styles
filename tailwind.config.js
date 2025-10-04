/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        card: '0 6px 30px -12px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
