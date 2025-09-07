"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Sparkles, ArrowRight } from "lucide-react";
import { benefits } from "@/lib/display-constants";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

export function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const renderBenefitCard = (
    benefit: (typeof benefits)[number],
    index: number
  ) => {
    const IconComponent = benefit.icon;
    const isHovered = hoveredCard === index;

    return (
      <div
        key={index}
        className={cn(
          `relative group cursor-pointer transition duration-700 h-full`,
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <Card
          className={cn(
            `
          relative overflow-hidden border-0 bg-slate-900/40 backdrop-blur-xl 
          transition-all duration-500 h-full min-h-[320px]
          hover:scale-105 hover:-translate-y-2 hover:shadow-2xl`,
            isHovered &&
              `shadow-2xl shadow-${benefit.color.split("-")[1]}-500/25`
          )}
        >
          {/* Animated gradient background */}
          <div
            className={`
            absolute inset-0 bg-gradient-to-br ${benefit.bgColor} 
            opacity-50 group-hover:opacity-100 transition-all duration-500
          `}
          />

          {/* Glowing border effect */}
          <div
            className={`
            absolute inset-0 rounded-lg bg-gradient-to-br ${benefit.color}
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
            blur-xl scale-105
          `}
          />

          {/* Category badge */}
          <div className="absolute top-4 right-4 z-20">
            <div
              className={`
              px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${benefit.color}
              text-white shadow-lg transform rotate-3 group-hover:rotate-0
              transition-all duration-300
            `}
            >
              {benefit.category}
            </div>
          </div>

          {/* Value indicator */}
          <div className="absolute top-4 left-4 z-20">
            <div
              className={`
              px-3 py-1 rounded-full text-sm font-bold bg-white/10 backdrop-blur-sm
              text-white border border-white/20 group-hover:scale-110
              transition-all duration-300
            `}
            >
              {benefit.value}
            </div>
          </div>

          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
                backgroundSize: "30px 30px, 30px 30px, 20px 20px",
              }}
            />
          </div>

          <CardHeader className="relative z-10 pb-4 pt-16">
            {/* Icon container */}
            <div className="relative mb-6">
              <div
                className={`
                w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl 
                flex items-center justify-center shadow-lg
                group-hover:scale-110 group-hover:rotate-12 transition-all duration-500
                relative z-10
              `}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>

              {/* Icon glow effect */}
              <div
                className={`
                absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color}
                opacity-0 group-hover:opacity-75 transition-opacity duration-500
                blur-lg scale-150 -z-10
              `}
              />

              {/* Floating sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className={`
                      absolute w-4 h-4 text-white opacity-0 group-hover:opacity-60
                      transition-all duration-1000 animate-pulse
                    `}
                    style={{
                      left: `${-10 + i * 35}%`,
                      top: `${-10 + i * 20}%`,
                      animationDelay: `${i * 500}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            <CardTitle
              className={`
              text-2xl font-bold bg-gradient-to-r ${benefit.color}
              bg-clip-text text-transparent group-hover:text-white
              transition-all duration-500 leading-tight
            `}
            >
              {benefit.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="relative z-10 pt-0">
            <p className="text-slate-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-4">
              {benefit.description}
            </p>

            {/* Call to action */}
            <div
              className={`
              flex items-center gap-2 text-sm font-medium opacity-0 
              group-hover:opacity-100 transition-all duration-500 delay-200
              text-gradient bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent
              group-hover:text-white
            `}
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </CardContent>

          {/* Hover particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {isHovered &&
              [...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`
                  absolute w-1 h-1 bg-gradient-to-r ${benefit.color} rounded-full
                  animate-float opacity-60
                `}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 200}ms`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Why Should
              <br />
              <div className="relative">
                <span className="text-background z-1">You Join</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-sidebar-accent to-secondary-foreground opacity-20 blur-2xl rounded-lg animate-pulse" />
              </div>
            </h2>
          </div>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto text-pretty leading-relaxed">
            Discover the{" "}
            <span className="text-transparent bg-gradient-to-r from-sidebar-accent to-secondary-foreground bg-clip-text font-semibold">
              incredible benefits
            </span>{" "}
            and
            <span className="text-transparent bg-gradient-to-r from-accent-foreground to-secondary bg-clip-text font-semibold">
              {" "}
              opportunities
            </span>{" "}
            waiting for you
          </p>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Benefits Grid */}
        {isMobile ? (
          <Carousel className="w-full relative flex gap-2 px-10">
            <CarouselPrevious className="absolute left-0 z-10 text-background w-12 h-12" />
            <CarouselContent className="w-full px-2 py-5">
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="w-full">
                  {renderBenefitCard(benefit, index)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute right-0 z-10 text-background w-12 h-12" />
          </Carousel>
        ) : (
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {benefits
                .slice(0, 3)
                .map((benefit, index) => renderBenefitCard(benefit, index))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {benefits
                .slice(3)
                .map((benefit, index) => renderBenefitCard(benefit, index + 3))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <Trophy className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-white font-semibold text-lg">
              Ready to claim your benefits?
            </span>
            <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
