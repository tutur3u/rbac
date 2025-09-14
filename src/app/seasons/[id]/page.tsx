"use client";

import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { seasonList } from "@/lib/season-constants";

export default function SeasonDetail() {
  const { id } = useParams();
  const rootUrl = `/seasons/ss${id}`;
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3);
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5);
  const { elementRef: contentRef, offset: contentOffset } = useParallax(0.1);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get the current season based on the id parameter
  const seasonId = parseInt(id as string) - 1;
  const currentSeason = seasonList[seasonId] || seasonList[0];

  // Generate year based on season id (assuming season 1 was 2021)
  const seasonYear = 2021 + seasonId;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % currentSeason.highlightJoiner.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSeason.highlightJoiner.length]);

  const getColorClasses = (index: number) => {
    const colors = [
      "bg-blue-500/30 border-blue-400/20 from-blue-400 to-purple-400 hover:border-blue-400/50 group-hover:text-blue-300",
      "bg-purple-500/30 border-purple-400/20 from-purple-400 to-pink-400 hover:border-purple-400/50 group-hover:text-purple-300",
      "bg-cyan-500/30 border-cyan-400/20 from-cyan-400 to-blue-400 hover:border-cyan-400/50 group-hover:text-cyan-300",
      "bg-emerald-500/30 border-emerald-400/20 from-emerald-400 to-teal-400 hover:border-emerald-400/50 group-hover:text-emerald-300",
      "bg-rose-500/30 border-rose-400/20 from-rose-400 to-orange-400 hover:border-rose-400/50 group-hover:text-rose-300",
      "bg-indigo-500/30 border-indigo-400/20 from-indigo-400 to-violet-400 hover:border-indigo-400/50 group-hover:text-indigo-300",
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 opacity-40 bg-cover bg-bottom md:bg-center w-full h-full",
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

      <div
        ref={contentRef}
        className="relative z-10 h-full px-4 pt-20 pb-3 md:py-20 
         flex flex-col items-center justify-center gap-8 sm:gap-12
         min-h-screen text-center"
      >
        <div className="text-5xl md:text-7xl font-bold text-white glow-effect">
          <h1 className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
            RBAC {seasonYear}
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-blue-100">
            Season {parseInt(id as string)} - {currentSeason.topic}
          </p>
        </div>

        {/* Season Logo */}
        <Card className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Season Logo
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="w-48 h-48 relative">
              <Image
                src={`${rootUrl}/${currentSeason.logo}` || "/placeholder.svg"}
                alt={`RBAC Season ${id} Logo`}
                fill
                className="object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Partners Section */}
        <Card className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Partners & Sponsors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Strategic Partners
              </h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center justify-items-center">
                {currentSeason.strategicPartners.map((partner, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-64 h-32 relative mb-4">
                      <Image
                        src={`${rootUrl}/${partner}` || "/placeholder.svg"}
                        alt={`Strategic Partner ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Partners
              </h3>
              <div className="flex flex-col md:flex-row gap-4 justify-center justify-items-center">
                {currentSeason.partners.map((partner, index) => (
                  <div key={index} className="w-48 h-24 relative">
                    <Image
                      src={`${rootUrl}/${partner}` || "/placeholder.svg"}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Mentors & Judges */}
        <Tabs defaultValue="mentors" className="w-full max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 backdrop-blur-sm">
            <TabsTrigger
              value="mentors"
              className="data-[state=active]:bg-slate-700/50"
            >
              Mentors
            </TabsTrigger>
            <TabsTrigger
              value="judges"
              className="data-[state=active]:bg-slate-700/50"
            >
              Judges
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mentors">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Mentors
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Handle different data structures for mentors */}
                {Array.isArray(currentSeason.mentors) &&
                currentSeason.mentors.length > 0 &&
                typeof currentSeason.mentors[0] === "object" ? (
                  // Detailed mentor objects with name, position, image
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentSeason.mentors.map((mentor, index) => {
                      if (typeof mentor != "string")
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg"
                          >
                            <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                              <Image
                                src={
                                  `${rootUrl}/${mentor.image}` ||
                                  "/placeholder.svg"
                                }
                                alt={mentor.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-white font-medium text-lg">
                                {mentor.name}
                              </p>
                              <p className="text-blue-100 text-sm mt-2">
                                {mentor.position}
                              </p>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                ) : currentSeason.mentors ? (
                  // Single image for all mentors
                  <div className="flex justify-center">
                    <div className="w-full h-64 relative">
                      <Image
                        src={
                          `${rootUrl}/${currentSeason.mentors[0]}` ||
                          "/placeholder.svg"
                        }
                        alt="All Mentors"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : currentSeason.mentorJudges ? (
                  // Combined mentorJudges image
                  <div className="flex justify-center">
                    <div className="w-full h-64 relative">
                      <Image
                        src={
                          `${rootUrl}/${currentSeason.mentorJudges[0]}` ||
                          "/placeholder.svg"
                        }
                        alt="Mentors & Judges"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-white text-center">
                    No mentors data available
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="judges">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Judges
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Handle different data structures for judges */}
                {Array.isArray(currentSeason.judges) &&
                currentSeason.judges.length > 0 &&
                typeof currentSeason.judges[0] === "object" ? (
                  // Detailed judge objects with name, position, image
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentSeason.judges.map((judge, index) => {
                      if (typeof judge != "string")
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg"
                          >
                            <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                              <Image
                                src={
                                  `${rootUrl}/${judge.image}` ||
                                  "/placeholder.svg"
                                }
                                alt={judge.name ?? "Judge"}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-white font-medium text-lg">
                                {judge.name}
                              </p>
                              <p className="text-blue-100 text-sm mt-2">
                                {judge.position}
                              </p>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                ) : currentSeason.judges ? (
                  // Single image for all judges
                  <div className="flex justify-center">
                    <div className="w-full h-64 relative">
                      <Image
                        src={
                          `${rootUrl}/${currentSeason.judges[0]}` ||
                          "/placeholder.svg"
                        }
                        alt="All Judges"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : currentSeason.mentorJudges ? (
                  // Combined mentorJudges image
                  <div className="flex justify-center">
                    <div className="w-full h-64 relative">
                      <Image
                        src={
                          `${rootUrl}/${currentSeason.mentorJudges[0]}` ||
                          "/placeholder.svg"
                        }
                        alt="Mentors & Judges"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-white text-center">
                    No judges data available
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Winners Section */}
        <Card className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">
              Winner
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-full max-w-md h-64 relative">
              <Image
                src={`${rootUrl}/${currentSeason.winner}` || "/placeholder.svg"}
                alt="Season Winner"
                fill
                className="object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Highlighted Joiners Carousel */}
        <div className="w-full max-w-6xl mt-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4 glow-effect animate-fade-in">
              <span className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
                Highlighted Participants
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full animate-pulse"></div>
          </div>

          <Card className="mb-12 relative bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
            <CardContent className="p-0">
              <div
                className="relative overflow-hidden rounded-2xl"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {currentSeason.highlightJoiner.map((image, index) => {
                    const colorClasses = getColorClasses(index);
                    return (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 p-8 relative"
                      >
                        <div className="relative overflow-hidden rounded-xl h-[66.5vh]">
                          <Image
                            src={`${rootUrl}/${image}` || "/placeholder.svg"}
                            alt={`Highlighted participant ${index + 1}`}
                            fill
                            className="overflow-hidden object-contain transform hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <Badge
                            className={`text-white px-2 py-2 text-2xl font-bold ${colorClasses}`}
                          >
                            Participant #{index + 1}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {currentSeason.highlightJoiner.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-blue-400 scale-125"
                          : "bg-slate-600 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + currentSeason.highlightJoiner.length) %
                        currentSeason.highlightJoiner.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-600/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev + 1) % currentSeason.highlightJoiner.length
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-600/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
                >
                  →
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Badge
            variant="outline"
            className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 animate-bounce-subtle"
          >
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-200 text-sm">
              RBAC {seasonYear} - {currentSeason.topic}
            </span>
          </Badge>
        </div>
      </div>
    </section>
  );
}
