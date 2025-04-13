"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building AI Models for Healthcare Applications",
    excerpt: "Exploring how machine learning can be used to improve healthcare outcomes and patient care.",
    date: "April 10, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500",
    slug: "ai-models-healthcare",
  },
  {
    id: 2,
    title: "The Future of Cybersecurity in a Connected World",
    excerpt: "Discussing emerging threats and defensive strategies in the rapidly evolving cybersecurity landscape.",
    date: "March 15, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500",
    slug: "future-cybersecurity",
  },
  {
    id: 3,
    title: "My Journey Learning Web Development with Next.js",
    excerpt: "Personal reflections on learning modern web development frameworks and best practices.",
    date: "February 28, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=500",
    slug: "learning-nextjs",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Blog
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="group" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
