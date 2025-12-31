import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gespheng Aluminium - Spesialis Lemari & Konstruksi Aluminium",
  description:
    "Layanan custom aluminium berkualitas tinggi: Lemari, Kitchen Set, Rak, Pintu & Jendela. Pengerjaan cepat ±5 hari. Melayani area Cilacap.",
  keywords: "aluminium, lemari aluminium, kitchen set, jasa aluminium cilacap, custom furniture",
  openGraph: {
    title: "Gespheng Aluminium - Spesialis Lemari & Konstruksi Aluminium",
    description: "Kuat, tahan karat, custom desain, pengerjaan ±5 hari",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
