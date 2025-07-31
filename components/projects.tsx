"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import Image from "next/image"; // Commented out as images are not being used

import {projects} from "../lib/projects"

type ProjectCategory =
  | "All"
  | "AI"
  | "Web"
  | "Data Science"
  | "Systems Programming"
  | "Software"
  | "Networking"
  | "Desktop Tools"
  | "Database"
  | "Software Customization"
  | "Information Security"
  | "Desktop Application";

// const projects = [
//   {
//     id: 1,
//     title: "Developer Portfolio",
//     description:
//       "Modern, responsive developer portfolio built with Next.js and Tailwind CSS.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Web",
//     tags: ["Next.js", "Tailwind CSS", "React"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/portfolio",
//     liveUrl: "https://abdullahch.vercel.app/",
//   },
//   {
//     id: 2,
//     title: "Staff-Flow",
//     description:
//       "An AI-powered employee shift and workload management system designed to optimize team scheduling, track availability, and balance workloads using intelligent algorithms.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "AI",
//     tags: [
//       "AI",
//       "Shift Scheduling",
//       "Workload Management",
//       "React",
//       "Node.js",
//       "MongoDB",
//     ],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/Staff-Flow",
//     liveUrl: "https://v0-staff-flowmain-2i.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "University Learning Management System",
//     description:
//       "Full-stack LMS platform developed using Next.js for frontend with authentication and role-based access.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Web",
//     tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/ULMS_Client",
//     liveUrl: "https://ulms-client.vercel.app/",
//   },
//   {
//     id: 4,
//     title: "Optical Character Recognition",
//     description:
//       "A web application built with Streamlit to demonstrate Optical Character Recognition (OCR) capabilities using the Tesseract engine. Users can upload images, preprocess them, and extract text with bounding box visualization.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "AI + Web",
//     tags: ["OCR", "Streamlit", "Tesseract", "Image Processing", "Python"],
//     githubUrl:
//       "https://github.com/ABDULLAHAZHERCH/Optical-Character-Recognition",
//     liveUrl: "",
//   },
//   {
//     id: 5,
//     title: "Network Optimized SMTP Server",
//     description:
//       "A Python-based SMTP server designed for secure, efficient, and user-friendly email communication with optimized network handling and basic authentication.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Networking",
//     tags: [
//       "SMTP",
//       "Python",
//       "Socket Programming",
//       "Networking",
//       "Email Protocols",
//     ],
//     githubUrl:
//       "https://github.com/ABDULLAHAZHERCH/NETWORK_OPTIMISED_SMTP_SERVER",
//     liveUrl: "#",
//   },
//   {
//     id: 6,
//     title: "Mini Operating System",
//     description:
//       "A simplified operating system developed in C that supports basic command execution, memory management, and process scheduling.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Systems Programming",
//     tags: ["C", "Operating System", "Process Scheduling", "Memory Management"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/Mini-OS",
//     liveUrl: "#",
//   },
//   {
//     id: 7,
//     title: "Mini Excel",
//     description:
//       "A basic version of Excel built in C++ using linked list structures to manage cell data, perform arithmetic operations, and mimic spreadsheet functionality.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Software",
//     tags: ["C++", "Linked List", "Spreadsheet", "Data Structures"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/MINI-EXCEL",
//     liveUrl: "#",
//   },
//   {
//     id: 8,
//     title: "DOS Shell",
//     description:
//       "A minimal MS-DOS/CMD clone developed in C++ that supports basic shell commands, file operations, and directory management.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Systems Programming",
//     tags: ["C++", "Shell", "File System", "Command Line Interface"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/DOS-SHELL",
//     liveUrl: "#",
//   },
//   {
//     id: 9,
//     title: "CoviDetect",
//     description:
//       "AI-powered COVID-19 detection system using chest X-rays and deep learning models.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "AI",
//     tags: ["TensorFlow", "Deep Learning", "Computer Vision"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/CoviDetect",
//     liveUrl: "#",
//   },
//   {
//     id: 10,
//     title: "Elderly Care Chatbot",
//     description:
//       "Personalized chatbot for elderly care using natural language processing and machine learning.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "AI",
//     tags: ["NLP", "Python", "Machine Learning"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     id: 11,
//     title: "HIV Incidence Prediction",
//     description:
//       "Data science project to predict HIV incidence rates using demographic and healthcare data.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Data Science",
//     tags: ["Data Analysis", "Scikit-learn", "Pandas"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/HIV-Incidence-Prediction",
//     liveUrl: "#",
//   },

//   {
//     id: 12,
//     title: "Car Sales Management System",
//     description:
//       "A desktop-based system for managing car sales data, generating sales reports and trends.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Software",
//     tags: ["C", "Programming", "Terminal Application"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/Car-Management-System",
//     liveUrl: "#",
//   },
//   {
//     id: 13,
//     title: "CLO Management System",
//     description:
//       "A C#-based desktop application with database integration to manage Course Learning Outcomes (CLOs), map them with Program Learning Outcomes (PLOs), and record assessment results for academic performance evaluation.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Database",
//     tags: ["C#", "SQL", "CLO", "Education Management", "Database Systems"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/CLO-Management-System",
//     liveUrl: "#",
//   },
//   {
//     id: 14,
//     title: "Summa WinPlot Illustrator Plugin",
//     description:
//       "Adobe Illustrator plugin for WinPlot integration to manage file output with registration mark support.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Desktop Tools",
//     tags: ["Adobe ExtendScript", "C++", "Plugin Development"],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/Summa-Illustrator-Plugin",
//     liveUrl: "#",
//   },
//   {
//     id: 15,
//     title: "Customized Kinovea for Client-Specific Sports Analysis",
//     description:
//       "Tailored the open-source Kinovea motion analysis software to meet a client's unique sports performance tracking needs. Implemented custom measurement tools, improved user interface components, and optimized video processing for smoother playback and annotation.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Software Customization",
//     tags: [
//       "Kinovea",
//       "Open Source",
//       "Video Analysis",
//       "Sports Tech",
//       "Customization",
//     ],
//     githubUrl: "https://github.com/ABDULLAHAZHERCH/Kinovea",
//     liveUrl: "#",
//   },
//   {
//     id: 16,
//     title: "Financial Fraud Management System (FFMS)",
//     description:
//       "A database-driven system designed to detect and prevent fraudulent activities in both digital and traditional financial transactions. Utilizes a rule-based engine to flag suspicious patterns and provides analysts with a real-time dashboard for monitoring threats.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Database",
//     tags: [
//       "Microsoft Azure",
//       "Database Design",
//       "Rule-Based System",
//       "Fraud Detection",
//       "SQL",
//       "Dashboard",
//     ],
//     githubUrl:
//       "https://github.com/ABDULLAHAZHERCH/Financial-Fraud-Management-System",
//     liveUrl: "#",
//   },
//   {
//     id: 17,
//     title: "Secure MNIST Classifier with Zero Trust Architecture",
//     description:
//       "A Python Flask-based web application that classifies handwritten digits from the MNIST dataset. The system is secured using Zero Trust Architecture principles, including strict identity verification, microsegmentation, and minimal trust boundaries to prevent unauthorized access.",
//     image: "/placeholder.svg?height=300&width=500",
//     category: "Information Security",
//     tags: [
//       "Flask",
//       "Python",
//       "Zero Trust Architecture",
//       "Cybersecurity",
//       "MNIST",
//       "Machine Learning",
//     ],
//     githubUrl:
//       "https://github.com/ABDULLAHAZHERCH/Zero-Trust-Architecture-MNIST-Classifier",
//     liveUrl: "#",
//   },
// ];

const categories: ProjectCategory[] = [
  "All",
  "AI",
  "Web",
  "Data Science",
  "Systems Programming",
  "Software",
  "Networking",
  "Desktop Tools",
  "Database",
  "Software Customization",
  "Information Security",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  // Show first 4 categories and put the rest in dropdown
  const visibleCategories = categories.slice(0, 4);
  const dropdownCategories = categories.slice(4);

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
          {visibleCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}

          {dropdownCategories.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="mb-2">
                  More <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {dropdownCategories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? "bg-accent" : ""}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
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
                {/* Image section commented out
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                */}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.githubUrl && project.githubUrl !== "#" && (
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
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
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
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
