"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="font-bold text-2xl">
              <span className="text-gradient">{personalInfo.name}</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              {personalInfo.title}
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              {personalInfo.location}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border hover:border-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border hover:border-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-background border hover:border-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t mt-12 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. Built with 
            <Heart className="h-4 w-4 text-red-500 fill-current" /> 
            using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
