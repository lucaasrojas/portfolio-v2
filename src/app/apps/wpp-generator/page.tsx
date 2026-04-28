import { AppPage } from "@/components/ui/app-page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'WPP Generator — Lucas Rojas',
  description: 'Generador de mensajes para WhatsApp.',
}

export default function WPPGenerator() {
  return (
    <AppPage 
      title="WPP Generator"
      description="Generador de mensajes para WhatsApp."
      link="https://wpp-me-lucaasrojas.netlify.app/"
    />
  )
}