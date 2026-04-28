import type { App, Experience, Project, TechItem } from '@/types';

export const siteConfig = {
  name: 'Lucas Rojas',
  role: 'Frontend Developer',
  tagline: 'Building interfaces that feel as good as they look.',
  location: 'Buenos Aires, Argentina',
  since: '2018',
  email: 'lucas@example.com',
  github: 'https://github.com/lucaasrojas',
  linkedin: 'https://linkedin.com/in/lucaasrojas',
  cv: '/assets/cv_lucas_rojas.pdf',
};

export const techStack: TechItem[] = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Redux / Context / Zustand', icon: '🔄' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'shadcn/ui', icon: '🧩' },
  { name: 'Figma / UX·UI', icon: '✏️' },
  { name: 'Vitest / Jest', icon: '🧪' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Node.js', icon: '🟢' },
];

export const experience: Experience[] = [
  {
    company: 'Klimber',
    role: 'Front-End Developer',
    period: 'June 2025 – Present',
    current: true,
    description:
      'Desarrollo frontend en equipo ágil, enfocado en performance y experiencia de usuario.',
    tech: ['React', 'TypeScript', 'Next.js'],
  },
  {
    company: 'GlobalLogic',
    role: 'Front-End Developer',
    period: 'July 2024 – June 2025',
    description:
      'Implementación de interfaces y sistemas de diseño para clientes enterprise.',
    tech: ['React', 'TypeScript', 'Material UI'],
  },
  {
    company: 'Globant',
    role: 'Front-End Developer',
    period: 'Sept 2020 – July 2024',
    description:
      'Desarrollo de aplicaciones web a gran escala para clientes internacionales de primer nivel.',
    tech: ['React', 'Redux', 'AWS', 'Jest'],
  },
  {
    company: 'SOUTHWORKS',
    role: 'Full-Stack Developer',
    period: 'Apr 2018 – Sept 2020',
    description:
      'Desarrollo full-stack de soluciones cloud para el ecosistema Microsoft Azure.',
    tech: ['React', 'Node.js', 'Azure'],
  },
];

export const projects: Project[] = [
  // Agregá tus proyectos destacados acá
  // {
  //   title: 'Mi Proyecto',
  //   description: 'Descripción breve.',
  //   tech: ['React', 'TypeScript'],
  //   github: 'https://github.com/...',
  //   live: 'https://...',
  // },
];

// ─── APPS ────────────────────────────────────────────────────────────────────
// Para agregar una nueva app:
// 1. Agregá la entrada acá
// 2. Si es internal: true, creá src/app/apps/[slug]/page.tsx
// 3. Si tiene su propio repo, configurá git subtree (ver README)
// ─────────────────────────────────────────────────────────────────────────────
export const apps: App[] = [
  // Ejemplo de app interna (vive en /apps/morse-trainer dentro de este repo):
  // {
  //   slug: 'morse-trainer',
  //   title: 'Morse Trainer',
  //   description: 'Entrenador de código Morse con repetición espaciada.',
  //   longDescription: 'App para aprender Morse con mnemonics en español y sistema SRS.',
  //   status: 'wip',
  //   tags: ['React', 'TypeScript', 'SRS'],
  //   href: '/apps/morse-trainer',
  //   repo: 'https://github.com/lucaasrojas/morse-trainer',
  //   internal: true,
  //   icon: '📡',
  // },
  {
    slug: 'morse-code-trainer',
    title: 'Morse Trainer',
    description: 'Entrenador de código Morse con repetición espaciada.',
    longDescription:
      'App para aprender Morse con mnemonics en español y sistema SRS.',
    status: 'wip',
    tags: ['React', 'TypeScript', 'SRS', 'Claude did it'],
    href: '/apps/morse-code-trainer',
    repo: 'https://github.com/lucaasrojas/morse-code-trainer',
    internal: true,
    icon: '📡',
  },
  {
    slug: 'steam-train',
    title: 'Steam Train',
    description: 'Maneja un tren a vapor a través de un paisaje pixelado.',
    longDescription: 'App para manejar un tren a vapor en un entorno pixelado.',
    status: 'wip',
    tags: ['React', 'TypeScript', 'Three.js', 'Claude did it'],
    href: '/apps/steam-train',
    repo: 'https://github.com/lucaasrojas/steam-train',
    internal: true,
    icon: '🚂',
  },
  {
    slug: 'wpp-generator',
    title: 'WPP Generator',
    description:
      'Generador de mensajes para WhatsApp con plantillas y automatización.',
    longDescription:
      'App para crear y enviar mensajes de WhatsApp de forma rápida y eficiente.',
    status: 'wip',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    href: '/apps/wpp-generator',
    repo: 'https://github.com/lucaasrojas/wpp-generator',
    internal: true,
    icon: '💬',
  },
  {
    slug: 'flights-board',
    title: 'Flights Board',
    description: 'Sigue tus vuelos favoritos.',
    longDescription: 'App para seguir los vuelos favoritos.',
    status: 'wip',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: '/apps/flights-board',
    repo: '',
    internal: true,
    icon: '✈️',
  },
  {
    slug: 'conversa-cards',
    title: 'Conversa Cards',
    description: 'Tarjetas de conversación para conocernos mas.',
    longDescription: 'App para abrirnos.',
    status: 'wip',
    tags: ['React', 'Tailwind CSS'],
    href: '/apps/conversa-cards',
    repo: '',
    internal: true,
    icon: '✨',
  },
  {
    slug: 'excuses-generator',
    title: 'Excuses Generator',
    description: 'Generador de excusas para cuando no sabes qué decir.',
    longDescription:
      'App para generar excusas creativas cuando no sabes qué decir.',
    status: 'live',
    tags: ['React', 'Tailwind CSS'],
    href: '/apps/excuses-generator',
    repo: '',
    internal: true,
    icon: '🙊',
  },
  {
    slug: 'best-timer',
    title: 'Best Timer',
    description: 'Temporizador simple y efectivo.',
    longDescription:
      'App para gestionar tu tiempo con un temporizador intuitivo.',
    status: 'live',
    tags: ['React'],
    href: '/apps/best-timer',
    repo: '',
    internal: true,
    icon: '⏱️',
  },

  {
    slug: 'first-html-page',
    title: 'Mi Primera Página HTML',
    description: '',
    longDescription: '',
    status: 'live',
    tags: ['React'],
    href: '/apps/first-html-page',
    repo: '',
    internal: true,
    icon: '📄',
  },

  {
    slug: 'ml-price-tracker',
    title: 'ML Price Tracker',
    description: 'Sigue los precios de los productos que mas queres',
    longDescription: '',
    status: 'wip',
    tags: ['React'],
    href: '/apps/ml-price-tracker',
    repo: '',
    internal: true,
    icon: '🛒',
  },
  // Ejemplo de app externa (redirect a otra URL):
  // {
  //   slug: 'filededup',
  //   title: 'FileDedup',
  //   description: 'Deduplicación de archivos con análisis de hash y fuzzy matching.',
  //   status: 'live',
  //   tags: ['Python', 'FastAPI', 'React'],
  //   href: 'https://filededup.vercel.app',
  //   repo: 'https://github.com/lucaasrojas/filededup',
  //   internal: false,
  //   icon: '🗂️',
  // },
];
