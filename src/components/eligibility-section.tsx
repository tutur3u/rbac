"use client";
import { useState } from "react";
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
import { motion, Variants } from "motion/react";

// Animation variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
} as Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
} as Variants;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -8,
    rotate: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
} as Variants;

const iconVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.2,
    rotate: 12,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
} as Variants;

export function EligibilitySection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const renderCard = (
    criterion: (typeof criteria)[number],
    index: number,
    isFirstRow = false
  ) => {
    const IconComponent = criterion.icon;
    const isLarge = !isFirstRow;

    return (
      <div
        key={index}
        className={cn(
          `relative group cursor-pointer transition duration-700 h-full`,
          { isLarge: "lg:col-span-1" }
        )}
        style={{ animationDelay: criterion.delay }}
        onMouseEnter={() => setActiveCard(index)}
        onMouseLeave={() => setActiveCard(null)}
      >
        <Card
          className={cn(
            `relative overflow-hidden border-0 bg-gradient-to-br from-slate-900/50 to-slate-800/30 
            backdrop-blur-xl transition h-full gap-2 md:gap-4
            hover:scale-105 hover:rotate-1 hover:shadow-2xl
            active:scale-105 active:rotate-1 active:shadow-2xl`,
            {
              "shadow-2xl shadow-primary/25": activeCard === index,
              "lg:min-h-[200px]": isLarge,
              "min-h-[180px]": !isLarge,
            }
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
            <div className="flex items-center flex-col md:flex-row gap-4">
              <div
                className={cn(
                  `
                relative p-3 rounded-xl bg-gradient-to-br
                shadow-lg group-hover:shadow-xl transition
                group-hover:scale-110 group-hover:rotate-12
                group-active:scale-110 group-active:rotate-12 group-active:shadow-xl
              `,
                  criterion.color
                )}
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
                "text-center md:text-left text-primary-foreground leading-relaxed transition",
                "group-hover:text-background/90 group-active:text-background/90",
                {
                  "lg:text-lg": isLarge,
                  "text-base": !isLarge,
                }
              )}
            >
              {criterion.description}
            </p>

            {/* Success indicator */}
            <div
              className="flex items-center gap-2 justify-center md:justify-start
            mt-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 
            transition delay-200"
            >
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
    <motion.section
      className="py-20 relative overflow-hidden bg-gradient-to-br from-primary via-secondary/30 to-muted/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-foreground/40 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="absolute inset-0 tech-grid opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-4 md:mb-8 lg:mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Who Should Join Our
            </span>
            <br />
            <motion.span
              className="text-background relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Competition
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-secondary opacity-20 blur-lg rounded-lg"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.span>
          </motion.h2>


          {/* Decorative line */}
          <motion.div
            className="mt-8 flex justify-center"
            whileHover={{ scaleX: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary-foreground to-transparent rounded-full" />
          </motion.div>

          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty leading-relaxed mt-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Hover the cards to see the{" "}
            <span className="text-accent-foreground font-semibold">magic</span>
          </motion.p>
        </motion.div>

        {/* Cards Layout - Updated for 4 cards */}
        {isMobile ? (
          <Carousel className="w-full relative px-10">
            <CarouselPrevious className="absolute left-0 z-10 text-primary w-12 h-12" />
            <CarouselContent>
              {criteria.map((criterion, index) => (
                <CarouselItem key={index}>
                  {renderCard(criterion, index)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute right-0 z-10 text-primary w-12 h-12" />
          </Carousel>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {criteria.map((criterion, index) => renderCard(criterion, index))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
