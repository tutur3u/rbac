"use client";

import { useState, useEffect } from "react";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import RulesRegulations from "@/components/seasons/6/rules-regulations";
import { prizesSeason6, roundSeason6 } from "@/lib/season6-constants";
import Season6Sponsors from "@/components/seasons/6/season-6-sponsors";
import Season6Judges from "@/components/seasons/6/season-6-judges";

// Optimized animation variants with reduced complexity
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function RBACCompetitionPage() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.2); // Reduced parallax intensity
  const [activeRound, setActiveRound] = useState("round1");
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const sectionRef = useRef(null);

  // Optimized interval with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrizeIndex((prev) => (prev + 1) % prizesSeason6.length);
    }, 5000); // Increased interval for better performance
    return () => clearInterval(interval);
  }, [prizesSeason6.length]);

  // Simplified floating orb with reduced animations
  const FloatingOrb = ({
    delay,
    size,
    color,
    position,
  }: {
    delay: number;
    size: string;
    color: string;
    position: string;
  }) => (
    <motion.div
      className={`absolute ${position} ${size} ${color} rounded-full blur-xl opacity-40`}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8, // Slower animation
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Simplified Background */}
      <div
        className={cn(
          "absolute inset-0 opacity-20 bg-cover bg-center w-full h-full",
          `bg-[url('/backgrounds/rbac-hero-mobile.png')] md:bg-[url('/backgrounds/rbac.png')]`
        )}
      />

      {/* Reduced number of floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingOrb
          delay={0}
          size="w-24 h-24"
          color="bg-blue-500/10"
          position="top-20 left-10"
        />
        <FloatingOrb
          delay={4}
          size="w-32 h-32"
          color="bg-purple-500/10"
          position="bottom-32 right-20"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-3 md:pb-16 md:pt-28">
        {/* Hero Section */}
        <motion.div variants={staggerContainer} className="text-center mb-12">
          <div className="flex justify-center flex-col items-center gap-3 mb-6">
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
          </div>
          <motion.p
            variants={slideInRight}
            className="text-sm md:text-base lg:text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Choose Experience - RBAC Season 6 invites students to step beyond
            the classroom and choose experience. More than just a competition,
            RBAC is a journey of tackling real business challenges through data
            analytics, building teamwork, and learning from industry experts.
          </motion.p>
        </motion.div>

        {/* Rules and Regulations - Simplified */}
        <RulesRegulations
          fadeInUp={fadeInUp}
          itemVariants={itemVariants}
          staggerContainer={staggerContainer}
        />

        {/* Competition Timeline - Optimized */}
        <motion.section variants={fadeInUp} className="mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            Competition Timeline
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30"
          >
            {/* Simplified Round Selection */}
            <motion.div
              variants={staggerContainer}
              className="flex overflow-x-auto pb-4 mb-6 gap-2 scrollbar-hide"
            >
              {roundSeason6.map((round) => (
                <motion.button
                  key={round.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveRound(round.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-all duration-200 border flex-shrink-0 text-sm",
                    activeRound === round.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent"
                      : "bg-slate-700/30 text-blue-200 border-slate-600 hover:bg-slate-700/50"
                  )}
                >
                  {round.icon} {round.title.split(":")[0]}
                </motion.button>
              ))}
            </motion.div>

            {/* Round Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRound}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {roundSeason6
                  .filter((round) => round.id === activeRound)
                  .map((round) => (
                    <div key={round.id} className="space-y-4">
                      <motion.div
                        className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-4"
                        whileHover={{ y: -1 }}
                      >
                        <h3 className="text-lg font-semibold text-white mb-2">
                          📅 {round.title}
                        </h3>
                        <p className="text-blue-100">{round.date}</p>
                        <p className="text-blue-200 text-sm mt-2">
                          {round.format}
                        </p>
                      </motion.div>
                      <motion.div
                        className="bg-slate-900/30 border border-slate-600/30 rounded-lg p-4"
                        whileHover={{ y: -1 }}
                      >
                        <h3 className="text-lg font-semibold text-white mb-2">
                          📝 Description
                        </h3>
                        <p className="text-blue-100 text-sm">
                          {round.description}
                        </p>
                      </motion.div>
                    </div>
                  ))}

                <motion.div
                  className="bg-gradient-to-br from-slate-900/30 to-blue-900/20 border border-slate-600/30 rounded-lg p-4"
                  whileHover={{ y: -1 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🎯 What to Expect
                  </h3>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    {[
                      "Real-world business challenges",
                      "Industry expert mentorship",
                      "Networking opportunities",
                      "Career development",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* Prize Structure - Optimized */}
        <motion.section variants={fadeInUp} className="mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-2 text-center uppercase"
          >
            Total Prize value
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold
            mb-6
            text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-yellow-300"
          >
            10.855.334.800VND
          </motion.p>

          {/* Featured Prize */}
          <motion.div variants={itemVariants} className="mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPrizeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "bg-gradient-to-r backdrop-blur-sm rounded-xl p-6 text-center border border-secondary/20",
                  prizesSeason6[currentPrizeIndex].bgGradient
                )}
              >
                <div className="flex items-center justify-center flex-col gap-4 mb-4">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl",
                      `bg-gradient-to-r ${prizesSeason6[currentPrizeIndex].gradient}`
                    )}
                  >
                    {prizesSeason6[currentPrizeIndex].position}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {prizesSeason6[currentPrizeIndex].place}
                  </h3>
                  <p
                    className={cn(
                      "text-2xl font-bold bg-gradient-to-tl bg-clip-text text-transparent",
                      prizesSeason6[currentPrizeIndex].gradient
                    )}
                  >
                    {prizesSeason6[currentPrizeIndex].amount}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Simplified Carousel Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {prizesSeason6.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPrizeIndex
                      ? "bg-blue-400 scale-125"
                      : "bg-slate-600"
                  }`}
                  onClick={() => setCurrentPrizeIndex(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* All Prizes Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {prizesSeason6.map((prize, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className={cn(
                  `bg-gradient-to-b backdrop-blur-sm rounded-lg p-4 border text-center h-full 
                  flex flex-col justify-start`,
                  prize.bgGradient,
                  `border-secondary/30`
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold",
                    `bg-gradient-to-br`,
                    prize.gradient
                  )}
                >
                  {prize.position}
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {prize.place}
                </h4>
                <p className="text-lg font-bold text-white">{prize.amount}</p>
                <p className="text-blue-200 text-xs mt-1">
                  {prize.extra ?? "\u00A0"}
                </p>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4"
                >
                  <ul className="space-y-2 text-blue-100 text-sm">
                    {prizesSeason6[index].descs.map((desc, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start text-left"
                      >
                        <span className="text-yellow-400 mr-2">•</span>
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Judges Section - Optimized */}
        <Season6Judges
          fadeInUp={fadeInUp}
          itemVariants={itemVariants}
          staggerContainer={staggerContainer}
        />

        <Season6Sponsors
          fadeInUp={fadeInUp}
          itemVariants={itemVariants}
          staggerContainer={staggerContainer}
        />
      </div>
    </motion.div>
  );
}
