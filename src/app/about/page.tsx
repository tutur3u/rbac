"use client";

import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

export default function AboutUs() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3);
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5);
  const { elementRef: contentRef, offset: contentOffset } = useParallax(0.1);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-primary via-secondary to-muted overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 opacity-40 bg-cover bg-bottom md:bg-center w-full h-full",
          `bg-[url('/backgrounds/rbac-hero-mobile.png')] md:bg-[url('/backgrounds/rbac.png')]`
        )}
      />

      <div
        ref={bgRef}
        className="absolute inset-0 matrix-bg opacity-20 md:opacity-100"
      />
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div
        ref={floatingRef}
        className="absolute inset-0 overflow-hidden transition-transform duration-100"
        style={{ transform: `translateY(${floatingOffset}px)` }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl pulse-glow float-animation"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-lg pulse-glow float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl pulse-glow float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-md pulse-glow float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-100"
        style={{ transform: `translateY(${floatingOffset * 0.7}px)` }}
      >
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-400/30 rotate-45 float-animation"></div>
        <div
          className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-purple-400/30 rotate-12 float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-cyan-400/30 rotate-45 float-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 h-full px-4 pt-20 pb-3 md:py-20 
         flex flex-col items-center justify-center gap-8 sm:gap-12
         min-h-screen text-center"
      >
        <div className="text-5xl md:text-7xl font-bold text-white glow-effect">
          <h1 className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
            ABOUT US
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-blue-100">
            RMIT Vietnam Analytics Club SGS
          </p>
        </div>

        <div className="w-full max-w-4xl bg-primary/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-blue-100 text-left">
                  Established in 2008, RMIT Vietnam Analytics Club SGS is
                  dedicated to creating a learning environment for young
                  enthusiasts passionate about data and business analytics.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Core Values
                </h2>
                <ul className="space-y-2 text-blue-100 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    Work hard, play hard
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Family sense
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    Self-development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                    Precious networks
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Fields of Activity
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">
                    Business Analytics
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
                    Data Analytics
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Achievements
                </h2>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4">
                  <p className="text-amber-200 font-semibold">
                    Best Academic Club 7 consecutive years
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                  Major Events
                </h3>
                <ul className="space-y-3 text-blue-100 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                    <span>
                      From Data to Decisions: Your Career Path in Analytics
                      (2025)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                    <span>
                      Exploring Work Culture at PwC - One of the leading BIG4
                      (2024)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                    <span>
                      Listen - Experience - Get Inspired with experts at Samsung
                      Electronics (2024)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                    <span>Workshop: Pathway to BIG4 (2023)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-8">
          <h2 className="text-3xl font-bold text-white mb-6">About RBAC</h2>
          <div className="bg-primary/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Overview
                </h3>
                <p className="text-blue-100 text-left mb-6">
                  A national competition for students established in 2020.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  Core Values
                </h3>
                <ul className="space-y-2 text-blue-100 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    Adaptability
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Business Connection
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    Practicality
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Vision & Mission
                </h3>
                <p className="text-blue-100 text-left mb-4">
                  <span className="font-semibold text-white">Vision:</span> To
                  become an influential business analytics competition in
                  Vietnam, where young people develop data thinking skills,
                  practice practical skills through real-world challenges, and
                  receive practical support from businesses.
                </p>
                <p className="text-blue-100 text-left">
                  <span className="font-semibold text-white">Mission:</span> To
                  provide an experiential playground where students can
                  challenge themselves, practice analytical thinking, and
                  accumulate experience in Business Analytics.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-blue-200 text-center">
                Organizer:{" "}
                <span className="text-white font-semibold">
                  RMIT Analytics Club SGS
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
