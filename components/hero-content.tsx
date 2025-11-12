"use client";

import Spline from "@splinetool/react-spline";
import ShaderBackground from "./shader-background";

export default function HeroContent() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* === 3D Spline Background === */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Spline
          scene="https://prod.spline.design/1ECBuJ4ZTAcjEI2K/scene.splinecode"
          className="w-full h-full max-w-[1600px] object-contain"
        />
      </div>

      {/* === Shader Overlay for Glow Effect === */}
      <div className="absolute inset-0 z-10">
        <ShaderBackground>
          <div />
        </ShaderBackground>
      </div>

      {/* === Hero Text Content === */}
      <main className="absolute bottom-8 left-4 md:left-8 z-20 max-w-lg">
        <div className="text-left">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
            style={{ filter: "url(#glass-effect)" }}
          >
            <span className="text-white/90 text-xs font-light relative z-10">
              ✨ Welcome to U-Fill Academy
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            <span className="font-medium italic instrument">U-Fill</span> Academy —<br />
            <span className="font-light">Where Curiosity Meets Excellence</span>
          </h1>

          <p className="text-base md:text-lg font-light text-white/70 mb-6 leading-relaxed max-w-md">
            Empowering lifelong learners through innovative education, caring mentors, and
            global collaboration.
          </p>

          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <button className="px-6 md:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50">
              Explore Programs
            </button>
            <button className="px-6 md:px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:opacity-90">
              Apply Now
            </button>
          </div>
        </div>
      </main>

      {/* === SVG Glass Filter === */}
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
