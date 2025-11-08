"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const SLIDES = [
  {
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX4vMi6hg0wEYSAhMon7DgGZ5ResxIX90BPSShw643PVIItg6Y=w38-h38-p-rp-mo-br100",
    name: "All Serious",
    role: "Student",
    quote:
      "My experience at Ufill Academy has been truly amazing! The staff are incredibly kind and supportive, creating a great learning environment. I enrolled in the AI and Robotics course, and it was both informative and enjoyable. I even received a certification upon completion, which I'm very proud of.What’s more, some of my relatives have also joined Ufill Academy to learn AI, and they’re loving the experience just as much. They’re learning a lot and having fun along the way.Thank you, Ufill Academy, for this wonderful learning journey!",
  },
  {
    image: "/images/student-icon.svg",
    name: "மகரந்தன் மா.வசந்த்குமார்",
    role: "Parent",
    quote:
      "சிறந்ததொரு முன்னெடுப்பு இளைய தலைமுறையினர் தனக்காக மட்டுமல்ல தன்னைச் சார்ந்தவர்களுக்குமானது தான் என நிரூபிக்க மாணவர்களை நோக்கிய எதிர்கால செயல்பாட்டுக்கான நிகழ்வுகள் இன்னும் தொடரட்டும் வாழ்த்துகள் .... U fill Academy - Yes U fill Definitely.... Your Growth and Activities in Stimulation. The initiative and leadership in teaching the next generation technical skills is commendable.",
  },
  {
    image: "/images/teacher-icon.svg",
    name: "Mercy Sangeetha",
    role: "Student",
    quote:
      "A great place to learn AI, IoT, and robotics with practical, student-friendly training",
  },
  {
    image: "/images/alumni-icon.svg",
    name: "Narmadha A",
    role: "Student",
    quote:
      "This class was very useful for my own experience and the staff was very kind and supportive so thank you for your free python class",
  },
]

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bowlby text-4xl md:text-6xl text-center font-normal text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our students, parents, and educators about their U-Fill Academy journey
          </p>
        </div>

        <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-900 dark:to-purple-900 p-6 shadow-2xl">
          <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600/90 to-purple-700/90 dark:from-blue-900/90 dark:to-purple-900/90 backdrop-blur-sm" />

          <CardContent className="relative grid w-full grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-12 md:px-12 md:py-16">
            <div className="col-span-full md:col-span-8">
              <Quote className="mb-6 h-12 w-12 text-white/30" />
              <blockquote className="mb-8 text-xl leading-relaxed font-medium text-white md:text-2xl">
                &quot;{SLIDES[currentSlide].quote}&quot;
              </blockquote>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
                <p className="text-lg font-semibold text-white">
                  {SLIDES[currentSlide].name}
                </p>
                <span className="hidden text-white/50 md:inline">•</span>
                <p className="text-sm text-white/70">
                  {SLIDES[currentSlide].role}
                </p>
              </div>
            </div>

            <div className="col-span-full flex items-center justify-center md:col-span-4">
              <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm border border-white/20">
                <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="h-12 w-12 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {SLIDES[currentSlide].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="!absolute top-1/2 left-4 z-10 -translate-y-1/2 text-white transition-all hover:bg-white/20 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="!absolute top-1/2 right-4 z-10 -translate-y-1/2 text-white transition-all hover:bg-white/20 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </Card>
      </div>
    </section>
  )
}