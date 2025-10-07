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
        className="text-lg text-slate-300 
        max-w-3xl mx-auto text-pretty
        leading-relaxed mb-10 text-center uppercase"
      >
        To be updated
      </motion.p>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Sponsor Levels */}
        {[
          {
            level: "Case Sponsor",
            sponsors: [
              "/sponsors/CASE sponsor - COLGATE-PALMOLIVE/Logo - Colgate-Pamolive.png",
            ],
            gradient: "from-yellow-300/40 to-amber-500/40",
            borderColor: "border-yellow-500/40",
          },
          {
            level: "Gold Sponsor",
            sponsors: ["/sponsors/GOLD Sponsor/SHBFinance.png"],
            gradient: "from-gray-300/40 to-yellow-600/40",
            borderColor: "border-yellow-400/40",
          },
          {
            level: "Silver Sponsor",
            sponsors: [
              "/sponsors/SILVER Sponsor/amiCoach.jpg",
              "/sponsors/SILVER Sponsor/LTP EDTECH.jpg",
              "/sponsors/SILVER Sponsor/MCI Academy.png",
              "/sponsors/SILVER Sponsor/UniTrain blue.png",
            ],
            gradient: "from-gray-400/40 to-slate-600/40",
            borderColor: "border-gray-500/40",
          },
          {
            level: "Bronze Sponsor",
            sponsors: [
              "/sponsors/BRONZE Sponsor/Smart Train.jpg",
              "/sponsors/BRONZE Sponsor/Student Council.jpeg",
            ],
            gradient: "from-amber-700/40 to-amber-900/40",
            borderColor: "border-amber-600/40",
          },
          {
            level: "Academic Sponsor",
            sponsors: [
              "/sponsors/ACEDEMIC Sponsor/IEP.png",
              "/sponsors/ACEDEMIC Sponsor/Mastering Data Analysis.png",
              "/sponsors/ACEDEMIC Sponsor/OKR Business.png",
              "/sponsors/ACEDEMIC Sponsor/TechCamp.jpg",
              "/sponsors/ACEDEMIC Sponsor/TymeX.jpg",
              "/sponsors/ACEDEMIC Sponsor/WiDS.jpg",
            ],
            gradient: "from-blue-400/40 to-blue-700/40",
            borderColor: "border-blue-500/40",
          },
          {
            level: "Scholarship Sponsor",
            sponsors: [
              "/sponsors/SCHOLARSHIP Sponsor/PMAX Academy.png",
              "/sponsors/SCHOLARSHIP Sponsor/Tomorrow Marketers.jpg",
              "/sponsors/SCHOLARSHIP Sponsor/VTI Academy.jpg",
            ],
            gradient: "from-green-400/40 to-green-700/40",
            borderColor: "border-green-500/40",
          },
          {
            level: "Platform Sponsor",
            sponsors: [
              "/sponsors/PLATFORM Sponsor/Base VN.jpeg",
              "/sponsors/PLATFORM Sponsor/TuongTac.TV.png",
              "/sponsors/PLATFORM Sponsor/Tuturuuu.png",
            ],
            gradient: "from-purple-400/40 to-purple-700/40",
            borderColor: "border-purple-500/40",
          },
          {
            level: "Companion Sponsor",
            sponsors: [
              "/sponsors/COMPANION Sponsor/CANIFA.png",
              "/sponsors/COMPANION Sponsor/Jósie Flowers.jpg",
              "/sponsors/COMPANION Sponsor/Logitech.svg",
            ],
            gradient: "from-pink-400/40 to-pink-700/40",
            borderColor: "border-pink-500/40",
          },
          {
            level: "Reward Sponsor",
            sponsors: [
              "/sponsors/REWARD Sponsor/Bitis Hunter.png",
              "/sponsors/REWARD Sponsor/Cake.jpg",
            ],
            gradient: "from-red-400/40 to-red-700/40",
            borderColor: "border-red-500/40",
          },
          {
            level: "F&B Sponsor",
            sponsors: [
              "/sponsors/F&B Sponsor/FARO INSPIRATION.png",
              "/sponsors/F&B Sponsor/FARO ROASTERY.png",
              "/sponsors/F&B Sponsor/Samy Street.png",
            ],
            gradient: "from-orange-400/40 to-orange-700/40",
            borderColor: "border-orange-500/40",
          },
        ].map((sponsorLevel, levelIndex) => (
          <motion.div
            key={sponsorLevel.level}
            variants={itemVariants}
            className={cn(
              "bg-gradient-to-br from-primary/40 to-secondary/30 backdrop-blur-sm rounded-xl p-6 border",
              sponsorLevel.borderColor
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

            {/* Sponsors Grid */}
            <motion.div
              variants={staggerContainer}
              className="flex items-center justify-center flex-wrap gap-4"
            >
              {sponsorLevel.sponsors.map((sponsor, sponsorIndex) => (
                <motion.div
                  key={sponsor}
                  variants={itemVariants}
                  whileHover={{
                    y: -2,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className={cn(
                    "bg-secondary-foreground/40 backdrop-blur-sm rounded-lg p-4 text-center border transition-all duration-200",
                    "hover:shadow-lg hover:shadow-blue-500/10"
                  )}
                >
                  {/* Placeholder for sponsor logos - you can replace with actual images */}
                  <Image
                    src={sponsor}
                    alt={`${sponsorLevel.level} Logo`}
                    className="w-40 object-contain"
                    width={768}
                    height={512}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
