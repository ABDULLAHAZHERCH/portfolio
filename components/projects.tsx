"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

type ProjectCategory = "All" | "AI" | "Web" | "Data Science"

const projects = [
  {
    id: 1,
    title: "CoviDetect",
    description: "AI-powered COVID-19 detection system using chest X-rays and deep learning models.",
    image: "/placeholder.svg?height=300&width=500",
    category: "AI",
    tags: ["TensorFlow", "Deep Learning", "Computer Vision"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Elderly Care Chatbot",
    description: "Personalized chatbot for elderly care using natural language processing and machine learning.",
    image: "/placeholder.svg?height=300&width=500",
    category: "AI",
    tags: ["NLP", "Python", "Machine Learning"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "HIV Incidence Prediction",
    description: "Data science project to predict HIV incidence rates using demographic and healthcare data.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Data Science",
    tags: ["Data Analysis", "Scikit-learn", "Pandas"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Developer Portfolio",
    description: "Modern, responsive developer portfolio built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web",
    tags: ["Next.js", "Tailwind CSS", "React"],
    githubUrl: "#",
    liveUrl: "#",
  },
]

const categories: ProjectCategory[] = ["All", "AI", "Web", "Data Science"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
