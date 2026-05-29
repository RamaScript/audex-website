import { CalendarRange, MessageSquareText, MonitorPlay, SearchCheck } from 'lucide-react'
import { ContactForm } from '../components/sections/ContactForm'
import { HeroSection } from '../components/sections/HeroSection'
import { SectionHeader } from '../components/sections/SectionHeader'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const contactOptions = [
  {
    title: 'Book a Supply Chain Diagnostic — Free',
    description: 'Start with the economics, visibility gaps, and control issues.',
    icon: CalendarRange,
  },
  {
    title: 'Start a Freight Audit Assessment',
    description: 'Review invoice leakage, contract exposure, and recovery potential.',
    icon: SearchCheck,
  },
  {
    title: 'Request a Platform Demo',
    description: 'Walk through modular transport, warehousing, and intelligence workflows.',
    icon: MonitorPlay,
  },
  {
    title: 'Talk to a Specialist',
    description: 'Discuss a specific industry, logistics model, or transformation challenge.',
    icon: MessageSquareText,
  },
]

export function ContactPage() {
  useDocumentMeta(
    'Contact Audex | Begin with a Logistics Diagnostic',
    'Contact Audex for a supply chain diagnostic, freight audit assessment, platform demo, or specialist conversation about enterprise logistics control.',
  )

  return (
    <div className="bg-white min-h-screen text-deepsea">
      <HeroSection
        eyebrow="Contact"
        title="Let's Begin with a Diagnostic."
        description="Not a sales call. Not a product demo. A genuine diagnostic conversation about your logistics operations — where the costs are, where the control gaps exist, and what a realistic improvement programme looks like."
        primaryCta={{ label: 'Send a Diagnostic Request', href: '#contact-form' }}
        secondaryCta={{ label: 'Explore the Platform', to: '/platform' }}

        aside={
          <Card className="border-deepsea/10 bg-deepsea/5 text-deepsea shadow-none">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-blue">
              Contact details
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-deepsea/76 lining-nums">
              <p className="font-semibold text-deepsea">
                Audex LOGISTIC LABS PRIVATE LIMITED
              </p>
              <p>mitesh@audexglobal.com</p>
              <p>vishwesh_p@audexglobal.com</p>
              <p>askus@audexglobal.com</p>
              <p>+91 98843 00076 / +91 99400 12674</p>
              <p>www.audexglobal.com</p>
              <div className="space-y-1 pt-1">
                <p>Marketing office: The Executive Zone, Shakti towers, Spencer plaza, Chennai - 600002</p>
                <p>Development office: A6 3rd floor, PM towers, Chennai-600089</p>
              </div>
            </div>
          </Card>
        }
      />

      <section className="bg-white py-20 relative border-t border-deepsea/5">
        <Container>
          <SectionHeader
            eyebrow="Engagement Points"
            title="Choose the starting point that matches your current logistics pressure."
            description="Audex can begin with a free diagnostic, a freight audit assessment, a modular platform walkthrough, or a deeper specialist conversation."
           
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactOptions.map((option) => {
              const Icon = option.icon

              return (
                <Card key={option.title} className="h-full bg-deepsea/5 border-deepsea/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-blue/10 text-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-[24px] font-semibold tracking-[-0.03em] text-deepsea">
                    {option.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-deepsea/80">
                    {option.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 relative border-t border-deepsea/5">
        <Container className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Submit Diagnostic Request"
              title="Tell us where the network feels expensive, opaque, or hard to control."
              description="The form captures the basics we need to route the conversation correctly and store the submission in the Audex contact lead flow."
             
            />
          </div>
          <ContactForm sourcePage="/contact" />
        </Container>
      </section>
    </div>
  )
}
