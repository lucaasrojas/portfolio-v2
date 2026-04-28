'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/portfolio'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  // { label: 'Projects', href: '#projects' },
  { label: 'Apps', href: '#apps' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-xl text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
        >
          Lucas.
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.cv}
            download
            className="font-mono text-sm bg-[var(--text-primary)] text-[var(--bg)] px-4 py-1.5 rounded-full hover:bg-[var(--text-secondary)] transition-colors"
          >
            CV ↓
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-primary)]"
          // onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-[var(--text-secondary)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.cv}
            download
            className="font-mono text-sm self-start bg-[var(--text-primary)] text-[var(--bg)] px-4 py-1.5 rounded-full"
          >
            CV ↓
          </a>
        </div>
      )}
    </header>
  )
}
