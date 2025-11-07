"use client";

import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="relative z-10 px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28 bg-background transition-colors duration-500"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-14 text-center">
        <h2 className="font-bowlby text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-foreground dark:text-white leading-tight">
          Our Mission & Vision
        </h2>
        <h5 className="mt-4 text-base sm:text-lg md:text-xl text-red-500 font-medium tracking-wide">
          Click on <span className="font-semibold underline">Mission</span> to witness the magic ✨
        </h5>
      </div>

      {/* Content */}
      <div className="flex h-auto min-h-[32rem] sm:min-h-[36rem] md:min-h-[42rem] w-full items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <div className="text-center px-4 sm:px-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black dark:text-white leading-snug cursor-pointer hover:scale-105 transition-transform duration-300">
                Mission
              </h1>
              <p className="mx-auto max-w-3xl sm:max-w-4xl text-lg sm:text-xl md:text-2xl font-medium text-black/90 dark:text-white/90 leading-relaxed text-pretty">
                To empower tribal and underprivileged students through free,
                quality education and skill-based training — helping them
                achieve academic excellence and prepare for a brighter, more
                independent future.
              </p>
            </div>
          }
          className="h-[32rem] sm:h-[36rem] md:h-[42rem] w-full rounded-2xl border border-border bg-card/10 dark:bg-card/20 backdrop-blur-md text-white dark:text-black shadow-md"
        >
          <div className="text-center px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white dark:text-black leading-snug">
              Vision
            </h1>
            <p className="mx-auto max-w-3xl sm:max-w-4xl text-lg sm:text-xl md:text-2xl font-medium text-white/90 dark:text-black/90 leading-relaxed text-pretty">
              A world where every child — regardless of background — has access
              to education that uplifts, empowers, and transforms lives for a
              stronger, more inclusive future.
            </p>
          </div>
        </MaskContainer>
      </div>
    </section>
  );
}
