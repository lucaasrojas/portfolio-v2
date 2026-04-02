import { siteConfig } from '@/data/portfolio'
import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)] py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-lg text-[var(--text-primary)]">
          Lucas.
        </p>
        <p className="font-mono text-xs text-[var(--text-muted)]">
          Built with Next.js & love · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
