import Link from "next/link"
import { Github, Linkedin, Mail, Palette } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              Abdullah Azher
            </Link>
            <p className="text-muted-foreground mt-1">Computer Science Student at UET Lahore</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/abdullahazher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/abdullahazher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:abdullah.azher@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            <Link href="/theme-settings" className="text-muted-foreground hover:text-foreground transition-colors">
              <Palette className="h-5 w-5" />
              <span className="sr-only">Theme Settings</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Abdullah Azher Chaudhary. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/theme-settings" className="hover:text-primary transition-colors">
              Customize Theme
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
