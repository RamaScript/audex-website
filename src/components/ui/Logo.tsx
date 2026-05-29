import { useState } from 'react'

type LogoProps = {
  variant?: 'light' | 'dark' | 'vertical'
}

const sources = {
  light: [
    `${import.meta.env.BASE_URL}media/logos/horizontal-format.png`,
    `${import.meta.env.BASE_URL}media/logos/main_logo.png`,
  ],
  dark: [
    `${import.meta.env.BASE_URL}media/logos/blue_color_logo.png`,
    `${import.meta.env.BASE_URL}media/logos/black_color_logo.png`,
  ],
  vertical: [
    `${import.meta.env.BASE_URL}media/logos/vertical_format.png`,
  ],
}

export function Logo({ variant = 'dark' }: LogoProps) {
  const [sourceIndex, setSourceIndex] = useState(0)
  const source = sources[variant][sourceIndex]

  return (
    <div className="flex items-center gap-2 transition-opacity hover:opacity-90">
      {source ? (
        <img
          src={source}
          alt="Audex"
          className={
            variant === 'vertical'
              ? 'h-16 w-auto object-contain'
              : 'h-9 w-auto min-w-[32px] object-contain'
          }
          onError={() => {
            setSourceIndex((current) => current + 1)
          }}
        />
      ) : null}
      {(!source || sourceIndex > 0) && variant !== 'vertical' ? (
        <span
          className={`font-[var(--font-display)] text-xl font-light tracking-[0.2em] ${
            variant === 'light' ? 'text-white' : 'text-[var(--color-navy)]'
          }`}
        >
          Audex
        </span>
      ) : null}
    </div>
  )
}

