import type { Metadata } from "next";
import V10Navbar from "@/components/v10/V10Navbar";
import V10FrameScroll from "@/components/v10/V10FrameScroll";
import V10Hero from "@/components/v10/V10Hero";
import V10Manifesto from "@/components/v10/V10Manifesto";
import V10Services from "@/components/v10/V10Services";
import V10Reviews from "@/components/v10/V10Reviews";
import V10Brands from "@/components/v10/V10Brands";
import V10Contact from "@/components/v10/V10Contact";
import V10Footer from "@/components/v10/V10Footer";
import "@/components/v10/v10.css";

export const metadata: Metadata = {
  title: "Celsius V10 — Cinematic Frame Scroll",
  description:
    "Celsius V10 — a scroll-driven 3D product tour. 240 pre-rendered frames of an AC unit disassembling and reassembling as you scroll. Real installs from Wellawatta, Prime Residencies, residential 12000 BTU, and Havelock Dental Centre.",
  alternates: { canonical: "/v10" },
  openGraph: {
    title: "Celsius V10 — Cinematic Frame Scroll Edition",
    description:
      "240-frame scroll-scrubbed 3D product tour of an AC unit, paired with real customer installs from across Sri Lanka.",
    url: "/v10",
    type: "website",
  },
};

export default function V10Page() {
  return (
    <main className="v10-root">
      <V10Navbar />

      {/* The frame-scroll section is the tall sentinel that drives the canvas.
          The hero is rendered as a child so it overlays the canvas at the top. */}
      <V10FrameScroll>
        <V10Hero />
      </V10FrameScroll>

      {/* Manifesto bridges the end of the frame section into the static content. */}
      <V10Manifesto />

      {/* Static content sections below the fold. */}
      <V10Services />
      <V10Reviews />
      <V10Brands />
      <V10Contact />
      <V10Footer />
    </main>
  );
}
