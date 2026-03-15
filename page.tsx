import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { PopularResources } from "@/components/popular-resources"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <PopularResources />
        <Community />
      </main>
      <Footer />
    </div>
  )
}
