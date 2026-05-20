import { ArrowRight } from 'lucide-react'
import { CTASection } from '../components/sections/CTASection'
import { FeatureCard } from '../components/sections/FeatureCard'
import { HeroSection } from '../components/sections/HeroSection'
import { SectionHeader } from '../components/sections/SectionHeader'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import {
  consultingFlow,
  consultingServices,
  operationalOptimisation,
} from '../data/consulting'
import { homeMetrics } from '../data/home'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { MetricsBar } from '../components/sections/MetricsBar'

export function ConsultingPage() {
  useDocumentMeta(
    'Consulting Services | Audex Operator-Led Supply Chain Advisory',
    'Explore Audex supply chain consulting, freight and logistics audit, and operator-led optimisation engagements built around measurable enterprise outcomes.',
  )

  return (
    <div className="bg-white min-h-screen text-deepsea">
      <HeroSection
        eyebrow="Consulting Services"
        title="Operator-led advisory. Measurable outcomes."
        description="Every engagement starts with a diagnostic. No prescription without a diagnosis."
        primaryCta={{ label: 'Request a Supply Chain Diagnostic', to: '/contact', variant: 'primary' as any }}
        secondaryCta={{
          label: 'Book a Freight Audit Assessment',
          to: '/contact',
        }}
        aside={
          <Card className="border-deepsea/10 bg-deepsea/5 text-deepsea shadow-none">
            <Badge tone="sky">What changes</Badge>
            <div className="mt-5 space-y-4">
              <p className="text-3xl font-semibold tracking-[-0.04em]">
                Diagnose first. Then intervene with precision.
              </p>
              <p className="text-base leading-8 text-deepsea/80">
                Audex combines network design, operational control, and freight
                intelligence so the improvement plan is financially grounded from
                the start.
              </p>
            </div>
          </Card>
        }
      />

      <MetricsBar items={homeMetrics.slice(0, 3)} tone="dark" />

      <section className="bg-white py-20 relative border-t border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Advisory Focus"
            title="Consulting that starts with the logistics P&L, not generic frameworks."
            description="Audex supports enterprises through diagnosis, findings, intervention, and ongoing review with operator-grade execution detail."
           
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {consultingServices.map((service) => (
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 relative border-t border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Transformation Rhythm"
            title="Structured intervention, sequenced around evidence."
            description="The consulting rhythm stays disciplined so leadership can see what is being diagnosed, what is being changed, and how impact is reviewed."
           
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {consultingFlow.map((step) => {
              const Icon = step.icon

              return (
                <Card key={step.title} className="h-full bg-deepsea/5 border-deepsea/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-blue/10 text-blue">
                    <Icon className="h-5 w-5 text-blue" strokeWidth={2.5} />
                  </div>
                  <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.28em] text-blue">
                    {step.label}
                  </p>
                  <h3 className="mt-3 font-display text-[24px] font-semibold tracking-[-0.03em] text-deepsea">
                    {step.title}
                  </h3>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-deepsea relative border-y border-deepsea/5">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Performance Control"
              title="Permanent improvements come from system-level operational change."
              description="Interventions are designed to remove recurring waste, strengthen control, and improve day-to-day logistics decisions."
             
            />
          </div>
          <Card className="border-deepsea/10 bg-deepsea/5 text-deepsea shadow-none">
            <ul className="grid gap-4 sm:grid-cols-2">
              {operationalOptimisation.map((item) => (
                <li key={item} className="flex gap-3 rounded-[1.25rem] border border-deepsea/10 bg-deepsea/5 p-4">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <CTASection
        eyebrow="Engage Operator Depth"
        title="Start with the part of the network that feels most expensive or least visible."
        description="Audex can begin with a supply chain diagnostic, a freight audit assessment, or a more focused consulting conversation."
        primaryLabel="Request a Supply Chain Diagnostic"
        primaryTo="/contact"
        primaryVariant="primary"
        secondaryLabel="Talk to a Specialist"
        secondaryTo="/contact"
      />
    </div>
  )
}
