export const metadata = {
  title: 'Steam Train — Lucas Rojas',
  description: 'Maneja un tren a vapor a través de un paisaje pixelado. Un juego de conducción relajante y nostálgico.',
}

export default function SteamTrain() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="font-display font-bold text-5xl text-[var(--text-primary)] mb-4">
        Steam Train
      </h1>
      <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl mb-12">
        Maneja un tren a vapor a través de un paisaje pixelado.
      </p>

      {/* Tu app va acá */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-12 text-center">
         <iframe src="/steam-train.html" width="100%" height="900px"></iframe>
      </div>
    </div>
  )
}
