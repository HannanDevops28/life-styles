import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium 
                 shadow-md hover:shadow-lg transition-all active:scale-[0.97] bg-[--color-bg]"
    >
      <SunIcon className="hidden h-5 w-5 dark:inline text-green-500" />
      <MoonIcon className="h-5 w-5 inline dark:hidden text-green-500" />
      <span className="hidden sm:inline">
        {theme === "dark" ? "Light" : "Dark"} mode
      </span>
    </button>
  );
}
