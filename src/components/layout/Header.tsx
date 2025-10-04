import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../../assets/Images/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full bg-[--color-bg-elevated]/90 backdrop-blur supports-[backdrop-filter]:bg-[--color-bg-elevated]/70 shadow-lg">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight hover:opacity-90 transition-opacity"
        >
          <img
            src={logo}
            alt="Life Styles Logo"
            className="h-12 w-12 object-contain"
          />
          Life Styles
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex text-sm text-[--color-muted] gap-3">
            <Link
              to="/"
              className="px-2 py-1 rounded hover:text-[--color-fg] transition-colors"
            >
              Home
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
