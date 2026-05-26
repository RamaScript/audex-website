import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Box,
  Brain,
  Network,
  Eye,
  Database,
  Truck,
  Warehouse,
} from 'lucide-react'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/sections/SectionHeader'
import { CTASection } from '../components/sections/CTASection'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

const modules = [
  {
    icon: Truck,
    title: 'Transport Management',
    description:
      'Optimize routing, carrier selection, and execution across complex multi-modal networks.',
    stats: [
      { label: 'Efficiency Gain', value: '+24%' },
      { label: 'Route Accuracy', value: '99.8%' },
    ],
  },
  {
    icon: Warehouse,
    title: 'Warehouse Management',
    description:
      'Intelligent inventory positioning, labor optimization, and automated facility orchestration.',
    stats: [
      { label: 'Space Utilization', value: '94%' },
      { label: 'Pick Rate', value: '850/hr' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Freight Intelligence',
    description:
      'Predictive capacity modeling, dynamic pricing analytics, and global market visibility.',
    stats: [
      { label: 'Cost Reduction', value: '18%' },
      { label: 'Market Coverage', value: 'Global' },
    ],
  },
  {
    icon: Eye,
    title: 'Analytics & Visibility',
    description:
      'Real-time control tower capabilities, exception management, and deep operational insights.',
    stats: [
      { label: 'Data Latency', value: '<0.1s' },
      { label: 'Predictive Accuracy', value: '96%' },
    ],
  },
]

const architectureLayers = [
  {
    icon: Database,
    title: 'Data Ingestion Layer',
    description: 'Real-time API integrations with ERPs, TMS, and carrier networks.',
    highlight: false,
  },
  {
    icon: Brain,
    title: 'Intelligence Engine',
    description: 'Machine learning models for predictive routing and capacity optimization.',
    highlight: true,
  },
  {
    icon: Network,
    title: 'Control Tower UI',
    description: 'Unified command interface for real-time logistics oversight and intervention.',
    highlight: false,
  },
]

const performanceMetrics = [
  {
    chart: 'bar',
    title: 'Freight Optimization',
    bars: [40, 60, 85],
    labels: ['Q1', 'Q2', 'Q3'],
    peak: '85%',
    peakLabel: 'Improvement',
  },
  {
    chart: 'bar',
    title: 'Cost Reduction Tracking',
    bars: [90, 65, 35],
    labels: ['Baseline', 'Implement', 'Optimized'],
    peak: '61%',
    peakLabel: 'Total Reduction',
  },
]

export function PlatformPage() {
  useDocumentMeta(
    'Audex Platform | Enterprise Logistics Intelligence',
    'Centralize transport, warehouse, freight, and operational visibility through a unified enterprise logistics intelligence ecosystem.',
  )

  return (
    <div className="bg-white text-deepsea">

      {/* ── Hero ── */}
      <section className="hero-surface overflow-hidden border-b border-deepsea/5" style={{ paddingBottom: 0 }}>
        <Container className="pt-20 pb-0 sm:pt-28 lg:pt-32 text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-deepsea/10 bg-white px-4 py-1.5 shadow-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-blue)]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue">
              Enterprise Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-4xl font-display text-[42px] font-light leading-tight tracking-[-0.04em] text-deepsea sm:text-[56px] lg:text-[72px] lg:leading-[0.95]"
          >
            Platform Intelligence for{' '}
            <span className="text-[var(--color-blue)] font-light">Enterprise Logistics.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl text-[17px] leading-8 text-deepsea/80"
          >
            Centralize transport, warehouse, freight, and operational visibility through a
            unified enterprise logistics intelligence ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--color-blue)] bg-[var(--color-blue)] px-8 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(7,93,239,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#0550d6] hover:border-[#0550d6] hover:shadow-[0_12px_32px_rgba(7,93,239,0.5)]"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 rounded-[2px] border border-deepsea/15 bg-white px-8 py-3.5 text-[14px] font-bold text-deepsea shadow-sm transition-all hover:-translate-y-0.5 hover:border-deepsea/25 hover:bg-deepsea/5"
            >
              View Architecture
            </a>
          </motion.div>

          {/* ── World Map on deep navy — mix-blend-screen requires dark background ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-6 w-full overflow-hidden rounded-t-2xl shadow-[0_-8px_40px_rgba(6,11,52,0.1)]"
            style={{ background: 'linear-gradient(150deg, #060B34 0%, #0b1858 55%, #04143e 100%)' }}
          >
            <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
              {/* World map — visible on dark bg */}
              <img
                alt="Global logistics network map"
                className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-screen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA52pqQ3wzAJLXbHIw4jipJi21js8AeJWjeVdDwY93hc3oecbHmzVnAmi_SeV1KwAANF6qnsW2x7S1DYXrW8JgoSLn-lPiSOLGWYuoqAchf6u1sE9OiRgd3977fCPpEGrW6Ob8JbHhGaqTe14mwT6_GEfYxwekNLKvC9ZnhA6kAsiGrSR-jvqH1vF9CXS5PjdrnlKcHBoEXf14l_L9qsAXpNswltOk6lLo7uyOujKFQiPHbc1Bk0s0DzImXfkE7wSdUreNW4k863vEZ"
              />
              {/* Electric blue radial glow — network node feel */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 25% 45%, rgba(7,93,239,0.4) 0%, transparent 50%), radial-gradient(ellipse at 72% 55%, rgba(177,233,253,0.12) 0%, transparent 45%)',
                }}
              />
              {/* Sky-blue shimmer dots for network nodes feel */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: 'radial-gradient(rgba(177,233,253,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
              />
              {/* Bottom fade so stat cards sit cleanly */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
                style={{ background: 'linear-gradient(to top, rgba(6,11,52,1) 0%, rgba(6,11,52,0.6) 40%, transparent 100%)' }}
              />

              {/* Stat cards pinned at the bottom */}
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-center gap-4 p-6 sm:p-8">
                {[
                  { label: 'Global Nodes', value: '8,492' },
                  { label: 'Active Routes', value: '12,044' },
                  { label: 'Enterprises Served', value: '200+' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1 rounded-[2px] px-7 py-4 backdrop-blur-md"
                    style={{ background: 'rgba(177,233,253,0.07)', border: '1px solid rgba(177,233,253,0.12)' }}
                  >
                    <span className="font-display text-[28px] font-bold tracking-tight text-white">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(177,233,253,0.65)' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Core Intelligence Modules ── */}
      <section id="modules" className="bg-[#F7F8FC] py-24 border-b border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Core Modules"
            title="Core Intelligence Modules"
            description="Comprehensive operational control across all key logistics domains."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {modules.map((mod, i) => {
              const Icon = mod.icon
              return (
                <motion.div
                  key={mod.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="group flex flex-col gap-6 rounded-[2px] border border-deepsea/10 bg-white p-8 shadow-[0_2px_12px_rgba(6,11,52,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(6,11,52,0.10)] hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 border-b border-deepsea/6 pb-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[2px] bg-[var(--color-blue)]/10 transition-colors group-hover:bg-[var(--color-blue)]/15">
                      <Icon className="h-6 w-6 text-[var(--color-blue)]" />
                    </div>
                    <h3 className="font-display text-[22px] font-bold tracking-[-0.02em] text-deepsea">
                      {mod.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[15px] leading-7 text-deepsea/80">{mod.description}</p>

                  {/* Stats */}
                  <div className="mt-auto flex gap-8 border-t border-deepsea/6 pt-6">
                    {mod.stats.map((s) => (
                      <div key={s.label} className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-deepsea/70">
                          {s.label}
                        </span>
                        <span className="font-display text-[22px] font-bold text-deepsea">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── Systems Architecture ── */}
      <section id="architecture" className="bg-white py-24 border-b border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Architecture"
            title="Systems Architecture"
            description="Unified integration layer connecting disparate enterprise logistics systems."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Layer stack */}
            <div className="flex flex-col gap-0 overflow-hidden rounded-[2px] border border-deepsea/10">
              {architectureLayers.map((layer, i) => {
                const Icon = layer.icon
                return (
                  <motion.div
                    key={layer.title}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className={`flex items-start gap-5 p-8 ${
                      layer.highlight
                        ? 'bg-[var(--color-blue)] text-white'
                        : 'bg-white text-deepsea'
                    } ${i < architectureLayers.length - 1 ? 'border-b border-deepsea/8' : ''}`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] ${
                        layer.highlight
                          ? 'bg-white/15'
                          : 'bg-[var(--color-blue)]/10'
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          layer.highlight ? 'text-white' : 'text-[var(--color-blue)]'
                        }`}
                      />
                    </div>
                    <div>
                      <p
                        className={`font-display text-[18px] font-bold tracking-[-0.02em] ${
                          layer.highlight ? 'text-white' : 'text-deepsea'
                        }`}
                      >
                        {layer.title}
                      </p>
                      <p
                        className={`mt-1.5 text-[14px] leading-6 ${
                          layer.highlight ? 'text-white/75' : 'text-deepsea/80'
                        }`}
                      >
                        {layer.description}
                      </p>
                    </div>
                    {layer.highlight && (
                      <div className="ml-auto shrink-0">
                        <Box className="h-5 w-5 text-white/50" />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Mock dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2px] border border-deepsea/10 bg-[#F7F8FC] p-6 shadow-[0_4px_24px_rgba(6,11,52,0.06)]"
            >
              {/* Fake window chrome */}
              <div className="mb-5 flex items-center gap-2 border-b border-deepsea/6 pb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-deepsea/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-deepsea/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-deepsea/15" />
                <span className="ml-3 text-[11px] font-mono text-deepsea/60">
                  audex-control-tower / live
                </span>
              </div>
              {/* Fake content rows */}
              <div className="flex flex-col gap-3">
                <div className="h-4 w-3/4 rounded-[2px] bg-deepsea/8" />
                <div className="h-4 w-1/2 rounded-[2px] bg-deepsea/6" />
                <div className="h-4 w-5/6 rounded-[2px] bg-deepsea/8" />
              </div>
              {/* Fake charts */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Active Nodes",
                    value: "8,492",
                    trend: "+12%",
                    line: "M 0 70 Q 25 50 50 65 T 100 25",
                    area: "M 0 70 Q 25 50 50 65 T 100 25 L 100 100 L 0 100 Z"
                  },
                  {
                    title: "Network Latency",
                    value: "12ms",
                    trend: "-8%",
                    line: "M 0 60 Q 25 80 50 40 T 100 15",
                    area: "M 0 60 Q 25 80 50 40 T 100 15 L 100 100 L 0 100 Z"
                  }
                ].map((chart, i) => (
                  <div
                    key={i}
                    className="relative h-32 overflow-hidden rounded-[2px] border border-deepsea/8 bg-white"
                  >
                    {/* Data overlay */}
                    <div className="absolute left-3 top-3 z-10 pointer-events-none">
                      <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-deepsea/50">
                        {chart.title}
                      </div>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <div className="font-display text-xl font-bold text-deepsea">
                          {chart.value}
                        </div>
                        <div className={`text-[10px] font-bold ${chart.trend.startsWith('+') ? 'text-green-500' : 'text-[var(--color-blue)]'}`}>
                          {chart.trend}
                        </div>
                      </div>
                    </div>

                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <g stroke="currentColor" className="text-deepsea/[0.04]" strokeWidth="0.5">
                        <line x1="0" y1="25" x2="100" y2="25" />
                        <line x1="0" y1="50" x2="100" y2="50" />
                        <line x1="0" y1="75" x2="100" y2="75" />
                        <line x1="25" y1="0" x2="25" y2="100" />
                        <line x1="50" y1="0" x2="50" y2="100" />
                        <line x1="75" y1="0" x2="75" y2="100" />
                      </g>

                      <defs>
                        <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#075DEF" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#075DEF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Area Fill */}
                      <path d={chart.area} fill={`url(#grad-${i})`} />
                      {/* Line */}
                      <motion.path
                        d={chart.line}
                        fill="none"
                        stroke="#075DEF"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
                      />
                    </svg>
                  </div>
                ))}
              </div>
              {/* Live indicator */}
              <div className="mt-5 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-[11px] font-mono text-deepsea/70">
                  All systems operational
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Performance Impact ── */}
      <section className="bg-[#F7F8FC] py-24 border-b border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Performance"
            title="Performance Impact"
            description="Quantifiable improvements across the logistics value chain."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {performanceMetrics.map((metric, i) => (
              <motion.div
                key={metric.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="rounded-[2px] border border-deepsea/10 bg-white p-8 shadow-[0_2px_12px_rgba(6,11,52,0.04)]"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-display text-[18px] font-bold tracking-[-0.02em] text-deepsea">
                    {metric.title}
                  </h4>
                  <div className="text-right">
                    <p className="font-display text-[28px] font-bold text-[var(--color-blue)]">
                      {metric.peak}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-deepsea/70">
                      {metric.peakLabel}
                    </p>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="mt-6 flex items-end gap-3 border-b border-l border-deepsea/10 pb-0 pl-2 pt-4 h-44">
                  {metric.bars.map((h, bi) => (
                    <motion.div
                      key={bi}
                      className="flex flex-1 flex-col items-center gap-2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: bi * 0.1, ease: 'easeOut' }}
                      style={{ transformOrigin: 'bottom' }}
                    >
                      <div
                        className={`w-full rounded-t-[2px] ${
                          bi === metric.bars.indexOf(Math.max(...metric.bars)) ||
                          (metric.title === 'Cost Reduction Tracking' && bi === metric.bars.indexOf(Math.min(...metric.bars)))
                            ? 'bg-[var(--color-blue)]'
                            : 'bg-deepsea/10'
                        }`}
                        style={{ height: `${h * 1.4}px` }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between px-1">
                  {metric.labels.map((label) => (
                    <span
                      key={label}
                      className="flex-1 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-deepsea/65"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Precision Visibility for Strategic Logistics Operations."
        description="Request a platform walkthrough and see how Audex adapts to your network."
        primaryLabel="Request Platform Demo"
        primaryTo="/contact"
        primaryVariant="primary"
        secondaryLabel="Explore Consulting"
        secondaryTo="/consulting"
      />
    </div>
  )
}
