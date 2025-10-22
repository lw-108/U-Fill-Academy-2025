"use client"
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="relative z-10 px-6 py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="font-climate-crisis text-4xl md:text-6xl text-center font-normal text-foreground">
          Our Mission & Vision
        </h2>
      </div>
      <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-6 text-black dark:text-white">Mission</h1>
              <p className="mx-auto max-w-4xl text-4xl font-semibold text-black dark:text-white leading-relaxed">
                To empower tribal and poor students through free, quality
                education and skill-based training, helping them achieve
                academic excellence and prepare for a brighter future.
              </p>
            </div>
          }
          className="h-[40rem] rounded-md border text-white dark:text-black"
        >
          <div className="text-center -mb-2">
            <h1 className="text-6xl font-bold mb-6">Vision</h1>
            <p className="mx-auto max-w-4xl text-4xl font-semibold text-white dark:text-black leading-relaxed">
              A future where no child is left behind due to financial or social barriers
              – education that uplifts, empowers, and transforms lives.
            </p>
          </div>
        </MaskContainer>
      </div>
    </section>
  )
}