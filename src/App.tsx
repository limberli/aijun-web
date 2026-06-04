import { AnimatedBackground } from './components/AnimatedBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { HowItWorks } from './sections/HowItWorks'
import { ProductDemo } from './sections/ProductDemo'
import { Roadmap } from './sections/Roadmap'
import { SocialLinks } from './sections/SocialLinks'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ProductDemo />
        <Roadmap />
        <SocialLinks />
      </main>
      <Footer />
    </>
  )
}

export default App
