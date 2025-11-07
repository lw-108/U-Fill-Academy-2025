"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import manWithRobot from "@/public/images/man-with-robot.png";
import boyAndGirl from "@/public/images/boy-and-girl.png";

interface SectionData {
  id: number;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  bgColor: string;
  image: StaticImageData;
  alt: string;
}

const SECTIONS: SectionData[] = [
  {
    id: 1,
    title: "Copy-Pasting: The Real MVP",
    text: `Programmers would be lost without Ctrl+C and Ctrl+V. Entire careers have been built on Stack Overflow!`,
    buttonText: "View Repo",
    buttonLink: "https://github.com/lucky-chap/kaminari",
    bgColor: "#e0f5ff",
    image: manWithRobot,
    alt: "Man sitting with robot",
  },
  {
    id: 2,
    title: "The Dark Mode Debate",
    text: `Programmers swear by dark mode — claiming it saves battery and prevents eye strain. Light mode? A forbidden legend.`,
    buttonText: "Explore",
    buttonLink: "#",
    bgColor: "#ffefd6",
    image: boyAndGirl,
    alt: "Boy and girl with robot",
  },
  {
    id: 3,
    title: "AI Copilots Everywhere",
    text: `From coding to art, AI copilots are the secret superheroes of our generation.`,
    buttonText: "Learn More",
    buttonLink: "#",
    bgColor: "#e6ffe6",
    image: manWithRobot,
    alt: "Man with AI robot",
  },
];

export default function StudentProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % SECTIONS.length);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + SECTIONS.length) % SECTIONS.length);

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col lg:flex-row"
        >
          {/* LEFT CONTENT */}
          <div
            className="flex flex-col justify-center px-10 lg:px-24 w-full lg:w-1/2 h-screen text-center lg:text-left"
            style={{ backgroundColor: SECTIONS[currentIndex].bgColor }}
          >
            <div className="max-w-md mx-auto lg:mx-0">
              <span className="block text-[100px] font-black text-black/10 leading-none dark:text-white/10">
                {String(SECTIONS[currentIndex].id).padStart(2, "0")}
              </span>
              <h2 className="text-4xl font-extrabold text-black dark:text-white mb-4 leading-tight">
                {SECTIONS[currentIndex].title}
              </h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                {SECTIONS[currentIndex].text}
              </p>
              <Button
                size="lg"
                className="font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all"
              >
                <a
                  href={SECTIONS[currentIndex].buttonLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {SECTIONS[currentIndex].buttonText}
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE (Consistent padding for all slides) */}
          <div
            className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen flex items-center justify-center bg-white dark:bg-black"
            style={{
              padding: "80px", // consistent padding area
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
                <Image
                  src={SECTIONS[currentIndex].image}
                  alt={SECTIONS[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* CONTROLS */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-6">
        <button
          onClick={handlePrev}
          className="p-3 bg-white/70 dark:bg-black/50 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </button>

        <div className="flex gap-2">
          {SECTIONS.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex
                  ? "bg-black dark:bg-white scale-110"
                  : "bg-zinc-400"
              } transition-all`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 bg-white/70 dark:bg-black/50 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronRight className="w-6 h-6 text-black dark:text-white" />
        </button>
      </div>
    </section>
  );
}
