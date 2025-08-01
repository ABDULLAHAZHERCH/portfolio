import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "./smooth-scroll";
// import { FloatingThemeSwitcher } from "@/components/floating-theme-switcher";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Improves font loading performance
  preload: true,
  fallback: ['system-ui', 'arial']
});

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
    "abdullah azher chaudhary",
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
  metadataBase: new URL("https://abdullahch.vercel.app"),
  alternates: {
    canonical: "https://abdullahch.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdullah Azher Chaudhary",
              url: "https://abdullahch.vercel.app/",
              description:
                "Computer Scientist and Developer specializing in AI, Web Development, Cybersecurity, and Programming.",
            }),
          }}
        />
        
      </body>
    </html>
  );
}
