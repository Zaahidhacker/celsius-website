import { cn } from "@/lib/utils";

/**
 * Celsius logo — three stylised wavy "air current" lines above the
 * "Celsius" wordmark, in the brand's deep navy.
 * Recreated from the brochure description (page 3).
 */
export default function CelsiusLogo({
  className,
  showWordmark = true,
  variant = "default",
}: {
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "light";
}) {
  const stroke = variant === "light" ? "#ffffff" : "rgba(30,50,90,0.95)";
  const wordmark = variant === "light" ? "#ffffff" : "rgba(30,50,90,0.95)";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 56 56"
        className="h-7 w-7 md:h-8 md:w-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Three stylised air-current waves */}
        <path
          d="M6 16 C 16 8, 24 24, 34 16 S 52 8, 56 16"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M6 28 C 16 20, 24 36, 34 28 S 52 20, 56 28"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M6 40 C 16 32, 24 48, 34 40 S 52 32, 56 40"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
      {showWordmark && (
        <span
          className="font-regular tracking-tighter text-xl md:text-2xl"
          style={{ color: wordmark }}
        >
          Celsius
        </span>
      )}
    </div>
  );
}
