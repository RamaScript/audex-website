import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Container } from '../ui/Container'
import { Link } from 'react-router-dom'

export function PlatformCTA() {
  return (
    <section className="relative overflow-hidden bg-deepsea py-28 sm:py-36">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] bg-blue/25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[300px] w-[400px] bg-sky/15 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-manilla opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-manilla" />
            </span>
            <span className="text-[11px] font-bold font-display tracking-[0.08em] text-white/70 uppercase">
              Ready to Recover Margin?
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-[34px] md:text-[58px] font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Logistics is not a cost center.
            <br />
            <span className="text-manilla">It is margin.</span>
          </h2>

          {/* Sub */}
          <p className="mx-auto mb-12 max-w-xl text-[15px] leading-relaxed text-white/50">
            Join the strategic intelligence layer. Deploy AUDEx to unify your fragmented systems into a single source of operational truth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2.5 rounded-[2px] bg-manilla px-10 py-4 text-[15px] font-bold text-deepsea transition-all duration-300 shadow-[0_10px_40px_rgba(229,239,17,0.3)] hover:bg-white hover:shadow-[0_15px_50px_rgba(229,239,17,0.2)] hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              Schedule Architecture Review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/platform"
              className="group flex items-center gap-2 rounded-[2px] border border-white/20 bg-transparent px-10 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/8 hover:-translate-y-0.5"
            >
              View Full Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 h-10 w-[1px] bg-sky/30" />
          <div className="absolute top-8 left-8 w-10 h-[1px] bg-sky/30" />
          <div className="absolute bottom-8 right-8 h-10 w-[1px] bg-sky/30" />
          <div className="absolute bottom-8 right-8 w-10 h-[1px] bg-sky/30" />
        </motion.div>
      </Container>
    </section>
  )
}
