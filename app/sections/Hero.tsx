"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Github, Linkedin, Mail, BookOpen } from "lucide-react"
import { personalInfo } from "@/lib/data"

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-teal-500/6 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">

          {/* ── BIG NAME CARD ── */}
          <motion.div {...fade(0.1)} className="md:col-span-3 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
                — Portfolio 2025
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
                Nandhakumar<br />
                <span className="text-gradient">Manikandasamy</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                AI Engineer · Security Researcher · Software Developer.<br className="hidden md:block" />
                Building intelligent systems at the intersection of AI & Cybersecurity.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all hover:gap-3"
                >
                  Get In Touch <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/40 font-semibold text-sm transition-all"
                >
                  View Work
                </a>
                <a
                  href={personalInfo.resume}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/40 font-semibold text-sm transition-all"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── STATUS CARD ── */}
          <motion.div {...fade(0.2)} className="md:col-span-1 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400" />
                </span>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Available</span>
              </div>
              <p className="text-sm text-muted-foreground">Open for opportunities in AI, security & software engineering</p>
            </div>

            <div className="border-t border-border/50 pt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              {personalInfo.location}
            </div>

            <div className="border-t border-border/50 pt-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono mb-2">Currently</p>
              <p className="text-sm font-medium">MSc Cybersecurity @ NTU</p>
              <p className="text-xs text-muted-foreground mt-0.5">Research Assistant</p>
            </div>

            <div className="border-t border-border/50 pt-4 flex gap-3 mt-auto">
              {[
                { href: personalInfo.github, icon: Github },
                { href: personalInfo.linkedin, icon: Linkedin },
                { href: `mailto:${personalInfo.email}`, icon: Mail },
                { href: personalInfo.scholar, icon: BookOpen },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border/60 hover:border-primary/50 hover:bg-primary/8 text-muted-foreground hover:text-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── STAT CARDS ── */}
          {[
            { num: "3+", label: "Years of Experience" },
            { num: "15+", label: "Projects Shipped" },
            { num: "4+", label: "Publications" },
            { num: "12+", label: "Research Citations" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              {...fade(0.3 + i * 0.06)}
              className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 flex flex-col justify-between group hover:border-primary/30 transition-colors"
            >
              <span className="font-display text-4xl font-bold text-gradient group-hover:teal-glow">{s.num}</span>
              <span className="text-sm text-muted-foreground mt-2 leading-snug">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex items-center gap-3 text-xs text-muted-foreground"
        >
          <div className="h-px flex-1 bg-border/60 max-w-[60px]" />
          <span className="font-mono uppercase tracking-widest">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}
