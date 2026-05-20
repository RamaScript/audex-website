import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

type CTA = {
  label: string
  to?: string
  href?: string
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost'
}

type HeroSectionProps = {
  eyebrow: string
  title: string
  description: string
  primaryCta: CTA
  secondaryCta?: CTA
  aside?: ReactNode
}

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  aside,
}: HeroSectionProps) {
  return (
    <section className="hero-surface overflow-hidden">
      <Container className="grid gap-10 py-18 sm:py-22 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-end lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative z-10"
        >
          <p className="inline-flex rounded-[2px] border border-deepsea/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue">
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[32px] md:text-[48px] font-light tracking-[-0.05em] text-deepsea lg:text-[4.4rem] lg:leading-[0.95]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[14px] leading-8 text-deepsea/70 sm:text-[16px]">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={primaryCta.to} href={primaryCta.href} variant={primaryCta.variant || 'primary'}>
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {secondaryCta ? (
              <Button to={secondaryCta.to} href={secondaryCta.href} variant={secondaryCta.variant || 'ghost'}>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="relative z-10"
        >
          {aside}
        </motion.div>
      </Container>
    </section>
  )
}
