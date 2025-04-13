"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemePreview() {
  const { colorTheme, setColorTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    { name: "Default", value: "default", description: "Blue-based theme" },
    { name: "Ocean", value: "ocean", description: "Teal and blue tones" },
    { name: "Forest", value: "forest", description: "Green and earth tones" },
    { name: "Sunset", value: "sunset", description: "Warm orange and red" },
    { name: "Lavender", value: "lavender", description: "Purple and violet tones" },
    { name: "Monochrome", value: "monochrome", description: "Grayscale elegance" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {themes.map((theme) => (
        <Card
          key={theme.value}
          className={`overflow-hidden transition-all duration-300 hover:shadow-md ${
            colorTheme === theme.value ? "ring-2 ring-primary" : ""
          }`}
        >
          <div className={`h-24 theme-preview theme-${theme.value}-preview relative`}>
            {colorTheme === theme.value && (
              <div className="absolute top-2 right-2 bg-background rounded-full p-1">
                <Check className="h-4 w-4 text-primary" />
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{theme.name}</h3>
              <div className="flex h-5 w-5 items-center justify-center rounded-full border">
                <div className={`h-4 w-4 rounded-full theme-${theme.value}-swatch`} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{theme.description}</p>
            <Button
              size="sm"
              variant={colorTheme === theme.value ? "secondary" : "outline"}
              className="w-full"
              onClick={() => setColorTheme(theme.value)}
            >
              {colorTheme === theme.value ? "Active" : "Apply"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
