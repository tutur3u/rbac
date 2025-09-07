"use client";

import { useParallax, useIntersectionObserver } from "@/hooks/use-parallax";

export function PartnersSection() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.2);
  const { elementRef: sectionRef, isVisible } = useIntersectionObserver(0.1);

  const partners = [
    "/partners/aiesec.png",
    "/partners/basevn.png",
    "/partners/chotot.png",
    "/partners/cjfoods.png",
    "/partners/deloitte.png",
    "/partners/enviet.png",
    "/partners/ftms-global.png",
    "/partners/kpmg.png",
    "/partners/masan.png",
    "/partners/mazars.png",
    "/partners/pmax.png",
    "/partners/sapp.png",
    "/partners/shb.png",
    "/partners/shopee.png",
    "/partners/suntory.png",
    "/partners/tomorrow-markers.png",
    "/partners/unilever.png",
    "/partners/yahon.png",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-blue-950 dark:to-slate-900 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center w-full h-full
        bg-[url('/backgrounds/plain-light-bg.png')]"

      ></div>

      <div
        ref={bgRef}
        className="absolute inset-0 tech-grid opacity-10"
        style={{ transform: `translateY(${bgOffset}px)` }}
      ></div>
      <div
        className="absolute top-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl float-animation"
        style={{ transform: `translateY(${bgOffset * 0.6}px)` }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl float-animation"
        style={{
          animationDelay: "3s",
          transform: `translateY(${bgOffset * 0.8}px)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              OUR PARTNERS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Trusted by leading technology companies and organizations worldwide
            in shaping the future of innovation
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              className={`break-inside-avoid bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-white/10
                     hover:bg-white/10 transition-all duration-300 hover:scale-105 
                     w-full`}
              alt={`Partner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
