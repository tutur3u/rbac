"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useParallax, useIntersectionObserver } from "@/hooks/use-parallax";
import { achievements } from "@/lib/display-constants";
import { floatAnimation } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

// Animation variants
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
  hidden: { opacity: 0, y: 30 },
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
} as Variants;

const iconVariants = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    rotate: 12,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
} as Variants;


export function AchievementsSection() {
  const isMobile = useIsMobile();

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-slate-900 to-blue-950 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div
        className="absolute bg-[url('/backgrounds/block-bg.jpg')]
        opacity-10 inset-0 blur-xs
        bg-cover bg-center"
      ></div>

      <div className="absolute inset-0 matrix-bg opacity-70"></div>
      <div className="absolute inset-0 tech-grid opacity-50"></div>

      {/* Animated floating shapes */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none z-1 transition-transform duration-100"
      >
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border border-blue-400/40 rotate-45"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-20 h-20 border border-purple-400/50 rotate-12"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-10 h-10 border border-cyan-400/80 rotate-45"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-effect">
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              ACHIEVEMENTS
            </motion.span>
          </h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto text-pretty leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Numbers that showcase our impact on the global tech community and
            innovation ecosystem
          </motion.p>
        </motion.div>

        {/* Achievements Grid/Carousel */}
        {isMobile ? (
          <Carousel className="w-full relative px-10">
            <CarouselPrevious className="absolute left-0 z-10 text-background w-12 h-12" />
            <CarouselContent className="w-full px-2 py-5">
              {achievements.map((achievement, index) => (
                <CarouselItem key={index}>
                  <motion.div variants={cardVariants} whileHover="hover">
                    <AchivementCard achievement={achievement} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute right-0 z-10 text-background w-12 h-12" />
          </Carousel>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={cn("col-span-2 lg:col-span-1", {
                  "col-start-2 lg:col-start-auto": index === 3,
                  "col-start-4 lg:col-start-auto": index === 4,
                })}
              >
                <AchivementCard achievement={achievement} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

function AchivementCard({
  achievement,
}: {
  achievement: (typeof achievements)[number];
}) {
  return (
    <motion.div className="text-center group h-full">
      <div
        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl h-full
       p-8 border-2 border-slate-700/50 hover:border-blue-400/50 transition duration-250 hover:shadow-2xl glow-effect"
      >
        {/* Icon with animation */}
        <motion.div
          className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center text-white
            shadow-lg shadow-accent-foreground/15`}
          variants={iconVariants}
          whileHover="hover"
        >
          {achievement.icon}
        </motion.div>

        {/* Number */}
        <motion.div
          className="text-3xl sm:text-2xl md:text-3xl font-bold text-background mb-3
           group-hover:text-blue-300 transition-colors"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {achievement.number}
        </motion.div>

        {/* Label */}
        <motion.div
          className="text-blue-200 grow font-medium text-lg md:text-sm leading-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {achievement.label}
        </motion.div>
      </div>
    </motion.div>
  );
}
