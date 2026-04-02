import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import TechStack from '@/components/sections/TechStack'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Apps from '@/components/sections/Apps'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Apps />
      </main>
      <Footer />
    </>
  )
}
