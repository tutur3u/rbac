"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { criteria } from "@/lib/display-constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function EligibilitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderCard = (
    criterion: (typeof criteria)[number],
    index: number,
    isFirstRow = false,
  ) => {
    const IconComponent = criterion.icon;
    const isLarge = !isFirstRow;

    return (
      <div
        key={index}
        className={cn(
          `relative group cursor-pointer transition duration-700 h-full`,
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
          {
            isLarge: "lg:col-span-1",
          },
        )}
        style={{ animationDelay: criterion.delay }}
        onMouseEnter={() => setActiveCard(index)}
        onMouseLeave={() => setActiveCard(null)}
      >
        <Card
          className={cn(
            `relative overflow-hidden border-0 bg-gradient-to-br from-slate-900/50 to-slate-800/30 
            backdrop-blur-xl transition-all duration-500 h-full
            hover:scale-105 hover:rotate-1 hover:shadow-2xl
            active:scale-105 active:rotate-1 active:shadow-2xl`,
            {
              "shadow-2xl shadow-primary/25": activeCard === index,
              "lg:min-h-[200px]": isLarge,
              "min-h-[180px]": !isLarge,
            },
          )}
        >
          {/* Animated background gradient */}
          <div
            className={`
            absolute inset-0 bg-gradient-to-br ${criterion.color} opacity-0 
            group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-500
          `}
          />

          {/* Glowing border effect */}
          <div
            className={`
            absolute inset-0 rounded-lg bg-gradient-to-br ${criterion.color} 
            opacity-0 group-hover:opacity-10 group-active:opacity-10 transition-opacity duration-500 -z-10
            blur-xl scale-105
          `}
          />

          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 group-active:opacity-10 transition-opacity duration-500">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id={`circuit-${index}`}
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 10h20M10 0v20"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <circle cx="10" cy="10" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill={`url(#circuit-${index})`}
              />
            </svg>
          </div>

          <CardHeader className="relative z-10 pb-3">
            <div className="flex items-center gap-4">
              <div
                className={`
                relative p-3 rounded-xl bg-gradient-to-br ${criterion.color} 
                shadow-lg group-hover:shadow-xl transition-all duration-500
                group-hover:scale-110 group-hover:rotate-12
                group-active:scale-110 group-active:rotate-12 group-active:shadow-xl
              `}
              >
                <IconComponent className="w-6 h-6 text-white" />

                {/* Icon glow effect */}
                <div
                  className={`
                  absolute inset-0 rounded-xl bg-gradient-to-br ${criterion.color} 
                  opacity-0 group-hover:opacity-75 group-active:opacity-75 transition-opacity duration-500
                  blur-lg scale-150 -z-10
                `}
                />
              </div>

              <div className="flex-1">
                <CardTitle
                  className={`
                  text-xl font-bold bg-gradient-to-r ${criterion.textColor} 
                  bg-clip-text text-transparent group-hover:text-white group-active:text-white
                  transition-all duration-500 ${isLarge ? "lg:text-2xl" : ""}
                `}
                >
                  {criterion.title}
                </CardTitle>

                {/* Animated underline */}
                <div
                  className={`
                  h-0.5 bg-gradient-to-r ${criterion.color} mt-2 
                  w-0 group-hover:w-full group-active:w-full transition duration-700
                `}
                />
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 pt-0">
            <p
              className={cn(
                "text-primary-foreground leading-relaxed transition-all duration-500",
                "group-hover:text-background/90 group-active:text-background/90",
                {
                  "lg:text-lg": isLarge,
                  "text-base": !isLarge,
                },
              )}
            >
              {criterion.description}
            </p>

            {/* Success indicator */}
            <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 delay-200">
              <CheckCircle className={`w-4 h-4 text-green-400`} />
              <span className="text-sm text-green-400 font-medium">
                Requirement Clear
              </span>
            </div>
          </CardContent>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`
                  absolute w-1 h-1 bg-gradient-to-r ${criterion.color} rounded-full
                  opacity-0 group-hover:opacity-60 group-active:opacity-60 transition-all duration-1000
                  animate-float
                `}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: `${2 + i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section
      className="py-20 relative overflow-hidden bg-gradient-to-br 
    from-primary via-secondary to-primary/60"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-foreground/40 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sidebar-accent/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 tech-grid opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Who Can Join Our
              <br />
              <div className="relative">
                <span className="text-background z-1">Competition</span>
                <div
                  className="absolute -inset-1 
                bg-gradient-to-r from-blue-500 to-secondary opacity-20 blur-lg rounded-lg animate-pulse"
                />
              </div>
            </h2>
          </div>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            Meet these futuristic criteria to participate in our
            <span className="text-accent-foreground font-semibold">
              {" "}
              innovative tech challenge
            </span>
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary-foreground to-transparent rounded-full" />
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed">
            Hover the card to see the
            <span className="text-accent-foreground font-semibold"> magic</span>
          </p>
        </div>

        {isMobile ? (
          <Carousel className="w-full relative px-10">
            <CarouselPrevious className="absolute left-0 z-10 text-background w-12 h-12" />
            <CarouselContent className="w-full px-2 py-5">
              {criteria.map((criterion, index) => (
                <CarouselItem key={index} className="w-full">
                  {renderCard(criterion, index, false)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute right-0 z-10 text-background w-12 h-12" />
          </Carousel>
        ) : (
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {criteria
                .slice(0, 3)
                .map((criterion, index) => renderCard(criterion, index, true))}
            </div>

            {/* Second Row - 2 Items */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {criteria
                .slice(3, 5)
                .map((criterion, index) =>
                  renderCard(criterion, index + 3, false),
                )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
