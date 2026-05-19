import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

type TestimonialCardProps = {
  company: string
  label: string
}

export function TestimonialCard({ company, label }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full bg-[var(--color-navy)] text-deepsea">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-sky)]">
          Enterprise Experience
        </p>
        <h3 className="mt-6 font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em]">
          {company}
        </h3>
        <p className="mt-4 text-sm leading-7 text-deepsea/72 sm:text-base">
          {label}
        </p>
      </Card>
    </motion.div>
  )
}
