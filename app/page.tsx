import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import ResumeSection from "@/components/resume-section"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <ResumeSection /> */}
      {/* <Blog /> */}
      <Contact />
    </main>
  )
}
