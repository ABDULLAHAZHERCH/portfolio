"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResumeDownload } from "./resume-download"
import { Briefcase, GraduationCap, Award, Download } from "lucide-react"

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Resume
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">Executive Member</h3>
                    <Badge variant="outline">2023 - Present</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">Microsoft Learn Student Ambassador (MLSA) • UET Lahore</p>
                  <p>
                    Organizing tech events, workshops, and hackathons to promote Microsoft technologies among students.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">Research Intern</h3>
                    <Badge variant="outline">Summer 2022</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">AI Research Lab • UET Lahore</p>
                  <p>Worked on machine learning models for healthcare applications, focusing on disease prediction.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">BS Computer Science</h3>
                    <Badge variant="outline">2020 - 2024</Badge>
                  </div>
                  <p className="text-muted-foreground">University of Engineering and Technology, Lahore</p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold">Pre-Engineering</h3>
                    <Badge variant="outline">2018 - 2020</Badge>
                  </div>
                  <p className="text-muted-foreground">Punjab College, Lahore</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Skills & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>TensorFlow</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>Data Analysis</Badge>
                    <Badge>SQL</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        2023
                      </Badge>
                      <span>Microsoft Azure Fundamentals (AZ-900)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        2022
                      </Badge>
                      <span>Google Data Analytics Professional Certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">
                        2021
                      </Badge>
                      <span>Deep Learning Specialization - Coursera</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Download Resume
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-center">
              <p className="text-muted-foreground mb-6">
                Download my complete resume in your preferred format for a comprehensive overview of my skills,
                experience, and qualifications.
              </p>
              <ResumeDownload />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
