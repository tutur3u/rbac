import { rulesSeason6 } from "@/lib/season6-constants";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "motion/react";

export default function RulesRegulations({
  fadeInUp,
  itemVariants,
  staggerContainer,
}: {
  fadeInUp: Variants;
  itemVariants: Variants;
  staggerContainer: Variants;
}) {
  return (
    <motion.section variants={fadeInUp} className="mb-16">
      <motion.div
        variants={itemVariants}
        className="bg-primary/60 backdrop-blur-sm rounded-xl p-6 border border-accent-foreground/50"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-white mb-6 text-center"
        >
          Rules and Regulations
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {rulesSeason6.map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className={cn(
                "border rounded-lg p-4 transition-all duration-200",
                section.bgColor,
                section.borderColor,
                section.hoverBorderColor
              )}
            >
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <div
                  className={cn(
                    "w-2 h-2 rounded-full mr-2",
                    section.dotColor
                  )}
                />
                {section.title}
              </h3>
              <ul className="space-y-2 text-blue-100 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={cn(section.textColor, "mr-2")}>
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
