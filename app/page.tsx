import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";

// Lazy load components that are below the fold
const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
});

const Experience = dynamic(() => import("@/components/experience"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
});

const Education = dynamic(() => import("@/components/education"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
});

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
