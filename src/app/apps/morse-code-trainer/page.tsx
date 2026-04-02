export const metadata = {
  title: 'Morse Code Trainer — Lucas Rojas',
  description: 'Entrena tu capacidad para leer y escribir en código morse.',
}

export default function MorseCodeTrainer() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="font-display font-bold text-5xl text-[var(--text-primary)] mb-4">
        Morse Code Trainer
      </h1>
      <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl mb-12">
        Entrena tu capacidad para leer y escribir en código morse.
      </p>

      {/* Tu app va acá */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-12 text-center">
         <iframe src="/morse-trainer.html" width="100%" height="900px"></iframe>
      </div>
    </div>
  )
}
