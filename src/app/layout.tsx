import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReactLenis from "lenis/react";

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Elite Mind Funding - We Fund Traders",
  description:
    "Prove Your Trading Skills In Our Evaluation. Get Funded With Up To 200K. Keep Up To 100% Of Your Profits — Paid In Real Cash.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
