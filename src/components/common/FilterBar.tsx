import { useState } from "react";
import type { FilterBarProps } from "../../types";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import { GENDERS } from "../../constants";

export function FilterBar({ gender, onGenderChange }: FilterBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 animate-fade-in-up relative">
      <div className="flex items-center gap-2">
        <FaFilter className="icon text-xl" />
        <label className="text-sm font-medium text-[--color-muted]">
          Gender
        </label>
      </div>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-36 px-4 py-2 
                     rounded-lg shadow-md transition-all duration-200
                     bg-white text-[--color-primary] 
                     dark:bg-[var(--color-bg-elevated)] dark:text-[--color-primary-foreground]
                     hover:shadow-lg focus:shadow-lg outline-none"
        >
          {gender.charAt(0).toUpperCase() + gender.slice(1)}
          <FaChevronDown className="ml-2 text-gray-500 dark:text-gray-300" />
        </button>

        {open && (
          <ul
            className="absolute z-50 mt-1 w-full rounded-lg shadow-lg
                         bg-white text-[--color-primary] 
                         dark:bg-[var(--color-bg-elevated)] dark:text-[--color-primary-foreground]"
          >
            {GENDERS.map((option) => (
              <li
                key={option}
                onClick={() => {
                  onGenderChange(option);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer 
                           text-[--color-primary] hover:bg-green-500 hover:text-white
                           dark:text-[--color-primary-foreground] dark:hover:bg-gray-600 dark:hover:text-white
                           transition-colors duration-200"
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
