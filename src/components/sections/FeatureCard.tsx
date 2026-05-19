import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Card } from '../ui/Card'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  bullets?: string[]
  accent?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  bullets,
  accent = 'manilla',
}: FeatureCardProps) {
  const accentClass =
    accent === 'manilla'
      ? 'text-manilla'
      : accent === 'blue'
        ? 'text-blue'
        : 'text-deepsea'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <Card className="h-full bg-deepsea/5 hover:bg-white/10 border-deepsea/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-blue/10">
          <Icon className={`h-5 w-5 ${accentClass}`} />
        </div>
        <h3 className="mt-6 font-display text-[24px] font-bold tracking-[-0.03em] text-deepsea">
          {title}
        </h3>
        <p className="mt-4 text-[14px] leading-7 text-deepsea/70 sm:text-[16px]">
          {description}
        </p>
        {bullets && bullets.length > 0 ? (
          <ul className="mt-5 space-y-3 text-[14px] text-deepsea/80">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-manilla" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Card>
    </motion.div>
  )
}
