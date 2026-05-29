import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, BarChart3 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function Counter({ to, suffix = '%', duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    startTimeRef.current = null
    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * to))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }
    frameRef.current = requestAnimationFrame(step)
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [to, duration])

  return (
    <span>
      {display}{suffix}
    </span>
  )
}

const kpis = [
  {
    icon: DollarSign,
    value: 41,
    suffix: '%',
    label: 'Logistics Cost Reduction',
    detail: 'Real client data, avg. across engagements',
    barColor: 'bg-blue',
    barWidth: '82%',
    trend: '+14% vs. industry baseline',
  },
  {
    icon: Clock,
    value: 94,
    suffix: '%',
    label: 'Shipment ETA Accuracy',
    detail: 'Predictive arrival precision across modes',
    barColor: 'bg-blue',
    barWidth: '94%',
    trend: '2× industry average accuracy',
  },
  {
    icon: TrendingUp,
    value: 8,
    suffix: '%',
    label: 'Freight Spend Recovered',
    detail: 'Per engagement, identifies hidden overspend',
    barColor: 'bg-blue',
    barWidth: '60%',
    trend: 'Max per engagement cycle',
  },
  {
    icon: BarChart3,
    value: 3,
    suffix: 'x',
    label: 'ROI on Audex Deployment',
    detail: 'Measured within first 6–12 months',
    barColor: 'bg-blue',
    barWidth: '75%',
    trend: 'Conservative estimate, ops data',
  },
]

export function PerformanceCharts() {
  return (
    <div className="grid gap-5 md:grid-cols-2 max-w-5xl mx-auto">
      {kpis.map((kpi, i) => {
        const Icon = kpi.icon
        return (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-[2px] border border-deepsea/8 bg-white p-7 hover:border-blue/20 hover:shadow-[0_12px_40px_rgba(7,93,239,0.07)] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[2px] bg-deepsea/5 border border-deepsea/8 text-blue group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-all duration-300">
                <Icon size={18} />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-right"
              >
                <span className="font-display text-[32px] font-bold tracking-tight text-deepsea">
                  <Counter to={kpi.value} suffix={kpi.suffix} />
                </span>
              </motion.div>
            </div>

            {/* Label */}
            <h3 className="font-display text-[14px] font-semibold text-deepsea mb-1">
              {kpi.label}
            </h3>
            <p className="text-[12px] text-deepsea/75 mb-5">{kpi.detail}</p>

            {/* Progress Bar */}
            <div className="h-1.5 w-full rounded-full bg-deepsea/6 overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: kpi.barWidth }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                className={`h-full ${kpi.barColor} rounded-full`}
              />
            </div>

            {/* Trend */}
            <p className="flex items-center gap-1 text-[11px] font-mono text-deepsea/65 tracking-wide">
              <TrendingUp size={10} className="text-blue/60" />
              {kpi.trend}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}
