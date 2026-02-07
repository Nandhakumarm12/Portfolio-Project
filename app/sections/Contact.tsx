"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { Mail, MapPin, Phone, Github, Linkedin, FileText } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in AI, software engineering, and cybersecurity. Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{personalInfo.email}</p>
                    </div>
                  </a>

                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{personalInfo.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold mb-4">Connect With Me</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" asChild>
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={`mailto:${personalInfo.email}`}>
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently looking for new opportunities in AI engineering, software development, 
                  and cybersecurity. Whether you have a question or just want to say hi, I'll try my 
                  best to get back to you!
                </p>

                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full">
                    <a href={`mailto:${personalInfo.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="w-full">
                    <a href={personalInfo.resume} download>
                      <FileText className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-background/50 border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Availability:</span>{" "}
                    Open for full-time positions, freelance projects, and research collaborations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
