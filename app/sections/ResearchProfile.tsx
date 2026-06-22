"use client"

import { motion } from "framer-motion"
import { researchProfile, publications } from "@/lib/data"
import { ExternalLink, BookOpen, FlaskConical } from "lucide-react"

export default function ResearchProfile() {
  return (
    <section id="research" className="py-32 relative overflow-hidden bg-card/20">
      <div className="absolute top-0 right-0 section-num select-none">04</div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-primary text-xs uppercase tracking-widest mb-3">Scholar</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Research{" "}
            <span className="text-muted-foreground font-normal italic">Profile</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Big stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 rounded-2xl border border-primary/20 bg-primary/5 p-8 flex flex-col justify-between"
          >
            <div className="font-display text-8xl font-bold text-gradient leading-none">{researchProfile.stats.publications}</div>
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">Publications</p>
              <p className="text-sm text-muted-foreground">{researchProfile.stats.citations} citations · h-index {researchProfile.stats.hIndex}</p>
            </div>
          </motion.div>

          {/* Profile links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 grid sm:grid-cols-2 gap-4"
          >
            <a
              href={researchProfile.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/40 hover:bg-primary/5 transition-all group flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-semibold mb-1">Google Scholar</p>
                <p className="text-sm text-muted-foreground">Full publication list & citation history</p>
              </div>
            </a>

            <a
              href={researchProfile.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/40 hover:bg-primary/5 transition-all group flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <FlaskConical className="h-5 w-5 text-primary" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-semibold mb-1">ORCID iD</p>
                <p className="text-sm text-muted-foreground font-mono text-xs">{researchProfile.orcidId}</p>
              </div>
            </a>

            <div className="sm:col-span-2 rounded-2xl border border-border/60 bg-card/60 p-5">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">Research Interests</p>
              <div className="flex flex-wrap gap-2">
                {researchProfile.researchInterests.map((r) => (
                  <span key={r} className="text-xs px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary font-medium">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Publications list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">Publications</p>
          <div className="space-y-3">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-5 rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-primary/30 transition-colors group"
              >
                <span className="font-mono text-xs text-muted-foreground w-10 shrink-0">{pub.year}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm leading-snug group-hover:text-primary transition-colors">{pub.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{pub.journal}</p>
                </div>
                {pub.link && pub.link !== "#" && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="shrink-0 p-2 hover:text-primary text-muted-foreground transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
