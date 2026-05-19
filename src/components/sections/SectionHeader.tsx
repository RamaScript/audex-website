type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  const alignmentClassName = align === 'center' ? 'mx-auto text-center' : ''
  const eyebrowColor = light ? 'text-sky' : 'text-blue'
  const titleColor = light ? 'text-deepsea' : 'text-deepsea'
  const descriptionColor = light ? 'text-deepsea/72' : 'text-slate'

  return (
    <div className={`max-w-3xl ${alignmentClassName}`}>
      <p className={`text-xs font-bold uppercase tracking-[0.32em] ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-[3rem] ${titleColor}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 sm:text-lg ${descriptionColor}`}>
        {description}
      </p>
    </div>
  )
}
