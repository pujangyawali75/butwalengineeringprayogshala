import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Butwal Engineering Prayogshala - Leading Engineering Laboratory",
  description:
    "Butwal Engineering Prayogshala is a pioneering engineering laboratory offering research, testing, and innovative solutions for civil, mechanical, and electrical engineering sectors since 2077.",
  keywords: [
    "Engineering Laboratory Nepal",
    "Butwal Engineering",
    "Civil Engineering Lab",
    "Mechanical Testing",
    "Electrical Engineering Lab",
    "Research and Innovation Nepal",
    "Engineering Solutions Nepal",
  ],
  authors: [{ name: "Butwal Engineering Prayogshala" }],
  creator: "Butwal Engineering Prayogshala",
  publisher: "Butwal Engineering Prayogshala",
  generator: "Next.js",
  icons: "/logo.png",
  openGraph: {
    title: "Butwal Engineering Prayogshala - Leading Engineering Laboratory",
    description:
      "Leading engineering laboratory in Nepal with innovative solutions, research, and testing facilities since 2077.",
    url: "https://butwalengineeringprayogshala.tech",
    siteName: "Butwal Engineering Prayogshala",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Butwal Engineering Prayogshala Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Butwal Engineering Prayogshala",
    description:
      "Innovative engineering solutions, research, and testing facilities since 2077.",
    images: ["/logo.png"],
    creator: "@butwalengineering",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://butwalengineeringprayogshala.tech",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
