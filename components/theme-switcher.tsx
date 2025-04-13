"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="h-9 w-9 opacity-0" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          {theme === "dark" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Mode</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <span>Light</span>
            </div>
            {theme === "light" && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4" />
              <span>Dark</span>
            </div>
            {theme === "dark" && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center">
                <Sun className="h-3 w-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3 w-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </span>
              <span>System</span>
            </div>
            {theme === "system" && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Color Theme</DropdownMenuLabel>
          <ThemeOption name="Default" value="default" currentTheme={colorTheme} onSelect={setColorTheme} />
          <ThemeOption name="Ocean" value="ocean" currentTheme={colorTheme} onSelect={setColorTheme} />
          <ThemeOption name="Forest" value="forest" currentTheme={colorTheme} onSelect={setColorTheme} />
          <ThemeOption name="Sunset" value="sunset" currentTheme={colorTheme} onSelect={setColorTheme} />
          <ThemeOption name="Lavender" value="lavender" currentTheme={colorTheme} onSelect={setColorTheme} />
          <ThemeOption name="Monochrome" value="monochrome" currentTheme={colorTheme} onSelect={setColorTheme} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type ThemeOptionProps = {
  name: string
  value: string
  currentTheme: string
  onSelect: (value: any) => void
}

function ThemeOption({ name, value, currentTheme, onSelect }: ThemeOptionProps) {
  return (
    <DropdownMenuItem onClick={() => onSelect(value)} className="flex items-center justify-between group">
      <div className="flex items-center gap-2">
        <ThemeColorSwatch theme={value} />
        <span>{name}</span>
      </div>
      {currentTheme === value && <Check className="h-4 w-4" />}
    </DropdownMenuItem>
  )
}

function ThemeColorSwatch({ theme }: { theme: string }) {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full border">
      <div className={`h-4 w-4 rounded-full transition-transform group-hover:scale-105 theme-${theme}-swatch`} />
    </div>
  )
}
