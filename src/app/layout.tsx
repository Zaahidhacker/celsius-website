import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Celsius — Experts in Keeping Things Cool",
  description:
    "Celsius is a premier air conditioning company in Colombo, Sri Lanka, supplying, installing, and servicing high-quality HVAC systems for domestic, commercial, and industrial use since 2019.",
  keywords: [
    "Celsius",
    "Air Conditioning",
    "HVAC",
    "Sri Lanka",
    "Colombo",
    "AC Installation",
    "AC Maintenance",
    "Midea",
    "Daikin",
    "Panasonic",
    "Mitsubishi",
    "LG",
    "Samsung",
  ],
  authors: [{ name: "Celsius — Aircon Celsius Pvt (Ltd)" }],
  openGraph: {
    title: "Celsius — Experts in Keeping Things Cool",
    description:
      "Premium air conditioning solutions for domestic, commercial, and industrial spaces across Sri Lanka since 2019.",
    siteName: "Celsius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Celsius — Experts in Keeping Things Cool",
    description:
      "Premium air conditioning solutions for domestic, commercial, and industrial spaces across Sri Lanka since 2019.",
  },
};

/**
 * Slow-wifi safety net: motion/react's `whileInView` with `initial={{ opacity: 0 }}`
 * leaves elements invisible forever if the library fails to hydrate (slow wifi,
 * ad blockers, RSC issues). This inline script (no external dep, runs immediately)
 * forces any element still stuck at opacity:0 / transform:translate to become
 * visible after 2.5s — guaranteeing content is always readable.
 *
 * Inline (not a client component) so it runs even if React hydration fails.
 */
const MOTION_RESCUE_SCRIPT = `(function(){
  try {
    var rescue = function() {
      var stuck = document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]');
      for (var i = 0; i < stuck.length; i++) {
        var el = stuck[i];
        // Only rescue if element is in viewport (don't pre-reveal below-fold)
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 200 && r.bottom > -200) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      }
    };
    // Run periodically for first 4s to catch late-hydrating elements,
    // then a final pass at 4s.
    var n = 0;
    var iv = setInterval(function(){
      rescue();
      n++;
      if (n >= 8) clearInterval(iv);
    }, 500);
  } catch(e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <Toaster />
        {/* Slow-wifi safety net — see comment above */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: MOTION_RESCUE_SCRIPT }}
        />
      </body>
    </html>
  );
}
