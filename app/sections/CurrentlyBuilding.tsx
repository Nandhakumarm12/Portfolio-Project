"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { liveProjects } from "@/lib/data"
import { ExternalLink, Github, Hammer } from "lucide-react"

const statusStyles: Record<string, string> = {
  live: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  "in progress": "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  building: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
}

const statusDot: Record<string, string> = {
  live: "bg-emerald-500",
  "in progress": "bg-amber-500",
  building: "bg-cyan-500",
}

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-teal-500/40 text-teal-600 dark:text-teal-400 gap-1">
            <Hammer className="h-3 w-3" />
            Currently Building
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Active projects I'm working on right now — shipping, iterating, and learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {liveProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full gradient-border card-hover flex flex-col">
                <CardContent className="p-6 flex flex-col h-full gap-4">
                  <div className="flex items-center justify-between">
                    <Badge className={`${statusStyles[project.status]} text-xs font-medium capitalize`}>
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${statusDot[project.status]} ${project.status === 'live' ? 'animate-pulse' : ''}`} />
                      {project.status}
                    </Badge>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 bg-teal-500/8 border border-teal-500/20 rounded-full px-3 py-1">
                      <span>✦</span>
                      {project.highlight}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-border/50">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-3.5 w-3.5" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.url && (
                      <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-white border-0">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3.5 w-3.5" />
                          Visit
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
