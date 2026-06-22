"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { blogPosts } from "@/lib/data"
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)))

export default function BlogSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag ? blogPosts.filter((p) => p.tags.includes(activeTag)) : blogPosts
  const [hero, ...rest] = filtered

  return (
    <section id="blog" className="py-32 relative overflow-hidden bg-card/20">
      <div className="absolute top-0 right-0 section-num select-none">08</div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="font-mono text-primary text-xs uppercase tracking-widest mb-3">Writing</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              From the{" "}
              <span className="text-muted-foreground font-normal italic">Blog</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium shrink-0"
          >
            All articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all border ${
              !activeTag ? "bg-primary text-primary-foreground border-primary" : "border-border/60 text-muted-foreground hover:border-primary/40"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all border ${
                activeTag === tag ? "bg-primary text-primary-foreground border-primary" : "border-border/60 text-muted-foreground hover:border-primary/40"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag ?? "all"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20">No posts with that tag yet.</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-5">
                {/* Hero post – spans 2 cols */}
                {hero && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:col-span-2 rounded-2xl border border-border/60 bg-card/60 p-8 hover:border-primary/30 transition-colors group flex flex-col"
                  >
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-5">
                      {hero.featured && (
                        <span className="text-primary uppercase tracking-widest">Featured</span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(hero.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {hero.readingTime}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                      <Link href={`/blog/${hero.slug}`}>{hero.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{hero.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {hero.tags.slice(0, 3).map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border/60 bg-muted/20 text-muted-foreground">{t}</span>
                        ))}
                      </div>
                      <Link href={`/blog/${hero.slug}`} className="flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all font-medium">
                        Read <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* Side posts */}
                <div className="flex flex-col gap-5">
                  {rest.slice(0, 2).map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex-1 rounded-2xl border border-border/60 bg-card/60 p-5 hover:border-primary/30 transition-colors group flex flex-col"
                    >
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime}</span>
                      </div>
                      <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug flex-1">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-xs text-primary hover:gap-2 transition-all mt-3">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Remaining posts */}
                {rest.slice(2).map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-primary/30 transition-colors group"
                  >
                    <p className="text-xs font-mono text-muted-foreground mb-2">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })} · {post.readingTime}
                    </p>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2 mb-2">{post.title}</h3>
                    <Link href={`/blog/${post.slug}`} className="text-xs text-primary flex items-center gap-1">
                      Read <ArrowRight className="h-3 w-3" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-border/60 bg-card/40 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            I write when I learn something worth sharing — follow on{" "}
            <a href={`https://linkedin.com/in/nandhakumarm`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>{" "}
            for updates.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 text-sm font-semibold text-muted-foreground hover:border-primary/40 hover:text-primary transition-all shrink-0"
          >
            All Articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
