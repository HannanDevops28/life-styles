import type { StatsCardProps } from "../../types";


export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="rounded-lg bg-[--color-bg-elevated] px-4 py-2 text-sm shadow-md transition-colors">
      <p className="text-xs text-[--color-muted]">{title}</p>
      <p className="font-medium text-[--color-primary]">{value}</p>
    </div>
  );
}
