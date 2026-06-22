"use client"

import { motion } from "framer-motion"
import { liveProjects } from "@/lib/data"
import { ExternalLink, Github } from "lucide-react"

const statusConfig: Record<string, { dot: string; label: string; bg: string }> = {
  live: { dot: "bg-yellow-400", label: "Live", bg: "bg-yellow-400/10 text-yellow-400 border-yellow-400/25" },
  "in progress": { dot: "bg-amber-400", label: "In Progress", bg: "bg-amber-400/10 text-amber-400 border-amber-400/25" },
  building: { dot: "bg-orange-400", label: "Building", bg: "bg-orange-400/10 text-orange-400 border-orange-400/25" },
}

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="py-32 relative overflow-hidden bg-card/20">
      <div className="absolute top-0 right-0 section-num select-none">06</div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-primary text-xs uppercase tracking-widest mb-3">Active</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Currently{" "}
            <span className="text-muted-foreground font-normal italic">Building</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {liveProjects.map((p, i) => {
            const cfg = statusConfig[p.status]
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/60 bg-card/60 p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border ${cfg.bg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${p.status === "live" ? "animate-pulse" : ""}`} />
                    {cfg.label}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>

                <div className="rounded-xl border border-primary/15 bg-primary/5 px-4 py-2.5">
                  <p className="text-xs text-primary">✦ {p.highlight}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded border border-border/60 bg-muted/20 text-muted-foreground">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 border-t border-border/40">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-3.5 w-3.5" /> Visit
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
