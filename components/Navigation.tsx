"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
// @ts-ignore
import { useTheme } from "next-themes"
import Link from "next/link"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Lab", href: "#curiosity-lab" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4"
      >
        <div className={`flex items-center gap-1 px-4 py-2.5 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-xl border-border/80 shadow-xl shadow-black/30"
            : "bg-card/40 backdrop-blur-md border-border/30"
        }`}>
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-sm text-primary mr-3 tracking-tight">
            NM
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-3 p-1.5 rounded-full hover:bg-white/8 text-muted-foreground hover:text-foreground transition-all"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all" />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-1 p-1.5 rounded-full hover:bg-white/8 text-muted-foreground transition-all"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl border border-border/80 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-3 gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 text-sm rounded-xl hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
