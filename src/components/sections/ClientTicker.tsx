import { motion } from 'framer-motion'
import { Landmark, ShieldCheck, Ship, ShoppingBag, Truck, Zap } from 'lucide-react'

const clients = [
  { name: 'Yusen Logistics', icon: Truck, label: '3PL Partner' },
  { name: 'Delex Cargo', icon: Ship, label: 'Air & Surface' },
  { name: 'IL&FS Transportation', icon: Landmark, label: 'Infrastructure' },
  { name: 'Retail Distribution', icon: ShoppingBag, label: 'Fashion & Apparel' },
  { name: 'Pharma Cold-Chain', icon: ShieldCheck, label: 'Compliance Grade' },
  { name: 'Manufacturing', icon: Zap, label: 'JIT Logistics' }
]

// Duplicate the list to make the marquee seamless
const scrollingItems = [...clients, ...clients, ...clients]

export function ClientTicker() {
  return (
    <section className="relative bg-white border-b border-deepsea/6 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6 flex flex-col items-center">
        <span className="font-mono text-[10px] tracking-[0.2em] text-deepsea/40 uppercase font-semibold">
          Trusted by Enterprise Operators & Supply Chain Networks
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex w-full overflow-x-hidden select-none">
        {/* Left and Right Fade overlays for premium glassmorphism/gradient blending */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          animate={{ x: [0, -1440] }}
          transition={{
            ease: 'linear',
            duration: 35,
            repeat: Infinity,
          }}
          className="flex gap-12 whitespace-nowrap px-6"
          style={{ width: 'max-content' }}
        >
          {scrollingItems.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={i}
                className="flex items-center gap-4 bg-deepsea/[0.03] border border-deepsea/5 px-6 py-3 rounded-[3px] hover:bg-deepsea/[0.05] transition-all cursor-default"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-blue/10 text-blue">
                  <Icon size={16} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display text-[15px] font-bold text-deepsea tracking-tight leading-none">
                    {c.name}
                  </span>
                  <span className="font-mono text-[9px] text-deepsea/45 uppercase tracking-wider mt-1">
                    {c.label}
                  </span>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
