"use client"

import MegaNavbar from "@/components/sections/MegaNavbar";
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import ThirukkuralSection from "@/components/sections/ThirukkuralSection"
import AboutSection from "@/components/sections/about-section"
import MissionVisionSection from "@/components/sections/mission-vision-section"
import StepperPage from "@/components/sections/StepperPage"
import WorldmapSection from "@/components/sections/worldmap-section"
import StudentProjectsSection from "@/components/sections/student-projects-section"
import {BentoBoxSection} from "@/components/sections/bento-box-section"
import FacultySection from "@/components/sections/faculty-section"
import ScrollStackSection from "@/components/sections/ScrollStackSection"
import VideoCarouselSection from "@/components/sections/video-carousel-section"
import Testimonials from "@/components/sections/Testimonials"
import FAQSection from "@/components/sections/faq-section"
import SiteFooter from "@/components/sections/footer"

export default function ShaderShowcase() {
  return (
    <>
      {/* Hero section only: keep the animated shader background here */}
      <ShaderBackground>
        <MegaNavbar />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      {/* All other sections: soft white background (light theme tokens) */}
      <main className="bg-background">
        {/* Section order: Hero, About, Mission & Vision, World Map, Students Project, Meet Our Faculty, Bento Grid, Video Carousel, FAQ, Footer */}
        <ThirukkuralSection/>
        <AboutSection />
        <MissionVisionSection />
        <StepperPage/>
        <WorldmapSection />
        <StudentProjectsSection />
        <FacultySection />
        <BentoBoxSection />
        <ScrollStackSection/>
        <VideoCarouselSection />
        <Testimonials/>
        <FAQSection />
        <SiteFooter />
      </main>
    </>
  )
}
