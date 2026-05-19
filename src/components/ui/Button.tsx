import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const baseClassName =
  'group inline-flex items-center justify-center gap-2 rounded-[2px] border font-bold tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue active:scale-[0.98]'

const variants = {
  primary:
    'border-blue bg-blue text-white shadow-[0_10px_30px_-10px_rgba(7,93,239,0.4)] hover:bg-[#0550d6] hover:border-[#0550d6] hover:shadow-[0_15px_40px_-10px_rgba(7,93,239,0.5)] hover:-translate-y-0.5',
  accent:
    'border-manilla bg-manilla text-deepsea shadow-[0_10px_30px_-10px_rgba(229,239,17,0.3)] hover:bg-yellow-300 hover:border-yellow-300 hover:shadow-[0_15px_40px_-10px_rgba(229,239,17,0.4)] hover:-translate-y-0.5',
  secondary:
    'border-deepsea/20 bg-white text-deepsea shadow-sm hover:border-blue hover:text-blue hover:shadow-md hover:-translate-y-0.5',
  ghost:
    'border-deepsea/15 bg-white text-deepsea shadow-sm hover:bg-deepsea/5 hover:border-deepsea/25 hover:-translate-y-0.5',
}

const sizes = {
  sm: 'h-10 px-5 text-[13px]',
  md: 'h-12 px-8 text-[15px]',
  lg: 'h-14 px-10 text-[16px]',
}


function classNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...buttonProps
}: ButtonProps) {
  const resolvedClassName = classNames(
    baseClassName,
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={resolvedClassName}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={resolvedClassName}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={resolvedClassName} {...buttonProps}>
      {children}
    </button>
  )
}
