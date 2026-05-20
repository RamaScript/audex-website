import React from 'react'
import { motion } from 'framer-motion'

export function MapVisualization() {
  // Simple representation of major global logistics nodes
  const nodes = [
    { x: '25%', y: '35%', label: 'Europe' },
    { x: '75%', y: '40%', label: 'Asia' },
    { x: '65%', y: '65%', label: 'India' },
    { x: '20%', y: '70%', label: 'Americas' },
    { x: '85%', y: '75%', label: 'Oceania' },
  ]

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-deepsea/5 bg-white/[0.02]">
      {/* Dot Matrix Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #2e6bff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Nodes and Connections */}
      <svg className="absolute inset-0 h-full w-full">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            {/* Simple connection lines to center (India) */}
            {node.label !== 'India' && (
              <motion.line
                x1="65%"
                y1="65%"
                x2={node.x}
                y2={node.y}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            )}
          </React.Fragment>
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2e6bff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#2e6bff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center gap-2"
          style={{ left: node.x, top: node.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="relative">
            <div className="h-2 w-2 rounded-full bg-blue" />
            <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-blue/30" />
          </div>
          <span className="font-mono text-[10px] tracking-widest text-deepsea/65 uppercase">
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* Hero Overlay Info */}
      <div className="absolute bottom-6 left-6 font-mono">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-blue">
          <div className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse" />
          SYSTEM_ONLINE
        </div>
        <div className="mt-1 text-[10px] text-deepsea/55 tracking-widest">
          LATENCY: 42MS // NODES: 8,241
        </div>
      </div>
    </div>
  )
}
