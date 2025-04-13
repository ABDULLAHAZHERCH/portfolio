"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, FileText, FileIcon, ChevronDown, Eye } from "lucide-react"

type ResumeFormat = {
  name: string
  extension: string
  icon: React.ElementType
  path: string
}

const resumeFormats: ResumeFormat[] = [
  {
    name: "PDF",
    extension: "pdf",
    icon: FileText,
    path: "/resume/resume.pdf",
  },
  {
    name: "Word",
    extension: "docx",
    icon: FileIcon,
    path: "/resume/resume.docx",
  },
  {
    name: "Plain Text",
    extension: "txt",
    icon: FileText,
    path: "/resume/resume.txt",
  },
]

export function ResumeDownload() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Resume
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {resumeFormats.map((format) => (
            <DropdownMenuItem key={format.extension} asChild>
              <a
                href={format.path}
                download={`abdullah_azher_resume.${format.extension}`}
                className="flex items-center gap-2 cursor-pointer"
              >
                <format.icon className="h-4 w-4" />
                <span>
                  {format.name} (.{format.extension})
                </span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Preview Resume
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>Resume Preview</DialogTitle>
            <DialogDescription>Preview your resume before downloading</DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-auto mt-4">
            <iframe src="/resume/resume.pdf" className="w-full h-[60vh]" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
