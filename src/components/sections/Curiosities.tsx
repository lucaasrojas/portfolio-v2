import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { curiosities } from '@/data/portfolio';

export default function Curiosities() {
  return (
    <section id="curiosities" className="py-24 ">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          index="04"
          title="Curiosities"
          subtitle="Dando libertad a mi curiosidad, explorando ideas y proyectos que me intrigan."
        />

        {curiosities.length === 0 ? (
          <div className="border-2 border-dashed border-[var(--border-dark)] rounded-2xl p-16 text-center">
            <p className="text-4xl mb-4">🚀</p>
            <p className="font-mono text-[var(--text-muted)] text-sm mb-2">
              Próximamente...
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {curiosities.map((app) => {
              return (
                <div
                  key={app.slug}
                  className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col hover:border-[var(--border-dark)] hover:shadow-sm transition-all"
                >
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

                  <Link href={app.href!} className="block">
                    {'Explorar ->'}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
