import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  index: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({ index, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', className)}>
      <p className="font-mono text-xs text-[var(--text-muted)] mb-1">{index}</p>
      <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)]">
        {title}
      </h2>
      <div className="mt-3 w-10 h-[3px] bg-[var(--accent-dark)] rounded-full" />
      {subtitle && (
        <p className="mt-4 text-[var(--text-muted)] text-sm max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
