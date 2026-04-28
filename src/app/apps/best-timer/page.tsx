import { AppPage } from "@/components/ui/app-page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Best Timer — Lucas Rojas',
  description: 'Temporizador simple y efectivo.',
}

export default function BestTimer() {
  return (
    <AppPage
      title="Best Timer"
      description="Temporizador simple y efectivo."
      link="https://lucaasrojas-best-timer.netlify.app/#/"
    />
  )
}