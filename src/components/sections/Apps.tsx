import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { apps } from '@/data/portfolio';
import type { AppStatus } from '@/types';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const statusStyles: Record<
  AppStatus,
  { label: string; className: string; dot: string }
> = {
  live: {
    label: 'Live',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dot: 'bg-emerald-500 animate-pulse',
  },
  wip: {
    label: 'WIP',
    className: 'bg-amber-50 text-amber-700 border-amber-200',
    dot: 'bg-amber-400',
  },
  idea: {
    label: 'Idea',
    className:
      'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border)]',
    dot: 'bg-[var(--text-muted)]',
  },
};

export default function Apps() {
  return (
    <section id="apps" className="py-24 bg-[var(--bg-surface)]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          index="03"
          title="Apps"
          subtitle="Herramientas, experimentos y proyectos personales que construí por curiosidad o necesidad."
        />

        {apps.length === 0 ? (
          <div className="border-2 border-dashed border-[var(--border-dark)] rounded-2xl p-16 text-center">
            <p className="text-4xl mb-4">🚀</p>
            <p className="font-mono text-[var(--text-muted)] text-sm mb-2">
              Próximamente...
            </p>
            <p className="font-mono text-xs text-[var(--text-muted)] opacity-60">
              Agregá apps en{' '}
              <span className="text-[var(--text-secondary)]">
                src/data/portfolio.ts
              </span>
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps
              .sort((a, b) => (b.status === 'live' ? 1 : -1))
              .map((app) => {
                const status = statusStyles[app.status];
                const CardWrapper =
                  app.internal && app.href
                    ? ({ children }: { children: React.ReactNode }) => (
                        <Link href={app.href!} className="block">
                          {children}
                        </Link>
                      )
                    : ({ children }: { children: React.ReactNode }) => (
                        <div>{children}</div>
                      );

                return (
                  <div
                    key={app.slug}
                    className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col hover:border-[var(--border-dark)] hover:shadow-sm transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full border ${status.className}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                        />
                        {status.label}
                      </span>
                      <div className="flex items-center gap-2">
                        {app.repo && (
                          <a
                            href={app.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            // onClick={(e) => e.stopPropagation()}
                            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                            aria-label="GitHub repo"
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {app.href && !app.internal && (
                          <a
                            href={app.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            // onClick={(e) => e.stopPropagation()}
                            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                            aria-label="Open app"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Icon + Title */}
                    {app.icon && (
                      <span className="text-3xl mb-3 block">{app.icon}</span>
                    )}
                    <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2">
                      {app.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-4">
                      {app.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {app.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)] px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA — only for internal apps */}
                    {app.internal && app.href && (
                      <Link
                        href={app.href}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group-hover:gap-2.5"
                      >
                        Abrir app <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
}
