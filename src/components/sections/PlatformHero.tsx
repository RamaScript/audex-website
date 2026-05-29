import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Link } from 'react-router-dom'

const heroStats = [
  { value: 41, suffix: '%', label: 'Avg. Logistics Cost Reduction' },
  { value: 94, suffix: '%', label: 'Shipment ETA Accuracy' },
  { value: 20, suffix: '+', label: 'Years Operator Depth' },
  { value: 8, suffix: '%', label: 'Max Freight Spend Recovered' },
]

export function PlatformHero() {
  return (
    <div className="relative overflow-hidden bg-white pt-28 pb-0 lg:pt-36">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#060B340a_1px,transparent_1px),linear-gradient(to_bottom,#060B340a_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow Effects */}
      <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-[600px] w-[900px] bg-blue/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] top-[20%] h-[300px] w-[400px] bg-sky/20 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          {/* Live Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-sm border border-blue/20 bg-blue/5 px-4 py-2 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
            </span>
            <span className="text-[11px] font-bold font-display tracking-[0.1em] text-blue uppercase">
              Enterprise Logistics Intelligence Platform
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[44px] md:text-[68px] lg:text-[76px] font-light tracking-[-0.03em] leading-[1.02] text-deepsea"
          >
            Precision Visibility.{' '}
            <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-blue font-light">Measurable Margin.</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-manilla" />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-[16px] leading-relaxed text-deepsea/80 font-body"
          >
            Audex connects global supply chain visibility with autonomous control layers —
            transforming raw logistics data into measurable margin recovery for enterprise operations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-[2px] bg-blue px-10 py-4 text-[15px] font-bold text-white transition-all duration-300 shadow-[0_10px_30px_rgba(7,93,239,0.35)] hover:bg-[#0550d6] hover:shadow-[0_15px_40px_rgba(7,93,239,0.5)] hover:-translate-y-0.5"
            >
              Request Platform Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/platform"
              className="group flex items-center gap-2 rounded-[2px] border border-deepsea/12 bg-white/60 px-10 py-4 text-[15px] font-bold text-deepsea backdrop-blur-sm transition-all duration-300 hover:border-blue/40 hover:text-blue hover:bg-blue/5 hover:-translate-y-0.5"
            >
              Explore Platform
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Breadcrumb trust hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 text-[12px] text-deepsea/70 font-mono tracking-wide"
          >
            No commitment required &nbsp;·&nbsp; Used by enterprise logistics leaders across India &amp; MENA
          </motion.p>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 border-t border-deepsea/8 grid grid-cols-2 md:grid-cols-4"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
              className="flex flex-col items-center py-8 px-4 border-r border-deepsea/8 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r group hover:bg-blue/3 transition-colors"
            >
              <span className="font-display text-[36px] md:text-[42px] font-bold tracking-tight text-deepsea group-hover:text-blue transition-colors">
                {stat.value}{stat.suffix}
              </span>
              <span className="mt-1 text-[12px] text-blue uppercase tracking-[0.06em] font-mono font-semibold text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
