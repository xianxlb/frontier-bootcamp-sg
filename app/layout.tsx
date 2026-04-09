import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Colosseum Frontier Hackathon Bootcamp — Superteam SG",
  description:
    "A 5-session bootcamp supporting Singapore builders in the Colosseum Frontier Hackathon. Form teams, attend workshops, and compete for $250K+ in prizes.",
  openGraph: {
    title: "Colosseum Frontier Hackathon Bootcamp — Superteam SG",
    description:
      "Build on Solana. Ship for the frontier. 5-session bootcamp for Singapore builders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body style={{ minHeight: "100vh" }}>{children}</body>
    </html>
  );
}
