/**
 * CelsiusLogoSVG — Crisp vector version of the Celsius logo.
 *
 * Recreated from brochure description (26-page PDF profile):
 *   - Wordmark: "Celsius" in bold sans-serif (navy or white variant)
 *   - Icon: three curved horizontal lines (airflow/wind symbol) above the wordmark
 *   - Tagline: "Experts in keeping things cool" below the wordmark
 *
 * SVG scales crisply on any display density (1x, 2x, 3x retina).
 * Three color variants: navy (default), white (for dark backgrounds), black (print).
 */

type Props = {
  className?: string;
  variant?: "navy" | "white" | "black" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
};

const COLORS = {
  navy: "#0a1d3f",
  white: "#ffffff",
  black: "#0a0a0a",
};

export default function CelsiusLogoSVG({
  className,
  variant = "navy",
  size = "md",
  showTagline = true,
}: Props) {
  const color =
    variant === "gradient" ? COLORS.navy : COLORS[variant] || COLORS.navy;

  // Height in px for each size — width auto-scales via viewBox
  const heights: Record<string, number> = {
    sm: 28,
    md: 40,
    lg: 56,
    xl: 80,
  };
  const h = heights[size] || heights.md;

  // viewBox: 240 wide × (86 tall with tagline, 56 without)
  const vbW = 240;
  const vbH = showTagline ? 86 : 56;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${vbW} ${vbH}`}
      width={h * (vbW / vbH)}
      height={h}
      className={className}
      role="img"
      aria-label="Celsius — Experts in keeping things cool"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <defs>
        {variant === "gradient" && (
          <linearGradient id="celsius-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00BCD4" />
            <stop offset="50%" stopColor="#00AEEF" />
            <stop offset="100%" stopColor="#0288D1" />
          </linearGradient>
        )}
      </defs>

      {/* Airflow icon — three curved horizontal lines, increasing in size */}
      <g
        transform="translate(8, 6)"
        fill="none"
        stroke={variant === "gradient" ? "url(#celsius-grad)" : color}
        strokeWidth="3.2"
        strokeLinecap="round"
      >
        {/* Top line — smallest */}
        <path d="M2 6 Q 12 0, 22 6 T 38 6" />
        {/* Middle line — medium */}
        <path d="M2 16 Q 14 9, 26 16 T 46 16" />
        {/* Bottom line — largest */}
        <path d="M2 26 Q 16 18, 30 26 T 54 26" />
      </g>

      {/* "Celsius" wordmark */}
      <text
        x="0"
        y="60"
        fontFamily="'Manrope', 'Inter', system-ui, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="-0.02em"
        fill={variant === "gradient" ? "url(#celsius-grad)" : color}
      >
        Celsius
      </text>

      {/* Tagline */}
      {showTagline && (
        <text
          x="2"
          y="80"
          fontFamily="'DM Mono', 'JetBrains Mono', monospace"
          fontSize="9"
          fontWeight="400"
          letterSpacing="0.08em"
          fill={variant === "white" ? "rgba(255,255,255,0.7)" : "rgba(10,29,63,0.55)"}
        >
          Experts in keeping things cool
        </text>
      )}
    </svg>
  );
}
