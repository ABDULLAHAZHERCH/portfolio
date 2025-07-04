import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "./smooth-scroll";
// import { FloatingThemeSwitcher } from "@/components/floating-theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdullah Azher Chaudhary | Portfolio",
  description:
    "Computer Scientist and Developer specializing in AI, Web Development, Cybersecurity, and Programming.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "Abdullah Azher Chaudhary",
    "Developer Portfolio",
    "UET Lahore",
    "AI",
    "Cybersecurity",
    "Web Developer",
    "Full Stack Developer",
    "Portfolio",
    "Computer Science Student",
  ],
  authors: [{ name: "Abdullah Azher Chaudhary" }],
  creator: "Abdullah Azher Chaudhary",
  applicationName: "Abdullah's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
            {/* <FloatingThemeSwitcher /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
