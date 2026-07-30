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
      </body>
    </html>
  );
}
