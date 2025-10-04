import type { DetailCardProps } from "../../types";


export function DetailCard({ icon, label, value, col }: DetailCardProps) {
  return (
    <div className={`flex items-start gap-3 rounded-xl bg-[--color-bg] p-4 shadow-md ${col === 2 ? "sm:col-span-2" : ""}`}>
      <span className="mt-1 text-green-500">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="font-medium">{label}</p>
        <p className="break-words text-[--color-fg]">{value}</p>
      </div>
    </div>
  );
}
