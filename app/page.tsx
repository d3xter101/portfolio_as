import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Certifications } from '@/components/certifications'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Footer />
    </main>
  )
}
