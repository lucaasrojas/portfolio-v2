# Lucas Rojas — Portfolio

Portfolio personal con sección de apps integradas, construido con Next.js 14, TypeScript y Tailwind CSS.

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (disponible)
- **Fonts**: Playfair Display (display) · Geist Sans · Geist Mono

## Setup

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Personalización

Todo el contenido está en **`src/data/portfolio.ts`**:

- `siteConfig` — nombre, rol, links sociales, email
- `techStack` — tecnologías
- `experience` — experiencia laboral
- `projects` — proyectos destacados
- `apps` — tus apps (ver sección Apps)

### Foto de perfil

1. Colocá tu foto en `public/assets/profile_pic.jpg`
2. En `src/components/sections/Hero.tsx`, descomentá el `<Image>` y comentá el placeholder

### CV

Colocá tu PDF en `public/Lucas_Rojas.pdf`.

---

## Sección Apps

Cada app en `src/data/portfolio.ts` tiene esta forma:

```ts
{
  slug: 'morse-trainer',
  title: 'Morse Trainer',
  description: 'Descripción corta para la card.',
  longDescription: 'Descripción larga para la página /apps.',
  status: 'live' | 'wip' | 'idea',
  tags: ['React', 'TypeScript'],
  href: '/apps/morse-trainer',   // path interno
  repo: 'https://github.com/lucaasrojas/morse-trainer',
  internal: true,                // true = vive en este proyecto
  icon: '📡',
}
```

### Agregar una app interna

1. Copiá la carpeta `src/app/apps/_template/` → renombrala con el slug
2. Editá el `page.tsx` con el contenido de tu app
3. Agregá la entrada en `apps[]` con `internal: true`

### Agregar una app desde su propio repo (git subtree)

```bash
# 1. Registrar el remote (una sola vez)
git remote add morse-trainer https://github.com/lucaasrojas/morse-trainer

# 2. Agregar el subtree
git subtree add --prefix=src/app/apps/morse-trainer morse-trainer main --squash

# 3. Para sincronizar cambios del repo externo
git subtree pull --prefix=src/app/apps/morse-trainer morse-trainer main --squash

# 4. Para pushear cambios al repo externo
git subtree push --prefix=src/app/apps/morse-trainer morse-trainer main
```

> **Tip**: el `page.tsx` dentro del subtree puede ser una app Next.js completa.
> El layout `/apps/layout.tsx` ya incluye el topbar de navegación de vuelta al portfolio.

---

## Estructura

```
src/
├── app/
│   ├── layout.tsx              # Root layout + fonts + metadata
│   ├── page.tsx                # Portfolio (Hero, Stack, Experience, Projects, Apps)
│   ├── globals.css             # CSS variables + Tailwind
│   └── apps/
│       ├── layout.tsx          # Shell con topbar "← Volver al portfolio"
│       ├── page.tsx            # Índice de todas las apps en /apps
│       ├── _template/          # Copiá esto para cada nueva app
│       │   └── page.tsx
│       └── [tu-app]/           # ← subtree o carpeta manual
│           └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TechStack.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Apps.tsx
│   └── ui/
│       ├── Marquee.tsx
│       └── SectionHeader.tsx
├── data/
│   └── portfolio.ts            # ← Todo el contenido acá
├── lib/
│   └── utils.ts                # cn() helper
└── types/
    └── index.ts                # App, Experience, Project, TechItem
```

## Deploy (Vercel)

```bash
npx vercel
```

Vercel detecta Next.js automáticamente. No necesitás configuración extra.
