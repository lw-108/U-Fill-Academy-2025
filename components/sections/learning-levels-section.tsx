"use client"

import { Button } from "@/components/ui/button"

const levels = [
  {
    title: "Discover",
    copy: "Foundation for young learners—playful exploration, curiosity-led activities, and essential skills for early growth.",
  },
  {
    title: "Explore",
    copy: "Hands-on projects deepen understanding across STEM, arts, and language—connecting concepts to everyday life.",
  },
  {
    title: "Create",
    copy: "Students design, build, and present real-world solutions—growing creativity, confidence, and collaboration.",
  },
  {
    title: "Lead",
    copy: "Advanced learners mentor peers, run initiatives, and develop leadership with global citizenship at the core.",
  },
]

export default function LearningLevelsSection() {
  return (
    <section id="levels" className="relative z-10 px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Learning Levels</h3>
        <div className="grid gap-4">
          {levels.map((l) => (
            <div key={l.title} className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h4 className="text-white font-medium mb-2">{l.title}</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-4">{l.copy}</p>
              <Button
                variant="outline"
                className="h-8 px-3 text-xs border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Know More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
