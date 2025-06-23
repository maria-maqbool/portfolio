"use client"
import Header from "@/components/header/page"
import HeroSection from "@/components/hero-section/page"
import AboutSection from "@/components/about-section/page"
import SocialIcons from "@/components/social-icons/page"
import ExperienceSection from "@/components/experience-section/page"
import { Github } from "lucide-react"
import EmailRightSide from "@/components/email-right-side/page"
import ProjectSection from "@/components/project-section/page"
import ProjectsCardsSection from "@/components/project-cards-section/page"
import ContactSection from "@/components/contact-section/page"
import Footer from "@/components/footer/page"





export default function Home() {

   
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300 flex">
      {/* Side social icons */}
      <SocialIcons />

      {/* Main content */}
      <div className="flex-1 max-w-6xl mx-auto px-6 md:px-12 py-8">
        {/* Header */}
        <Header />

        {/* Main content */}
        <HeroSection />

        {/* About Me Section */}
        <AboutSection />

         {/* Experience Section */}
        <ExperienceSection />

         {/* Projects Section */}
        <section id="work" className="mt-32 md:mt-48 max-w-6xl">
          
          <ProjectSection />
          <ProjectsCardsSection />
        </section>

        <ContactSection />
        <Footer />
 
        {/* Email on right side - visible on larger screens */}
       <EmailRightSide />
      </div>
    </div>
  )
}
