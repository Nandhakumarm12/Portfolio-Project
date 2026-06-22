"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/data"
import { Calendar, Clock, ArrowRight, PenLine } from "lucide-react"
import Link from "next/link"

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)))

export default function BlogSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts

  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured).slice(0, 4)

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-teal-500/40 text-teal-600 dark:text-teal-400 gap-1">
            <PenLine className="h-3 w-3" />
            Writing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From the Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on AI, cybersecurity, engineering, and the journey — written periodically as I learn and build
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
              activeTag === null
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag ?? "all"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Featured Post — big card */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Card className="overflow-hidden gradient-border card-hover">
                  <CardContent className="p-0">
                    <div className="md:flex">
                      {/* Color slab */}
                      <div className="md:w-2 bg-gradient-to-b from-teal-400 to-cyan-500 hidden md:block" />
                      <div className="p-8 flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30">
                            Featured Post
                          </Badge>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {featured.readingTime}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 hover:text-primary transition-colors">
                          <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl">{featured.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex flex-wrap gap-2">
                            {featured.tags.slice(0, 4).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" asChild className="ml-auto text-primary hover:text-primary">
                            <Link href={`/blog/${featured.slug}`} className="flex items-center gap-1">
                              Read Article
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Other Posts */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {rest.map((post, idx) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <Card className="h-full flex flex-col gradient-border card-hover">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readingTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" asChild className="p-0 h-auto justify-start text-primary">
                          <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                            Read More <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                No posts with that tag yet.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-teal-500/10 via-emerald-500/8 to-cyan-500/10 border-teal-500/20">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-1">I write when I learn something worth sharing</h3>
                <p className="text-muted-foreground text-sm">Follow me on LinkedIn to get notified when new articles drop.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white border-0">
                  <Link href="/blog">All Articles</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
