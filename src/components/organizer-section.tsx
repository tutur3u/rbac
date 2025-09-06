"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Users,
  Globe,
  Award,
  Calendar,
  MapPin,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function OrganizerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [countUpComplete, setCountUpComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Start count-up animation after visibility animation
      setTimeout(() => setCountUpComplete(true), 800);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: Calendar,
      label: "Founded",
      value: "2009",
      description: "Years of Innovation",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "RMIT Vietnam",
      description: "Global Tech Hub",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Globe,
      label: "Partners Reach",
      value: "50+",
      description: "Partners Worldwide",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Users,
      label: "Team Size",
      value: "200+",
      description: "Tech Experts",
      color: "from-orange-400 to-red-400",
    },
  ];

  const achievements = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "10K+", label: "Careers Launched", icon: Users },
    { number: "500+", label: "Competitions Hosted", icon: Globe },
    { number: "100+", label: "Industry Partners", icon: Building2 },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 tech-grid opacity-60"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-10 -right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 -left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Competition
              <br />
              <span className="relative">
                Organizer
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl rounded-lg animate-pulse" />
              </span>
            </h2>
          </div>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Meet the{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">
              visionary organization
            </span>{" "}
            behind this
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
              {" "}
              groundbreaking competition
            </span>
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
            <Building2 className="w-6 h-6 text-cyan-400 animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Main Organizer Card */}
        <Card
          className={`max-w-6xl mx-auto border-0 bg-slate-900/40 backdrop-blur-xl overflow-hidden group hover:scale-[1.02] transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

          <CardContent className="p-0 relative">
            <div className="flex flex-col lg:flex-row">
              {/* Logo Section */}
              <div className="lg:w-2/5 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-12 flex flex-col items-center justify-center relative">
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern
                        id="circuit-org"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 10h20M10 0v20"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          fill="none"
                        />
                        <circle cx="10" cy="10" r="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-org)" />
                  </svg>
                </div>

                {/* Logo */}
                <div className="relative group/logo">
                  <div className="w-40 h-40 bg-gradient-to-br from-background/90 via-secondary-foreground/60 to-secondary/70 rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {/* Logo background animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />

                  <img src="/club-logo.png" alt="FutureTech Logo" className="w-32 h-32 object-contain relative z-10" />

                    {/* Floating sparkles around logo */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <Sparkles
                          key={i}
                          className={`absolute w-4 h-4 text-white opacity-0 group-hover/logo:opacity-80 transition-all duration-1000 animate-pulse`}
                          style={{
                            left: `${10 + i * 15}%`,
                            top: `${10 + i * 15}%`,
                            animationDelay: `${i * 200}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Logo glow */}
                  <div className="absolute inset-0 w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-400 to-secondary-foreground opacity-0 group-hover/logo:opacity-50 transition-opacity duration-500 blur-2xl scale-125 -z-10" />
                </div>

                {/* Company name under logo */}
                <h3 className="text-2xl font-bold mt-8 text-center bg-gradient-to-r from-cyan-400 to-secondary-foreground bg-clip-text text-transparent">
                  RMIT Vietnam
                  <br />
                  Analytics Club
                </h3>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-12">
                <div className="space-y-8">
                  {/* Title and Description */}
                  <div>
                    <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      RMIT Vietnam Analytics Club
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      RMIT Vietnam Analytics Club is a leading global organization
                      dedicated to fostering technological advancement and
                      innovation. With over 15 years of experience in organizing
                      world-class competitions, we have successfully launched
                      careers of thousands of tech professionals and facilitated
                      the creation of groundbreaking solutions that have
                      transformed industries.
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div
                          key={index}
                          className="group/stat cursor-pointer"
                          onMouseEnter={() => setHoveredStat(index)}
                          onMouseLeave={() => setHoveredStat(null)}
                        >
                          <div
                            className={`
                            bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4
                            hover:border-slate-600 transition-all duration-300 hover:scale-105
                            ${
                              hoveredStat === index
                                ? "shadow-lg shadow-cyan-500/25"
                                : ""
                            }
                          `}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} group-hover/stat:scale-110 transition-transform duration-300`}
                              >
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                              <span className="font-semibold text-slate-400 text-sm">
                                {stat.label}:
                              </span>
                            </div>
                            <div
                              className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              {stat.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievement Stats */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:scale-105 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-sidebar-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-background" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-background group-hover:text-primary-foreground transition-colors duration-300">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
