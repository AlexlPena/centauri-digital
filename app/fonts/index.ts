import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";

export const satoshi = localFont({
  src: [
    {
      path: "./satoshi/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const geistMono = GeistMono;
