import { AppPage } from "@/components/ui/app-page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Excuses Generator — Lucas Rojas',
  description: 'Generador de excusas para cuando no sabes qué decir.',
}

export default function ExcusesGenerator() {
  return (
    <AppPage
      title="Excuses Generator"
      description="Generador de excusas para cuando no sabes qué decir."
      link="https://excuseme-lucaasrojas.netlify.app/"
    />
  )
}