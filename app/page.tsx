import Navigation from "@/components/Navigation"
import Hero from "@/app/sections/Hero"
import About from "@/app/sections/About"
import Experience from "@/app/sections/Experience"
import Skills from "@/app/sections/Skills"
import Projects from "@/app/sections/Projects"
import ResearchProfile from "@/app/sections/ResearchProfile"
import CurrentlyBuilding from "@/app/sections/CurrentlyBuilding"
import CuriosityLab from "@/app/sections/CuriosityLab"
import BlogSection from "@/app/sections/BlogSection"
import Contact from "@/app/sections/Contact"
import Footer from "@/components/Footer"
import ChatComponent from "@/components/ChatComponent"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ResearchProfile />
      <Projects />
      <CurrentlyBuilding />
      <CuriosityLab />
      <BlogSection />
      <Contact />
      <Footer />
      <ChatComponent />
    </main>
  )
}
