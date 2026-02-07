import Navigation from "@/components/Navigation"
import Hero from "@/app/sections/Hero"
import About from "@/app/sections/About"
import Experience from "@/app/sections/Experience"
import Skills from "@/app/sections/Skills"
import Projects from "@/app/sections/Projects"
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
      <Projects />
      <BlogSection />
      <Contact />
      <Footer />
      <ChatComponent />
    </main>
  )
}
