/**
 * TEMPLATE — copiá esta carpeta completa cuando agregues una nueva app.
 *
 * 1. Duplicá la carpeta `_template` → renombrala con el slug de tu app
 *    ej: src/app/apps/morse-trainer/
 *
 * 2. Actualizá src/data/portfolio.ts agregando tu app con internal: true
 *
 * 3. Si la app tiene su propio repo, agregala como git subtree:
 *    git subtree add --prefix=src/app/apps/morse-trainer \
 *      https://github.com/lucaasrojas/morse-trainer main --squash
 *
 * 4. Para sincronizar cambios del repo externo:
 *    git subtree pull --prefix=src/app/apps/morse-trainer \
 *      https://github.com/lucaasrojas/morse-trainer main --squash
 */

export const metadata = {
  title: 'Morse Code Trainer — Lucas Rojas',
  description: 'Entrenador de código Morse para aprender y practicar la codificación Morse de manera interactiva.',
}

export default function AppTemplate() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="font-mono text-xs text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border)] px-3 py-1 rounded-full">
          🚧 En construcción
        </span>
      </div>

      <h1 className="font-display font-bold text-5xl text-[var(--text-primary)] mb-4">
        Morse Code Trainer
      </h1>
      <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl mb-12">
        Entrenador de código Morse para aprender y practicar la codificación Morse de manera interactiva.
      </p>

      {/* Tu app va acá */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-12 text-center">
        <p className="font-mono text-sm text-[var(--text-muted)]">
          
        </p>
      </div>
    </div>
  )
}
