import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SmoothScroll from "./smooth-scroll"
import { FloatingThemeSwitcher } from "@/components/floating-theme-switcher"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abdullah Azher Chaudhary | Portfolio",
  description:
    "Computer Science student at UET Lahore specializing in AI, development, cybersecurity, and programming.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" defaultColorTheme="default">
          <div className="flex min-h-screen flex-col">
            <SmoothScroll />
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <FloatingThemeSwitcher />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'