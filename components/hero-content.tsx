"use client"
import Spline from '@splinetool/react-spline';

export default function HeroContent() {
  return (
    <div className="relative w-full h-screen">
      {/* Spline Background - Hidden on mobile, visible on md and up */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <div className="relative w-full h-full">
          <Spline
            scene="https://prod.spline.design/1ECBuJ4ZTAcjEI2K/scene.splinecode"
            className="w-full h-full absolute top-20" /* Added top-8 to move it down */
          />
        </div>
      </div>

      {/* Content Overlay */}
      <main className="absolute bottom-8 left-4 md:left-8 z-20 max-w-lg">
        <div className="text-left">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">✨ Welcome to U-Fill Academy</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
            <span className="font-medium italic instrument">U-Fill</span> Academy —
            <br />
            <span className="font-light tracking-tight text-white">Where Curiosity Meets Excellence</span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-xs font-light text-white/70 mb-6 leading-relaxed max-w-md">
            Empowering lifelong learners through innovative education, caring mentors, and global collaboration. Our
            child‑centered, holistic approach nurtures creativity, confidence, and real‑world problem‑solving.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <button className="px-6 md:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
              Explore Programs
            </button>
            <button className="px-6 md:px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
      </main>

      {/* Mobile Background Fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black md:hidden z-0">
        {/* Optional: Add some decorative elements for mobile */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* SVG Filter for Glass Effect */}
      <svg className="absolute inset-0 pointer-events-none" style={{ height: 0 }}>
        <defs>
          <filter id="glass-effect">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 12 -6" result="glass" />
            <feComposite in="SourceGraphic" in2="glass" operator="over" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}