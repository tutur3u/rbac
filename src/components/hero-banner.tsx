"use client";

import FlipCountdown from "@/components/flip/FlipCountdown";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

const TEMP_DATE = new Date("2025-11-30T23:59:59");

export function HeroBanner() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3);
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5);
  const { elementRef: contentRef, offset: contentOffset } = useParallax(0.1);

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 opacity-40 bg-cover bg-bottom md:bg-center w-full h-full",
          `bg-[url('/backgrounds/rbac-hero-mobile.png')] md:bg-[url('/backgrounds/rbac.png')]`,
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
        className="relative z-10 h-full
         px-4 pt-20 pb-3 md:py-20 
         flex flex-col items-start justify-center gap-4 sm:gap-8
         min-h-screen text-center"
      >
        <div
          className="text-5xl md:text-7xl font-bold text-white glow-effect
        flex flex-col items-start"
        >
          <p className="text-center md:text-left w-full text-xl md:text-3xl font-bold italic text-white">
            RMIT BUSINESS
          </p>
          <p className="text-center md:text-left w-full bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
            Analytics Champion
          </p>
          <p className="text-center md:text-left w-full text-white">Season 6</p>
        </div>

        <p
          className="text-lg md:text-xl text-blue-100 max-w-2xl text-pretty text-left 
        leading-relaxed indent-4"
        >
          Join the most innovative technology competition of the year. Shape the
          future with cutting-edge solutions and breakthrough innovations that
          will define tomorrow's digital landscape.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            size="lg"
            className="text-lg px-10 py-6 
            bg-gradient-to-br to-background/80 from-secondary/30
            glow-effect transform hover:scale-105 
            text-background
            transition-all duration-300 hologram-border"
          >
            REGISTER NOW
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6 border-2 border-secondary
             text-background hover:text-background hover:bg-secondary/10 hover:border-secondary-foreground bg-secondary
             glow-effect transform hover:scale-105 transition-all duration-300"
          >
            EXPLORE COMPETITION
          </Button>
        </div>
        <FlipCountdown deadline={TEMP_DATE} />

        <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full pulse-glow"></div>
            <span>REGISTRATION PENDING</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full pulse-glow"></div>
            <span>+1k PARTICIPANTS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full pulse-glow"></div>
            <span>AMAZING BENEFITS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
