import { Variants } from "motion/react";

export const floatAnimation = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -10, 5, 0],
    rotate: [0, 1, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
} as Variants;
export const pulseGlow = {
  initial: { scale: 1, opacity: 0.3 },
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
