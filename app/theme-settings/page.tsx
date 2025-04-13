import { ThemePreview } from "@/components/theme-preview"

export default function ThemeSettingsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        <h1 className="section-title">Theme Settings</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Customize the appearance of your portfolio by choosing from different color themes. Each theme has both light
          and dark variants.
        </p>

        <ThemePreview />
      </div>
    </div>
  )
}
