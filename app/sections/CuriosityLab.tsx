"use client"

import { motion } from "framer-motion"
import { currentlyLearning } from "@/lib/data"

export default function CuriosityLab() {
  return (
    <section id="curiosity-lab" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 section-num select-none">07</div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-primary text-xs uppercase tracking-widest mb-3">The Curiosity Lab</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Currently{" "}
            <span className="text-muted-foreground font-normal italic">Learning</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {currentlyLearning.map((item, i) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-base mb-1">{item.topic}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-mono text-muted-foreground uppercase tracking-widest">Progress</span>
                  <span className="font-mono text-primary font-semibold">{item.progress}%</span>
                </div>
                <div className="h-1 bg-muted/60 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.resources.map((r) => (
                  <span key={r} className="text-xs font-mono px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary/80">
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
