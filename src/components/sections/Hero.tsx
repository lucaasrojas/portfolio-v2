import Image from 'next/image'
import Marquee from '@/components/ui/Marquee'
import { siteConfig } from '@/data/portfolio'
import { Download } from 'lucide-react'

const marqueeItems = [
  'Frontend Developer',
  'React · Next.js · TypeScript',
  'Buenos Aires',
  'Open to work',
  'Since 2018',
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col pt-16">
      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div className="flex flex-col gap-6">
              {/* Hello pill */}
              <div className="inline-flex items-center gap-2 border border-[var(--text-primary)] rounded-full px-4 py-1.5 w-fit">
                <span className="text-sm">✳</span>
                <span className="font-mono text-xs font-semibold text-[var(--text-primary)] tracking-wider">
                  HELLO!
                </span>
              </div>

              {/* Heading */}
              <div>
                <p className="font-sans text-[var(--text-muted)] text-base mb-1">
                  Hi, I&apos;m
                </p>
                <h1 className="font-display font-bold text-6xl md:text-7xl leading-[1.05] text-[var(--text-primary)]">
                  Lucas
                  <br />
                  Rojas
                </h1>
              </div>

              {/* Role */}
              <p className="font-display text-xl text-[var(--text-secondary)] font-semibold">
                {siteConfig.role}
              </p>

              {/* Bio */}
              <p className="text-[var(--text-muted)] leading-relaxed text-sm max-w-sm">
                Developer desde {siteConfig.since}. Self-taught. Apasionado por
                construir interfaces que mezclan buen código con buen diseño.{' '}
                <span>☕</span>
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={siteConfig.cv}
                  download
                  className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg)] font-mono text-sm px-5 py-2.5 rounded-full hover:bg-[var(--text-secondary)] transition-colors"
                >
                  <Download size={14} />
                  Download CV
                </a>
                <a
                  href="#apps"
                  className="inline-flex items-center gap-2 border border-[var(--border-dark)] text-[var(--text-secondary)] font-mono text-sm px-5 py-2.5 rounded-full hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Ver apps →
                </a>
              </div>
            </div>

            {/* Right: Photo + badge */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">

                {/* Rotating badge */}
                <div className="absolute -top-6 -right-6 z-10">
                  <div className="relative w-24 h-24">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full animate-spin-slow"
                    >
                      <defs>
                        <path
                          id="circle"
                          d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                        />
                      </defs>
                      <text className="fill-[var(--text-primary)]" fontSize="9.5" fontFamily="monospace" fontWeight="600" letterSpacing="2">
                        <textPath href="#circle">
                          AVAILABLE FOR NEW PROJECTS ✦
                        </textPath>
                      </text>
                    </svg>
                    {/* Center arrow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[var(--text-primary)] text-lg font-bold">↗</span>
                    </div>
                  </div>
                </div>

                {/* Photo in arch shape */}
                <div
                  className="relative w-64 h-80 md:w-72 md:h-88 overflow-hidden border-4 border-[var(--accent)]"
                  style={{ borderRadius: '999px 999px 0 0' }}
                >
                  {/* Placeholder */}
                  <div className="w-full h-full bg-[var(--bg-surface)] flex items-center justify-center">
                    <div className="text-center text-[var(--text-muted)]">
                      <div className="text-5xl mb-2">👤</div>
                      <p className="font-mono text-xs">profile_pic.jpg</p>
                      <p className="font-mono text-xs opacity-60">public/assets/</p>
                    </div>
                  </div>
                  {/* Swap placeholder with real image: */}
                  {/* <Image src="/assets/profile_pic.jpg" alt="Lucas Rojas" fill className="object-cover" priority /> */}
                </div>

                {/* Location badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full px-4 py-1.5 shadow-sm whitespace-nowrap">
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    📍 {siteConfig.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee at the bottom of hero */}
      <Marquee items={marqueeItems} />
    </section>
  )
}
