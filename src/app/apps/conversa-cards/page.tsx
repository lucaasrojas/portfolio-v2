import { AppPage } from "@/components/ui/app-page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Conversa Cards — Lucas Rojas',
  description: 'Tarjetas de conversación para conocernos mas.',
}

export default function ConversaCards() {
  return (
    <AppPage
      title="Conversa Cards"
      description="Tarjetas de conversación para conocernos mas."
      link="https://conversa-lucaasrojas.netlify.app/"
    />
  )
}