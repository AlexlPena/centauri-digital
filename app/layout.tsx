import type { Metadata } from "next";
import { satoshi, geistMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centauri Digital Solutions",
  description:
    "AI architecture, automation, and internal tools designed around the way teams actually work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
