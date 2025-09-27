/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <> */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParallax } from "@/hooks/use-parallax";
import Image from "next/image";
import { motion, Variants } from "motion/react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
} as Variants;

const iconVariants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "backOut",
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

const floatingGlowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
} as Variants;

export function AboutSection() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.2);

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-slate-900 via-primary to-secondary relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          className="absolute top-20 left-10 object-contain w-24 opacity-20"
          style={{
            transform: `translateY(${bgOffset * 0.3}px)`,
          }}
          height={32}
          width={32}
        />
        <Image
          src="/logo.png"
          alt="Logo"
          className="absolute bottom-5 right-5 object-contain w-40 opacity-20 z-10 pointer-events-none"
          style={{
            transform: `translateY(${bgOffset * 0.3}px)`,
          }}
          height={32}
          width={32}
        />
      </motion.div>

      <div ref={bgRef} className="absolute inset-0 tech-grid opacity-60"></div>

      {/* Animated glow effects */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-secondary-foreground/80 rounded-full blur-3xl"
        variants={floatingGlowVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 bg-sidebar-accent/90 rounded-full blur-3xl"
        variants={floatingGlowVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
              ABOUT US
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Discover who we are and what drives our mission to advance
            technology innovation through collaborative competition
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {/* Main Card - Who We Are */}
          <motion.div
            className="md:col-span-2"
            variants={cardVariants}
            whileHover="hover"
          >
            <Card className="border-2 border-secondary/50 hover:border-secondary transition group bg-primary/80 backdrop-blur-sm h-full">
              <CardHeader className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary-foreground to-secondary rounded-2xl flex items-center justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
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
                </motion.div>
                <CardTitle className="text-2xl bg-gradient-to-r from-secondary-foreground to-secondary bg-clip-text text-transparent">
                  Who We Are
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p
                  className="text-muted-foreground leading-relaxed text-center md:text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  RMIT Business Analytics Champion (RBAC) is Vietnam's
                  student-led business analytics competition, proudly hosted by
                  RMIT Vietnam Analytics Club. Since its establishment in 2020,
                  RBAC has become a platform for talented students nationwide to
                  challenge themselves with real-world business cases, connect
                  with industry leaders, and grow into the next generation of
                  data-driven problem solvers.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={cardVariants} whileHover="hover">
            <Card className="border-2 border-secondary-foreground/50 hover:border-secondary-foreground transition group bg-primary/80 backdrop-blur-sm h-full">
              <CardHeader className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary-foreground to-accent-secondary rounded-2xl flex items-center justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
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
                </motion.div>
                <CardTitle className="text-2xl bg-gradient-to-r from-secondary-foreground to-accent-secondary bg-clip-text text-transparent">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p
                  className="text-muted-foreground leading-relaxed text-center md:text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  To become an influential business analytics competition in
                  Vietnam, where young people develop data thinking skills,
                  practice practical skills through real-world challenges, and
                  receive practical support from businesses.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={cardVariants} whileHover="hover">
            <Card className="border-2 border-accent-secondary/50 hover:border-accent-secondary transition group bg-slate-900/80 backdrop-blur-sm h-full">
              <CardHeader className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-muted/70 to-secondary-foreground rounded-2xl flex items-center justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
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
                </motion.div>
                <CardTitle className="text-2xl bg-gradient-to-r from-muted/70 to-secondary-foreground bg-clip-text text-transparent">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p
                  className="text-muted-foreground leading-relaxed text-center md:text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  To provide an experiential playground where students can
                  challenge themselves, practice analytical thinking, and
                  accumulate experience in Business Analytics.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
