import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-[2px] border border-deepsea/5 bg-deepsea/[0.02] p-8 transition-all duration-300 hover:border-blue/20 hover:bg-deepsea/[0.04] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

