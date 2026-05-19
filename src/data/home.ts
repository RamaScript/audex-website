import {
  Cpu,
  Database,
  Layers,
  Navigation,
  ShieldCheck,
  Zap,
  BadgeIndianRupee,
  ChartNoAxesCombined,
  Shield,
  Activity,
} from 'lucide-react'

export const homeMetrics = [
  {
    value: '3–8%',
    label: 'Freight spend recovered per engagement',
    icon: BadgeIndianRupee,
  },
  {
    value: '41%+',
    label: 'Logistics cost reduction, real client data',
    icon: ChartNoAxesCombined,
  },
  {
    value: '94%',
    label: 'Shipment ETA accuracy',
    icon: Activity,
  },
  {
    value: '20+ Yrs',
    label: 'Operator depth before any algorithm',
    icon: Shield,
  },
]

export const homeIntelligenceModules = [
  {
    title: 'Transport Management',
    description: 'Optimize routing, carrier selection, and execution across complex multi-modal networks.',
    impact: '',
    icon: Navigation,
  },
  {
    title: 'Warehouse Management',
    description: 'Intelligent inventory positioning, labor optimization, and automated facility orchestration.',
    impact: '',
    icon: Database,
  },
  {
    title: 'Freight Intelligence',
    description: 'Predictive capacity modeling, dynamic pricing analytics, and global market visibility.',
    impact: '',
    icon: ShieldCheck,
  },
  {
    title: 'Analytics & Visibility',
    description: 'Real-time control tower capabilities, exception management, and deep operational insights.',
    impact: '',
    icon: Zap,
  },
]

export const architectureSteps = [
  {
    label: 'Data Ingestion Layer',
    description: 'Real-time API integrations with ERPs, TMS, and carrier networks.',
    icon: Database,
  },
  {
    label: 'Intelligence Engine',
    description: 'Machine learning models for predictive routing and capacity optimization.',
    icon: Cpu,
  },
  {
    label: 'Control Tower UI',
    description: 'Autonomous execution and strategic visibility.',
    icon: Layers,
  },
]

export const performanceMetrics = [
  { label: 'Freight Optimization', value: '', trend: 'up' },
  { label: 'Cost Reduction Tracking', value: '', trend: 'up' },
]

export const heroStats = [
  { value: '20+', label: 'Years Experience' },
  { value: '41%', label: 'Cost Reduction' },
  { value: '94%', label: 'ETA Accuracy' },
]
