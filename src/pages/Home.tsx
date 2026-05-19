import { Container } from '../components/ui/Container'
import { PlatformHero } from '../components/sections/PlatformHero'
import { PlatformCard } from '../components/sections/PlatformCard'
import { ArchitectureFlow } from '../components/sections/ArchitectureFlow'
import { PerformanceCharts } from '../components/sections/PerformanceCharts'
import { PlatformCTA } from '../components/sections/PlatformCTA'
import { TrustSection } from '../components/sections/TrustSection'
import { homeIntelligenceModules } from '../data/home'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-3 mb-5"
    >
      <div className="h-px w-10 bg-deepsea/15" />
      <span className="font-mono text-[10px] tracking-[0.15em] text-deepsea/40 uppercase">
        {children}
      </span>
      <div className="h-px w-10 bg-deepsea/15" />
    </motion.div>
  )
}

function SectionHeading({ title, subtitle }: { title: React.ReactNode; subtitle: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-[32px] md:text-[40px] font-bold tracking-tight text-deepsea leading-[1.1]"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-[14px] leading-relaxed text-deepsea/55 max-w-lg"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

export function HomePage() {
  useDocumentMeta(
    'AUDEx | Platform Intelligence & Logistics Control',
    'AUDEx connects global supply chain visibility with autonomous control layers, transforming raw logistics data into measurable margin recovery.',
  )

  return (
    <div className="bg-white min-h-screen text-deepsea">
      {/* 1. Hero + Stats Strip */}
      <PlatformHero />

      {/* 2. Trust / Proof Bar */}
      <TrustSection />

      {/* 3. Core Intelligence Modules */}
      <section className="py-24 bg-white">
        <Container>
          <SectionLabel>Core Platform Modules</SectionLabel>
          <SectionHeading
            title={<>The Intelligence Stack<br />Behind Every Decision</>}
            subtitle="Four integrated modules delivering end-to-end logistics intelligence — from transport routing to real-time analytics."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {homeIntelligenceModules.map((module, i) => (
              <PlatformCard
                key={module.title}
                icon={module.icon}
                title={module.title}
                description={module.description}
                index={i}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/platform"
              className="group flex items-center gap-2 text-[13px] font-bold text-blue hover:text-deepsea transition-colors"
            >
              Explore full platform capabilities
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* 4. Systems Architecture */}
      <section className="py-24 bg-deepsea/[0.02] border-y border-deepsea/6">
        <Container>
          <SectionLabel>How It Works</SectionLabel>
          <SectionHeading
            title={<>Three Layers.<br />One Source of Truth.</>}
            subtitle="A unified integration layer connecting disparate enterprise logistics systems into a single, intelligent control surface."
          />
          <ArchitectureFlow />
        </Container>
      </section>

      {/* 5. Performance Impact */}
      <section className="py-24 bg-white">
        <Container>
          <SectionLabel>Measured Impact</SectionLabel>
          <SectionHeading
            title={<>Numbers That<br />Speak for Themselves</>}
            subtitle="Quantifiable improvements across the logistics value chain — documented from real enterprise client deployments."
          />
          <PerformanceCharts />
        </Container>
      </section>

      {/* 6. Final CTA */}
      <PlatformCTA />
    </div>
  )
}
