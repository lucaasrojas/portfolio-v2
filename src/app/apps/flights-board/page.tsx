import { AppPage } from "@/components/ui/app-page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Flights Board — Lucas Rojas',
  description: 'Sigue tus vuelos favoritos.',
}

export default function FlightsBoard() {
  return (
    <AppPage
      title="Flights Board"
      description="Sigue tus vuelos favoritos."
      link="https://flight-board-lucaasrojas.netlify.app/"
    />
  )
}