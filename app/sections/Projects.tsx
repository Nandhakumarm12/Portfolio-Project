"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 section-num select-none">05</div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-primary text-xs uppercase tracking-widest mb-3">Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-muted-foreground font-normal italic">Projects</span>
          </h2>
        </motion.div>

        {/* Featured – first one is hero-sized */}
        {featured.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6 rounded-2xl border border-border/60 bg-card/60 p-8 md:p-10 hover:border-primary/30 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-primary uppercase tracking-widest">Featured</span>
                  <span className="h-px flex-1 max-w-16 bg-primary/30" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featured[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">{featured[0].description}</p>
                {featured[0].longDescription && (
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-6 line-clamp-2">
                    {featured[0].longDescription.split('\n')[0]}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {featured[0].technologies.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md border border-border/60 bg-muted/30 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-col gap-3 shrink-0">
                {featured[0].github && (
                  <a href={featured[0].github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all">
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
                {featured[0].demo && (
                  <a href={featured[0].demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Rest of featured */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {featured.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/30 transition-colors group flex flex-col gap-4"
            >
              <div>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.slice(0, 4).map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded border border-border/60 bg-muted/20 text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 pt-3 border-t border-border/40">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">Other Projects</p>
            <div className="grid md:grid-cols-3 gap-4">
              {rest.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-primary/30 transition-colors group"
                >
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        <Github className="h-3 w-3" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" /> Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
