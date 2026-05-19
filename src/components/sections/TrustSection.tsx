import { motion } from 'framer-motion'

const pillars = [
  {
    metric: '20+',
    label: 'Years',
    detail: 'Operator depth before any algorithm',
  },
  {
    metric: '3–8%',
    label: 'Freight Recovered',
    detail: 'Per engagement average',
  },
  {
    metric: 'India & MENA',
    label: 'Markets',
    detail: 'Enterprise deployments active',
  },
  {
    metric: 'ERP Agnostic',
    label: 'Integration',
    detail: 'SAP, Oracle, custom TMS',
  },
]

export function TrustSection() {
  return (
    <section className="relative border-y border-deepsea/8 bg-deepsea py-16 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px flex-1 max-w-[80px] bg-white/10" />
          <span className="font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
            Built on Operator Depth, Not Just Algorithms
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-white/10" />
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 border border-white/8 rounded-[2px] overflow-hidden">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center text-center py-8 px-6 bg-deepsea hover:bg-white/[0.04] transition-colors"
            >
              <span className="font-display text-[30px] md:text-[36px] font-bold text-white mb-0.5">
                {p.metric}
              </span>
              <span className="font-display text-[13px] font-semibold text-sky mb-2">
                {p.label}
              </span>
              <span className="text-[11px] text-white/40 font-mono leading-relaxed">
                {p.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
