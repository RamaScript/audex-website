import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Card } from '../ui/Card'

type IndustryCardProps = {
  icon: LucideIcon
  title: string
  description: string
  bullets: string[]
  cta: string
}

export function IndustryCard({
  icon: Icon,
  title,
  description,
  bullets,
  cta,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <Card className="h-full border-transparent bg-deepsea/5 text-deepsea shadow-[0_20px_70px_rgba(6,11,52,0.18)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/10">
          <Icon className="h-5 w-5 text-blue" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em]">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-deepsea/80 sm:text-base">
          {description}
        </p>
        <ul className="mt-5 space-y-3 text-sm text-deepsea/88">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-semibold text-blue">{cta}</p>
      </Card>
    </motion.div>
  )
}
