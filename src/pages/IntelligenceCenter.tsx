import { ArrowRight, BookOpenText, FileBarChart2 } from 'lucide-react'
import { CTASection } from '../components/sections/CTASection'
import { HeroSection } from '../components/sections/HeroSection'
import { SectionHeader } from '../components/sections/SectionHeader'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { caseStudyCards, insightCards } from '../data/intelligence'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function IntelligenceCenterPage() {
  useDocumentMeta(
    'Intelligence Center | Audex Insights and Case Studies',
    'Read Audex thinking on supply chain strategy, freight audit, logistics technology, and enterprise cost control through static insight and case study cards.',
  )

  return (
    <div className="bg-white min-h-screen text-deepsea">
      <HeroSection
        eyebrow="Intelligence Center"
        title="Operator-grade thinking."
        description="Analysis and perspective from the Audex team — on supply chain strategy, logistics technology and the operational decisions that shape enterprise margins."
        primaryCta={{ label: 'Talk to Audex', to: '/contact' }}
        secondaryCta={{ label: 'Explore the Platform', to: '/platform' }}
        aside={
          <Card className="border-deepsea/10 bg-deepsea/5 text-deepsea shadow-none">
            <Badge tone="sky">Initial launch</Badge>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
              Static insight and case-study cards first. CMS later if needed.
            </p>
            <p className="mt-4 text-[14px] leading-8 text-deepsea/80">
              The first release focuses on strong editorial presentation without
              adding a content backend the project did not ask for.
            </p>
          </Card>
        }
      />

      <section className="bg-white py-20 relative border-t border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Strategy & Perspective"
            title="Supply chain intelligence framed around business consequences."
            description="The content themes come directly from the supplied Audex brief and are presented as launch-ready editorial cards."
           
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insightCards.map((item) => (
              <Card key={item} className="h-full bg-deepsea/5 border-deepsea/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-blue/10 text-blue">
                  <BookOpenText className="h-5 w-5 text-blue" strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 font-display text-[24px] font-semibold tracking-[-0.03em] text-deepsea">
                  {item}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-deepsea/80">
                  Operator-grade analysis on logistics cost reduction, freight
                  billing control, technology execution, and enterprise margin
                  implications.
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-blue">
                  Read preview
                  <ArrowRight className="h-4 w-4" />
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 relative border-t border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Operational Evidence"
            title="Operational outcomes tied back to measurable logistics economics."
            description="These launch cards stay aligned to the case-study examples supplied in the project context without fabricating extra details."
           
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudyCards.map((item) => (
              <Card key={item} className="h-full bg-deepsea/5 border-deepsea/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-blue/10 text-blue">
                  <FileBarChart2 className="h-5 w-5 text-blue" strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 font-display text-[24px] font-semibold tracking-[-0.03em] text-deepsea">
                  {item}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-deepsea/80">
                  Presented as a static proof-point card for launch, ready to be
                  expanded into a fuller editorial case study later.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Operational Logic"
        title="When the ideas look familiar but the operating reality still feels stuck, bring the network into diagnosis."
        description="Audex can connect thought leadership, case-study style evidence, and an actual improvement roadmap in one conversation."
        primaryLabel="Talk to Audex"
        primaryTo="/contact"
        secondaryLabel="Book a Diagnostic"
        secondaryTo="/contact"
      />
    </div>
  )
}
