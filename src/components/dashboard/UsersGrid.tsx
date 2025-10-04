import type { UsersGridProps } from "../../types";
import { UserCard } from "../common/UserCard";


export function UsersGrid({  filtered, loading, onPreview }: UsersGridProps) {
  if (loading) { 
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center w-full max-w-7xl mx-auto px-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-72 w-80 animate-pulse rounded-2xl bg-[--color-bg-elevated] shadow-md"
          />
        ))}
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center gap-3 rounded-xl bg-[--color-bg-elevated] p-10 text-center text-sm text-[--color-muted] shadow-md">
        <div className="text-4xl">🔍</div>
        <p className="text-base font-medium">No users found</p>
        <p className="text-xs">Try adjusting your filters or search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center w-full max-w-7xl mx-auto px-6">
      {filtered.map((u) => (
        <div key={u.login.uuid} onClick={() => onPreview(u)} className="cursor-pointer">
          <UserCard user={u} />
        </div>
      ))}
    </div>
  );
}
