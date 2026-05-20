export interface BlogArticle {
  id: string
  title: string
  category: string
  readTime: string
  summary: string
  content: string[]
}

export interface CaseStudy {
  id: string
  title: string
  clientProfile: string
  problem: string
  intervention: string
  resultSummary: string
  metrics: {
    value: string
    label: string
  }[]
}

export const insightCards: BlogArticle[] = [
  {
    id: 'freight-overcharges-drain-margins',
    title: 'The 3–8% Nobody Is Talking About: How Freight Overcharges Drain Enterprise Margins',
    category: 'Strategy & Cost Control',
    readTime: '8 min read',
    summary: 'Most freight billing errors are not disputes — they are unchallenged overcharges. Why the most systematic drain on logistics budgets is invisible by design, and what a structured freight audit programme actually recovers.',
    content: [
      'Freight bill auditing is one of the most neglected areas of enterprise cost control. While procurement teams spend months negotiating transporter contracts down to the paisa, the actual execution of those contracts on a day-to-day basis is rarely audited with the same level of discipline. Surcharge calculations, distance computations, and accessorial fees are often verified on a sampling basis or approved outright due to invoice volume pressure.',
      'This lack of scrutiny creates an invisible leak. Transporters do not intentionally overcharge, but their manual billing systems, combined with complex tariff structures, generate errors on 3% to 8% of all invoices. These discrepancies typically include double-billing of fuel surcharges, incorrect handling fees, and rates applied from expired rate sheets.',
      'To capture this lost capital, enterprises need a systematic, automated audit workflow. Instead of checking a random sample of 5% of invoices, every single freight bill must be programmatically matched against contract terms, active rate tables, and actual GPS tracking data. Only then can cost leakages be sealed permanently.'
    ]
  },
  {
    id: 'what-nlp-2022-means-for-cfos',
    title: "India's 14% Problem: Why the National Logistics Policy Matters to Every CFO",
    category: 'Logistics Policy',
    readTime: '6 min read',
    summary: "India's logistics cost at 14% of GDP is not just a macroeconomic statistic — it is a direct line into your company's P&L. A clear-eyed look at what NLP 2022 means for enterprise operations leaders and how to position your supply chain for the decade ahead.",
    content: [
      "For decades, Indian CFOs have treated logistics as a tactical expense—a cost of doing business that is inherently higher than in Western markets. With India's logistics cost sitting at 14% of GDP compared to the global average of 8%, the difference has long been attributed to poor road infrastructure and fragmented carrier markets. However, the true culprit is operational inefficiency.",
      "The National Logistics Policy (NLP) launched in 2022 aims to reduce this cost to single digits by promoting digital integration, unified portals (ULIP), and multimodal transport. For corporate finance leaders, this policy isn't just regulatory paperwork; it is a blueprint for restructuring the enterprise P&L.",
      "Aligning your supply chain with the NLP means moving away from manual coordinate-seeking and isolated warehousing. By adopting unified platforms that connect directly with national logistics databases and automating transport routing, CFOs can convert systemic macro-efficiency into direct margin recovery for their companies."
    ]
  },
  {
    id: '41-percent-freight-cost-reduction',
    title: 'Marga Darshak in Action: What 41% Freight Cost Reduction Actually Looks Like',
    category: 'Case Analysis',
    readTime: '10 min read',
    summary: 'A detailed breakdown of how one of India\'s largest fabric retailers reduced freight costs by 41.3% in a single month — the data, the methodology and what it took to get there.',
    content: [
      'When we talk about a 41% reduction in freight costs, it sounds like an unrealistic marketing claim. In reality, it is the result of applying precise operational levers to a highly fragmented transport network. In a recent deployment of Audex\'s Marga Darshak platform with a major fashion retailer, we saw exactly how these numbers compile.',
      'The retailer was operating with a decentralized transporter panel, where local warehouse managers made dispatch decisions based on convenience rather than cost-efficiency. Marga Darshak consolidated this process by integrating all dispatches under a single orchestration layer. The platform automated LSP selection based on real-time rate cards and performance history.',
      'By optimizing load consolidation (ensuring trucks did not run half-empty) and automatically auditing transport invoices against contract terms, the retailer eliminated ₹30.84 Lakh in cost leaks in a single month. This case proves that cost reduction isn\'t about paying transporters less; it is about utilizing capacity better.'
    ]
  },
  {
    id: 'why-ai-in-logistics-keeps-failing',
    title: 'Why AI in Logistics Keeps Failing: The Domain Problem Nobody Talks About',
    category: 'Technology & AI',
    readTime: '7 min read',
    summary: 'Every major logistics platform now claims AI capabilities. Most of them underdeliver. The reason is rarely technology — it is the absence of operator-grade domain expertise informing how the models are built and deployed.',
    content: [
      'Walk through any logistics technology conference, and every vendor will promise "AI-driven route optimization" or "predictive analytics". Yet, when these systems are deployed, they frequently fail to deliver the promised savings. The reason is rarely the underlying machine learning models; it is a fundamental lack of domain depth.',
      'A standard AI algorithm assumes perfect conditions: clean data, predictable traffic, and carriers who follow directions. But Indian logistics operates in a world of unexpected traffic blocks, local transporter unions, cash-on-delivery complexities, and highly variable highway conditions. An algorithm built without this operational context is useless.',
      'To build technology that actually works, developers must write code alongside practitioners who have spent decades managing fleets, warehouses, and customs clearances. Only when AI is informed by operator-grade domain expertise can it make decisions that survive contact with the real world.'
    ]
  },
  {
    id: 'cold-chain-pharma-logistics',
    title: 'Cold Chain or Cost Chain? The Hidden Trade-Off in Pharma Logistics',
    category: 'Pharma & Compliance',
    readTime: '9 min read',
    summary: 'Pharmaceutical enterprises often accept inflated freight costs as the price of compliance. The data shows a different path — one where cold-chain integrity and cost discipline are not in conflict.',
    content: [
      'Pharma supply chain managers operate under a strict mandate: protect product efficacy at all costs. Because of this regulatory pressure, temperature compliance often takes absolute precedence over cost control. Many logistics teams absorb inflated carrier rates and massive demurrage bills simply to ensure cold-chain integrity.',
      'However, temperature compliance and cost discipline do not have to be mutually exclusive. The key is visibility. When an enterprise relies on manual temperature checks at delivery points, they have no option but to pay premium rates to high-end carriers. By installing real-time IoT tracking, compliance becomes automated.',
      'With continuous temperature and location alerts, logistics teams can proactively manage temperature excursions, route around delays, and validate carrier compliance programmatically. This removes the premium pricing built on fear and replaces it with structured, data-driven cost control.'
    ]
  },
  {
    id: 'the-sla-trap-delivery-failures',
    title: 'The SLA Trap: Why Delivery Failures Are More Expensive Than You Think',
    category: 'Operations',
    readTime: '6 min read',
    summary: 'SLA breaches are not just a customer satisfaction problem — they are a compounding margin problem. The true cost of a missed delivery window, calculated across carrier relationships, client penalties and internal firefighting time.',
    content: [
      'SLA breaches are commonly tracked as a customer service metric. A delivery that arrives three hours late is recorded as a compliance failure, and the team moves on. However, the true cost of that late delivery is rarely calculated across its full operational tail.',
      'When a truck misses its delivery window at an enterprise warehouse, it doesn\'t just delay that shipment. It triggers a cascade of costs: warehouse labor sits idle, subsequent unloading schedules are disrupted, carrier detention fees accumulate, and the customer may impose direct financial penalties for stockouts.',
      'To escape this trap, companies must shift from reactive tracking to predictive alert systems. By using transit modeling and historical carrier performance data, logistics teams can identify potential SLA violations hours before they occur, allowing them to route around delays or notify customers proactively.'
    ]
  },
  {
    id: '3pl-to-4pl-shift-indian-enterprises',
    title: 'From 3PL to 4PL: What the Shift Actually Means for Indian Enterprises',
    category: 'Supply Chain Evolution',
    readTime: '8 min read',
    summary: 'The 4PL model is gaining traction in Indian logistics. But what does the transition from 3PL management to integrated 4PL orchestration actually require — in terms of data, process and technology readiness?',
    content: [
      'The Indian logistics landscape is moving fast from third-party logistics (3PL)—where companies outsource physical transport—to fourth-party logistics (4PL), where they outsource the entire management and orchestration of the supply chain. This shift is driven by the need for speed and cost efficiency.',
      'Transitioning to a 4PL model isn\'t just about hiring a new vendor; it is about centralizing data. Under a traditional 3PL system, each transporter maintains their own silo of tracking and billing data. A 4PL framework consolidates these silos into a single control tower, providing unified visibility.',
      'For enterprises, this change requires a technology infrastructure that can integrate with multiple external platforms. It demands real-time data pipelines and contract management systems that can coordinate dozens of carriers seamlessly, turning logistics from a fragmented operation into a competitive advantage.'
    ]
  },
  {
    id: 'warehouse-throughput-last-mile-connection',
    title: 'Warehouse Throughput and the Last-Mile Connection: Why You Cannot Fix One Without the Other',
    category: 'Operations & Systems',
    readTime: '7 min read',
    summary: 'Warehouse efficiency improvements frequently create last-mile bottlenecks — and vice versa. The systemic case for treating WMS and TMS as an integrated platform rather than independent tools.',
    content: [
      'In many corporate structures, warehouse management (WMS) and transportation management (TMS) are run as separate departments with their own KPIs. The warehouse focuses on picking speed, while the transport team focuses on freight rates. This division creates a massive bottleneck at the loading dock.',
      'A warehouse that optimizes its internal picking layout but has no visibility into incoming trucks will inevitably experience dock congestion. Conversely, a transport manager who schedules dispatches without knowing warehouse packing status will leave drivers waiting, leading to high detention costs.',
      'True efficiency is achieved when WMS and TMS are treated as a single, integrated system. By sharing data across warehousing and transport, companies can align picking schedules with truck arrival times, maximizing loading dock throughput and reducing vehicle turnaround times.'
    ]
  },
  {
    id: 'route-optimisation-indian-logistics-reality',
    title: 'Route Optimisation in Indian Logistics: The Reality Behind the Algorithm',
    category: 'Technology & Execution',
    readTime: '8 min read',
    summary: 'Theoretical route optimisation models often fail in Indian logistics conditions — because India\'s road network, traffic variability and carrier behaviour do not match the assumptions these models are built on. What actually works.',
    content: [
      'Most route optimization software is designed for Western road networks, where highways are standardized and traffic rules are predictable. When these same algorithms are deployed in Indian cities, they fail because they ignore the unique operational realities of local transportation.',
      'In India, factors like local vehicle weight restrictions, entry-time bans in metropolitan areas, narrow streets, and informal toll checkpoints have a massive impact on delivery times. A theoretical shortest-path algorithm will frequently route a heavy truck down a road it is legally or physically barred from entering.',
      'To be effective, route optimization must combine mathematical algorithms with deep local knowledge. This means integrating historical truck speeds, local regulatory constraints, and transporter routing habits into the planning engine to generate routes that drivers can actually execute.'
    ]
  },
  {
    id: 'd2c-boom-last-mile-logistics-rules',
    title: 'How India\'s D2C Boom Is Rewriting the Rules of Last-Mile Logistics',
    category: 'E-Commerce & Retail',
    readTime: '7 min read',
    summary: '500M+ online shoppers by 2026. Next-day delivery expectations. Frictionless returns. The structural changes the D2C economy is forcing on enterprise logistics operations — and the infrastructure required to meet them.',
    content: [
      'The rise of Direct-to-Consumer (D2C) brands in India has transformed consumer expectations. With buyers now demanding next-day or same-day deliveries, the pressure on last-mile logistics has reached unprecedented levels. What was once a slow, bulk-distribution model is now a high-velocity, single-parcel operation.',
      'This change has introduced two major challenges: last-mile cost control and reverse logistics. Delivering thousands of individual packages is far more expensive than shipping full truckloads, and D2C brands must absorb return rates that frequently exceed 25%.',
      'To maintain margins, D2C logistics must be fully digitized. Brands need automated courier allocation engines that select the cheapest, most reliable carrier for each zip code, combined with automated return verification systems that track returned inventory from pickup back to the warehouse shelf.'
    ]
  },
  {
    id: 'internal-auditors-guide-to-freight-billing',
    title: 'The Internal Auditor\'s Guide to Freight Billing: What to Look For and Where to Find It',
    category: 'Finance & Audit',
    readTime: '9 min read',
    summary: 'A practical framework for finance and audit teams who want to take systematic control of freight spend — without becoming logistics experts. The key data points, the most common discrepancy types and the technology that makes systematic audit possible.',
    content: [
      'Internal audit teams are tasked with verifying enterprise spend, but they are rarely logistics experts. When faced with a stack of freight invoices containing complex tariff structures, variable fuel surcharges, and handwritten transporter bills, audits are often superficial.',
      'A thorough freight audit requires cross-referencing three distinct data sources: the transporter contract, the dispatch entry in the ERP, and the actual delivery proof (POD). The most common discrepancy areas are unauthorized handling charges and fuel surcharges that do not match the agreed index.',
      'By setting up a structured checklist that automates this validation, auditors can identify patterns of billing leakage. Rather than just catching individual errors, a programmatic audit exposes systemic contract violations, enabling companies to renegotiate cleaner transporter terms.'
    ]
  },
  {
    id: 'orchestration-vs-management-why-it-matters',
    title: 'Supply Chain Orchestration vs. Supply Chain Management: Why the Distinction Matters',
    category: 'Strategy & Control',
    readTime: '6 min read',
    summary: 'Enterprise supply chains are increasingly too complex to manage — they need to be orchestrated. The conceptual and practical difference, and what it means for how enterprises invest in logistics technology.',
    content: [
      'Many executives use the terms "supply chain management" and "supply chain orchestration" interchangeably. However, they represent two fundamentally different approaches to logistics. Management is about tracking events as they happen; orchestration is about directing them dynamically.',
      'A company that manages its supply chain uses dashboards to see that a shipment is late. A company that orchestrates its supply chain uses automated workflows to detect that a delay is imminent, select a backup carrier, adjust the warehouse schedule, and notify the customer—all before the delay occurs.',
      'Orchestration is the goal for modern enterprises. It turns data from a passive historical record into an active control layer. By connecting all systems—WMS, TMS, and ERP—into a single orchestrator, companies can respond to supply chain disruptions in real-time, securing their margins.'
    ]
  }
]

export const caseStudyCards: CaseStudy[] = [
  {
    id: 'branded-fashion-retailer-cost-reduction',
    title: 'Case Study: Marga Darshak in Production — 41.3% Freight Cost Reduction',
    clientProfile: 'A leading branded fashion and fabric retailer in India with multiple warehouse sites and nationwide retail distribution.',
    problem: 'Inflated freight costs and lack of visibility into shipping rate discrepancies. Dispatch operations were handled manually and decentralized, leading to cost leakages and inefficient carrier selection.',
    intervention: 'Audex implemented Marga Darshak to optimize carrier selection, enforce contract rates, automate invoice audits, and optimize truck fill rates (Levers 2 & 4).',
    resultSummary: 'Annual projected savings with Lever 2 alone is ₹3.70 Crore. Full platform activation (all levers) is projected to deliver significantly higher savings.',
    metrics: [
      { value: '₹74.63L', label: 'Freight cost prior customer selection' },
      { value: '₹43.78L', label: 'Marga Darshak recommended cost' },
      { value: '₹30.84L', label: 'Gross monthly savings' },
      { value: '41.3%', label: 'Cost reduction on measured freight' }
    ]
  },
  {
    id: 'fortune-500-fmcg-transport-reduction',
    title: 'Case Study: Fortune-500 FMCG MNC — 33% Daily Transport Cost Reduction',
    clientProfile: 'A Fortune-500 Health & Wellness multinational operating 3 manufacturing units in India, producing 6 tonnes of soap, shampoo and baby oil daily for pan-India distribution.',
    problem: 'Daily dispatch required three 9-tonne trucks at ₹30,000 per truck — a fixed daily logistics cost of ₹90,000 for outbound freight. Load building was manual, with no systematic mechanism to determine whether the combined daily production volume could be consolidated into fewer vehicles. Empty truck space was a daily cost that no one was measuring.',
    intervention: 'Marga Darshak\'s LC3 (Load Consolidation and Clubbing) engine was piloted. The platform analysed the daily production volume, consignment dimensions, destination routing and available vehicle types — and recommended an optimal load plan.',
    resultSummary: 'This result was achieved with Levers 1 and 4 only partially activated. Full deployment of Marga Darshak\'s complete optimisation suite is projected to deliver further measurable improvements across carrier selection, route optimisation and freight billing accuracy.',
    metrics: [
      { value: '3 Trucks', label: 'Before: Daily requirement at ₹30K each' },
      { value: '2 Trucks', label: 'After: LC3-optimised load plan' },
      { value: '₹30,000', label: 'Daily direct cost eliminated' },
      { value: '33%', label: 'Immediate transport cost reduction' }
    ]
  },
  {
    id: 'fmcg-supply-chain-redesign',
    title: 'Case Study: FMCG Company — $2M+ Annual Savings',
    clientProfile: 'A large FMCG enterprise operating a complex national distribution network with significant primary freight and warehousing costs.',
    problem: 'Imbalanced combination of warehousing and primary freight costs — with the company over-investing in warehouse capacity to compensate for inefficient freight routing.',
    intervention: 'Audex conducted a comprehensive supply chain assessment covering warehousing footprint, LSP mix, transportation routes and freight cost structure. Audex redesigned the network — right-sizing warehouse locations, rationalising the LSP panel and restructuring primary freight routes to reduce reliance on expensive express lanes.',
    resultSummary: 'This engagement demonstrated the compounding impact of addressing warehousing and transportation costs as an integrated system — rather than optimising each function in isolation.',
    metrics: [
      { value: '$2M+', label: 'Annual client savings delivered' },
      { value: 'Combined', label: 'Warehousing + TMS strategy redesign' },
      { value: 'Ongoing', label: 'Retained advisory and monitoring' }
    ]
  }
]
