"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ResumeDownload } from "./resume-download";
import { useTheme } from "@/components/theme-provider";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const { colorTheme } = useTheme();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Map colorTheme to gradient
  const gradients: Record<string, string> = {
    default: "from-blue-400 via-purple-500 to-pink-500",
    ocean: "from-cyan-400 via-blue-500 to-teal-400",
    forest: "from-green-400 via-emerald-500 to-lime-400",
    sunset: "from-orange-400 via-red-500 to-yellow-400",
    lavender: "from-purple-300 via-indigo-400 to-pink-400",
    monochrome: "from-gray-400 via-gray-600 to-gray-800",
  };
  const gradient = gradients[colorTheme] || gradients.default;

  // Pick a color for the blob based on theme
  const blobColors: Record<string, string> = {
    default: "rgba(99,102,241,0.15)", // indigo-500
    ocean: "rgba(34,211,238,0.15)", // cyan-400
    forest: "rgba(34,197,94,0.15)", // green-500
    sunset: "rgba(251,191,36,0.15)", // yellow-400
    lavender: "rgba(168,85,247,0.15)", // purple-500
    monochrome: "rgba(107,114,128,0.15)", // gray-500
  };
  const blobColor = blobColors[colorTheme] || blobColors.default;

  // Animated gradient blob background for profile image
  const blobGradients: Record<string, string> = {
    default: "bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200",
    ocean: "bg-gradient-to-br from-cyan-200 via-blue-200 to-teal-200",
    forest: "bg-gradient-to-br from-green-200 via-emerald-200 to-lime-200",
    sunset: "bg-gradient-to-br from-orange-200 via-red-200 to-yellow-200",
    lavender: "bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-200",
    monochrome: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400",
  };
  const blobGradient = blobGradients[colorTheme] || blobGradients.default;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-gradient-move`}
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Abdullah Azher Chaudhary
            </motion.span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl mb-6 text-muted-foreground"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            C
            <Typewriter
              words={["omputer Scientist - Developer"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Passionate about AI, development, cybersecurity, and programming.
            Building innovative solutions to real-world problems.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4">
            <ResumeDownload showPreview={false} />
            <Button
              variant="outline"
              size="lg"
              asChild
              className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <div className="flex items-center gap-4 ml-1">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="transition-transform duration-200 hover:scale-125 hover:bg-primary/10"
              >
                <a
                  href="https://github.com/abdullahazherch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="transition-transform duration-200 hover:scale-125 hover:bg-primary/10"
              >
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto"
        >
          {/* Animated gradient blob background */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <div
              className={`w-full h-full blur-3xl rounded-full ${blobGradient}`}
            />
          </motion.div>

          {/* Floating and pulsing profile image */}
          <motion.div
            className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-primary/20 z-10"
            animate={{
              y: [0, -15, 0],
              boxShadow: [
                "0 0 0 0 rgba(99,102,241,0.2)",
                "0 0 40px 10px rgba(99,102,241,0.15)",
                "0 0 0 0 rgba(99,102,241,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Image
              src="/Abdullah_Azher_Chaudhary.avif"
              alt="Abdullah Azher Chaudhary"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 0 0 rgba(99,102,241,0.2)",
            "0 0 20px 5px rgba(99,102,241,0.15)",
            "0 0 0 0 rgba(99,102,241,0.2)",
          ],
        }}
        transition={{ duration: 1.5, delay: 0.8, repeat: Infinity }}
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
          className="transition-transform duration-200 hover:scale-125"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  );
}
