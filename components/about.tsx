"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Shield, Terminal } from "lucide-react"

const skills = [
  {
    name: "Artificial Intelligence",
    description: "Machine learning, deep learning, and natural language processing",
    icon: Brain,
  },
  {
    name: "Development",
    description: "Web and mobile application development with modern frameworks",
    icon: Code,
  },
  {
    name: "Cybersecurity",
    description: "Network security, penetration testing, and secure coding practices",
    icon: Shield,
  },
  {
    name: "Programming",
    description: "Proficient in Python, JavaScript, C++, and other languages",
    icon: Terminal,
  },
]

export default function About() {
  return (
    <section id="about" className="bg-muted/50 py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Computer Science Student & Tech Enthusiast</h3>
            <div className="space-y-4 text-lg">
              <p>
                I'm a Computer Science student at the University of Engineering and Technology (UET) Lahore, passionate
                about leveraging technology to solve real-world problems.
              </p>
              <p>
                My academic journey has equipped me with a strong foundation in computer science principles, while my
                personal projects have allowed me to apply these concepts to create innovative solutions.
              </p>
              <p>
                I'm particularly interested in the intersection of artificial intelligence, cybersecurity, and software
                development, where I believe the most impactful innovations will emerge in the coming years.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
