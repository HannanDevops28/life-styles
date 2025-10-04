import type { IconButtonCircleProps } from "../../types";


export function IconButtonCircle({ icon, index }: IconButtonCircleProps) {
  return (
    <span
      key={index}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[--color-bg] shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {icon}
    </span>
  );
}
