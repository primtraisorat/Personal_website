import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { pageMetadata, siteUrl } from "@/lib/metadata"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const home = pageMetadata({
  title: "Prim Traisorat — Product Designer",
  description: "From concept to product: strategy, design, and growth in one flow.",
  path: "/",
})

export const metadata: Metadata = {
  ...home,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/logo-mark.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
