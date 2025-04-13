"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"
type ColorTheme = "default" | "ocean" | "forest" | "sunset" | "lavender" | "monochrome"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColorTheme?: ColorTheme
}

type ThemeProviderState = {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  colorTheme: "default",
  setTheme: () => null,
  setColorTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultColorTheme = "default",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(defaultColorTheme)
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme
    const storedColorTheme = localStorage.getItem("colorTheme") as ColorTheme

    if (storedTheme) {
      setThemeState(storedTheme)
    }

    if (storedColorTheme) {
      setColorThemeState(storedColorTheme)
    }

    setMounted(true)
  }, [])

  // Apply theme and color theme classes
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

    // Remove all theme and color theme classes
    const themeClasses = ["light", "dark"]
    const colorThemeClasses = [
      "theme-default",
      "theme-ocean",
      "theme-forest",
      "theme-sunset",
      "theme-lavender",
      "theme-monochrome",
    ]

    root.classList.remove(...themeClasses)
    root.classList.remove(...colorThemeClasses)

    // Add current theme and color theme classes
    root.classList.add(isDark ? "dark" : "light")
    root.classList.add(`theme-${colorTheme}`)

    // Add a data attribute for easier CSS targeting
    root.setAttribute("data-theme", colorTheme)
  }, [theme, colorTheme, mounted])

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== "system" || !mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      const root = window.document.documentElement
      const isDark = mediaQuery.matches

      root.classList.remove("light", "dark")
      root.classList.add(isDark ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, mounted])

  const setTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme)
    setThemeState(theme)
  }

  const setColorTheme = (colorTheme: ColorTheme) => {
    localStorage.setItem("colorTheme", colorTheme)
    setColorThemeState(colorTheme)
  }

  const value = {
    theme,
    colorTheme,
    setTheme,
    setColorTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
