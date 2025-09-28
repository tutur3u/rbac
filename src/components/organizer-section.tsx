"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Sparkles } from "lucide-react";
import {
  organizerAchievements,
  organizerStats,
} from "@/lib/organizer-constants";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import Link from "next/link";

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
      duration: 0.7,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
} as Variants;

const logoVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "backOut",
    },
  },
  hover: {
    scale: 1.1,
    rotate: 3,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
} as Variants;

const statVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
} as Variants;

const achievementVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
} as Variants;

const backgroundGlowVariants = {
  animate: {
    opacity: [0.1, 0.3, 0.1],
    scale: [1, 1.2, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
} as Variants;

const sparkleVariants = {
  hover: {
    opacity: [0, 0.8, 0],
    scale: [0.5, 1.3, 0.5],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
} as Variants;

export function OrganizerSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <motion.section
      className="py-24 relative overflow-hidden bg-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 tech-grid opacity-60" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 -right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          variants={backgroundGlowVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 -left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          variants={backgroundGlowVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <Link
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="inline-block relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                Competition
                <br />
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-background z-1">Organizer</span>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl rounded-lg"
                    animate={{
                      opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </h2>
            </motion.div>
          </Link>

          <motion.p
            className="text-xl text-primary-foreground max-w-4xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Meet the{" "}
            <span className="text-transparent bg-gradient-to-r from-accent-secondary to-pink-300 bg-clip-text font-semibold">
              visionary organization
            </span>{" "}
            behind this
            <span className="text-transparent bg-gradient-to-r from-secondary-foreground to-secondary bg-clip-text font-semibold">
              {" "}
              groundbreaking competition
            </span>
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-8 flex justify-center items-center gap-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Building2 className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Main Organizer Card */}
        <motion.div variants={cardVariants} whileHover="hover">
          <Card className="max-w-6xl mx-auto border-0 bg-slate-900/40 backdrop-blur-xl overflow-hidden">
            {/* Card glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 -z-10 blur-xl"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <CardContent className="p-0 relative">
              <div className="flex flex-col lg:flex-row">
                {/* Logo Section */}
                <div className="lg:w-2/5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-12 flex flex-col items-center justify-center relative">
                  {/* Circuit pattern overlay */}
                  <div className="absolute inset-0 opacity-10"></div>

                  {/* Logo */}
                  <div className="relative group/logo">
                    <div
                      className="w-40 h-40 bg-gradient-to-br from-accent-secondary/40 to-primary-foreground/60 border border-primary-foreground
                   rounded-3xl flex items-center justify-center 
                  relative overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    >
                      {/* Logo background animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />

                      <Image
                        src="/club-logo.png"
                        alt="RMIT Vietnam Analytics Club Logo"
                        className="w-32 h-32 object-contain relative z-10"
                        height={128}
                        width={128}
                      />

                      {/* Floating sparkles around logo */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <Sparkles
                            key={`sparkle-${i + 1}`}
                            className={`absolute w-4 h-4 text-white opacity-0 group-hover/logo:opacity-80 transition-all duration-1000 animate-pulse`}
                            style={{
                              left: `${10 + i * 15}%`,
                              top: `${10 + i * 15}%`,
                              animationDelay: `${i * 200}ms`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Logo glow */}
                    <div className="absolute inset-0 w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-400 to-secondary-foreground opacity-0 group-hover/logo:opacity-50 transition-opacity duration-500 blur-2xl scale-125 -z-10" />
                  </div>

                  {/* Company name under logo */}
                  <h3 className="text-2xl font-bold mt-8 text-center bg-gradient-to-r from-cyan-400 to-secondary-foreground bg-clip-text text-transparent">
                    RMIT Vietnam
                    <br />
                    Analytics Club
                  </h3>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-4 md:p-6 lg:p-12">
                  <div className="space-y-8">
                    {/* Title and Description */}
                    <motion.div
                      className="text-center sm:text-left"
                      variants={itemVariants}
                    >
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        RMIT Vietnam Analytics Club
                      </h3>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        RMIT Vietnam Analytics Club is a leading global
                        organization dedicated to fostering technological
                        advancement and innovation. With over 15 years of
                        experience in organizing world-class competitions, we
                        have successfully launched careers of thousands of tech
                        professionals and facilitated the creation of
                        groundbreaking solutions that have transformed
                        industries.
                      </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      variants={containerVariants}
                    >
                      {organizerStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                          <motion.div
                            key={`stat-${index + 1}`}
                            variants={statVariants}
                            whileHover="hover"
                            onHoverStart={() => setHoveredStat(index)}
                            onHoverEnd={() => setHoveredStat(null)}
                            className="cursor-pointer"
                          >
                            <div
                              className={`
                              bg-gradient-to-br from-secondary/20 to-primary/90
                               border border-secondary-foreground/30 rounded-xl p-4
                              hover:border-secondary-foreground transition-all duration-300
                              ${
                                hoveredStat === index
                                  ? "shadow-lg shadow-cyan-500/25"
                                  : ""
                              }
                            `}
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                  className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <IconComponent className="w-4 h-4 text-white" />
                                </motion.div>
                                <span className="font-semibold text-primary-foreground text-sm">
                                  {stat.label}:
                                </span>
                              </div>
                              <div
                                className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                              >
                                {stat.value}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {stat.description}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div className="mt-20" variants={containerVariants}>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {organizerAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={`achievement-${index + 1}`}
                  variants={achievementVariants}
                  whileHover="hover"
                  className="group bg-gradient-to-br from-muted/20 to-primary/90 border border-secondary/50 rounded-2xl p-4 md:p-6 text-center cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-secondary to-accent-secondary rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-6 h-6 text-background" />
                  </motion.div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-background group-hover:text-primary-foreground transition-colors duration-300">
                    {achievement.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
