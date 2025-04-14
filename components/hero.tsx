"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ResumeDownload } from "./resume-download";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-primary">Abdullah Azher Chaudhary</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
            Computer Scientist - Developer
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            Passionate about AI, development, cybersecurity, and programming.
            Building innovative solutions to real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* <Button onClick={scrollToContact} size="lg">
              Get in Touch
            </Button> */}
            <ResumeDownload showPreview={false} />
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <div className="flex items-center gap-4 ml-1">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/abdullahazherch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/abdullah-azher-chaudhary-a94976260"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-70"></div>

          <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-primary/20">
            <Image
              src="/Profile.png"
              alt="Abdullah Azher Chaudhary"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  );
}
