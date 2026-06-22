"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin, Github, Linkedin, Mail, BookOpen, Shield, Cpu, Code2, ExternalLink } from "lucide-react"

const BG = "#0d1b3e"        // deep navy
const CARD = "#111f4d"      // slightly lighter navy card
const BORDER = "#1e3070"    // navy border
const YELLOW = "#F5C518"    // golden yellow
const GOLD = "#E8A000"      // deeper gold
const ORANGE = "#FF7A00"    // orange

// ─── Sample A : Terminal Hero (navy + yellow) ──────────────────────────────
const roles = ["AI Engineer", "Cybersecurity Specialist", "Gold Medalist", "Software Developer"]

function TerminalHero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    let t: NodeJS.Timeout
    if (!deleting && displayed.length < target.length)
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75)
    else if (!deleting && displayed.length === target.length)
      t = setTimeout(() => setDeleting(true), 1800)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    else { setDeleting(false); setRoleIdx(i => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [displayed, deleting, roleIdx])

  useEffect(() => {
    const i = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(i)
  }, [])

  return (
    <div className="rounded-2xl p-8 font-mono max-w-2xl" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
      {/* window dots */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full" style={{ background: YELLOW + "aa" }} />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-white/30">bash — nandha@portfolio</span>
      </div>
      <div className="space-y-1.5 text-sm">
        <p style={{ color: GOLD + "99" }}>nandha@portfolio:~$ <span className="text-white/70">whoami</span></p>
        <div className="mt-3 pl-2 border-l-2 space-y-1" style={{ borderColor: YELLOW }}>
          {roles.slice(0, roleIdx).map(r => (
            <p key={r} style={{ color: YELLOW }}>✓ {r}</p>
          ))}
          <p className="text-white/90">
            <span style={{ color: ORANGE }}>&gt; </span>
            {displayed}
            <span className={blink ? "opacity-100" : "opacity-0"} style={{ color: YELLOW }}>▋</span>
          </p>
        </div>
        <p className="mt-4" style={{ color: GOLD + "55" }}>nandha@portfolio:~$ <span className="text-white/30">_</span></p>
      </div>
    </div>
  )
}

// ─── Sample B : Hero Bento (navy + yellow) ────────────────────────────────
function BentoHero() {
  return (
    <div className="grid grid-cols-3 gap-3 max-w-2xl">
      {/* name card */}
      <div className="col-span-2 rounded-2xl p-6 relative overflow-hidden" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: YELLOW }} />
        <p className="font-mono text-xs mb-3 tracking-widest uppercase" style={{ color: GOLD }}>— Portfolio 2025</p>
        <h2 className="font-display text-3xl font-bold leading-tight mb-2 text-white">
          Nandhakumar<br />
          <span style={{ background: `linear-gradient(90deg, ${YELLOW}, ${ORANGE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Manikandasamy
          </span>
        </h2>
        <p className="text-sm text-white/50 mb-4">AI Engineer · Security Researcher</p>
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-black" style={{ background: YELLOW }}>
          Get In Touch <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
      {/* status card */}
      <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: YELLOW }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: YELLOW }} />
          </span>
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: YELLOW }}>Available</span>
        </div>
        <div className="border-t pt-3" style={{ borderColor: BORDER }}>
          <p className="text-xs text-white/40 font-mono mb-1">LOCATION</p>
          <p className="text-xs text-white/70 flex items-center gap-1"><MapPin className="h-3 w-3" style={{ color: ORANGE }} /> Nottingham, UK</p>
        </div>
        <div className="border-t pt-3 mt-auto" style={{ borderColor: BORDER }}>
          <div className="flex gap-2">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <div key={i} className="p-1.5 rounded-lg cursor-pointer" style={{ border: `1px solid ${BORDER}` }}>
                <Icon className="h-3 w-3 text-white/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* stat cards */}
      {[{ n: "3+", l: "Years Exp" }, { n: "15+", l: "Projects" }, { n: "4+", l: "Papers" }].map((s, i) => (
        <div key={i} className="rounded-2xl p-4 flex flex-col justify-between" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
          <span className="text-2xl font-bold" style={{ background: `linear-gradient(135deg, ${YELLOW}, ${ORANGE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.n}</span>
          <span className="text-xs text-white/40 mt-1">{s.l}</span>
        </div>
      ))}
    </div>
  )
}

// ─── Sample C : Experience — Clean Cards (NOT SOC log) ─────────────────────
const jobs = [
  { period: "Feb 2025 – Jul 2025", role: "Research Assistant", org: "Nottingham Trent University", tag: "Active", tagColor: "#22c55e", bullets: ["Telerobotic avatar with haptic feedback", "Robot vision using Pose CNN + OpenCV"] },
  { period: "Jan 2023 – Dec 2024", role: "Software Development Engineer II", org: "AppViewX", tag: "$1.5M Impact", tagColor: YELLOW, bullets: ["Domain security & attack surface platform", "Engineer of the Month — Aug 2024"] },
]

function ExperienceCards() {
  return (
    <div className="max-w-2xl space-y-4">
      {jobs.map((j, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
          className="rounded-2xl p-6 flex gap-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
          {/* left accent */}
          <div className="w-1 rounded-full shrink-0 self-stretch" style={{ background: `linear-gradient(to bottom, ${YELLOW}, ${ORANGE})` }} />
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <p className="font-bold text-white">{j.role}</p>
                <p className="text-sm" style={{ color: YELLOW }}>{j.org}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full text-black" style={{ background: j.tagColor }}>{j.tag}</span>
            </div>
            <p className="text-xs text-white/40 font-mono mb-3">{j.period}</p>
            <ul className="space-y-1">
              {j.bullets.map((b, bi) => (
                <li key={bi} className="text-sm text-white/60 flex items-start gap-2">
                  <span style={{ color: ORANGE }} className="mt-1 shrink-0">→</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Sample D : Security Status Widget (yellow/orange) ────────────────────
function SecurityWidget() {
  const [progress, setProgress] = useState(0)
  const [label, setLabel] = useState("Initialising scan...")
  const [done, setDone] = useState(false)

  useEffect(() => {
    const steps = [
      { p: 20, l: "Checking TLS 1.3..." },
      { p: 45, l: "Verifying headers..." },
      { p: 68, l: "Running OWASP checks..." },
      { p: 88, l: "Validating CSP policy..." },
      { p: 100, l: "All systems secure" },
    ]
    let i = 0
    const t = setInterval(() => {
      if (i < steps.length) { setProgress(steps[i].p); setLabel(steps[i].l); if (steps[i].p === 100) setDone(true); i++ }
      else clearInterval(t)
    }, 700)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="w-72 rounded-2xl p-5 font-mono shadow-2xl" style={{ background: CARD, border: `1px solid ${YELLOW}33` }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4" style={{ color: YELLOW }} />
          <span className="text-xs uppercase tracking-widest" style={{ color: YELLOW }}>Security Scan</span>
        </div>
        <span className="text-xs text-white/30">{progress}%</span>
      </div>
      <div className="h-1.5 rounded-full mb-3 overflow-hidden" style={{ background: BORDER }}>
        <motion.div className="h-full rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }}
          style={{ background: `linear-gradient(90deg, ${YELLOW}, ${ORANGE})` }} />
      </div>
      <p className="text-xs text-white/50 mb-2">{label}</p>
      <AnimatePresence>
        {done && (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs font-bold mt-1" style={{ color: YELLOW }}>
            🔒 SECURE · TLS 1.3 · HTTPS
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Sample E : Palette Preview ────────────────────────────────────────────
function PalettePreview() {
  const swatches = [
    { hex: "#0d1b3e", name: "Deep Navy", label: "Background" },
    { hex: "#111f4d", name: "Navy Card", label: "Card BG" },
    { hex: "#F5C518", name: "Golden Yellow", label: "Primary Accent" },
    { hex: "#E8A000", name: "Deep Gold", label: "Secondary" },
    { hex: "#FF7A00", name: "Orange", label: "Highlight" },
    { hex: "#FFFFFF", name: "White", label: "Text" },
  ]
  return (
    <div className="rounded-2xl p-6 max-w-sm" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
      <p className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: YELLOW }}>Navy × Yellow × Orange</p>
      <div className="grid grid-cols-3 gap-3">
        {swatches.map(s => (
          <div key={s.hex} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-xl shadow-lg" style={{ background: s.hex, border: `1px solid ${BORDER}` }} />
            <div className="text-center">
              <p className="text-xs text-white/70 font-medium">{s.name}</p>
              <p className="text-[10px] font-mono text-white/30">{s.hex}</p>
              <p className="text-[10px] text-white/40">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────
const samples = [
  {
    id: "A", title: "Terminal Typewriter Hero",
    desc: "Roles cycle with typewriter animation inside a dark navy terminal.",
    component: <TerminalHero />,
  },
  {
    id: "B", title: "Bento Grid Hero",
    desc: "Name card + status card + 3 stat cards. Golden yellow gradient on your name.",
    component: <BentoHero />,
  },
  {
    id: "C", title: "Experience — Modern Cards",
    desc: "Clean cards with a yellow-to-orange left accent bar. No SOC/log aesthetic.",
    component: <ExperienceCards />,
  },
  {
    id: "D", title: "Security Status Widget",
    desc: "Simulated live scan — yellow/orange progress bar. Sits in a corner of the site.",
    component: <SecurityWidget />,
  },
  {
    id: "E", title: "Color Palette — Navy × Yellow × Orange",
    desc: "The exact palette I'd apply to the full revamp.",
    component: <PalettePreview />,
  },
]

export default function PreviewPage() {
  return (
    <div className="min-h-screen text-white p-8" style={{ background: BG }}>
      <div className="max-w-4xl mx-auto">

        <div className="mb-14 flex items-start justify-between">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: YELLOW }}>Design Samples</p>
            <h1 className="font-display text-4xl font-bold mb-2 text-white">Preview</h1>
            <p className="text-white/40 text-sm">Tell me which samples you like (A / B / C / D / E) and I'll build the full site with those.</p>
          </div>
          <Link href="/" className="text-sm text-white/40 hover:text-white border px-4 py-2 rounded-full transition-colors shrink-0 mt-1" style={{ borderColor: BORDER }}>
            ← Live Site
          </Link>
        </div>

        <div className="space-y-20">
          {samples.map((s, i) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold px-3 py-1 rounded-full text-black" style={{ background: YELLOW }}>
                  {s.id}
                </span>
                <h2 className="text-lg font-bold text-white">{s.title}</h2>
              </div>
              <p className="text-sm text-white/40 mb-6">{s.desc}</p>
              {s.component}
              {i < samples.length - 1 && <div className="mt-16 h-px" style={{ background: BORDER }} />}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl p-6 text-center" style={{ background: CARD, border: `1px solid ${YELLOW}33` }}>
          <p className="text-white/60 text-sm mb-1">Like what you see? Reply with which samples (A–E) you want.</p>
          <p className="text-xs text-white/30">I'll apply them to the full site immediately.</p>
        </div>
      </div>
    </div>
  )
}
