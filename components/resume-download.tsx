"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, FileText, FileIcon, ChevronDown, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const resumeFormats = [
  {
    name: "Resume",
    extension: "pdf",
    icon: FileText,
    path: "/resume/resume.pdf",
  },
  {
    name: "CV",
    extension: "pdf",
    icon: FileIcon,
    path: "/cv/cv.pdf",
  },
];

interface ResumeDownloadProps {
  showPreview?: boolean;
}

export function ResumeDownload({ showPreview = true }: ResumeDownloadProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewType, setPreviewType] = useState<"Resume" | "CV">("Resume");
  const [animatedType, setAnimatedType] = useState<"Resume" | "CV">("Resume");

  // Slide animation for button text
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedType((prev) => (prev === "Resume" ? "CV" : "Resume"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center gap-2 min-w-[120px] justify-center">
            <Download className="h-4 w-4" />
            <div className="relative w-16 h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={animatedType}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 right-0 text-center"
                >
                  {animatedType}
                </motion.span>
              </AnimatePresence>
            </div>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {resumeFormats.map((format) => (
            <DropdownMenuItem key={format.name} asChild>
              <a
                href={format.path}
                download={`abdullah_azher_ch_${format.name}.${
                  format.extension
                }`}
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

      {showPreview && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Eye className="h-4 w-4" />
              {previewType === "Resume" ? "Preview Resume" : "Preview CV"}
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {resumeFormats.map((format) => (
              <DropdownMenuItem
                key={format.name}
                onClick={() => {
                  setPreviewType(format.name as "Resume" | "CV");
                  setIsPreviewOpen(true);
                }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <format.icon className="h-4 w-4" />
                <span>
                  {format.name} (.{format.extension})
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogTrigger asChild>
          <div />
        </DialogTrigger>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>
              {previewType === "Resume" ? "Resume Preview" : "CV Preview"}
            </DialogTitle>
            <DialogDescription>
              Preview your {previewType.toLowerCase()} before downloading
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-auto mt-4">
            <iframe
              src={
                previewType === "Resume" ? "/resume/resume.pdf" : "/cv/cv.pdf"
              }
              className="w-full h-[60vh]"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
