"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-card/20">
      <div className="absolute top-0 right-0 section-num select-none">02</div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-primary text-xs uppercase tracking-widest mb-3">Career</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="text-muted-foreground font-normal italic">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-8 md:gap-12 relative"
              >
                {/* Timeline dot */}
                <div className="relative shrink-0 mt-6">
                  <div className="w-10 md:w-16 flex justify-center items-start pt-0.5">
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background ring-offset-0 relative z-10" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-border/60 bg-card/60 p-6 md:p-8 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-xs text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border/60 block">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1 block">{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1.5 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md border border-border/60 bg-muted/30 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
