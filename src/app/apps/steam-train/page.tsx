import { AppPage } from "@/components/ui/app-page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Steam Train — Lucas Rojas',
  description: 'Maneja un tren a vapor a través de un paisaje pixelado. Un juego de conducción relajante y nostálgico.',
}

export default function SteamTrain() {
  return (
    <AppPage
      title="Steam Train"
      description="Maneja un tren a vapor a través de un paisaje pixelado. Un juego de conducción relajante y nostálgico."
      link="https://steam-train-game.netlify.app/"
    />
  )
}
