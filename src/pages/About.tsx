import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import { CTASection } from '../components/sections/CTASection'
import { HeroSection } from '../components/sections/HeroSection'
import { SectionHeader } from '../components/sections/SectionHeader'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import {
  aboutPhilosophy,
  aboutStatements,
  aboutValues,
  leadershipTeam,
} from '../data/about'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

const contactEmails: Record<string, string> = {
  'Vishwesh Pakhare': 'vishwesh@audexglobal.com',
  'Mitesh Bhandari': 'mitesh@audexglobal.com',
}

export function AboutPage() {
  useDocumentMeta(
    'About Audex | Built by Operators for Enterprise Logistics',
    'Learn why Audex was built, how the founders think about diagnosis-first logistics transformation, and the enterprise expertise behind the platform.',
  )

  return (
    <>
      <HeroSection
        eyebrow="About Audex"
        title="Built by Operators. For the Enterprises They Know Best."
        description="Audex was built because the founders spent over two decades inside Indian supply chains and repeatedly saw enterprises losing money through logistics inefficiencies they could not see."
        primaryCta={{
          label: 'Book a Supply Chain Diagnostic',
          to: '/contact',
          variant: 'primary' as any,
        }}
        secondaryCta={{ label: 'See the Platform', to: '/platform' }}
        aside={
          <Card className="border-deepsea/10 bg-deepsea/5 text-deepsea shadow-none">
            <Badge tone="sky">Why Audex exists</Badge>
            <p className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-deepsea">
              We Diagnose Before We Prescribe.
            </p>
            <ul className="mt-6 space-y-3 text-[14px] text-deepsea/75">
              {aboutPhilosophy.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-blue)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        }
      />

      {/* ── Mission / Vision / Purpose ── */}
      <section className="bg-white py-24 border-t border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Story"
            title="Logistics leakages stay hidden when systems are built too generically."
            description="Audex exists to give enterprises sharper logistics visibility, tighter freight control, and systems that fit how supply chains actually operate on the ground."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {aboutStatements.map((statement, i) => (
              <motion.div
                key={statement.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="relative overflow-hidden rounded-[2px] border border-deepsea/8 bg-white p-8 shadow-[0_2px_12px_rgba(6,11,52,0.04)]"
              >
                {/* Accent top border */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-sky)]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--color-blue)]">
                  {statement.title}
                </p>
                <p className="mt-4 text-[18px] font-semibold leading-snug tracking-[-0.02em] text-deepsea">
                  {statement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Values ── */}
      <section className="border-y border-deepsea/5 bg-[#F7F8FC] py-24">
        <Container>
          <SectionHeader
            eyebrow="Values"
            title="Operator judgment, financial discipline, and tailored systems."
            description="Intelligent, direct, and precise — grounded in enterprise realities rather than generic playbooks."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {aboutValues.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex h-full flex-col rounded-[2px] border border-deepsea/8 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(6,11,52,0.08)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[2px] bg-[var(--color-blue)]/10">
                      <Icon className="h-5 w-5 text-[var(--color-blue)]" />
                    </div>
                    <h3 className="mt-5 font-display text-[17px] font-bold tracking-[-0.02em] text-deepsea">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-deepsea/80">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── Leadership — Side-by-side portrait cards ── */}
      <section className="bg-white py-24 border-b border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="Deep operational context meets enterprise-grade technology execution."
            description="Audex is driven by leaders who have scaled physical distribution networks and engineered the complex platforms that govern them."
          />

          {/* Two portrait cards side by side */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {leadershipTeam.map((leader, i) => (
              <motion.div
                key={leader.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-[2px] border border-deepsea/10 bg-white shadow-[0_4px_20px_rgba(6,11,52,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(6,11,52,0.12)]"
              >
                {/* ── Portrait image — square crop, fills top ── */}
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle gradient at bottom of photo */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* ── Info below image ── */}
                <div className="flex flex-1 flex-col p-7">
                  <Badge tone="blue">{leader.role}</Badge>
                  <h3 className="mt-4 font-display text-[26px] font-bold tracking-[-0.03em] text-deepsea">
                    {leader.name}
                  </h3>

                  <ul className="mt-5 space-y-3 flex-1">
                    {leader.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[14px] leading-6 text-deepsea/80"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Email link at bottom */}
                  {contactEmails[leader.name] && (
                    <a
                      href={`mailto:${contactEmails[leader.name]}`}
                      className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--color-blue)] transition hover:text-deepsea"
                    >
                      <Mail className="h-4 w-4" />
                      {contactEmails[leader.name]}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Approach ── */}
      <section className="bg-[#F7F8FC] py-24 border-b border-deepsea/5">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              eyebrow="Approach"
              title="No generic templates. No rip-and-replace assumptions."
              description="Audex adapts the operating model, workflow design, and intelligence layer to the structure of the enterprise network itself."
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-[2px] border border-deepsea/10 bg-white p-10 shadow-[0_4px_24px_rgba(6,11,52,0.06)]"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--color-blue)]">
                Team expertise
              </p>
              <p className="mt-4 font-display text-[26px] font-bold tracking-[-0.04em] text-deepsea leading-tight">
                20+ years of operator context before any algorithm is applied.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-deepsea/80">
                That depth shapes how diagnostics are framed, how interventions are
                prioritised, and how technology is made to work in real logistics
                environments.
              </p>
              <div className="mt-7">
                <Button to="/contact" variant="primary" size="md">
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Next Step"
        title="If the network feels harder to read than it should, start with a diagnostic."
        description="Audex will look at visibility gaps, freight controls, and the operational design choices that are impacting margin."
        primaryLabel="Book a Supply Chain Diagnostic"
        primaryTo="/contact"
        primaryVariant="primary"
        secondaryLabel="Explore the Platform"
        secondaryTo="/platform"
      />
    </>
  )
}
