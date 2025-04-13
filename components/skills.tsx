"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Palette, Server, BarChart, Terminal, Globe, BookOpen, Lightbulb } from "lucide-react"

type Skill = {
  name: string
  proficiency: number // 1-100
  description?: string
}

type SkillCategory = {
  name: string
  icon: React.ElementType
  description: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: Palette,
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "HTML/CSS", proficiency: 90, description: "Semantic HTML and modern CSS techniques" },
      { name: "JavaScript", proficiency: 85, description: "ES6+, DOM manipulation, async programming" },
      { name: "React", proficiency: 80, description: "Hooks, context, state management" },
      { name: "Next.js", proficiency: 75, description: "Server components, routing, data fetching" },
      { name: "Tailwind CSS", proficiency: 85, description: "Utility-first styling, responsive design" },
      { name: "UI/UX Design", proficiency: 70, description: "Design principles, user experience" },
    ],
  },
  {
    name: "Backend Development",
    icon: Server,
    description: "Creating robust server-side applications and APIs",
    skills: [
      { name: "Node.js", proficiency: 80, description: "Express, RESTful APIs, middleware" },
      { name: "Python", proficiency: 85, description: "Flask, Django, FastAPI" },
      { name: "Databases", proficiency: 75, description: "SQL, MongoDB, database design" },
      { name: "API Design", proficiency: 80, description: "REST, GraphQL, documentation" },
      { name: "Authentication", proficiency: 70, description: "JWT, OAuth, session management" },
      { name: "Serverless", proficiency: 65, description: "AWS Lambda, Vercel Functions" },
    ],
  },
  {
    name: "Artificial Intelligence",
    icon: Brain,
    description: "Developing machine learning models and AI applications",
    skills: [
      { name: "Machine Learning", proficiency: 80, description: "Supervised and unsupervised learning" },
      { name: "Deep Learning", proficiency: 75, description: "Neural networks, CNN, RNN" },
      { name: "NLP", proficiency: 70, description: "Text processing, sentiment analysis" },
      { name: "TensorFlow", proficiency: 75, description: "Model building and training" },
      { name: "PyTorch", proficiency: 70, description: "Deep learning research" },
      { name: "Computer Vision", proficiency: 65, description: "Image processing and analysis" },
    ],
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    description: "Implementing security measures and best practices",
    skills: [
      { name: "Network Security", proficiency: 75, description: "Protocols, firewalls, VPNs" },
      { name: "Web Security", proficiency: 80, description: "OWASP, XSS, CSRF prevention" },
      { name: "Penetration Testing", proficiency: 65, description: "Vulnerability assessment" },
      { name: "Cryptography", proficiency: 70, description: "Encryption, hashing, secure communication" },
      { name: "Security Auditing", proficiency: 60, description: "Code review, security analysis" },
      { name: "Secure Coding", proficiency: 75, description: "Best practices, threat modeling" },
    ],
  },
  {
    name: "Data Science",
    icon: BarChart,
    description: "Analyzing data and extracting meaningful insights",
    skills: [
      { name: "Data Analysis", proficiency: 85, description: "Statistical analysis, hypothesis testing" },
      { name: "Data Visualization", proficiency: 80, description: "Charts, dashboards, storytelling" },
      { name: "Pandas", proficiency: 85, description: "Data manipulation and analysis" },
      { name: "SQL", proficiency: 80, description: "Complex queries, data extraction" },
      { name: "Jupyter", proficiency: 90, description: "Interactive computing, documentation" },
      { name: "Big Data", proficiency: 65, description: "Distributed computing, data pipelines" },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Terminal,
    description: "Utilizing various tools and technologies in development",
    skills: [
      { name: "Git", proficiency: 90, description: "Version control, collaboration" },
      { name: "Docker", proficiency: 75, description: "Containerization, deployment" },
      { name: "CI/CD", proficiency: 70, description: "Automated testing and deployment" },
      { name: "Linux", proficiency: 80, description: "Command line, server administration" },
      { name: "Cloud Services", proficiency: 75, description: "AWS, Azure, GCP" },
      { name: "Testing", proficiency: 70, description: "Unit testing, integration testing" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          I've developed a diverse set of skills throughout my academic and professional journey. Here's an overview of
          my technical expertise and proficiency levels.
        </motion.p>

        <Tabs defaultValue={skillCategories[0].name} className="w-full">
          <TabsList className="flex flex-wrap justify-center h-auto mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name} className="flex items-center gap-2 m-1">
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <category.icon className="h-6 w-6 text-primary" />
                      <CardTitle>{category.name}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{skill.name}</h4>
                            <Badge variant="outline">{skill.proficiency}%</Badge>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 }}
                            />
                          </div>
                          {skill.description && <p className="text-sm text-muted-foreground">{skill.description}</p>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-muted-foreground">
                I'm committed to staying current with emerging technologies and continuously expanding my skill set
                through online courses, documentation, and hands-on projects.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Adaptability</h3>
              </div>
              <p className="text-muted-foreground">
                I quickly adapt to new technologies and frameworks, allowing me to select the right tools for each
                project and collaborate effectively in diverse technical environments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Problem Solving</h3>
              </div>
              <p className="text-muted-foreground">
                I approach challenges with analytical thinking and creativity, breaking down complex problems into
                manageable components to develop effective and elegant solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
