import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/Images/404.png";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center 
                 overflow-hidden bg-[--color-bg] text-center p-6
                 animate-fade-in-up space-y-6"
    >
      {/* Image */}
      <img
        src={notFoundImg}
        alt="Page Not Found"
        className="w-72 max-w-full rounded-2xl shadow-xl animate-float"
      />

      {/* Text */}
      <h1 className="text-6xl font-extrabold text-[--color-primary] drop-shadow-sm">
        404
      </h1>
      <p className="text-lg text-[--color-muted]">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/", { replace: true })}
        className="mt-4 rounded-xl bg-emerald-500 px-8 py-3 text-white font-medium 
                   shadow-lg transition-all duration-300
                   hover:bg-emerald-600 hover:scale-105 hover:shadow-emerald-400/30"
      >
        Go Back Home
      </button>
    </div>
  );
}
