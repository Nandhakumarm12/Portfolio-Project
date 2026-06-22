"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const allSkills = skills.flatMap((g) => g.items.map((item) => ({ item, category: g.category })))
const half = Math.ceil(allSkills.length / 2)
const row1 = allSkills.slice(0, half)
const row2 = allSkills.slice(half)

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden select-none py-2 group">
      <div className={`flex gap-3 shrink-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}>
        {doubled.map((s, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/60 bg-card/60 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
          >
            <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest hidden sm:block">{s.category.split(" ")[0]}</span>
            <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">{s.item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 section-num select-none">03</div>

      <div className="container mx-auto px-4 max-w-6xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-xs uppercase tracking-widest mb-3">Toolkit</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Technical{" "}
            <span className="text-muted-foreground font-normal italic">Skills</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee strips */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="space-y-3">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
      </div>

      {/* Category grid */}
      <div className="container mx-auto px-4 max-w-6xl mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-border/60 bg-card/40 p-4 hover:border-primary/30 transition-colors"
            >
              <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-3">{group.category}</p>
              <div className="space-y-1.5">
                {group.items.slice(0, 5).map((skill) => (
                  <p key={skill} className="text-xs text-muted-foreground hover:text-foreground transition-colors truncate">{skill}</p>
                ))}
                {group.items.length > 5 && (
                  <p className="text-xs text-muted-foreground/60">+{group.items.length - 5} more</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
