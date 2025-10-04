import type { SearchBarProps } from "../../types";

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full sm:w-1/4">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, email, or location"
        className="
          w-full
          rounded-xl
          bg-[--color-bg-elevated]
          pl-9
          pr-3
          py-3
          text-sm
          shadow-lg
          outline-none
          transition
          placeholder:text-[--color-muted]
          hover:shadow-xl
          focus:shadow-lg
        "
      />
      <svg
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[--color-muted]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    </div>
  );
}
