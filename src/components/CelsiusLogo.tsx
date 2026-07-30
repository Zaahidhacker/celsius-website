import { cn } from "@/lib/utils";

/**
 * Celsius logo — uses the REAL logo image extracted from the brochure cover (page 1).
 * Source: /public/celsius-logo-{white,navy,black}.png
 *
 * Three variants:
 *   - "default": navy logo on transparent bg (for light backgrounds: navbar, hero text)
 *   - "light":   white logo on transparent bg (for dark backgrounds: hero overlay, footer)
 *   - "dark":    black logo on transparent bg (for very light backgrounds / print)
 *
 * The logo image includes both the wind/airflow icon AND the "Celsius" wordmark.
 */
export default function CelsiusLogo({
  className,
  variant = "default",
  size = "md",
  showWordmark = true,
}: {
  className?: string;
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
}) {
  // The PNG includes the icon + wordmark together. We always show both.
  // `showWordmark` is kept for backward API compatibility but is a no-op now.
  void showWordmark;

  const src =
    variant === "light"
      ? "/celsius-logo-white.png"
      : variant === "dark"
        ? "/celsius-logo-black.png"
        : "/celsius-logo-navy.png";

  const heights: Record<string, string> = {
    sm: "h-5",
    md: "h-7",
    lg: "h-10",
    xl: "h-14",
  };

  // The logo PNG has aspect ratio ~1582:678 ≈ 2.33:1 (icon + wordmark combined).
  // width auto from height to preserve aspect ratio.
  return (
    <img
      src={src}
      alt="Celsius"
      className={cn("w-auto select-none", heights[size], className)}
      draggable={false}
    />
  );
}
