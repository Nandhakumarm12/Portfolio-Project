"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react"
import { personalInfo } from "@/lib/data"

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Shipped", value: "15+" },
  { label: "Publications", value: "4+" },
  { label: "Research Citations", value: "12+" },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(20,184,166,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(6,182,212,0.10),transparent_55%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-teal-500/6 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-500/6 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-2 mb-6 flex-wrap"
          >
            <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 px-4 py-1">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Opportunities
            </Badge>
            <Badge className="bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/30 px-4 py-1">
              MSc Cybersecurity @ NTU
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient">{personalInfo.name.split(" ")[0]}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
          >
            <span className="text-foreground/80">AI Engineer</span>
            <span className="mx-3 text-primary">·</span>
            <span className="text-foreground/80">Security Researcher</span>
            <span className="mx-3 text-primary">·</span>
            <span className="text-foreground/80">Software Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/20">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-teal-500/30 hover:border-teal-500/60 hover:bg-teal-500/5">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/5">
              <a href="#research">
                <BookOpen className="mr-2 h-4 w-4" />
                Research
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={personalInfo.resume} download>
                <FileText className="mr-2 h-4 w-4" />
                CV
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-3 mb-16"
          >
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <Button key={label} variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-4 text-center"
              >
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs text-muted-foreground">scroll</span>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
