"use client"

import { motion } from "framer-motion"
import { personalInfo, education } from "@/lib/data"
import { GraduationCap, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 section-num select-none">01</div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-primary text-xs uppercase tracking-widest mb-3">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Background &{" "}
            <span className="text-muted-foreground font-normal italic">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <blockquote className="font-display text-xl md:text-2xl font-medium leading-relaxed text-foreground/90 mb-8 border-l-2 border-primary pl-6">
              "I build AI systems that understand threats before they become incidents."
            </blockquote>

            {personalInfo.about.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-5 text-[15px]">
                {para}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-10">
              {[
                { label: "Location", value: personalInfo.location },
                { label: "Email", value: personalInfo.email },
                { label: "Status", value: "Open to work" },
                { label: "Focus", value: "AI · Security · Research" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border/60 bg-card/40 p-4">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-foreground/90 truncate">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">Education</p>

            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 shrink-0 mt-0.5">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base leading-snug mb-1">{edu.degree}</h3>
                    <p className="text-primary text-sm font-medium mb-1">{edu.school}</p>
                    <p className="text-xs text-muted-foreground mb-3">{edu.period} · {edu.location}</p>
                    {edu.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {edu.achievements.map((a) => (
                          <span key={a} className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                            <Award className="h-3 w-3" /> {a}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="text-foreground/60">Courses:</span> {edu.courses.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
