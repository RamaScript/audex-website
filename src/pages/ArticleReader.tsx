import { Link, useParams, useLocation } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, FileText, CheckCircle2 } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { insightCards, caseStudyCards } from '../data/intelligence'
import type { BlogArticle, CaseStudy } from '../data/intelligence'

export function ArticleReaderPage() {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const isInsight = location.pathname.includes('/insights')

  let insight: BlogArticle | undefined
  let caseStudy: CaseStudy | undefined

  if (isInsight) {
    insight = insightCards.find((item) => item.id === id)
  } else {
    caseStudy = caseStudyCards.find((item) => item.id === id)
  }

  // Set meta tags based on the active article
  const metaTitle = insight
    ? `${insight.title} | Audex Insights`
    : caseStudy
      ? `${caseStudy.title} | Audex Case Study`
      : 'Resource Not Found | Audex'

  const metaDesc = insight
    ? insight.summary
    : caseStudy
      ? caseStudy.problem.substring(0, 150) + '...'
      : 'The requested resource could not be found.'

  useDocumentMeta(metaTitle, metaDesc)

  if (isInsight && !insight) {
    return <NotFoundResource type="Blog post" />
  }

  if (!isInsight && !caseStudy) {
    return <NotFoundResource type="Case study" />
  }

  return (
    <div className="bg-white min-h-screen text-deepsea pt-28 pb-20">
      <Container>
        {/* Back Navigation */}
        <div className="mb-10">
          <Link
            to="/intelligence-center"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-blue hover:text-deepsea transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            Back to Intelligence Center
          </Link>
        </div>

        {isInsight && insight ? (
          /* BLOG INSIGHT RENDERER */
          <article className="max-w-3xl mx-auto">
            {/* Header metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge tone="sky">{insight.category}</Badge>
              <div className="flex items-center gap-1.5 text-xs text-deepsea/50 font-mono">
                <Clock size={13} />
                <span>{insight.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-deepsea/50 font-mono">
                <Calendar size={13} />
                <span>May 2026</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-[32px] sm:text-[40px] md:text-[48px] font-semibold tracking-[-0.04em] text-deepsea leading-[1.1] mb-8">
              {insight.title}
            </h1>

            {/* Author / Brand line */}
            <div className="flex items-center gap-3 border-y border-deepsea/8 py-4 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-deepsea text-white font-mono text-xs font-bold">
                AD
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-deepsea">Audex Intelligence Team</span>
                <span className="text-[10px] text-deepsea/45 font-mono uppercase tracking-wider">Supply Chain & Operations Group</span>
              </div>
            </div>

            {/* Summary Block */}
            <p className="font-display text-[18px] sm:text-[20px] leading-relaxed text-blue italic border-l-2 border-blue pl-6 mb-8 py-1">
              {insight.summary}
            </p>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-[15px] leading-8 text-deepsea/85 font-sans">
              {insight.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Closing Note */}
            <div className="mt-12 p-6 bg-deepsea/[0.02] border border-deepsea/5 rounded-[3px] text-left">
              <h4 className="font-display text-[16px] font-bold text-deepsea mb-2">
                Operational Perspective
              </h4>
              <p className="text-[13px] leading-relaxed text-deepsea/70">
                At Audex, we believe cost-discipline and technological agility go hand-in-hand. This analysis represents our operator-first mindset—identifying leakages, standardizing operations, and engineering margin immunities.
              </p>
            </div>
          </article>
        ) : (
          /* CASE STUDY RENDERER */
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge tone="sky">Operational Case Study</Badge>
              <div className="flex items-center gap-1.5 text-xs text-deepsea/50 font-mono">
                <FileText size={13} />
                <span>Verified Client Data</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-[32px] sm:text-[40px] md:text-[44px] font-semibold tracking-[-0.04em] text-deepsea leading-[1.1] mb-10 max-w-4xl">
              {caseStudy?.title}
            </h1>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-deepsea/10 border border-deepsea/10 rounded-[3px] overflow-hidden mb-12 shadow-sm">
              {caseStudy?.metrics.map((m, i) => (
                <div key={i} className="bg-deepsea/5 p-6 flex flex-col justify-center text-center">
                  <span className="font-display text-[26px] sm:text-[32px] font-bold text-blue tracking-tight leading-none mb-2">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-deepsea/70 font-mono leading-tight">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Case Study Details Grid */}
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {/* Left Column: Client Profile & The Problem */}
              <div className="md:col-span-1 space-y-8">
                <div className="bg-deepsea/[0.02] border border-deepsea/6 p-6 rounded-[3px]">
                  <h3 className="font-display text-[15px] font-bold text-deepsea uppercase tracking-wider border-b border-deepsea/10 pb-3 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue" />
                    Client Profile
                  </h3>
                  <p className="text-[13px] leading-relaxed text-deepsea/80">
                    {caseStudy?.clientProfile}
                  </p>
                </div>

                <div className="bg-deepsea/[0.02] border border-deepsea/6 p-6 rounded-[3px]">
                  <h3 className="font-display text-[15px] font-bold text-deepsea uppercase tracking-wider border-b border-deepsea/10 pb-3 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue" />
                    The Challenge
                  </h3>
                  <p className="text-[13px] leading-relaxed text-deepsea/80">
                    {caseStudy?.problem}
                  </p>
                </div>
              </div>

              {/* Right Column: The Intervention & The Outcomes */}
              <div className="md:col-span-2 space-y-8 bg-deepsea/[0.02] border border-deepsea/6 p-8 rounded-[3px]">
                <div>
                  <h3 className="font-display text-[18px] font-bold text-deepsea border-b border-deepsea/10 pb-3 mb-4">
                    The Audex Intervention
                  </h3>
                  <p className="text-[14px] leading-relaxed text-deepsea/85 whitespace-pre-line">
                    {caseStudy?.intervention}
                  </p>
                </div>

                <div className="border-t border-deepsea/10 pt-6">
                  <h3 className="font-display text-[18px] font-bold text-deepsea mb-4">
                    Result Analysis & Scaling Levers
                  </h3>
                  <p className="text-[14px] leading-relaxed text-deepsea/85">
                    {caseStudy?.resultSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Bar */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="border-blue/15 bg-gradient-to-br from-deepsea to-[#0a1824] text-white p-8 md:p-12 relative overflow-hidden text-left shadow-lg">
            {/* Background elements */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[radial-gradient(circle_at_bottom_right,rgba(0,102,204,0.15),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="font-mono text-[9px] tracking-[0.2em] text-sky uppercase font-semibold">
                Network Optimization
              </span>
              <h2 className="mt-4 font-display text-[26px] md:text-[32px] font-light tracking-tight leading-tight">
                Your Logistics is Costing You More Than You Know.
              </h2>
              <p className="mt-4 text-[13px] leading-relaxed text-white/70">
                Let's run a structured diagnostic on your network. We map your current logistics, identify the most likely cost leakage points, and provide a realistic estimate of what a freight audit or TMS orchestration program will recover.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact">Book Diagnostic</Button>
                <Button to="/contact" variant="ghost" className="border-white/20 text-blue hover:bg-white">
                  Get Free ROI Estimate
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  )
}

function NotFoundResource({ type }: { type: string }) {
  return (
    <div className="pt-32 pb-24 text-center min-h-[60vh] bg-white flex items-center justify-center">
      <Container>
        <h2 className="text-2xl font-bold mb-4">{type} Not Found</h2>
        <p className="text-deepsea/60 mb-6">The resource you requested could not be located in the current workspace.</p>
        <Button to="/intelligence-center">Back to Resources</Button>
      </Container>
    </div>
  )
}
