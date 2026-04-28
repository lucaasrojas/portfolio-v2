import { AppPage } from "@/components/ui/app-page"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Mi Primera Página HTML — Lucas Rojas',
  description: '',
}

export default function FirstHtmlPage() {
  return (
    <AppPage
      title="Mi Primera Página HTML"
      description=""
      link="https://lucaasrojas-first-html-site.netlify.app/"
    />
  )
}