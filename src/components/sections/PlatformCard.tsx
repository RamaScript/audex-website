import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

type PlatformCardProps = {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export function PlatformCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative h-full rounded-[2px] border border-deepsea/8 bg-white p-7 transition-all duration-300 hover:border-blue/30 hover:shadow-[0_20px_60px_rgba(7,93,239,0.08)] hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue/0 to-blue/0 group-hover:from-blue/[0.03] group-hover:to-sky/[0.04] transition-all duration-500 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-[2px] bg-deepsea/5 border border-deepsea/8 text-blue group-hover:bg-blue group-hover:text-white group-hover:border-blue group-hover:shadow-[0_8px_24px_rgba(7,93,239,0.3)] transition-all duration-300 mb-6">
        <Icon size={20} />
      </div>

      <h3 className="font-display text-[15px] font-semibold text-deepsea group-hover:text-blue transition-colors duration-300 mb-2">
        {title}
      </h3>

      <p className="text-[13px] leading-relaxed text-deepsea/60">
        {description}
      </p>

      {/* Arrow */}
      <div className="mt-5 flex items-center gap-1 text-[12px] font-bold text-blue/0 group-hover:text-blue transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
        <span className="font-mono uppercase tracking-wider text-[10px]">Learn more</span>
        <ArrowUpRight size={14} />
      </div>
    </motion.div>
  )
}
