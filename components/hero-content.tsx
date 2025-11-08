"use client";

import ShaderBackground from "./shader-background";
import Spline from "@splinetool/react-spline";

export default function HeroContent() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* === Spline 3D Background (Visible only on md and up) === */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <Spline
          scene="https://prod.spline.design/1ECBuJ4ZTAcjEI2K/scene.splinecode"
          className="w-full h-full absolute top-20"
        />
      </div>

      {/* === Shader Background (Visible only on mobile) === */}
      <div className="absolute inset-0 z-10 block md:hidden">
        <ShaderBackground>
          <div />
        </ShaderBackground>
      </div>

      {/* === Content Overlay === */}
      <main className="absolute bottom-8 left-4 md:left-8 z-20 max-w-lg">
        <div className="text-left">
          {/* Tag */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">
              ✨ Welcome to U-Fill Academy
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl md:leading-[1.15] tracking-tight font-light text-white mb-4">
            <span className="font-medium italic instrument">U-Fill</span> Academy —
            <br />
            <span className="font-light tracking-tight text-white">
              Where Curiosity Meets Excellence
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base font-light text-white/70 mb-6 leading-relaxed max-w-md">
            Empowering lifelong learners through innovative education, caring mentors,
            and global collaboration. Our child-centered, holistic approach nurtures
            creativity, confidence, and real-world problem-solving.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <button className="px-6 md:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
              Explore Programs
            </button>
            <button className="px-6 md:px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:opacity-90 cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
      </main>

      {/* === SVG Filter for Glass Effect === */}
      <svg className="absolute inset-0 pointer-events-none" style={{ height: 0 }}>
        <defs>
          <filter id="glass-effect">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 12 -6"
              result="glass"
            />
            <feComposite in="SourceGraphic" in2="glass" operator="over" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
