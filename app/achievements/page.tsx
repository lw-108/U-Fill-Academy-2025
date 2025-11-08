"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import MegaNavbar from "@/components/sections/MegaNavbar";
import BlendCursor from "@/components/BlendCursor";

export default function AchievementsPage() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white">
      <MegaNavbar />
      <BlendCursor />

      {/* === MAIN CONTENT === */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bowlby text-3xl md:text-4xl lg:text-6xl font-normal text-foreground mb-6"
          >
            Our Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Empowering learners through innovation, technology, and real-world
            learning experiences.
          </motion.p>
        </div>

        {/* === Achievements Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* 1️⃣ Free Python Webinar */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex justify-center items-center p-4 bg-black/40">
              <Image
                src="/images/python-webinar.jpg"
                alt="Free Python Webinar"
                width={480}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                Free Python Webinar for College Students
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Conducted an engaging hands-on Python programming webinar to
                enhance coding literacy among college students.
              </p>
            </div>
          </div>

          {/* 2️⃣ App Development Webinar */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex justify-center items-center p-4 bg-black/40">
              <Image
                src="/images/app-dev.jpg"
                alt="App Development Webinar"
                width={480}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                Free App Development Webinar for School Students
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Introduced young innovators to app development, nurturing
                creativity and problem-solving through practical learning.
              </p>
            </div>
          </div>

          {/* 3️⃣ Tamil Orientation Event */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex justify-center items-center p-4 bg-black/40">
              <Image
                src="/images/tamil-contest.jpg"
                alt="Tamil Orientation Event"
                width={480}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                Tamil Orientation Event on International Peace Day
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Hosted a Tamil orientation event promoting unity and peace
                through language and culture on International Peace Day.
              </p>
            </div>
          </div>

          {/* 4️⃣ AI & Robotics Sessions */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex justify-center items-center p-4 bg-black/40">
              <Image
                src="/images/robotics.jpg"
                alt="AI and Robotics Sessions"
                width={480}
                height={300}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                Free AI & Robotics Sessions at Meenakshi Academy
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Conducted free AI and Robotics workshops for school students,
                introducing the fundamentals of intelligent systems and
                automation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
