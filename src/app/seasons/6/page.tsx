"use client";

import { useState, useEffect } from "react";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useRef } from "react";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const prizeStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function RBACCompetitionPage() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3);
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5);

  const [activeRound, setActiveRound] = useState("round1");
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const sectionRef = useRef(null);

  const prizes = [
    {
      place: "Champion",
      amount: "30,000,000 VND",
      position: 1,
      extras: "Trophy & Certificates",
      gradient: "from-yellow-400 to-amber-600",
      glow: "shadow-yellow-500/30",
    },
    {
      place: "1st Runner Up",
      amount: "15,000,000 VND",
      position: 2,
      extras: "Certificates",
      gradient: "from-gray-400 to-slate-600",
      glow: "shadow-slate-500/30",
    },
    {
      place: "2nd Runner Up",
      amount: "10,000,000 VND",
      position: 3,
      extras: "Certificates",
      gradient: "from-amber-500 to-orange-600",
      glow: "shadow-amber-500/30",
    },
    {
      place: "4th Place",
      amount: "5,000,000 VND",
      position: 4,
      extras: "Certificates",
      gradient: "from-blue-500 to-purple-600",
      glow: "shadow-blue-500/30",
    },
    {
      place: "5th Place",
      amount: "5,000,000 VND",
      position: 5,
      extras: "Certificates",
      gradient: "from-purple-500 to-pink-600",
      glow: "shadow-purple-500/30",
    },
  ];

  const rounds = [
    {
      id: "round1",
      title: "Preliminary Round",
      date: "15/03/2025 - 30/03/2025",
      format: "Online qualification challenge with provided dataset",
      description:
        "Teams analyze a business case study and submit their solutions online",
      icon: "📊",
    },
    {
      id: "round2",
      title: "Semi-Final Round",
      date: "15/04/2025 - 25/04/2025",
      format: "Advanced business case with real-world data",
      description:
        "Shortlisted teams work on complex analytical problems with mentorship",
      icon: "🚀",
    },
    {
      id: "round3",
      title: "Grand Finale",
      date: "10/05/2025",
      format: "Live presentation to industry expert judges",
      description:
        "Finalists present their solutions to a panel of industry professionals",
      icon: "🏆",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrizeIndex((prev) => (prev + 1) % prizes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      className={`absolute ${position} ${size} ${color} rounded-full blur-2xl`}
      animate={{
        y: [0, -40, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 6,
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
      animate={"visible"}
      variants={containerVariants}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div
        className={cn(
          "absolute inset-0 opacity-20 bg-cover bg-bottom md:bg-center w-full h-full",
          `bg-[url('/backgrounds/rbac-hero-mobile.png')] md:bg-[url('/backgrounds/rbac.png')]`
        )}
      />

      <div
        ref={bgRef}
        className="absolute inset-0 matrix-bg opacity-20 md:opacity-100"
      />

      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Animated Floating Orbs */}
      <motion.div
        ref={floatingRef}
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translateY(${floatingOffset}px)` }}
      >
        <FloatingOrb
          delay={0}
          size="w-32 h-32"
          color="bg-blue-500/20"
          position="top-20 left-20"
        />
        <FloatingOrb
          delay={2}
          size="w-24 h-24"
          color="bg-purple-500/20"
          position="top-40 right-32"
        />
        <FloatingOrb
          delay={4}
          size="w-40 h-40"
          color="bg-cyan-500/20"
          position="bottom-32 left-1/3"
        />
        <FloatingOrb
          delay={1}
          size="w-16 h-16"
          color="bg-pink-500/20"
          position="top-1/2 right-1/4"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-3 md:pb-20 md:pt-32">
        {/* Hero Section */}
        <motion.div variants={staggerContainer} className="text-center mb-16">
          <motion.h1
            variants={slideInLeft}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
          >
            RMIT Business Analytics Champion
          </motion.h1>
          <motion.p
            variants={slideInRight}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Season 6: The premier competition for aspiring data analysts and
            business strategists
          </motion.p>
        </motion.div>

        {/* Rules and Regulations */}
        <motion.section variants={fadeInUp} className="mb-20">
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Rules and Regulations
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Eligibility */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-6 transition-all duration-300 hover:border-blue-400/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-blue-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Eligibility
                </h3>
                <ul className="space-y-3 text-blue-100">
                  {[
                    "All nationalities are accepted",
                    "Participants must be undergraduate students currently studying in universities in Vietnam",
                    "Top 5 finalists of previous RBAC seasons are not allowed to participate",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Registration */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-purple-900/30 border border-purple-500/20 rounded-xl p-6 transition-all duration-300 hover:border-purple-400/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-purple-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  Registration
                </h3>
                <ul className="space-y-3 text-blue-100">
                  {[
                    "A team must consist of 4 members",
                    "Each contestant can only join one team",
                    "Teams may consist of students from different universities",
                    "Member changes must be requested before registration closes",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-purple-400 mr-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Notes */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-cyan-900/30 border border-cyan-500/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <motion.div
                    className="w-3 h-3 bg-cyan-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  Notes
                </h3>
                <ul className="space-y-3 text-blue-100">
                  {[
                    "Teams must comply with all regulations and deadlines",
                    "All sessions and submissions must be in English",
                    "Organizers reserve the right to disqualify any violating teams",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-cyan-400 mr-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Round Format */}
        <motion.section variants={fadeInUp} className="mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Competition Timeline
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            {/* Round Selection */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {rounds.map((round, index) => (
                <motion.button
                  key={round.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveRound(round.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl transition-all duration-300 border-2 font-semibold",
                    activeRound === round.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/30"
                      : "bg-slate-700/50 text-blue-200 border-slate-600 hover:bg-slate-700/70"
                  )}
                >
                  {round.icon} {round.title}
                </motion.button>
              ))}
            </motion.div>

            {/* Round Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRound}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {rounds
                  .filter((round) => round.id === activeRound)
                  .map((round) => (
                    <div key={round.id}>
                      <motion.div
                        className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-xl p-6 mb-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className="text-xl font-semibold text-white mb-3">
                          📅 Date
                        </h3>
                        <p className="text-blue-100 text-lg">{round.date}</p>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className="text-xl font-semibold text-white mb-3">
                          🎯 Format
                        </h3>
                        <p className="text-blue-100">{round.format}</p>
                        <p className="text-blue-200 mt-2 text-sm">
                          {round.description}
                        </p>
                      </motion.div>
                    </div>
                  ))}

                <motion.div
                  className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 border border-slate-600/50 rounded-xl p-6 h-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    🏆 What to Expect
                  </h3>
                  <ul className="space-y-3 text-blue-100">
                    <motion.li
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-green-400 mr-3">✓</span>
                      Real-world business challenges
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-green-400 mr-3">✓</span>
                      Industry expert mentorship
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-green-400 mr-3">✓</span>
                      Networking opportunities
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-green-400 mr-3">✓</span>
                      Career development workshops
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* Prize Structure */}
        <motion.section variants={fadeInUp} className="mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Prize Structure
          </motion.h2>

          {/* Featured Prize Carousel */}
          <motion.div variants={itemVariants} className="mb-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPrizeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "bg-gradient-to-r backdrop-blur-sm rounded-2xl p-8 text-center border shadow-2xl",
                  `from-${
                    prizes[currentPrizeIndex].gradient.split(" ")[0]
                  }/20 to-${
                    prizes[currentPrizeIndex].gradient.split(" ")[2]
                  }/20`,
                  `border-${
                    prizes[currentPrizeIndex].gradient.split(" ")[0]
                  }/30`,
                  prizes[currentPrizeIndex].glow
                )}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br rounded-full mb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background: `linear-gradient(45deg, ${prizes[
                      currentPrizeIndex
                    ].gradient
                      .replace("from-", "")
                      .replace("to-", "")
                      .replace(" ", ", ")})`,
                  }}
                >
                  <span className="text-3xl font-bold text-white">
                    {prizes[currentPrizeIndex].position}
                  </span>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {prizes[currentPrizeIndex].place}
                </h3>
                <motion.p
                  className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4"
                  style={{
                    background: `linear-gradient(45deg, ${prizes[
                      currentPrizeIndex
                    ].gradient
                      .replace("from-", "")
                      .replace("to-", "")
                      .replace(" ", ", ")})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {prizes[currentPrizeIndex].amount}
                </motion.p>
                <p className="text-blue-200 text-lg">
                  {prizes[currentPrizeIndex].extras}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Dots */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mt-6 space-x-2"
            >
              {prizes.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPrizeIndex
                      ? "bg-blue-400 scale-125"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  onClick={() => setCurrentPrizeIndex(index)}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* All Prizes Grid */}
          <motion.div
            variants={prizeStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className={cn(
                  "bg-gradient-to-b backdrop-blur-md rounded-xl p-6 text-center border h-64 flex flex-col items-center justify-center relative overflow-hidden",
                  `from-${prize.gradient.split(" ")[0]}/20 to-${
                    prize.gradient.split(" ")[2]
                  }/30`,
                  `border-${prize.gradient.split(" ")[0]}/30 hover:${
                    prize.glow
                  }`
                )}
              >
                <motion.div
                  className={cn(
                    "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-white font-bold text-xl",
                    `bg-gradient-to-br ${prize.gradient}`
                  )}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {prize.position}
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {prize.place}
                </h3>
                <p className="text-xl font-bold text-white mb-2">
                  {prize.amount}
                </p>
                <p className="text-blue-200 text-sm">{prize.extras}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Judges Section */}
        <motion.section variants={fadeInUp} className="mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Our Esteemed Judges
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "Dr. Sarah Chen",
                company: "Google",
                role: "Head of Data Analytics",
              },
              {
                name: "Michael Rodriguez",
                company: "PwC",
                role: "Senior Partner",
              },
              {
                name: "Emily Watson",
                company: "Samsung",
                role: "Business Intelligence Director",
              },
              {
                name: "David Kim",
                company: "Microsoft",
                role: "AI Solutions Architect",
              },
            ].map((judge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 text-center border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl text-white">
                    {judge.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {judge.name}
                </h3>
                <p className="text-blue-300 font-medium">{judge.role}</p>
                <p className="text-blue-200 mt-2">{judge.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}
