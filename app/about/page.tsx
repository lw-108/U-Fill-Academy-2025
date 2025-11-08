"use client";

import MegaNavbar from "@/components/sections/MegaNavbar";
import BlendCursor from "@/components/BlendCursor";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="w-full py-20 sm:py-24 bg-background transition-colors duration-500"
    >
      {/* Global UI Elements */}
      <MegaNavbar />
      <BlendCursor />

      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-bowlby text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-black dark:text-white mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering students through innovative education and holistic
            development.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 border border-white/20 dark:bg-black/40 dark:border-gray-800">
          <p className="mb-8 text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed">
            At{" "}
            <span className="font-semibold text-black dark:text-white">
              U-Fill Academy
            </span>
            is an educational initiative built on the principle of “Education for All.”
            Our core motive is to serve society by providing free and accessible education to tribal
            students and children from economically weaker sections
          </p>

          <p className="mb-8 text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed">
            We believe that every child deserves quality learning opportunities, regardless of
            background or financial status. By offering free academic support, tuition classes, and
            career guidance, U Fill Academy ensures that underprivileged students get equal
            access to knowledge and skills
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed">
            Along with core academics, we also provide Co-Curricular (CCA) and Extra-Curricular
            (ECA) programs that help students grow holistically. From foundation classes,
            JEE/NEET/GATE guidance, to sports, arts, personality development, and skill training,
            we create an environment where learning is not just about passing exams, but also
            about building confidence, creativity, and character
          </p>
        </div>
      </div>
    </section>
  );
}
