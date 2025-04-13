"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Executive Member",
    organization: "Microsoft Learn Student Ambassador (MLSA)",
    location: "UET Lahore",
    date: "Jan 2023 - Present",
    description: "Organizing tech events, workshops, and hackathons to promote Microsoft technologies among students.",
    skills: ["Event Management", "Public Speaking", "Technical Workshops"],
  },
  {
    id: 2,
    title: "Executive Member",
    organization: "Google Developer Group (GDG)",
    location: "UET Lahore",
    date: "Mar 2022 - Present",
    description:
      "Collaborating with team members to organize developer-focused events and promote Google technologies.",
    skills: ["Community Building", "Technical Events", "Networking"],
  },
  {
    id: 3,
    title: "Teaching Assistant",
    organization: "Department of Computer Science",
    location: "UET Lahore",
    date: "Sep 2022 - Dec 2022",
    description:
      "Assisted professors in teaching programming fundamentals and data structures to undergraduate students.",
    skills: ["Teaching", "Python", "Data Structures"],
  },
  {
    id: 4,
    title: "Research Intern",
    organization: "AI Research Lab",
    location: "UET Lahore",
    date: "Jun 2022 - Aug 2022",
    description: "Worked on machine learning models for healthcare applications, focusing on disease prediction.",
    skills: ["Machine Learning", "Data Analysis", "Research"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-muted/50 py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
                <div className="flex-1 md:w-1/2">
                  <Card className={`ml-6 md:ml-0 ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"}`}>
                    <CardHeader>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span>{exp.date}</span>
                      </div>
                      <CardTitle>{exp.title}</CardTitle>
                      <div className="text-lg font-medium">{exp.organization}</div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
