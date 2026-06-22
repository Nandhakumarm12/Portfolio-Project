"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { Github, Linkedin, Mail, ArrowUpRight, FileText, BookOpen } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(45,212,191,0.06),transparent_65%)]" />
      <div className="absolute top-0 right-0 section-num select-none">09</div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-primary text-xs uppercase tracking-widest mb-6">Contact</p>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
            Let's build<br />
            <span className="text-gradient">something great</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Open to full-time roles in AI engineering, software development, and cybersecurity — as well as research collaborations and freelance projects.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-2xl shadow-teal-500/20 mb-16"
          >
            {personalInfo.email}
            <ArrowUpRight className="h-5 w-5" />
          </a>

          {/* Social row */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: personalInfo.scholar, icon: BookOpen, label: "Scholar" },
              { href: personalInfo.resume, icon: FileText, label: "Resume", download: true },
            ].map(({ href, icon: Icon, label, download }) => (
              <a
                key={label}
                href={href}
                target={download ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={download}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
