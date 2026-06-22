"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

// ─── 1. Terminal Typewriter ───────────────────────────────────────────────────
const roles = ["AI Engineer", "Cybersecurity Specialist", "Gold Medalist", "Software Developer II"]

function TerminalHero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  useEffect(() => {
    const i = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(i)
  }, [])

  return (
    <div className="rounded-2xl border border-border/60 bg-[#0a0a0f] p-8 font-mono max-w-2xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-muted-foreground">terminal — bash</span>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-[#00F5FF]/60">guest@nandha:~$ <span className="text-white/80">whoami</span></p>
        <p className="text-[#00F5FF]/60">guest@nandha:~$ <span className="text-white/80">cat roles.txt</span></p>
        <p className="text-muted-foreground/60">Reading profile...</p>
        <div className="mt-4 space-y-1">
          {roles.slice(0, roleIdx).map((r) => (
            <p key={r} className="text-[#00F5FF]">✓ {r}</p>
          ))}
          <p className="text-white">
            <span className="text-[#00F5FF]">&gt; </span>
            {displayed}
            <span className={`ml-0.5 ${blink ? "opacity-100" : "opacity-0"} transition-opacity`}>▋</span>
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── 2. Security Event Log Experience ────────────────────────────────────────
const events = [
  {
    time: "2025-02-01",
    level: "ACTIVE",
    levelColor: "text-green-400 bg-green-400/10 border-green-400/30",
    org: "Nottingham Trent University",
    role: "Research Assistant — Telerobotic Avatar",
    impact: "Robot vision module, Pose CNN, haptic feedback",
    impactBadge: "Research",
    impactColor: "text-blue-400 border-blue-400/30",
  },
  {
    time: "2023-01-01",
    level: "CLOSED",
    levelColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    org: "AppViewX",
    role: "Software Development Engineer II",
    impact: "$1.5M revenue impact · Engineer of the Month",
    impactBadge: "HIGH IMPACT",
    impactColor: "text-red-400 border-red-400/30",
  },
]

function SecurityLog() {
  return (
    <div className="rounded-2xl border border-border/60 bg-[#0a0a0f] p-6 font-mono max-w-2xl">
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/40">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-green-400 uppercase tracking-widest">Security Event Log — Career Timeline</span>
      </div>
      <div className="space-y-4">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="border border-border/40 rounded-xl p-4 hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs text-muted-foreground">[{e.time}]</span>
              <span className={`text-xs px-2 py-0.5 rounded border font-bold ${e.levelColor}`}>{e.level}</span>
              <span className="text-sm text-white font-semibold">{e.org}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">→ {e.role}</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground/60">IMPACT:</span>
              <span className={`text-xs px-2 py-0.5 rounded border ${e.impactColor}`}>{e.impactBadge}</span>
              <span className="text-xs text-muted-foreground">{e.impact}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── 3. Gold Medalist Badge ───────────────────────────────────────────────────
function GoldBadge() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group cursor-pointer"
      >
        {/* Shimmer ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />

        <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-600 flex flex-col items-center justify-center border-4 border-yellow-300/50 shadow-2xl shadow-yellow-500/30">
          <span className="text-3xl">🏅</span>
          <span className="text-xs font-bold text-yellow-900 tracking-wide mt-1">GOLD</span>
          <span className="text-[10px] font-semibold text-yellow-800">MEDALIST</span>
        </div>

        {/* Shimmer sweep */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </div>

        <p className="text-center mt-3 text-xs text-muted-foreground font-mono">Anna University · Rank #1</p>
      </motion.div>
    </div>
  )
}

// ─── 4. Security Status Widget ────────────────────────────────────────────────
function SecurityWidget() {
  const [progress, setProgress] = useState(0)
  const [label, setLabel] = useState("Initialising...")

  useEffect(() => {
    const steps = [
      { p: 20, l: "Scanning headers..." },
      { p: 45, l: "Checking TLS 1.3..." },
      { p: 70, l: "Verifying CSP..." },
      { p: 90, l: "Running OWASP checks..." },
      { p: 100, l: "✓ All Clear" },
    ]
    let i = 0
    const t = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i].p)
        setLabel(steps[i].l)
        i++
      } else {
        clearInterval(t)
      }
    }, 700)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="w-64 rounded-2xl border border-green-500/30 bg-[#0a0a0f] p-4 font-mono shadow-xl shadow-green-500/10">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-green-400 uppercase tracking-widest">Site Status</span>
      </div>
      <div className="h-1.5 bg-muted/40 rounded-full overflow-hidden mb-2">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-xs text-muted-foreground">{label}</p>
      {progress === 100 && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-green-400 mt-1 font-bold">
          🔒 SECURE · TLS 1.3 · HTTPS
        </motion.p>
      )}
    </div>
  )
}

// ─── 5. Cyber Palette Preview ─────────────────────────────────────────────────
function PalettePreview() {
  return (
    <div className="rounded-2xl border border-border/60 bg-[#0a0a0b] p-6 max-w-sm">
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">Cyber-Noir Palette</p>
      <div className="space-y-3">
        {[
          { hex: "#0A0A0B", name: "Background", style: "bg-[#0A0A0B] border border-white/10" },
          { hex: "#00F5FF", name: "Cyan Neon (Accent)", style: "bg-[#00F5FF]" },
          { hex: "#1A1A1D", name: "Card Background", style: "bg-[#1A1A1D] border border-white/10" },
          { hex: "#FFFFFF", name: "Primary Text", style: "bg-white" },
        ].map((c) => (
          <div key={c.hex} className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-lg shrink-0 ${c.style}`} />
            <div>
              <p className="text-sm font-medium text-white/80">{c.name}</p>
              <p className="text-xs font-mono text-muted-foreground">{c.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs text-[#00F5FF] uppercase tracking-widest mb-1">Design Samples</p>
            <h1 className="font-display text-4xl font-bold">Preview Page</h1>
            <p className="text-muted-foreground mt-2">All samples below. Tell me what you like and I'll build the full site.</p>
          </div>
          <Link href="/" className="text-sm text-muted-foreground hover:text-white border border-border/60 px-4 py-2 rounded-full transition-colors">
            ← Back to Site
          </Link>
        </div>

        <div className="space-y-16">

          {/* Sample 1 */}
          <div>
            <p className="font-mono text-xs text-[#00F5FF] uppercase tracking-widest mb-2">Sample A</p>
            <h2 className="text-xl font-bold mb-6">Terminal Typewriter Hero</h2>
            <TerminalHero />
            <p className="text-xs text-muted-foreground mt-3">Replaces the bento name card. Roles cycle with a typewriter animation.</p>
          </div>

          <div className="h-px bg-border/30" />

          {/* Sample 2 */}
          <div>
            <p className="font-mono text-xs text-[#00F5FF] uppercase tracking-widest mb-2">Sample B</p>
            <h2 className="text-xl font-bold mb-6">Security Event Log — Experience</h2>
            <SecurityLog />
            <p className="text-xs text-muted-foreground mt-3">Experience entries styled as a SIEM/SOC log with status + impact badges.</p>
          </div>

          <div className="h-px bg-border/30" />

          {/* Sample 3 */}
          <div>
            <p className="font-mono text-xs text-[#00F5FF] uppercase tracking-widest mb-2">Sample C</p>
            <h2 className="text-xl font-bold mb-6">Gold Medalist Shimmer Badge</h2>
            <GoldBadge />
            <p className="text-xs text-muted-foreground mt-3 text-center">Hover the badge to see the shimmer effect.</p>
          </div>

          <div className="h-px bg-border/30" />

          {/* Sample 4 */}
          <div>
            <p className="font-mono text-xs text-[#00F5FF] uppercase tracking-widest mb-2">Sample D</p>
            <h2 className="text-xl font-bold mb-6">Security Status Widget</h2>
            <SecurityWidget />
            <p className="text-xs text-muted-foreground mt-3">Fixed corner widget. Runs a simulated scan on page load.</p>
          </div>

          <div className="h-px bg-border/30" />

          {/* Sample 5 */}
          <div>
            <p className="font-mono text-xs text-[#00F5FF] uppercase tracking-widest mb-2">Sample E</p>
            <h2 className="text-xl font-bold mb-6">Cyber-Noir Color Palette</h2>
            <PalettePreview />
            <p className="text-xs text-muted-foreground mt-3">The exact colors from the guide's Option A recommendation.</p>
          </div>

        </div>

        <div className="mt-20 p-6 rounded-2xl border border-[#00F5FF]/20 bg-[#00F5FF]/5 text-center">
          <p className="text-sm text-muted-foreground mb-2">Happy with any of these? Tell me which samples (A/B/C/D/E) you want and I'll apply them to the full site.</p>
          <Link href="/" className="text-sm text-[#00F5FF] hover:underline">← Go back to the live site</Link>
        </div>
      </div>
    </div>
  )
}
