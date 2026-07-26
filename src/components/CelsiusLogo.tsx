import { cn } from "@/lib/utils";

/**
 * Celsius logo — recreated from the actual brochure cover (page 1).
 * Three white horizontal "airflow" lines on dark blue:
 *   - Top line: straight, then hooks UP at the right end (like a wave crest)
 *   - Middle line: nearly straight, very subtle curve
 *   - Bottom line: straight, then hooks DOWN at the right end
 * Suggests wind/airflow — the iconic AC visual.
 */
export default function CelsiusLogo({
  className,
  showWordmark = true,
  variant = "default",
  size = "md",
}: {
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
}) {
  const stroke = variant === "light" ? "#ffffff" : "rgba(15,47,99,0.95)";
  const wordmark = variant === "light" ? "#ffffff" : "rgba(15,47,99,0.95)";
  const iconSize =
    size === "sm" ? "h-5 w-5" : size === "lg" ? "h-10 w-10" : "h-7 w-7";
  const wordSize =
    size === "sm"
      ? "text-base"
      : size === "lg"
        ? "text-3xl"
        : "text-xl md:text-2xl";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 60 60"
        className={iconSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top airflow line — straight then hooks UP at right */}
        <path
          d="M6 20 L 38 20 C 46 20, 52 14, 56 12"
          stroke={stroke}
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        {/* Middle airflow line — nearly straight, very subtle curve */}
        <path
          d="M6 30 L 50 30 C 54 30, 55 30, 56 29.5"
          stroke={stroke}
          strokeWidth="3.6"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Bottom airflow line — straight then hooks DOWN at right */}
        <path
          d="M6 40 L 38 40 C 46 40, 52 46, 56 48"
          stroke={stroke}
          strokeWidth="3.6"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-medium tracking-tight",
            wordSize,
          )}
          style={{ color: wordmark }}
        >
          Celsius
        </span>
      )}
    </div>
  );
}
