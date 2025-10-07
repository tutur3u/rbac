"use client";

import { useParallax } from "@/hooks/use-parallax";
import Image from "next/image";
import { motion, Variants } from "motion/react";

const partners = [
  { name: "/com-partners/BAC.png", width: 405, height: 259 },
  { name: "/com-partners/BaseVN.png", width: 772, height: 240 },
  { name: "/com-partners/chotot.png", width: 900, height: 900 },
  { name: "/com-partners/Deloitte.png", width: 1612, height: 845 },
  { name: "/com-partners/enviet.png", width: 1556, height: 1128 },
  { name: "/com-partners/Grant-Thornton.png", width: 1627, height: 595 },
  { name: "/com-partners/Ipsos.png", width: 1200, height: 1106 },
  { name: "/com-partners/KPMG.png", width: 1638, height: 1210 },
  { name: "/com-partners/masan.png", width: 2400, height: 2400 },
  { name: "/com-partners/Mastering-Data.png", width: 2048, height: 2048 },
  { name: "/com-partners/mazars.jpg", width: 960, height: 195 },
  { name: "/com-partners/Pepsi.png", width: 960, height: 959 },
  { name: "/com-partners/Pizzahut.png", width: 2176, height: 2049 },
  { name: "/com-partners/PMAX.png", width: 2222, height: 975 },
  { name: "/com-partners/SAPP.png", width: 408, height: 220 },
  { name: "/com-partners/SHBFC.png", width: 3635, height: 775 },
  { name: "/com-partners/Shopee.png", width: 3606, height: 1396 },
  { name: "/com-partners/TM.png", width: 6480, height: 1488 },
  { name: "/com-partners/UNITRAIN.png", width: 4416, height: 2543 },
  { name: "/com-partners/Yahon.png", width: 2391, height: 1900 },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8,
    },
  },
} as Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as Variants;

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
} as Variants;

const floatingGlowVariants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.05, 0.15, 0.05],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
} as Variants;

export function PartnersSection() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.2);

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-primary via-muted/20 to-primary/20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center w-full h-full
        bg-[url('/backgrounds/plain-light-bg.png')]"
      />

      {/* Background grid with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 tech-grid opacity-10"
        style={{ transform: `translateY(${bgOffset}px)` }}
      />

      {/* Animated glow effects */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
        variants={floatingGlowVariants}
        animate="animate"
        style={{ transform: `translateY(${bgOffset * 0.6}px)` }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"
        variants={floatingGlowVariants}
        animate="animate"
        transition={{ delay: 3 }}
        style={{ transform: `translateY(${bgOffset * 0.8}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-4 md:mb-8 lg:mb-16" variants={itemVariants}>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              OUR PARTNERS
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Trusted by leading technology companies and organizations worldwide
            in shaping the future of innovation
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={containerVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={`partner-${index + 1}`}
              variants={imageVariants}
              whileHover="hover"
              className="flex justify-center"
            >
              <div
                className="bg-background/20 backdrop-blur-sm rounded-xl
               p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 
               w-full max-w-[200px] h-32 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={partner.name}
                  className="object-contain w-full"
                  alt={`Partner ${index + 1}`}
                  width={partner.width}
                  height={partner.height}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
