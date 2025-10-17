import React from "react";
import { motion } from "framer-motion";

// Single‑file React site using TailwindCSS.
// Sections: Hero, Trilogy, Unified Philosophy, Manifesto, Call‑to‑Action, Footer.
// Visual language: Night → Dawn → Day gradients; minimal, calm, human.

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full py-20 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
);

const PillarCard = ({ emoji, title, subtitle, bullets, gradient, symbol, tagline }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className={`relative rounded-2xl p-6 shadow-xl ring-1 ring-white/10 ${gradient}`}
  >
    <div className="flex items-center gap-3">
      <div className="text-3xl" aria-hidden>
        {emoji}
      </div>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
    {symbol}
    {tagline && <p className="mt-4 italic opacity-90">{tagline}</p>}
    <ul className="mt-4 space-y-2 text-sm leading-relaxed">
      {bullets.map((b, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Sigil = ({ kind }) => {
  // Minimal, inline SVG sigils for each pillar.
  const base = "absolute right-4 top-4 h-10 w-10 opacity-80";
  if (kind === "pajama") {
    return (
      <svg className={`${base}`} viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#6366f1"/>
            <stop offset="1" stopColor="#a78bfa"/>
          </linearGradient>
        </defs>
        {/* Broken chain → crescent */}
        <path d="M14 36c0-8 6-14 14-14" stroke="url(#g1)" strokeWidth="4" strokeLinecap="round"/>
        <path d="M50 28c0 11-9 20-20 20 8 0 14-6 14-14s-6-14-14-14c11 0 20 9 20 20z" fill="url(#g1)" opacity="0.6"/>
        <path d="M10 28l8 8" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
  }
  if (kind === "noow") {
    return (
      <svg className={`${base}`} viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#f59e0b"/>
            <stop offset="1" stopColor="#84cc16"/>
          </linearGradient>
        </defs>
        {/* Infinity from doubled O's */}
        <path d="M16 32c0-6 5-10 10-10s10 4 10 10-5 10-10 10-10-4-10-10zm12 0c0-6 5-10 10-10s10 4 10 10-5 10-10 10-10-4-10-10z" stroke="url(#g2)" strokeWidth="4"/>
      </svg>
    );
  }
  return (
    <svg className={`${base}`} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#22c55e"/>
          <stop offset="1" stopColor="#38bdf8"/>
        </linearGradient>
      </defs>
      {/* Atom orbits morph into a leaf */}
      <ellipse cx="32" cy="32" rx="22" ry="10" stroke="url(#g3)" strokeWidth="3"/>
      <ellipse cx="32" cy="32" rx="10" ry="22" stroke="url(#g3)" strokeWidth="3"/>
      <path d="M32 20c8 8 8 16 0 24 0 0-10-8 0-24z" fill="url(#g3)" opacity="0.6"/>
    </svg>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium opacity-90 hover:opacity-100 hover:underline underline-offset-4">
    {children}
  </a>
);

export default function WealPhySite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-300 selection:text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <Container className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="text-lg font-semibold tracking-tight">PAJAMA • NOOW • weal.phy</p>
              <p className="text-xs opacity-60">Heal the mind · Renew the man · Restore the world</p>
            </div>
          </a>
          <nav className="hidden gap-6 md:flex">
            <NavLink href="#trilogy">Trilogy</NavLink>
            <NavLink href="#philosophy">Philosophy</NavLink>
            <NavLink href="#manifesto">Manifesto</NavLink>
            <NavLink href="#cta">Start</NavLink>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      <Section id="top" className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-600/30 via-slate-950 to-slate-950">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                The Cycle of Restoration
              </h1>
              <p className="mt-4 max-w-prose text-base leading-relaxed opacity-90">
                A calm, coherent framework for whole‑life transformation. <span className="font-medium">PAJAMA</span> heals the captive mind, <span className="font-medium">NOOW</span> reorganizes life around what is living and good, and <span className="font-medium">weal.phy</span> sustains harmony with the laws of nature.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#trilogy" className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">Explore the trilogy</a>
                <a href="#manifesto" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20">Read the manifesto</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="relative">
              <HeroSigil />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Trilogy */}
      <Section id="trilogy" className="bg-gradient-to-b from-slate-950 to-slate-900">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">The Trilogy</h2>
            <p className="mt-2 max-w-prose text-sm opacity-80">
              Night → Dawn → Day. Three movements of one symphony: inner healing, intentional renewal, enduring harmony.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <PillarCard
              emoji="🌙"
              title="PAJAMA"
              subtitle="Prisoner Anguish · Jail Anger · Mindmend All"
              tagline="From captivity to calm."
              bullets={[
                "Trauma to transformation — restorative justice & forgiveness.",
                "Practices: breath, sleep hygiene, narrative repair, peer circles.",
                "Symbol: broken chain → crescent moon (rest).",
              ]}
              gradient="bg-gradient-to-br from-indigo-700/40 to-fuchsia-600/20"
              symbol={<Sigil kind="pajama" />}
            />

            <PillarCard
              emoji="☀️"
              title="NOOW"
              subtitle="New‑man Organize Organic Weal"
              tagline="Rebirth with purpose."
              bullets={[
                "Design your days: rhythm, responsibilities, relationships.",
                "Practices: commons thinking, co‑ops, mutual aid, skill‑maps.",
                "Symbol: doubled O → infinity (coordinated renewal).",
              ]}
              gradient="bg-gradient-to-br from-amber-500/30 to-lime-500/20"
              symbol={<Sigil kind="noow" />}
            />

            <PillarCard
              emoji="🌍"
              title="weal.phy"
              subtitle="The science of harmony"
              tagline="Sustain the good."
              bullets={[
                "Live within natural law: circadian, ecological, social.",
                "Practices: evidence‑based wellbeing, stewardship, simplicity.",
                "Symbol: atom orbits → leaf (knowledge serving life).",
              ]}
              gradient="bg-gradient-to-br from-emerald-500/30 to-sky-500/20"
              symbol={<Sigil kind="wealphy" />}
            />
          </div>
        </Container>
      </Section>

      {/* Unified Philosophy */}
      <Section id="philosophy" className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-600/20 via-slate-900 to-slate-950">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">A Unified Philosophy</h2>
              <p className="mt-4 text-sm leading-relaxed opacity-90">
                The <em>Cycle of Restoration</em> binds inner work to outer order, then roots both in the laws of nature. It’s not
                revolution through force but evolution through integration. Heal the mind, renew the man, restore the world.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400"/><span><strong>Inner →</strong> PAJAMA practices cultivate rest, clarity, and compassion.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400"/><span><strong>Relational →</strong> NOOW structures purpose with people and place.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400"/><span><strong>Ecological →</strong> weal.phy aligns choices with biology and ecology.</span></li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-xl"
            >
              <div className="grid grid-cols-3 gap-4 text-center text-xs">
                <div className="rounded-xl bg-indigo-500/10 p-4">
                  <p className="font-semibold">PAJAMA</p>
                  <p className="opacity-80">Inner healing</p>
                </div>
                <div className="rounded-xl bg-amber-500/10 p-4">
                  <p className="font-semibold">NOOW</p>
                  <p className="opacity-80">Renewal by design</p>
                </div>
                <div className="rounded-xl bg-emerald-500/10 p-4">
                  <p className="font-semibold">weal.phy</p>
                  <p className="opacity-80">Sustained harmony</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-600/30 via-amber-500/20 to-emerald-500/30 p-5 text-sm leading-relaxed">
                <p className="opacity-90">
                  A practical rule of thumb: <span className="font-medium">1</span> hour of calm practice (PAJAMA),
                  <span className="font-medium"> 1</span> hour of deliberate order (NOOW), and
                  <span className="font-medium"> 1</span> hour of outdoors/repair/stewardship (weal.phy) each week — then scale.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Manifesto */}
      <Section id="manifesto" className="bg-gradient-to-b from-slate-950 to-slate-950">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">The Manifesto</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <QuoteCard
              title="PAJAMA"
              text={`Bars can cage the body,\nbut anger need not keep the mind.\nMend the story, mend the days—\nleave the night of pain behind.`}
              accent="from-indigo-600/30 to-fuchsia-500/20"
            />
            <QuoteCard
              title="NOOW"
              text={`Renewed, we gather and design.\nNot by force, but by fit.\nWe align our hours with what lives,\nso purpose can breathe.`}
              accent="from-amber-500/30 to-lime-500/20"
            />
            <QuoteCard
              title="weal.phy"
              text={`Knowledge should serve life.\nWe keep what we can sustain.\nWe leave what we cannot repay.\nHarmony is the highest craft.`}
              accent="from-emerald-500/30 to-sky-500/20"
            />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="cta" className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-emerald-600/20 via-indigo-600/20 to-sky-500/20">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-xl">
            <h3 className="text-2xl font-semibold">Begin the Cycle</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm opacity-90">
              Start simple. Choose one practice from each pillar and try it for seven days.
            </p>

            <div className="mt-6 grid gap-4 text-left sm:grid-cols-3">
              <Practice title="PAJAMA" items={["10 minutes of mindful breathing before bed","Write a compassionate reframing of one painful memory","Digital sunset: no screens 60 minutes before sleep"]} color="indigo"/>
              <Practice title="NOOW" items={["Plan your week with one co‑project (help a neighbor, co‑cook)","Define a daily ‘first hour’ ritual","Create a 3‑item ‘weal list’ that benefits others"]} color="amber"/>
              <Practice title="weal.phy" items={["Morning light walk (5–10 min)","Cook one seasonal meal","Repair or tend one object/place you share"]} color="emerald"/>
            </div>

            <div className="mt-8">
              <a href="#top" className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300">I’m in — guide me</a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <Container className="flex flex-col items-center gap-3 text-center text-xs opacity-80">
          <Logo small />
          <p>© {new Date().getFullYear()} The Cycle of Restoration • A small, sincere experiment in harmony.</p>
          <p className="opacity-70">Built with love — night · dawn · day.</p>
        </Container>
      </footer>
    </div>
  );
}

const Practice = ({ title, items, color = "indigo" }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
    <div className="mb-3 flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color === "indigo" ? "bg-indigo-400" : color === "amber" ? "bg-amber-400" : "bg-emerald-400"}`} />
      <p className="text-sm font-semibold">{title}</p>
    </div>
    <ul className="space-y-2 text-sm opacity-90">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

const QuoteCard = ({ title, text, accent }) => (
  <motion.blockquote
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className={`rounded-2xl border border-white/10 bg-gradient-to-br ${accent} p-6 shadow-xl`}
  >
    <p className="text-sm leading-relaxed whitespace-pre-line">{text}</p>
    <footer className="mt-4 text-xs opacity-80">— {title}</footer>
  </motion.blockquote>
);

const Logo = ({ small = false }) => (
  <div className="relative">
    <svg
      className={small ? "h-6 w-6" : "h-10 w-10"}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#6366f1"/>
          <stop offset="0.5" stopColor="#f59e0b"/>
          <stop offset="1" stopColor="#22c55e"/>
        </linearGradient>
      </defs>
      {/* Moon */}
      <path d="M20 18c8 0 14 6 14 14s-6 14-14 14c7-2 12-8 12-14s-5-12-12-14z" fill="url(#lg1)" opacity="0.85"/>
      {/* Dawn bar */}
      <rect x="30" y="28" width="20" height="8" rx="4" fill="url(#lg1)" opacity="0.9"/>
      {/* Leaf */}
      <path d="M44 20c6 8 6 16 0 24 0 0-8-7 0-24z" fill="url(#lg1)" opacity="0.85"/>
    </svg>
  </div>
);

const HeroSigil = () => (
  <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-600/20 via-amber-500/20 to-emerald-500/20 blur-0" />
    <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl" />
    <div className="absolute inset-0 grid grid-cols-3 p-8 text-center text-xs">
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-4xl">🌙</span>
        <p className="font-semibold">PAJAMA</p>
        <p className="opacity-80">Inner healing</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-4xl">☀️</span>
        <p className="font-semibold">NOOW</p>
        <p className="opacity-80">Renewal</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-4xl">🌍</span>
        <p className="font-semibold">weal.phy</p>
        <p className="opacity-80">Harmony</p>
      </div>
    </div>
  </div>
);
