import BlendCursor from "@/components/BlendCursor";
import MegaNavbar from "@/components/sections/MegaNavbar";
import HeroContent from "@/components/hero-content";
import ShaderBackground from "@/components/shader-background";
import ThirukkuralSection from "@/components/sections/ThirukkuralSection";
import AboutSection from "@/components/sections/about-section";
import MissionVisionSection from "@/components/sections/mission-vision-section";
import StepperPage from "@/components/sections/StepperPage";
import StudentProjectsSection from "@/components/sections/student-projects-section";
import FacultySection from "@/components/sections/faculty-section";
import ScrollStackSection from "@/components/sections/ScrollStackSection";
import VideoCarouselSection from "@/components/sections/video-carousel-section";
import {Testimonials} from "@/components/sections/Testimonials";
import {FAQ1} from "@/components/sections/faq-section";
import Chatbot from "@/components/sections/Chatbot";
import SiteFooter from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <BlendCursor />

      {/* Hero Section */}
      <ShaderBackground>
        <MegaNavbar />
        <HeroContent />
      </ShaderBackground>

      {/* Other Sections */}
      <main className="bg-background relative z-10">
        <ThirukkuralSection />
        <AboutSection />
        <MissionVisionSection />
        <StepperPage />
        <StudentProjectsSection />
        <FacultySection />
        <ScrollStackSection />
        <VideoCarouselSection />
        <Testimonials />
        <FAQ1 />
        <Chatbot/>
        <SiteFooter />
      </main>
    </>
  );
}
