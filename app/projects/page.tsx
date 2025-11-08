"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import MegaNavbar from "@/components/sections/MegaNavbar";
import BlendCursor from "@/components/BlendCursor";

const slides = [
  {
    id: 1,
    title: "01",
    text: "Think of Kaminari as that friend who shows up with snacks and already picked the movie — all you have to do is sit back and enjoy.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  },
  {
    id: 2,
    title: "02",
    text: "Copy-Pasting: The Real MVP! Don't let anyone fool you — entire careers have been built on the power of Ctrl+C and Ctrl+V.",
    img: "https://images.unsplash.com/photo-1581091870622-1e7a5b1a3e89?w=1200&q=80",
  },
  {
    id: 3,
    title: "03",
    text: "Dark Mode Debate: Programmers swear by dark mode. It saves battery, looks cooler, and prevents getting hacked by eye strain.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  },
];

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-background py-20 text-black transition-colors duration-500 dark:text-white mt-45">
      <MegaNavbar/>
      <BlendCursor/>
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Title Section - Big and Centered Above Content */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bowlby text-3xl md:text-4xl lg:text-6xl font-normal text-foreground mb-6"
          >
            Student Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Showcasing innovative work and creative solutions from our talented students
          </motion.p>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex w-full flex-col items-center justify-center gap-10 text-center lg:flex-row lg:gap-24 lg:text-left"
          >
            {/* Left Section */}
            <div className="flex w-full max-w-lg flex-col items-center lg:items-start">
              <h2 className="text-[clamp(48px,6vw,96px)] font-bowlby font-bold leading-none">
                {slides[current].title}
              </h2>
              <p className="mt-6 max-w-md text-[clamp(14px,2vw,18px)] font-medium leading-relaxed opacity-80">
                {slides[current].text}
              </p>

              <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-6 lg:justify-start">
                <Button
                  onClick={prevSlide}
                  disabled={current === 0}
                  className="rounded-3xl bg-gray-300 px-8 py-3 text-base font-bold text-black transition-all duration-300 hover:bg-gray-400 disabled:opacity-40 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                  Back
                </Button>

                <div className="text-base font-bold opacity-70 dark:opacity-80">
                  {current + 1} / {slides.length}
                </div>

                <Button
                  onClick={nextSlide}
                  disabled={current === slides.length - 1}
                  className="rounded-3xl bg-zinc-900 px-8 py-3 text-base font-bold text-white transition-all duration-300 hover:bg-zinc-700 disabled:opacity-40 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Next
                </Button>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="relative h-[220px] w-[220px] overflow-hidden rounded-3xl shadow-lg sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px] lg:h-[420px] lg:w-[420px] xl:h-[500px] xl:w-[500px]">
              <Image
                src={slides[current].img}
                alt={`Slide ${slides[current].id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 500px"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}