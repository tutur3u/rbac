"use client";
import { useState } from "react";
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
import { motion, Variants } from "motion/react";
import Link from "next/link";
import { FORM_LINK } from "@/lib/nav-constants";
import { floatAnimation } from "@/lib/motion-variants";

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
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -8,
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

const backgroundGlowVariants = {
  animate: {
    opacity: [0.1, 0.3, 0.1],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
} as Variants;

const sparkleVariants = {
  hover: {
    opacity: [0, 0.6, 0],
    scale: [0.5, 1.2, 0.5],
    rotate: [0, 180, 360],
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
} as Variants;

const particleVariants = {
  hover: {
    opacity: [0, 0.6, 0],
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
} as Variants;

export function BenefitsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const renderBenefitCard = (
    benefit: (typeof benefits)[number],
    index: number
  ) => {
    const IconComponent = benefit.icon;
    const isHovered = hoveredCard === index;

    return (
      <div
        key={index}
        className={cn(`relative group cursor-pointer transition h-full`)}
        style={{ animationDelay: `${index * 150}ms` }}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <Card
          className={cn(
            `relative overflow-hidden border-0 bg-slate-900/40 backdrop-blur-xl 
          transition h-full min-h-[320px]
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
    <motion.section
      className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/70 rounded-full blur-3xl"
          variants={backgroundGlowVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/60 to-cyan-500/40 rounded-full blur-3xl"
          variants={backgroundGlowVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/40 to-orange-500/30 rounded-full blur-3xl"
          variants={backgroundGlowVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_49%,rgba(59,130,246,0.05)_51%,transparent_52%)] bg-[length:30px_30px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none transition-transform duration-100">
        <motion.div
          className="absolute top-4 left-10 w-20 h-20 border-2 border-blue-400/30 rotate-30"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 border-2 border-purple-400/30 rotate-12"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 3 }}
        />
        <motion.div
          className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-cyan-400/30 rotate-45"
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Why Should
              <br />
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-background z-1">You Join</span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-sidebar-accent to-secondary-foreground opacity-20 blur-2xl rounded-lg"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-slate-300 max-w-4xl mx-auto text-pretty leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="mt-8 flex justify-center items-center gap-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
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
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        {isMobile ? (
          <Carousel className="w-full relative flex gap-2 px-5 sm:px-10">
            <CarouselPrevious className="absolute left-0 z-10 text-primary w-12 h-12" />
            <CarouselContent className="w-full px-2 py-5">
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="w-full">
                  {renderBenefitCard(benefit, index)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute right-0 z-10 text-primary w-12 h-12" />
          </Carousel>
        ) : (
          <motion.div
            className="space-y-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="grid lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {benefits
                .slice(0, 3)
                .map((benefit, index) => renderBenefitCard(benefit, index))}
            </motion.div>
            <motion.div
              className="grid lg:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {benefits
                .slice(3)
                .map((benefit, index) => renderBenefitCard(benefit, index + 3))}
            </motion.div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <Link href={FORM_LINK} target="_blank" rel="noopener noreferrer">
          <motion.div className="text-center mt-20" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <Trophy className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <span className="text-white font-semibold text-lg">
                Ready to claim your benefits?
              </span>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <ArrowRight className="w-5 h-5 text-cyan-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
}
