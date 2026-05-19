import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  tone?: 'blue' | 'manilla' | 'sky'
}

export function Badge({ children, tone = 'blue' }: BadgeProps) {
  const toneClassName =
    tone === 'manilla'
      ? 'bg-manilla/10 text-manilla'
      : tone === 'sky'
        ? 'bg-sky/10 text-sky'
        : 'bg-blue/10 text-blue'

  return (
    <span
      className={`inline-flex rounded-[2px] border border-deepsea/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${toneClassName}`}
    >
      {children}
    </span>
  )
}
