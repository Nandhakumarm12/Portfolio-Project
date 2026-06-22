"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { currentlyLearning } from "@/lib/data"
import { FlaskConical } from "lucide-react"

export default function CuriosityLab() {
  return (
    <section id="curiosity-lab" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-cyan-500/40 text-cyan-600 dark:text-cyan-400 gap-1">
            <FlaskConical className="h-3 w-3" />
            The Curiosity Lab
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Currently Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What I'm actively exploring, studying, and experimenting with right now
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currentlyLearning.map((item, idx) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full gradient-border card-hover overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg leading-snug mb-1">{item.topic}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                      <span>Progress</span>
                      <span className="font-medium text-primary">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
                      />
                    </div>
                  </div>

                  {/* Resources */}
                  <div className="flex flex-wrap gap-2">
                    {item.resources.map((r) => (
                      <Badge key={r} variant="secondary" className="text-xs bg-teal-500/8 text-teal-700 dark:text-teal-300 border-teal-500/15">
                        {r}
                      </Badge>
                    ))}
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
