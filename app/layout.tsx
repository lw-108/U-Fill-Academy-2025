import type React from "react"
import type { Metadata } from "next"
import { Figtree, Instrument_Serif } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import localFont from "next/font/local"
import "./globals.css"

// Optimized local font import
const bowlbyOneSC = localFont({
  src: [
    {
      path: "../public/fonts/BowlbyOneSC-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bowlby",
  display: "block", // Changed from 'swap' to 'block'
  preload: true, // Ensure preloading
  adjustFontFallback: false, // Disable fallback adjustment
})

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "U-Fill Academy",
  description: "Created by LW_19",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${instrumentSerif.variable} ${GeistMono.variable} ${bowlbyOneSC.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}