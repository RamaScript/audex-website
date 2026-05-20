import { motion } from 'framer-motion'
import { Database, Cpu, Layers, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Database,
    label: 'Data Ingestion',
    sublabel: 'Layer 01',
    description: 'Real-time API integrations with ERPs, TMS, WMS, and carrier networks. Unified data normalization across disparate sources.',
    color: 'from-blue/10 to-blue/5',
    iconBg: 'bg-blue/10 text-blue border-blue/20',
    accentLine: 'bg-blue/30',
  },
  {
    icon: Cpu,
    label: 'Intelligence Engine',
    sublabel: 'Layer 02',
    description: 'Machine learning models for predictive routing, capacity optimization, and dynamic freight pricing analytics.',
    color: 'from-sky/10 to-sky/5',
    iconBg: 'bg-sky/10 text-deepsea border-sky/20',
    accentLine: 'bg-sky/40',
  },
  {
    icon: Layers,
    label: 'Control Tower UI',
    sublabel: 'Layer 03',
    description: 'Autonomous execution recommendations and strategic visibility — one source of operational truth for decision makers.',
    color: 'from-manilla/20 to-manilla/5',
    iconBg: 'bg-manilla/20 text-deepsea border-manilla/30',
    accentLine: 'bg-manilla/50',
  },
]

export function ArchitectureFlow() {
  return (
    <div className="relative">
      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-start gap-0 relative">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`flex-1 rounded-[2px] border border-deepsea/8 bg-gradient-to-br ${step.color} p-7 relative overflow-hidden group hover:shadow-[0_16px_48px_rgba(7,93,239,0.08)] transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Step number */}
              <span className="absolute top-4 right-5 font-mono text-[10px] text-deepsea/60 tracking-widest">
                {step.sublabel}
              </span>

              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${step.accentLine}`} />

              {/* Icon */}
              <div className={`flex h-11 w-11 items-center justify-center rounded-[2px] border ${step.iconBg} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <step.icon size={20} />
              </div>

              <h3 className="font-display text-[15px] font-semibold text-deepsea mb-2">
                {step.label}
              </h3>
              <p className="text-[13px] leading-relaxed text-deepsea/80">
                {step.description}
              </p>
            </motion.div>

            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                className="flex flex-col items-center mx-[-1px] z-10"
              >
                <div className="w-8 h-px bg-deepsea/15 relative">
                  <ArrowRight size={14} className="absolute -right-1.5 -top-[7px] text-deepsea/60" />
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="flex flex-col gap-4 md:hidden">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative rounded-[2px] border border-deepsea/8 bg-gradient-to-br ${step.color} p-6 overflow-hidden`}
          >
            <div className={`absolute top-0 left-0 bottom-0 w-[3px] ${step.accentLine}`} />
            <span className="font-mono text-[10px] text-deepsea/60 tracking-widest mb-3 block">
              {step.sublabel}
            </span>
            <div className={`flex h-10 w-10 items-center justify-center rounded-[2px] border ${step.iconBg} mb-4`}>
              <step.icon size={18} />
            </div>
            <h3 className="font-display text-[14px] font-semibold text-deepsea mb-1.5">{step.label}</h3>
            <p className="text-[13px] leading-relaxed text-deepsea/80">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
