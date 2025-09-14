"use client";

import { useState, useEffect } from "react";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

export default function RBACCompetitionPage() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3);
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5);

  const [activeRound, setActiveRound] = useState("round1");
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);

  const prizes = [
    {
      place: "Champion",
      amount: "30,000,000 VND",
      position: 1,
      extras: "Trophy & Certificates",
    },
    {
      place: "1st Runner Up",
      amount: "15,000,000 VND",
      position: 2,
      extras: "Certificates",
    },
    {
      place: "2nd Runner Up",
      amount: "10,000,000 VND",
      position: 3,
      extras: "Certificates",
    },
    {
      place: "4th Place",
      amount: "5,000,000 VND",
      position: 4,
      extras: "Certificates",
    },
    {
      place: "5th Place",
      amount: "5,000,000 VND",
      position: 5,
      extras: "Certificates",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrizeIndex((prev) => (prev + 1) % prizes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div
        className={cn(
          "absolute inset-0 opacity-20 bg-cover bg-bottom md:bg-center w-full h-full",
          `bg-[url('/backgrounds/rbac-hero-mobile.png')] md:bg-[url('/backgrounds/rbac.png')]`
        )}
      />
      <div
        ref={bgRef}
        className="absolute inset-0 matrix-bg opacity-20 md:opacity-100"
      />
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div
        ref={floatingRef}
        className="absolute inset-0 overflow-hidden transition-transform duration-100"
        style={{ transform: `translateY(${floatingOffset}px)` }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl pulse-glow float-animation"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-lg pulse-glow float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl pulse-glow float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-md pulse-glow float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-100"
        style={{ transform: `translateY(${floatingOffset * 0.7}px)` }}
      >
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-400/30 rotate-45 float-animation"></div>
        <div
          className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-purple-400/30 rotate-12 float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-cyan-400/30 rotate-45 float-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-3 md:py-20 ">
        <div className="text-center mb-16 animate-fade-in-up text-white glow-effect">
          <h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r primary-gradient bg-clip-text text-transparent
           mb-4 text-balance animate-slide-in-left"
          >
            RMIT Business Analytics Champion
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in-right animation-delay-300">
            Season 6: The premier competition for aspiring data analysts and
            business strategists
          </p>
        </div>

        <section className="mb-20">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 animate-fade-in-up animation-delay-600">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Rules and Regulations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Eligibility */}
              <div className="bg-blue-900/30 border border-purple-100/20 px-4 py-6 rounded-lg hover:bg-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-slide-in-left animation-delay-900">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  Eligibility
                </h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    All nationalities are accepted
                  </li>
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    Participants must be undergraduate students currently
                    studying in universities in Vietnam
                  </li>
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    Top 5 finalists of previous RBAC seasons are not allowed to
                    participate
                  </li>
                </ul>
              </div>

              {/* Registration */}
              <div className="bg-blue-900/30 border border-purple-100/20 px-4 py-6 rounded-lg hover:bg-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-slide-in-up animation-delay-1200">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse animation-delay-300"></div>
                  Registration
                </h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>A team must
                    consist of 4 members
                  </li>
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    Each contestant can only join one team
                  </li>
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    Teams may consist of students from different universities
                  </li>
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    Member changes must be requested before registration closes
                  </li>
                </ul>
              </div>

              {/* Notes */}
              <div className="md:col-span-full lg:col-span-1 bg-blue-900/30 border border-purple-100/20 px-4 py-6 rounded-lg hover:bg-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-slide-in-right animation-delay-1500">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse animation-delay-600"></div>
                  Notes
                </h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    Teams must comply with all regulations and deadlines
                  </li>
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    All sessions and submissions must be in English
                  </li>
                  <li className="flex items-start hover:text-white transition-colors">
                    <span className="text-white mr-2">•</span>
                    Organizers reserve the right to disqualify any violating
                    teams
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in-up">
            Round Format
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-100/50 animate-fade-in-up animation-delay-300">
            <div className="flex flex-wrap justify-center mb-8">
              {["round1", "round2", "round3"].map((round, index) => (
                <button
                  key={round}
                  className={cn(
                    `px-6 py-3 mx-2 mb-2 rounded-lg transition-all duration-300 hover:scale-105 
                    border-2 border-purple-200/20`,
                    activeRound === round
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-slate-700/50 text-blue-200 hover:bg-slate-700"
                  )}
                  onClick={() => setActiveRound(round)}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  Round {index + 1}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-purple-100/30 bg-blue-900/30 p-6 rounded-lg hover:bg-blue-900/40 transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-900">
                <h3 className="text-xl font-semibold text-white mb-4">Date</h3>
                <p className="text-blue-100">DD/MM/YYYY</p>
              </div>

              <div className="border border-purple-100/30 bg-blue-900/30 p-6 rounded-lg hover:bg-blue-900/40 transition-all duration-300 hover:scale-105 animate-slide-in-right animation-delay-1200">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Format
                </h3>
                <p className="text-blue-100">
                  {activeRound === "round1" &&
                    "Preliminary analysis challenge with dataset provided"}
                  {activeRound === "round2" &&
                    "Advanced business case study with real-world data"}
                  {activeRound === "round3" &&
                    "Final presentation to industry expert judges"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in-up">
            Prize Structure
          </h2>

          {/* Featured Prize Carousel */}
          <div className="mb-12 relative">
            <div className="bg-gradient-to-r from-blue-900/70 via-purple-900/70 to-blue-900/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-500/30 shadow-2xl shadow-blue-500/20 animate-fade-in-up animation-delay-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 animate-pulse">
                <span className="text-3xl font-bold text-white">
                  {prizes[currentPrizeIndex].position}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {prizes[currentPrizeIndex].place}
              </h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {prizes[currentPrizeIndex].amount}
              </p>
              <p className="text-blue-200 text-lg">
                {prizes[currentPrizeIndex].extras}
              </p>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {prizes.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPrizeIndex
                      ? "bg-blue-400 scale-125"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  onClick={() => setCurrentPrizeIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* All Prizes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:items-end ">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={cn(
                  `bg-gradient-to-b backdrop-blur-md from-blue-900/70 to-red-800/30 
                  border border-purple-100 md:border-0
                    rounded-xl text-center h-58
                    flex flex-col items-center justify-center
                    transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-slide-in-up`,
                  index === 0
                    ? "col-span-1 md:col-span-2 lg:col-span-2 md:order-1 lg:order-2 from-yellow-400/70 to-red-500/30"
                    : index === 1
                    ? "md:order-3 lg:order-1 lg:col-span-2 from-cyan-700/70 to-red-500/30"
                    : index === 2
                    ? "md:order-4 lg:order-3 lg:col-span-2 from-amber-700/70 to-red-500/30"
                    : index === 3
                    ? "md:order-5 lg:col-start-2 lg:order-4 lg:col-span-2 "
                    : "md:order-2 lg:order-5 lg:col-span-2",
                  { "lg:h-84": index == 0, "md:h-72": index == 1 }
                )}
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <div
                  className={cn(
                    `inline-flex items-center justify-center w-12 h-12 
                    rounded-full mb-4 hover:bg-blue-600 transition-colors`,
                    {
                      "bg-gradient-to-br from-yellow-200 to-yellow-400 text-yellow-600":
                        index === 0,
                      "bg-gradient-to-br from-gray-300 to-gray-500/80 text-gray-700":
                        index === 1,
                      "bg-gradient-to-br from-amber-500 to-amber-600/80 text-amber-200":
                        index === 2,
                      "bg-blue-700 text-purple-100": index > 2,
                    }
                  )}
                >
                  <span className={`text-xl font-bold`}>{prize.position}</span>
                </div>
                <h3 className={`text-lg font-semibold text-white mb-2`}>
                  {prize.place}
                </h3>
                <p
                  className={`${
                    index === 0 ? "text-2xl" : index < 2 ? "text-xl" : "text-lg"
                  } font-bold text-white mb-2`}
                >
                  {prize.amount}
                </p>
                <p className="text-blue-200">{prize.extras}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in-up">
            Our Judges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((judge, index) => (
              <div
                key={judge}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-slide-in-up"
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center hover:from-blue-700 hover:to-blue-600 transition-all duration-300">
                  <span className="text-3xl text-blue-300">J{judge}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Expert Judge
                </h3>
                <p className="text-blue-200">Industry Professional</p>
                <p className="text-blue-200 mt-2">Company Name</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
