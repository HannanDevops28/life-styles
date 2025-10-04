import { useEffect } from 'react';
import type { ModalProps } from '../../types';

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg translate-y-0 animate-fade-in-up rounded-2xl border border-zinc-200/60 bg-[--color-bg-elevated] p-5 shadow-card dark:border-zinc-800">
        {title && <h3 className="mb-3 text-lg font-semibold tracking-tight">{title}</h3>}
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="rounded-md border border-zinc-200/60 bg-[--color-bg] px-3 py-1.5 text-sm shadow-sm hover:shadow dark:border-zinc-800">Close</button>
        </div>
      </div>
    </div>
    </>
  );
}


