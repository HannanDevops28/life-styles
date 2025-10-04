import { MAX_VISIBLE } from "../../constants";
import type { PaginationProps } from "../../types";



export function Pagination({ page, hasNext, onPageChange, totalPages }: PaginationProps) {

  let startPage = Math.max(1, page - Math.floor(MAX_VISIBLE / 2));
  if (totalPages) {
    startPage = Math.min(startPage, Math.max(1, totalPages - MAX_VISIBLE + 1));
  }

  const pages = Array.from({ length: MAX_VISIBLE }, (_, i) => startPage + i)
    .filter((p) => !totalPages || p <= totalPages);

  return (
    <div className="flex items-center justify-center gap-2 pt-4">
      <button
        className="rounded-md bg-[--color-bg-elevated] px-3 py-1.5 text-sm shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        &lt;
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-9 h-9 flex items-center justify-center rounded-md shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg ${
            p === page
              ? "bg-green-500 text-white font-semibold"
              : "bg-[--color-bg-elevated] text-[--color-fg]"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        className="rounded-md bg-[--color-bg-elevated] px-3 py-1.5 text-sm shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
        disabled={!hasNext}
        onClick={() => onPageChange(page + 1)}
      >
        &gt;
      </button>
    </div>
  );
}
