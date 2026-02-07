"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalInfo, education } from "@/lib/data"
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Background & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining engineering fundamentals with cutting-edge AI and cybersecurity expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">My Story</h3>
                <div className="prose dark:prose-invert max-w-none">
                  {personalInfo.about.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            {education.map((edu, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </span>
                      </div>
                      {edu.achievements.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {edu.achievements.map((achievement, i) => (
                            <Badge key={i} variant="secondary" className="flex items-center gap-1">
                              <Award className="h-3 w-3" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <div className="mt-3">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Key Courses:</span>{" "}
                          {edu.courses.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
