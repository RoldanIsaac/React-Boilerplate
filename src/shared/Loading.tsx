import { memo } from "react";

interface LoadingProps {
  /** Render as a fullscreen fixed overlay */
  fullscreen?: boolean;
  /** Accessible message describing what is loading */
  message?: string;
  /** Spinner size */
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-4",
} as const;

/**
 * Accessible loading spinner with an optional fullscreen overlay.
 * Uses `aria-live` to announce loading state to screen readers.
 */
const Loading = memo(function Loading({
  fullscreen = false,
  message = "Loading…",
  size = "md",
}: LoadingProps) {
  const spinner = (
    <div
      role="status"
      aria-label={message}
      className="flex flex-col items-center gap-3"
    >
      <div
        className={`animate-spin rounded-full border-current border-t-transparent text-blue-500 ${sizeMap[size]}`}
        aria-hidden="true"
      />
      <span className="sr-only">{message}</span>
      <p
        className="text-sm text-gray-500 dark:text-gray-400"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        {spinner}
      </div>
    );
  }

  return spinner;
});

export default Loading;
