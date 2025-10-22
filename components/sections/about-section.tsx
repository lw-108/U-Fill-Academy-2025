"use client";

import { useState } from "react";
import ScrambledText from "@/components/Scrambledtext";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative z-10 px-6 py-16 md:py-24 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="font-climate-crisis text-4xl md:text-6xl text-center font-normal text-foreground">
          About Us
        </h2>
      </div>

      {/* Animated Expand/Collapse Container */}
      <div
        className={`max-w-4xl mx-auto overflow-hidden transition-all duration-700 ease-in-out ${
          expanded ? "max-h-[4000px]" : "max-h-[250px]"
        }`}
      >
        <ScrambledText
          className="scrambled-text-demo text-base sm:text-lg md:text-2xl leading-relaxed text-justify text-foreground/90"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          U Fill Academy is an educational initiative built on the principle of “Education for All.”
          Our core motive is to serve society by <br /> providing free and accessible education to tribal
          students and <br /> children from economically weaker sections.
          <br />
          <br />
          We believe that every child deserves quality learning <br />opportunities, regardless of
          background or financial status. By offering free academic support, tuition classes, and
          career guidance, <br />U Fill Academy ensures that underprivileged students get equal
          access to <br /> knowledge and skills.
          <br />
          <br />
          Along with core academics, we also provide Co-Curricular (CCA) and Extra-Curricular
          (ECA) programs that help students grow holistically. From foundation classes,
          JEE/NEET/GATE guidance, to sports, arts, personality development, and skill training,
          we create an environment where learning is not just about passing exams, but also
          about building confidence, creativity, and character.
        </ScrambledText>
      </div>

      {/* Gradient Fade for Hidden Text */}
      {!expanded && (
        <div className="absolute bottom-32 left-0 right-0 mx-auto h-20 pointer-events-none"></div>
      )}

      {/* Toggle Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-8 py-3 rounded-2xl border-2 border-foreground/20 text-foreground/80 text-base sm:text-lg font-semibold hover:scale-105 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
        >
          {expanded ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>
    </section>
  );
}
