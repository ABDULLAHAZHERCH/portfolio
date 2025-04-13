"use client"

import { useEffect } from "react"

export default function ThemeInit() {
  useEffect(() => {
    // Get theme from localStorage or default to system preference
    const savedTheme = localStorage.getItem("theme") || "system"
    const root = window.document.documentElement

    // Remove any existing theme classes
    root.classList.remove("light", "dark")

    // Apply the saved theme or system preference
    if (savedTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(savedTheme)
    }
  }, [])

  return null
}
