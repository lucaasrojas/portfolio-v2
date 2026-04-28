import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--bg-surface)]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader index="03" title="Projects" />

        {projects.length === 0 ? (
          <div className="border-2 border-dashed border-[var(--border-dark)] rounded-2xl p-16 text-center">
            <p className="font-mono text-[var(--text-muted)] text-sm">
              En construcción... 🚧
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col hover:border-[var(--border-dark)] transition-all"
              >
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">
                  {p.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)] px-2.5 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Github size={13} /> GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
