import {
  ClipboardCheck,
  Gauge,
  Network,
  Route,
  SearchCheck,
  Workflow,
} from 'lucide-react'

export const consultingServices = [
  {
    icon: Network,
    title: 'Supply Chain Consulting',
    description:
      'Expert diagnosis. Structured intervention. Permanent improvement.',
    bullets: [
      'Supply chain network design',
      'Process optimisation',
      'Technology selection and implementation',
      'Resilience and risk management',
      'Benchmarking and diagnostics',
    ],
    cta: 'Request a Supply Chain Diagnostic',
  },
  {
    icon: SearchCheck,
    title: 'Freight & Logistics Audit',
    description:
      'Forensic billing intelligence. Systematic recovery.',
    bullets: [
      'Freight bill validation',
      'SLA breach documentation',
      'Contract gap analysis',
      'Transporter performance profiling',
      'Recovery programme management',
    ],
    cta: 'Book a Freight Audit Assessment — Free ROI Estimate',
  },
]

export const consultingFlow = [
  { label: 'Weeks 1–2', title: 'Diagnostic', icon: ClipboardCheck },
  { label: 'Weeks 3–4', title: 'Findings', icon: Gauge },
  { label: 'Weeks 5–8', title: 'Intervention', icon: Workflow },
  { label: 'Ongoing', title: 'Review', icon: Route },
]

export const operationalOptimisation = [
  'Route optimisation',
  'Load consolidation',
  'Process automation',
  'KPI dashboards',
  'Cost leakage reduction',
  'Enterprise workflow improvement',
]
