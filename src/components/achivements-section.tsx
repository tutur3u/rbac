"use client";

import { useParallax, useIntersectionObserver } from "@/hooks/use-parallax";
import { achievements } from "@/lib/display-constants";

export function AchievementsSection() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3);
  const { elementRef: shapesRef, offset: shapesOffset } = useParallax(0.4);
  const { elementRef: sectionRef, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-blue-950 relative overflow-hidden"
    >
      <div
        className="absolute bg-[url('/backgrounds/block-bg.jpg')]
        opacity-10 inset-0 blur-xs
        bg-cover bg-center"
      ></div>

      {/* <div className="bg-primary/30 backdrop-filter-lg"></div> */}

      <div ref={bgRef} className="absolute inset-0 matrix-bg opacity-30"></div>
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      <div
        ref={shapesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ transform: `translateY(${shapesOffset}px)` }}
      >
        <div className="absolute top-20 left-1/4 w-4 h-4 border border-blue-400/30 rotate-45 float-animation"></div>
        <div
          className="absolute bottom-32 right-1/4 w-6 h-6 border border-purple-400/30 rotate-12 float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-3 h-3 border border-cyan-400/30 rotate-45 float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-effect">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              OUR ACHIEVEMENTS
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-pretty leading-relaxed">
            Numbers that showcase our impact on the global tech community and
            innovation ecosystem
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl glow-effect group-hover:scale-110 transform">
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-all duration-500 pulse-glow`}
                >
                  {achievement.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {achievement.number}
                </div>
                <div className="text-blue-200 font-medium text-sm leading-tight">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
