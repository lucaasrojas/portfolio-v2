import SectionHeader from '@/components/ui/SectionHeader'
import { techStack } from '@/data/portfolio'

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-[var(--bg-surface)]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader index="01" title="Tech Stack" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:border-[var(--accent-dark)] hover:shadow-sm transition-all cursor-default"
            >
              <span className="text-2xl">{tech.icon}</span>
              <p className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors leading-snug">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
