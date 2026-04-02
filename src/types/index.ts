export type AppStatus = 'live' | 'wip' | 'idea'

export interface App {
  slug: string
  title: string
  description: string
  longDescription?: string
  status: AppStatus
  tags: string[]
  /** URL externa o path interno (/apps/morse-trainer) */
  href?: string
  /** URL del repositorio de GitHub */
  repo?: string
  /** Si es true, la app vive dentro de este proyecto en /apps/[slug] */
  internal?: boolean
  /** Ícono emoji o string */
  icon?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  tech: string[]
  current?: boolean
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export interface TechItem {
  name: string
  icon: string
}
