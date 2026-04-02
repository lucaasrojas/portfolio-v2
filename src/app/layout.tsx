import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Playfair_Display, Geist } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/data/portfolio'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: `${siteConfig.role} desde ${siteConfig.since}. ${siteConfig.tagline}`,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={cn(GeistSans.variable, GeistMono.variable, playfair.variable, "font-sans", geist.variable)}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
