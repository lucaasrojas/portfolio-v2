import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mini topbar */}
      <header className="border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md px-6 h-12 flex items-center justify-between sticky top-0 z-50">
        <Link
          href="/#apps"
          className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft size={13} />
          Volver al portfolio
        </Link>
        <Link
          href="/"
          className="font-display font-bold text-sm text-[var(--text-primary)]"
        >
          Lucas.
        </Link>
      </header>

      {/* App content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
