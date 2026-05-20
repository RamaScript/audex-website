import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

type CTASectionProps = {
  eyebrow: string
  title: string
  description: string
  primaryLabel: string
  primaryTo: string
  primaryVariant?: 'primary' | 'accent' | 'secondary' | 'ghost'
  secondaryLabel?: string
  secondaryTo?: string
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  primaryVariant = 'accent',
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) {
  return (
    <section className="bg-white py-24 text-deepsea">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[3rem] border border-deepsea/10 bg-[radial-gradient(circle_at_top_left,rgba(177,233,253,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(7,93,239,0.15),transparent_35%),rgba(6,11,52,0.02)] px-6 py-12 shadow-[0_24px_60px_rgba(6,11,52,0.12)] sm:px-10 lg:flex lg:items-end lg:justify-between lg:px-16 lg:py-16"
        >
          <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-blue">
              {eyebrow}
            </p>
            <h2 className="mt-6 font-display text-3xl font-light tracking-[-0.04em] sm:text-4xl lg:text-[3.5rem] lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-deepsea/70 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="relative z-10 mt-10 flex flex-wrap gap-4 lg:mt-0 lg:justify-end">
            <Button to={primaryTo} variant={primaryVariant} size="md">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {secondaryLabel && secondaryTo ? (
              <Button to={secondaryTo} variant="ghost" size="md">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </motion.div>
      </Container>
    </section>

  )
}
