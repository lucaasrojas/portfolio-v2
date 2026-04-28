import Link from 'next/link';
import { apps } from '@/data/portfolio';
import type { AppStatus } from '@/types';
import { ArrowRight, Github } from 'lucide-react';

const statusStyles: Record<
  AppStatus,
  { label: string; dot: string; className: string }
> = {
  live: {
    label: 'Live',
    dot: 'bg-emerald-500 animate-pulse',
    className: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  wip: {
    label: 'WIP',
    dot: 'bg-amber-400',
    className: 'text-amber-700 bg-amber-50 border-amber-200',
  },
  idea: {
    label: 'Idea',
    dot: 'bg-[var(--text-muted)]',
    className:
      'text-[var(--text-muted)] bg-[var(--bg-surface)] border-[var(--border)]',
  },
};

export default function AppsPage() {
  const internalApps = apps.filter((a) => a.internal);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="font-display font-bold text-5xl text-[var(--text-primary)] mb-3">
          Apps
        </h1>
        <p className="text-[var(--text-muted)] text-sm">
          Todas las apps disponibles en este dominio.
        </p>
      </div>

      {internalApps.length === 0 ? (
        <div className="border-2 border-dashed border-[var(--border-dark)] rounded-2xl p-16 text-center">
          <p className="text-4xl mb-4">🚀</p>
          <p className="font-mono text-[var(--text-muted)] text-sm">
            Próximamente — agregá apps con{' '}
            <span className="text-[var(--text-secondary)]">internal: true</span>{' '}
            en{' '}
            <span className="text-[var(--text-secondary)]">
              src/data/portfolio.ts
            </span>
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {internalApps.map((app) => {
            const s = statusStyles[app.status];
            return (
              <Link
                key={app.slug}
                href={app.href ?? `/apps/${app.slug}`}
                className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col hover:border-[var(--border-dark)] hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full border ${s.className}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                  {app.repo && (
                    <a
                      href={app.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
                {app.icon && (
                  <span className="text-3xl mb-3 block">{app.icon}</span>
                )}
                <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">
                  {app.title}
                </h2>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-4">
                  {app.longDescription ?? app.description}
                </p>
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
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)] group-hover:gap-2.5 transition-all">
                  Abrir <ArrowRight size={12} />
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
