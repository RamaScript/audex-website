import {
  BrainCircuit,
  ChartColumnIncreasing,
  ClipboardList,
  Database,
  PackageCheck,
  ShieldPlus,
  Truck,
} from 'lucide-react'

export const platformModules = [
  {
    icon: Truck,
    title: 'Marga Darshak — TMS',
    description:
      "Audex's flagship Transportation Management System for dispatch decisions, truck fill, freight billing, and SLA control.",
    bullets: [
      'Intelligent LSP Selection',
      'Load Consolidation & Truck Fill Optimisation',
      'Automated eWaybill Generation',
      'Real-Time SLA Tracking',
      'Automated Freight Billing',
      'Multi-LSP Management',
      'ERP Integration',
      'Claim Settlement & Demurrage Automation',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Warehouse Management System',
    description:
      'Operational control across receiving, put-away, picking, dispatch, replenishment, and multi-location execution.',
    bullets: [
      'Gate entry and goods inward',
      'Put-away and BIN management',
      'Picking, packing, dispatch',
      'Multi-client, multi-location architecture',
      'Predictive replenishment',
      'Integration with Marga Darshak',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Freight Audit Platform',
    description:
      'Continuous invoice validation and recovery workflows that turn billing leakage into measurable savings.',
    bullets: [
      '3–8% annual freight spend recovered',
      '90 days typical time to first recovery',
      '100% invoice coverage',
    ],
  },
  {
    icon: Database,
    title: 'ERP for Logistics Service Providers',
    description:
      'Enterprise workflow control for LSP operations, finance, compliance, and customer-facing execution.',
    bullets: [
      'Contract and slab-based billing management',
      'Operations and compliance control',
      'Fleet utilisation visibility',
      'Client-facing portals',
    ],
  },
  {
    icon: ShieldPlus,
    title: 'POD & Last-Mile',
    description:
      'Proof-of-delivery workflows and last-mile visibility aligned to customer service expectations.',
    bullets: [
      'Delivery confirmation tracking',
      'Exception management',
      'Document visibility',
      'Last-mile status control',
    ],
  },
  {
    icon: ChartColumnIncreasing,
    title: 'Analytics & Visibility',
    description:
      'Dashboards and reporting layers that help leadership and operations teams read the same network reality.',
    bullets: [
      'Executive dashboards',
      'Operational dashboards',
      'Historical analytics',
      'Custom KPI reports',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Audex Labs Intelligence Layer',
    description:
      'A modular intelligence layer that becomes more powerful with every connected workflow and dataset.',
    bullets: [
      'Predictive ETA — 94% accuracy',
      'Dynamic Freight Pricing',
      'Autonomous Routing',
      'Document Intelligence',
      'Cargo Vision',
      'Marga Co-Pilot',
    ],
  },
]

export const platformSavings = [
  '₹74.63L freight cost with customer-selected LSP',
  '₹43.78L freight cost with Marga Darshak recommendation',
  '₹30.84L savings in a single month',
  '41.3% total freight cost reduction',
  '₹3.70 Cr annual projected savings',
  '33% daily logistics cost saving in another FMCG example',
]
export const platformStats = [
  {
    value: '41%+',
    label: 'Freight cost reduction',
  },
  {
    value: '94%',
    label: 'Predictive ETA accuracy',
  },
  {
    value: '₹3.7Cr',
    label: 'Annual projected savings',
  },
]
