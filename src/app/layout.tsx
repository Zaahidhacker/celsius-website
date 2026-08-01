import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Grotesk, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// V3 — Climate Atelier fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-v3",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// V3 — Fraunces (modern distinctive serif for editorial display)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

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
 */
const MOTION_RESCUE_SCRIPT = `(function(){
  try {
    var rescue = function() {
      var stuck = document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]');
      for (var i = 0; i < stuck.length; i++) {
        var el = stuck[i];
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 200 && r.bottom > -200) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      }
    };
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
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster />
        <script
          dangerouslySetInnerHTML={{ __html: MOTION_RESCUE_SCRIPT }}
        />
      </body>
    </html>
  );
}
