import { AppPage } from "@/components/ui/app-page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'ML Price Tracker — Lucas Rojas',
  description: 'Seguidor de precios para productos de Mercado Libre.',
}

export default function MLPriceTracker() {
  return (
    <AppPage
      title="ML Price Tracker"
      description="Seguidor de precios para productos de Mercado Libre."
      link="https://price-tracker-lucaasrojas.netlify.app/"
    />
  )
}