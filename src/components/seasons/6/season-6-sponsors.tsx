import { sponsorSeason6 } from "@/lib/season6-constants";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import Image from "next/image";

export default function Season6Sponsors({
  fadeInUp,
  itemVariants,
  staggerContainer,
}: {
  fadeInUp: Variants;
  itemVariants: Variants;
  staggerContainer: Variants;
}) {
  return (
    // Add this section after the Judges section in your existing component
    <motion.section variants={fadeInUp} className="mb-16">
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold text-white mb-1 text-center"
      >
        Our Esteemed Sponsors
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-sm text-slate-400 
        max-w-3xl mx-auto text-pretty italic
        leading-relaxed mb-10 text-center"
      >
        To be updated
      </motion.p>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Sponsor Levels - Dynamically rendered with staggered animation */}
        {sponsorSeason6.map((sponsorLevel) => (
          <motion.div
            key={sponsorLevel.level}
            variants={itemVariants}
            className={cn(
              "bg-gradient-to-br from-primary/40 to-secondary/30 backdrop-blur-sm rounded-xl p-6 border",
              sponsorLevel.borderColor,
              // Full width for Case Sponsor
              sponsorLevel.level === "Case Sponsor" && "md:col-span-2"
            )}
          >
            {/* Level Header */}
            <motion.div
              className={cn(
                "bg-gradient-to-r rounded-sm p-2 mb-4 text-center border",
                sponsorLevel.gradient,
                sponsorLevel.borderColor
              )}
            >
              <h3 className="text-lg font-bold text-white">
                {sponsorLevel.level}
              </h3>
            </motion.div>

            {/* Sponsors Grid - Staggered based on sponsor count */}
            <motion.div
              variants={staggerContainer}
              className={cn(
                "flex items-center justify-center flex-wrap gap-2",
                // Adjust grid based on number of sponsors
                sponsorLevel.sponsors.length === 1 && "gap-0",
                sponsorLevel.sponsors.length >= 4 && "gap-3"
              )}
            >
              {sponsorLevel.sponsors.map((sponsor) => {
                // Smart aspect ratio calculation for Platform and F&B Sponsors
                if (sponsorLevel.level === "Platform Sponsor" || sponsorLevel.level === "F&B Sponsor") {
                  const aspectRatio = sponsor.width / sponsor.height;
                  const isSquare = aspectRatio >= 0.8 && aspectRatio <= 1.2;
                  const isWide = aspectRatio > 2.5;
                  const isMediumWide = aspectRatio > 1.2 && aspectRatio <= 2.5;

                  return (
                    <motion.div
                      key={sponsor.name}
                      variants={itemVariants}
                      className={cn(
                        "bg-white rounded-md p-2 flex items-center justify-center",
                        // All logos have the same height for uniform appearance
                        "h-24",
                        {
                          // Square logos (1:1 ratio) - width matches height
                          "w-24": isSquare,
                          // Wide logos (>2.5:1 ratio) - extra wide to maintain aspect ratio
                          "w-80": isWide,
                          // Medium-wide logos (1.2-2.5:1 ratio) - medium width
                          "w-44": isMediumWide,
                        }
                      )}
                    >
                      <Image
                        src={sponsor.name}
                        alt={`${sponsorLevel.level} Logo`}
                        className="w-full h-full object-contain"
                        width={sponsor.width}
                        height={sponsor.height}
                      />
                    </motion.div>
                  );
                }

                // Original styling for all other sponsors
                return (
                  <motion.div key={sponsor.name} variants={itemVariants}>
                    <Image
                      src={sponsor.name}
                      alt={`${sponsorLevel.level} Logo`}
                      className={cn(
                        "sponsor-image bg-white p-2 object-cover rounded-md",
                        {
                          // Shorter height for Bitis Hunter (wide logo)
                          "w-full h-auto max-h-20": sponsor.name.includes("Bitis Hunter"),
                          "w-full h-auto max-h-32":
                            !sponsor.name.includes("Bitis Hunter") && sponsor.width / sponsor.height >= 1.6,
                          "w-32 aspect-square":
                            sponsor.width / sponsor.height < 2,
                        }
                      )}
                      width={sponsor.width}
                      height={sponsor.height}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
