"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering and Technology (UET), Lahore",
    location: "Lahore, Punjab, Pakistan",
    date: "Nov 2022 – June 2026 (Expected)",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science with coursework focused on Artificial Intelligence, Data Science, Software Engineering, and Computer Networks.",
    achievements: [
      "Teaching Assistant for Programming Fundamentals & OOP",
      "Executive Member of MLSA and Management Lead at GDG UET",
      //"Final Year Project: Influencing LLM responses with business-specific context",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary School Certificate (Pre-Engineering)",
    institution: "GICCL",
    location: "Lahore, Punjab, Pakistan",
    date: "2020 – 2022",
    description:
      "Completed FSc Pre-Engineering with a strong foundation in Mathematics, Physics, and Chemistry.",
    achievements: [
      "Top 5% in class",
      "Active participant in science exhibitions",
    ],
  },
  {
    id: 3,
    degree: "Matriculation (Science Group)",
    institution: "Lahore Model School, Lahore",
    location: "Lahore, Punjab, Pakistan",
    date: "2018 – 2020",
    description: "Studied Biology, Physics, and Chemistry as core subjects.",
    achievements: [
      "Achieved highest scores in Biology, Chemistry, and Mathematics",
      "Secured 3rd position overall in the school",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-muted/50 py-16 md:py-24 border-t border-border"
    >
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
                <div className="flex-1 md:w-1/2">
                  <Card
                    className={`ml-6 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span>{edu.date}</span>
                      </div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <div className="text-lg font-medium">
                        {edu.institution}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {edu.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <Badge key={achievement} variant="outline">
                            {achievement}
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
  );
}
