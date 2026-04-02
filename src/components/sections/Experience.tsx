import SectionHeader from '@/components/ui/SectionHeader'
import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader index="02" title="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)] hidden md:block" />

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-10 relative group">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-3 w-2 h-2 rounded-full -translate-x-[3.5px] border-2 border-[var(--accent-dark)] bg-[var(--bg)] group-hover:bg-[var(--accent)] transition-colors" />

                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-7 hover:border-[var(--border-dark)] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                          {job.company}
                        </h3>
                        {job.current && (
                          <span className="font-mono text-[10px] bg-[var(--accent)] text-[var(--text-primary)] px-2 py-0.5 rounded-full font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-sm text-[var(--text-muted)] mt-0.5">
                        {job.role}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                      {job.period}
                    </p>
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)] px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
