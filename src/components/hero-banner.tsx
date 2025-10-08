"use client";

import FlipCountdown from "@/components/flip/FlipCountdown";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import { floatAnimation, pulseGlow } from "@/lib/motion-variants";
import { BOOKLET_LINK, FORM_LINK } from "@/lib/nav-constants";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

dayjs.extend(utc);
dayjs.extend(timezone);

const TEMP_DATE = dayjs.tz("2025-10-09 17:00:00", "Asia/Ho_Chi_Minh").toDate();

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

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: ["easeOut"],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: ["easeInOut"],
    },
  },
  tap: {
    scale: 0.95,
  },
} as Variants;

export function HeroBanner() {
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background elements */}
      <div
        className={cn(
          "absolute inset-0 opacity-40 md:opacity-100 bg-cover bg-bottom md:bg-center w-full h-full",
          `bg-[url('/backgrounds/rbac-hero-mobile.png')] md:bg-[url('/backgrounds/rbac.png')]`
        )}
      />

      <div className="absolute inset-0 matrix-bg opacity-20 md:opacity-100" />
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Animated floating elements with Framer Motion */}
      <div
        ref={floatingRef}
        className="absolute inset-0 overflow-hidden transition-transform duration-100 z-1"
        style={{ transform: `translateY(${floatingOffset}px)` }}
      >
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/80 rounded-full blur-xl"
          variants={pulseGlow}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500/60 rounded-full blur-lg"
          variants={pulseGlow}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-500/80 rounded-full blur-2xl"
          variants={pulseGlow}
          initial="initial"
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-100"
        style={{ transform: `translateY(${floatingOffset * 0.7}px)` }}
      >
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-400/30 rotate-30"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 border-2 border-purple-400/30 rotate-12"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 3 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-12 h-12 border-2 border-cyan-400/30 rotate-45"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.5 }}
        />
      </div>

      {/* Content with Framer Motion animations */}
      <motion.div
        className="relative z-10 h-full
         px-4 pt-20 pb-3 md:py-20 
         flex flex-col items-center md:items-start justify-center gap-4 sm:gap-8
         min-h-screen text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Images */}
        <motion.div
          className="text-5xl md:text-7xl font-bold text-white glow-effect
          flex flex-col items-center md:items-start gap-4.5 pointer-events-none select-none"
          variants={itemVariants}
        >
          <Image
            src="/hero/hero-caption.png"
            alt="Hero Caption"
            width={2017}
            height={198}
            className="object-contain w-1/2 md:w-1/3 max-w-4xl"
            priority
          />
          <Image
            src="/hero/hero-title.png"
            alt="Hero Title"
            width={2768}
            height={187}
            className="object-contain w-full md:w-2/3 max-w-5xl"
            priority
          />
          <Image
            src="/hero/hero-subtitle.png"
            alt="Hero Subtitle"
            width={1222}
            height={184}
            className="object-contain w-1/2 md:w-1/3 max-w-4xl"
            priority
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base md:text-xl text-blue-100 max-w-2xl text-pretty 
          leading-relaxed text-center md:text-left"
          variants={itemVariants}
        >
          RMIT Business Analytics Champion is one of the pioneering academic
          competitions in data analytics at RMIT, where students apply
          data-driven thinking to solve real-world business problems and connect
          with industry professionals.
        </motion.p>

        {/* Buttons with emphasized animations */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3.5 md:gap-6"
          variants={containerVariants}
        >
          <Link href={FORM_LINK} target="_blank" rel="noopener noreferrer">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                className="text-lg px-10 w-full md:w-auto py-4.5 md:py-6 
                  bg-gradient-to-br to-background/80 from-secondary/80 md:from-secondary/30 glow-effect
                  text-background
                  hologram-border relative overflow-hidden"
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">REGISTER NOW</span>
              </Button>
            </motion.div>
          </Link>

          <Link href={BOOKLET_LINK} target="_blank" rel="noopener noreferrer">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                className="text-lg px-10 w-full md:w-auto py-4.5 md:py-6 rounded-sm 
              border-2 border-background/60
              hover:bg-primary/40
               text-background backdrop-blur-sm bg-background/40 hover:text-card
               glow-effect relative overflow-hidden"
              >
                {/* Subtle pulse effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/30 rounded-sm"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10">EXPLORE COMPETITION</span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Countdown */}
        <FlipCountdown deadline={TEMP_DATE} />
      </motion.div>
    </section>
  );
}
