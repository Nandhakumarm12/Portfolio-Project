"use client"

import { personalInfo } from "@/lib/data"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-display font-bold text-sm text-primary">
          NM
        </Link>
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} {personalInfo.name} — Built with Next.js & Tailwind
        </p>
        <div className="flex gap-4">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "/blog", label: "Blog" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
