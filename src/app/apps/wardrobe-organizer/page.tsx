import WardrobeApp from "../../../components/features/wardrobe-organizer"

export const metadata = {
  title: 'Wardrobe Organizer — Lucas Rojas',
  description: 'Organiza tu guardarropa de forma fácil y visual.',
}

export default function WardrobeOrganizer() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="font-display font-bold text-5xl text-[var(--text-primary)] mb-4">
        Wardrobe Organizer
      </h1>
      <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl mb-12">
        Organiza tu guardarropa de forma fácil y visual.
      </p>

      {/* Tu app va acá */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-12 text-center">
         <WardrobeApp />
      </div>
    </div>
  )
}
