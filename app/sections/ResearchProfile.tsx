"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { researchProfile, publications } from "@/lib/data"
import { ExternalLink, BookOpen, Quote, FlaskConical } from "lucide-react"

export default function ResearchProfile() {
  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-teal-500/40 text-teal-600 dark:text-teal-400">Research</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Profile</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, cybersecurity, and intelligent systems
          </p>
        </motion.div>

        {/* Profile Links + Stats */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          {/* Scholar Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full gradient-border card-hover">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-teal-500/10">
                    <BookOpen className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Google Scholar</div>
                    <div className="text-sm text-muted-foreground">Publication record</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 py-3 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">{researchProfile.stats.citations}</div>
                    <div className="text-xs text-muted-foreground">Citations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">{researchProfile.stats.publications}</div>
                    <div className="text-xs text-muted-foreground">Papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">{researchProfile.stats.hIndex}</div>
                    <div className="text-xs text-muted-foreground">h-index</div>
                  </div>
                </div>
                <Button asChild variant="outline" className="border-teal-500/30 hover:border-teal-500/60 hover:bg-teal-500/5 w-full">
                  <a href={researchProfile.googleScholar} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on Google Scholar
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* ORCID Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full gradient-border card-hover">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10">
                    <FlaskConical className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <div className="font-semibold">ORCID iD</div>
                    <div className="text-sm text-muted-foreground font-mono text-xs">{researchProfile.orcidId}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Verified researcher identity and persistent digital identifier connecting research outputs across institutions.
                </p>
                <Button asChild variant="outline" className="border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/5 w-full mt-auto">
                  <a href={researchProfile.orcid} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View ORCID Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full gradient-border card-hover">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10">
                    <Quote className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="font-semibold">Research Interests</div>
                    <div className="text-sm text-muted-foreground">Active focus areas</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {researchProfile.researchInterests.map((interest) => (
                    <Badge key={interest} className="bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20 text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="card-hover">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="min-w-[2.5rem] h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-sm">
                      {pub.year}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold leading-snug mb-1">{pub.title}</div>
                      <div className="text-sm text-muted-foreground">{pub.journal}</div>
                    </div>
                    {pub.link && pub.link !== "#" && (
                      <Button variant="ghost" size="icon" asChild className="shrink-0">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
