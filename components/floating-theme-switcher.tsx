"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Check, Moon, Palette, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingThemeSwitcher() {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const colorThemes = [
    { name: "Default", value: "default" },
    { name: "Ocean", value: "ocean" },
    { name: "Forest", value: "forest" },
    { name: "Sunset", value: "sunset" },
    { name: "Lavender", value: "lavender" },
    { name: "Monochrome", value: "monochrome" },
  ]

  return (
    <div className="fixed bottom-4 right-4 md:hidden z-50">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button size="icon" className="rounded-full shadow-lg">
            <Palette className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Appearance</DrawerTitle>
              <DrawerDescription>Customize the look and feel of the interface.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-3">Mode</h4>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    className="flex flex-col items-center justify-center gap-1 h-auto py-3"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-5 w-5" />
                    <span className="text-xs">Light</span>
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    className="flex flex-col items-center justify-center gap-1 h-auto py-3"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-5 w-5" />
                    <span className="text-xs">Dark</span>
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    className="flex flex-col items-center justify-center gap-1 h-auto py-3"
                    onClick={() => setTheme("system")}
                  >
                    <div className="h-5 w-5 flex items-center justify-center">
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </div>
                    <span className="text-xs">System</span>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Color Theme</h4>
                <div className="grid grid-cols-3 gap-2">
                  {colorThemes.map((item) => (
                    <Button
                      key={item.value}
                      variant={colorTheme === item.value ? "default" : "outline"}
                      className="flex flex-col items-center justify-center gap-1 h-auto py-3 relative"
                      onClick={() => setColorTheme(item.value)}
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border">
                        <div className={`h-4 w-4 rounded-full theme-${item.value}-swatch`} />
                      </div>
                      <span className="text-xs">{item.name}</span>
                      {colorTheme === item.value && <Check className="absolute top-1 right-1 h-3 w-3" />}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
