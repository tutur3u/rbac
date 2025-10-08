import { motion, Variants } from "motion/react";
import Image from "next/image";
export default function Season6Judges({
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
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold text-white mb-1 text-center"
      >
        Our Esteemed Judges
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
      >
        {[
          {
            img: "/judges/huu-thai.jpg",
            name: "Mr. PHAM HUU THAI",
            company: "FPT Software",
            role: "Software Project Manager",
            role2: "CTO at Openspaces",
          },
          {
            img: "/judges/minh-hoang.jpg",
            name: "Mr. VU MINH HOANG",
            company: "Viettel Solutions",
            role: "Data Science/AI Expert",
            role2: "Lecturer at University of Engineering and Technology",
          },
          {
            img: "/judges/quoc-cuong.jpg",
            name: "Mr. TANG QUOC CUONG",
            company: "MiTek",
            role: "Business Intelligence & Analytics Manager",
          },
          {
            img: "/judges/kim-phuong.jpg",
            name: "Ms. UNG KIM PHUONG",
            company: "MiTek",
            role: "Business Intelligence & Analytics Manager",
          },
          {
            img: "/judges/thien-anh.jpg",
            name: "Ms. NGUYEN BUI THIEN ANH",
            company: "SeedSoft (Australia)",
            role: "Data Analytics Lead",
          },
        ].map((judge, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="bg-primary/60 backdrop-blur-sm rounded-lg px-4 py-5 text-center border border-slate-700/30 hover:border-blue-500/20 transition-all duration-200"
          >
            <Image
              src={judge.img}
              alt={judge.name}
              width={2048}
              height={2048}
              className="w-96 aspect-square rounded-lg mx-auto mb-3 object-cover"
            />

            <h3 className="text-base font-semibold text-white mb-1">
              {judge.name}
            </h3>
            <p className="text-primary-foreground text-sm font-medium">
              {judge.role} At {judge.company}
            </p>
            {judge.role2 && (
              <p className="text-blue-200 text-sm mt-1">{judge.role2}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
