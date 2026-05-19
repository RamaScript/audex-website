import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Container } from '../ui/Container'

type MetricItem = {
  label: string
  value: string
  icon: LucideIcon
}

type MetricsBarProps = {
  items: MetricItem[]
  tone?: 'light' | 'dark'
}

export function MetricsBar({ items, tone = 'light' }: MetricsBarProps) {
  const wrapperClassName =
    tone === 'dark'
      ? 'border-y border-deepsea/10 bg-white text-deepsea'
      : 'border-y border-deepsea/10 bg-white text-deepsea'

  const valueClassName =
    tone === 'dark' ? 'text-deepsea' : 'text-deepsea'

  const labelClassName =
    tone === 'dark' ? 'text-deepsea/68' : 'text-deepsea/70'

  const iconClassName =
    tone === 'dark'
      ? 'border-deepsea/10 bg-white/8 text-sky'
      : 'border-deepsea/10 bg-deepsea/5 text-blue'

  return (
    <section className={wrapperClassName}>
      <Container className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="flex items-center gap-4 rounded-[1.5rem]"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${iconClassName}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className={`font-display text-2xl font-bold tracking-[-0.03em] ${valueClassName}`}>
                  {item.value}
                </p>
                <p className={`text-sm leading-6 ${labelClassName}`}>{item.label}</p>
              </div>

            </motion.div>
          )
        })}
      </Container>
    </section>
  )
}
