import {
  Factory,
  Pill,
  ShoppingBag,
  ShoppingCart,
  Truck,
} from 'lucide-react'

export const industrySolutions = [
  {
    icon: Pill,
    title: 'Pharma & Nutraceuticals',
    description:
      'Cold-chain operations, regulatory discipline, and freight controls built around compliant movement.',
    bullets: [
      'Cold-chain SLA tracking',
      'Temperature excursion alerts',
      'Carrier-level compliance scoring',
      'Serialisation and batch traceability',
      'Regulatory-ready documentation',
      'Freight audit for pharma rate structures',
    ],
    cta: 'Talk to a Pharma Logistics Specialist',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Consumer Goods',
    description:
      'High-velocity inventory and store replenishment workflows that protect service without bleeding cost.',
    bullets: [
      'Multi-location inventory visibility',
      'Real-time stock intelligence',
      'Intelligent replenishment',
      'Freight audit for high-volume courier and surface freight',
      'POS integration',
      'Last-mile tracking and returns',
    ],
    cta: 'Request a Retail Logistics Assessment',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'Logistics execution aligned with production reality, vendor schedules, and enterprise ERP signals.',
    bullets: [
      'Inbound vendor tracking',
      'ASN management',
      'Production-aligned dispatch planning',
      'Spare parts logistics',
      'ERP integration with logistics events and costs',
    ],
    cta: 'Explore Manufacturing Logistics Solutions',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Speed-sensitive logistics systems that preserve unit economics under delivery and returns pressure.',
    bullets: [
      'Next-day delivery pressure',
      'Return logistics',
      'Real-time tracking',
      'Carrier selection',
      'Margin-sensitive logistics operations',
    ],
    cta: 'Explore E-Commerce Logistics Solutions',
  },
  {
    icon: Truck,
    title: 'Logistics Service Providers',
    description:
      'ERP-grade control for LSPs across finance, operations, SLA adherence, and client visibility.',
    bullets: [
      'Complete LSP ERP',
      'Finance, operations, compliance',
      'Slab-based billing',
      'Contract management',
      'Fleet utilisation',
      'SLA performance',
      'Client-facing portal',
      'Integration with Marga Darshak',
    ],
    cta: 'Talk to an LSP Solutions Specialist',
  },
]

export const optionalIndustries = ['Garments & Apparel', 'Automotive']
