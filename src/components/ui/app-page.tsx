import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const AppPage = ({ title, description, link }: { title: string, description: string, link: string }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="font-display font-bold text-5xl text-[var(--text-primary)] mb-4">
        {title}
      </h1>
      <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl">
        {description} {" "}
        <Link
          href={link}
          target="_blank"
          className="inline-flex mb-12 items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group-hover:gap-2.5"
        >
          Abrir app <ArrowRight size={12} />
        </Link>
      </p>


      {/* Tu app va acá */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden text-center">
        <iframe src={link} width="100%" height="900px"></iframe>
      </div>
    </div>
  )
}