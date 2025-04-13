"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // This ensures all anchor links use smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        if (!targetId) return

        const targetElement = document.querySelector(targetId)
        if (!targetElement) return

        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  }, [])

  return null
}
