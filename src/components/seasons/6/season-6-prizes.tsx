// import React from "react";

// export default function Season6Prizes() {
//   return (
//     <motion.section variants={fadeInUp} className="mb-16">
//       <motion.h2
//         variants={itemVariants}
//         className="text-2xl font-bold text-white mb-2 text-center uppercase"
//       >
//         Total Prize value
//       </motion.h2>

//       <motion.p
//         variants={itemVariants}
//         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold
//             mb-6
//             text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-yellow-300"
//       >
//         10.855.334.800VND
//       </motion.p>

//       {/* Featured Prize */}
//       <motion.div variants={itemVariants} className="mb-8">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentPrizeIndex}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className={cn(
//               "bg-gradient-to-r backdrop-blur-sm rounded-xl p-6 text-center border border-secondary/20",
//               prizes[currentPrizeIndex].bgGradient
//             )}
//           >
//             <div className="flex items-center justify-center flex-col gap-4 mb-4">
//               <div
//                 className={cn(
//                   "w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl",
//                   `bg-gradient-to-r ${prizes[currentPrizeIndex].gradient}`
//                 )}
//               >
//                 {prizes[currentPrizeIndex].position}
//               </div>
//               <h3 className="text-2xl font-bold text-white">
//                 {prizes[currentPrizeIndex].place}
//               </h3>
//               <p
//                 className={cn(
//                   "text-2xl font-bold bg-gradient-to-tl bg-clip-text text-transparent",
//                   prizes[currentPrizeIndex].gradient
//                 )}
//               >
//                 {prizes[currentPrizeIndex].amount}
//               </p>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Simplified Carousel Dots */}
//         <div className="flex justify-center mt-4 space-x-2">
//           {prizes.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 index === currentPrizeIndex
//                   ? "bg-blue-400 scale-125"
//                   : "bg-slate-600"
//               }`}
//               onClick={() => setCurrentPrizeIndex(index)}
//             />
//           ))}
//         </div>
//       </motion.div>

//       {/* All Prizes Grid */}
//       <motion.div
//         variants={staggerContainer}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
//       >
//         {prizes.map((prize, index) => (
//           <motion.div
//             key={index}
//             variants={itemVariants}
//             whileHover={{ y: -2 }}
//             className={cn(
//               `bg-gradient-to-b backdrop-blur-sm rounded-lg p-4 border text-center h-full 
//                   flex flex-col justify-start`,
//               prize.bgGradient,
//               `border-secondary/30`
//             )}
//           >
//             <div
//               className={cn(
//                 "w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold",
//                 `bg-gradient-to-br`,
//                 prize.gradient
//               )}
//             >
//               {prize.position}
//             </div>
//             <h4 className="text-sm font-semibold text-white">{prize.place}</h4>
//             <p className="text-lg font-bold text-white">{prize.amount}</p>
//             <p className="text-blue-200 text-xs mt-1">
//               {prize.extra ?? "\u00A0"}
//             </p>

//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               className="mt-4"
//             >
//               <ul className="space-y-2 text-blue-100 text-sm">
//                 {prizes[index].descs.map((desc, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-start text-left"
//                   >
//                     <span className="text-yellow-400 mr-2">•</span>
//                     {desc}
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }
