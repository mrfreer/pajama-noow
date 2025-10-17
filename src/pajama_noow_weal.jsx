import React, { useMemo } from "react";
import { motion } from "framer-motion";

// WEAL.THY site with subtle animated particle effects (golden motes) to convey living abundance.

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full py-20 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
);

export default function WealThySite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-300 selection:text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <Container className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="text-lg font-semibold tracking-tight text-amber-300">PAJAMA • NOOW • WEAL.THY</p>
              <p className="text-xs opacity-70 italic">Heal · Renew · Thrive</p>
            </div>
          </a>
        </Container>
      </header>

      {/* Hero */}
      <Section id="top" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/30 via-slate-950 to-slate-950">
        <Particles count={36} areaClassName="opacity-70" palette={["#fcd34d","#f59e0b","#a3e635"]} />
        <Container>
          <div className="relative text-center">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-300 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              The Cycle of Restoration
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed opacity-90">
              <strong>PAJAMA</strong> heals the captive mind, <span className="text-xs text-amber-300 ml-2">Prisoner Anguish Jail Anger Mindmend All</span>, <strong>NOOW</strong> renews and organizes life around purpose, and <strong>WEAL.THY</strong> sustains harmony through generosity, gratitude, and growth — the realization that <em>true wealth is well-being shared.</em>
            </p>
          </div>
        </Container>
      </Section>

      {/* Trilogy */}
      <Section id="trilogy" className="relative bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
        <Particles count={24} speed={12} size={2} areaClassName="pointer-events-none" palette={["#fde68a","#f59e0b","#22c55e"]} />
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight mb-10 text-amber-300">The Trilogy</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Pillar title="PAJAMA" color="indigo" desc="Healing after confinement — the rest that restores clarity." />
            <Pillar title="NOOW" color="amber" desc="Rebirth through organization — the dawn of ordered purpose." />
            <Pillar title="WEAL.THY" color="emerald" desc="Sustaining well-being — where the good becomes abundant." />
          </div>
        </Container>
      </Section>

      {/* Unified Philosophy */}
      <Section id="philosophy" className="relative bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-600/20 via-slate-900 to-slate-950 overflow-hidden">
        <Particles count={20} speed={10} size={1.8} palette={["#fcd34d","#86efac","#93c5fd"]} />
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight mb-6 text-yellow-300">Unified Philosophy</h2>
          <p className="max-w-prose text-sm opacity-90 leading-relaxed">
            <strong>WEAL.THY</strong> merges <em>weal</em> (the common good) with <em>thy</em> (the self), forming a philosophy of shared prosperity.
            Wealth here is not accumulation, but alignment — energy circulating between mind, community, and nature.  
            To be truly <em>weal.thy</em> is to cultivate abundance that nourishes all beings.
          </p>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-xs opacity-80">
        <p className="text-amber-300">© {new Date().getFullYear()} The Cycle of Restoration • Heal · Renew · Thrive</p>
        <p className="opacity-60">Designed in gold and calm — abundance as balance.</p>
      </footer>
    </div>
  );
}

const Pillar = ({ title, color, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className={`rounded-2xl border border-white/10 bg-${color}-500/10 p-6 shadow-xl`}
  >
    <h3 className="text-xl font-semibold mb-2 text-amber-200">{title}</h3>
    <p className="text-sm opacity-90">{desc}</p>
  </motion.div>
);

const Logo = () => (
  <svg className="h-10 w-10" viewBox="0 0 64 64" fill="none" aria-hidden>
    <defs>
      <linearGradient id="goldFlow" x1="0" y1="0" x2="64" y2="64">
        <stop stopColor="#fcd34d"/>
        <stop offset="0.5" stopColor="#f59e0b"/>
        <stop offset="1" stopColor="#22c55e"/>
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="26" stroke="url(#goldFlow)" strokeWidth="4" opacity="0.9" />
    <path d="M22 34c6 0 10-4 10-10s-4-10-10-10c5 2 8 6 8 10s-3 8-8 10z" fill="url(#goldFlow)" opacity="0.8" />
    <path d="M30 34h12a8 8 0 010 16H30a8 8 0 010-16z" fill="url(#goldFlow)" opacity="0.8" />
    <path d="M46 28c6 8 6 16 0 24 0 0-8-7 0-24z" fill="url(#goldFlow)" opacity="0.8" />
  </svg>
);

// ---- Particle System ----
// Lightweight, no external deps. Randomized positions, float speeds, and scales.
const Particles = ({ count = 30, speed = 14, size = 2.2, palette = ["#fcd34d","#f59e0b","#22c55e"], areaClassName = "" }) => {
  const seeds = useMemo(() => Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    s: 0.6 + Math.random() * 1.4,
    d: 8 + Math.random() * speed,
    c: palette[Math.floor(Math.random() * palette.length)],
    o: 0.25 + Math.random() * 0.55,
  })), [count, speed, palette]);

  return (
    <div className={`pointer-events-none absolute inset-0 ${areaClassName}`} aria-hidden>
      {seeds.map((p, i) => (
        <motion.span
          key={i}
          initial={{ x: `${p.x * 100}%`, y: `${p.y * 100}%`, opacity: 0 }}
          animate={{
            y: ["0%", "-10%", "0%"],
            opacity: [0, p.o, 0],
            scale: [p.s * 0.9, p.s, p.s * 0.9],
          }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: (i % 10) * 0.3 }}
          className="absolute block rounded-full blur-[1.5px]"
          style={{
            width: `${size * p.s}px`,
            height: `${size * p.s}px`,
            background: p.c,
            boxShadow: `0 0 12px ${p.c}55`,
          }}
        />
      ))}
    </div>
  );
};
