"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 bg-background transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-bowlby text-4xl md:text-6xl text-center font-normal text-black dark:text-white"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Empowering students through innovative education and holistic development.
          </motion.p>
        </div>

        {/* Main Content */}
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
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg bg-background md:text-2xl leading-relaxed text-justify text-gray-800 dark:text-gray-200"
              >
                <p className="mb-6">
                  At{" "}
                  <span className="font-semibold text-black dark:text-white">
                    U-Fill Academy
                  </span>
                  , we believe that education should be more than just textbooks and tests. Our mission is to help every student discover their unique potential through innovative learning experiences and real-world application.
                </p>
                <p className="mb-6">
                  We combine technology, creativity, and mentorship to create a dynamic environment where students not only excel academically but also grow emotionally and intellectually.
                </p>
                <p className="mb-6">
                  From coding and robotics to arts, fitness, and life skills — we ensure each learner gains the confidence and curiosity to lead in an ever-changing world.
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Gradient Fade */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none transition-colors" />
          )}

          {/* Gradient Button */}
          <div className="text-center mt-6">
            <motion.button
              onClick={() => setExpanded(!expanded)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              aria-expanded={expanded ? "true" : "false"}
              aria-controls="about-content"
              className="inline-flex items-center gap-2 px-6 py-3 
                         bg-[linear-gradient(90deg,_#8b5cf6,_#4c1d95)] 
                         text-white font-medium rounded-full 
                         hover:opacity-90 transition-all border border-transparent"
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
            </motion.button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Courses" },
            { number: "1000+", label: "Students" },
            { number: "25+", label: "Expert Tutors" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="text-center p-6 bg-background rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:shadow-gray-500/10 dark:hover:shadow-gray-500/20 transition-all duration-300"
            >
              <div className="font-climate-crisis text-2xl md:text-3xl text-black dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
