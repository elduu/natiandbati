import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";
import { CloseIcon } from "./icons";

interface ModalProps {
  /** Accessible name for the dialog. */
  label: string;
  onClose: () => void;
  /** Overlay background classes. */
  overlayClassName?: string;
  children: ReactNode;
}

/**
 * Full-screen overlay dialog, rendered in a portal. Handles Escape to close,
 * backdrop click, body scroll locking and focus restore.
 */
export function Modal({ label, onClose, overlayClassName = "bg-black/90", children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className={cn("fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 backdrop-blur-sm", overlayClassName)}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full text-cream/80 transition-colors hover:text-cream sm:right-5 sm:top-5"
        aria-label="Close"
      >
        <CloseIcon size={34} />
      </button>
      {children}
    </div>,
    document.body,
  );
}
