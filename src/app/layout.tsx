import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
  Fraunces,
  Bricolage_Grotesque,
  Instrument_Serif,
  Manrope,
  DM_Mono,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig, organizationSchema, websiteSchema } from "@/lib/seo";

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

// V1 rebuild — Bricolage Grotesque (display sans, editorial newsroom feel)
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// V3 rebuild — Instrument Serif (high-contrast editorial display)
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

// V5 rebuild — Manrope (modern grotesk, replaces overused Inter)
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// V4 rebuild — DM Mono (terminal-feel monospace, distinct from JetBrains)
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

// V5 — uses Inter (substitute for Overused Grotesk — both modern grotesks, visually similar)

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a1d3f" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1d3f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  applicationName: siteConfig.name,
  category: "HVAC Services",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-LK": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Celsius — HVAC Experts in Sri Lanka",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    // google: "",  // Add Google Search Console verification code here
    // yandex: "",
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
      // Match only EXACT opacity:0 / opacity: 0 (not opacity:0.7 etc).
      // Use a regex that requires a 0 followed by anything that is NOT a digit
      // (so "0.7" doesn't match because the "0" is followed by ".").
      var stuck = [];
      document.querySelectorAll('[style]').forEach(function(el) {
        var s = el.getAttribute('style') || '';
        // matches "opacity:0" or "opacity: 0" but NOT "opacity:0.7" / "opacity: 0.5"
        if (/opacity\\s*:\\s*0(?:[^0-9.]|$)/i.test(s)) {
          stuck.push(el);
        }
      });
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
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${bricolage.variable} ${instrumentSerif.variable} ${manrope.variable} ${dmMono.variable}`}>
      <head>
        {/* JSON-LD Structured Data — Organization / LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* JSON-LD Structured Data — WebSite (enables Google sitelinks search box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
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
