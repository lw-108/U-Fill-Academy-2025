"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrambledText from "@/components/Scrambledtext";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  // Memoized scrambled text
  const scrambledContent = useMemo(
    () => (
      <ScrambledText
        className="scrambled-text-demo text-base sm:text-lg md:text-2xl leading-relaxed text-justify text-foreground/90 dark:text-foreground/80"
        radius={100}
        speed={0.5}
      >
        {`
          At U-Fill Academy, we believe that every student has unique potential waiting to be unlocked. 
          Our innovative approach to education goes beyond traditional classroom learning, focusing on 
          hands-on experiences, practical skills, and personal growth. We offer a comprehensive range 
          of courses spanning technology, mathematics, creative arts, fitness, and academic support.

          Our experienced educators are passionate about nurturing young minds and helping students 
          discover their strengths. Through personalized attention and modern teaching methodologies, 
          we create an environment where learning is not just about passing exams, but also about 
          building confidence, creativity, and character.
        `}
      </ScrambledText>
    ),
    []
  );

  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 bg-background dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
        <h2 className="font-bowlby text-4xl md:text-6xl text-center font-normal text-foreground">
          About Us
        </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Empowering students through innovative education and holistic development
          </p>
        </div>

        {/* Expandable Content */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false}>
            <motion.div
              key={expanded ? "expanded" : "collapsed"}
              initial={{ height: 250, opacity: 1 }}
              animate={{ height: expanded ? "auto" : 250 }}
              exit={{ height: 250 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              id="about-content"
              aria-hidden={!expanded}
              className="overflow-hidden"
            >
              {scrambledContent}
            </motion.div>
          </AnimatePresence>

          {/* Gradient Fade */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background dark:from-[#0a0a0a] to-transparent pointer-events-none transition-colors" />
          )}

          {/* Expand / Collapse Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded ? "true" : "false"}
              aria-controls="about-content"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 active:scale-95 transition-all font-medium shadow-sm dark:shadow-none"
            >
              {expanded ? "Show Less" : "Read More"}
              <motion.svg
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "50+", label: "Courses" },
            { number: "1000+", label: "Students" },
            { number: "25+", label: "Expert Tutors" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-center p-6 bg-card dark:bg-neutral-900 rounded-2xl border border-border dark:border-neutral-800 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="font-climate-crisis text-2xl md:text-3xl text-primary mb-2 dark:text-primary/90">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
