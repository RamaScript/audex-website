import { CTASection } from '../components/sections/CTASection'
import { HeroSection } from '../components/sections/HeroSection'
import { IndustryCard } from '../components/sections/IndustryCard'
import { SectionHeader } from '../components/sections/SectionHeader'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { industrySolutions, optionalIndustries } from '../data/industries'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function IndustriesPage() {
  useDocumentMeta(
    'Industries | Audex Logistics Solutions by Sector',
    'See how Audex adapts freight audit, supply chain intelligence, and logistics orchestration to pharma, retail, manufacturing, e-commerce, and LSP environments.',
  )

  return (
    <div className="bg-white min-h-screen text-deepsea">
      <HeroSection
        eyebrow="Industries"
        title="Purpose-built for each industry."
        description="Not adapted from generic platforms. Each solution was built from operator experience inside that industry."
        primaryCta={{ label: 'Talk to a Specialist', to: '/contact' }}
        secondaryCta={{ label: 'See the Platform', to: '/platform' }}
        aside={
          <Card className="border-deepsea/10 bg-deepsea/5 text-deepsea shadow-none">
            <Badge tone="sky">Industry fit</Badge>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
              Each operating environment changes what control and visibility must
              look like.
            </p>
            <p className="mt-4 text-base leading-8 text-deepsea/72">
              Audex shapes workflows around regulated cold chains, store
              replenishment, production schedules, e-commerce returns, or LSP
              finance and compliance models as needed.
            </p>
          </Card>
        }
      />

      <section className="bg-white py-20 relative border-t border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Strategic Sectors"
            title="Built around the operational realities of the industries being served."
            description="The same platform core can support very different sectors, but the workflow priorities, data signals, and exception logic must be industry-aware."
           
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {industrySolutions.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 relative border-t border-deepsea/5">
        <Container className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Market Extensions"
              title="Additional sectors called out in the project context."
              description="These are listed as future-ready industry extensions in the source file and can be expanded into fuller solution pages later."
             
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {optionalIndustries.map((industry) => (
              <Card key={industry} className="h-full bg-deepsea/5 border-deepsea/10">
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-blue">
                  Optional extra industry
                </p>
                <h3 className="mt-5 font-display text-[24px] font-semibold tracking-[-0.03em] text-deepsea">
                  {industry}
                </h3>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Industry Expertise"
        title="Need a logistics system that respects how your industry actually operates?"
        description="Audex can scope a diagnostic or a specialist conversation around the operational model, compliance burden, and freight economics of your sector."
        primaryLabel="Talk to a Specialist"
        primaryTo="/contact"
        secondaryLabel="Request an Assessment"
        secondaryTo="/contact"
      />
    </div>
  )
}
