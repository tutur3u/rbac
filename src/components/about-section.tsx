/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <> */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParallax, useIntersectionObserver } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function AboutSection() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.2);
  const { elementRef: sectionRef, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-primary to-secondary relative overflow-hidden"
    >
      <Image
        src="/logo.png"
        alt="Logo"
        className="absolute top-20 left-10 object-contain w-24 opacity-20
        transition-transform duration-100"
        style={{
          transform: `translateY(${bgOffset * 0.3}px)`,
        }}
        height={32}
        width={32}
      />
      <Image
        src="/logo.png"
        alt="Logo"
        className="absolute bottom-5 right-5 object-contain w-40 opacity-20
        z-10 pointer-events-none
        transition-transform duration-100"
        style={{
          transform: `translateY(${bgOffset * 0.3}px)`,
        }}
        height={32}
        width={32}
      />

      <div ref={bgRef} className="absolute inset-0 tech-grid opacity-60"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-secondary-foreground/60 rounded-full blur-3xl float-animation"></div>
      <div
        className="absolute bottom-10 left-10 w-40 h-40 bg-sidebar-accent/50 rounded-full blur-3xl float-animation"
        style={{
          animationDelay: "2s",
          transform: `translateY(${bgOffset * 0.6}px)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={cn(`text-center mb-16 transition-all duration-1000`, {
            "opacity-100 translate-y-0": isVisible,
            "opacity-0 translate-y-8": !isVisible,
          })}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
              ABOUT US
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover who we are and what drives our mission to advance
            technology innovation through collaborative competition
          </p>
        </div>

        <div
          className={cn(
            `grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-100`,
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12",
          )}
        >
          <Card
            className="md:col-span-2 lg:col-span-1 border-2 border-sidebar-accent/50 hover:border-sidebar-accent-foreground/70 
          transition duration-100 group bg-primary/80 backdrop-blur-sm glow-effect hover:scale-105"
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-100">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We are a global community of innovators, technologists, and
                visionaries dedicated to pushing the boundaries of what's
                possible. Our platform connects brilliant minds from around the
                world to collaborate on groundbreaking solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/50 hover:border-secondary-foreground/70 transition-all duration-100 group bg-primary/80 backdrop-blur-sm glow-effect hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-100">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where technology serves humanity's greatest
                challenges. We envision a future where innovative solutions
                emerge from collaborative efforts, transforming industries and
                improving lives globally.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-cyan-800/50 hover:border-cyan-600/70 transition-all duration-100 group bg-slate-900/80 backdrop-blur-sm glow-effect hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-100">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To foster innovation through competitive collaboration,
                providing a platform where the brightest minds can showcase
                their talents, learn from peers, and develop solutions that
                shape the future of technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
