"use client";

import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { seasonList } from "@/lib/season-constants";
import FinalistList from "@/components/seasons/finalist-list";

export default function SeasonDetail() {
  const { id } = useParams();
  const rootUrl = `/seasons/ss${id}`;
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3);
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5);
  const { elementRef: contentRef, offset: contentOffset } = useParallax(0.1);

  // Get the current season based on the id parameter
  const seasonId = parseInt(id as string) - 1;
  const currentSeason = seasonList[seasonId] || seasonList[0];

  // Generate year based on season id (assuming season 1 was 2021)
  const seasonYear = 2021 + seasonId;

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-primary via-blue-900 to-secondary overflow-hidden">
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
      <div className="absolute inset-0 tech-grid opacity-50" />

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
         flex flex-col items-center justify-center gap-4 sm:gap-8
         min-h-screen text-center"
      >
        <Image
          src={`${rootUrl}/ss${id}-timeline.jpg` || "/placeholder.svg"}
          alt={`RBAC Season ${id} Timeline`}
          width={3321}
          height={1262}
          className="object-contain w-full rounded-md shadow-lg"
        />
        <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-white glow-effect">
          <h1
            className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent
           text-shadow-md text-shadow-primary-foreground/30 drop-shadow-2xl"
          >
            RBAC {seasonYear}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mt-2 sm:mt-4 text-blue-100">
            Season {parseInt(id as string)} - {currentSeason.topic}
          </p>
        </div>
        <div className="h-0.5 w-full md:w-3/4 lg:w-2/3 bg-primary-foreground/40 rounded-full"></div>

        {/* Season Logo */}
        <Card className="w-full max-w-4xl gap-2 md:gap-3 bg-transparent border-transparent shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Season Logo
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <Image
              src={`${rootUrl}/${currentSeason.logo}` || "/placeholder.svg"}
              alt={`RBAC Season ${id} Logo`}
              width={206}
              height={206}
              className="object-contain rounded-sm shadow-lg shadow-secondary/30 w-32 md:w-40 lg:w-48"
            />
          </CardContent>
        </Card>

        {/* Partners Section */}
        <Card className="w-full max-w-4xl gap-2 md:gap-3 bg-transparent border-transparent shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Partners & Sponsors
            </CardTitle>
          </CardHeader>
          <CardContent
            className="px-2 py-4 md:py-8 
          backdrop-blur-sm bg-primary/10
          rounded-sm border-2 border-pink-300/50"
          >
            <div className="flex flex-row flex-wrap gap-2 md:gap-4 justify-center items-center justify-items-center">
              {currentSeason.partners.map((partner, index) => {
                if (currentSeason.logo.includes("ss5"))
                  return (
                    <Image
                      key={index}
                      src={`${rootUrl}/${partner.name}` || "/placeholder.svg"}
                      width={partner.width}
                      height={partner.height}
                      alt={`Partner ${index + 1}`}
                      className="object-contain rounded-sm absolute scale-110"
                    />
                  );
                return (
                  <Image
                    key={index}
                    src={`/seasons/logos/${partner.name}` || "/placeholder.svg"}
                    alt={`Partner ${index + 1}`}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain rounded-sm w-24 sm:w-32 lg:w-50"
                  />
                );
              })}
            </div>
          </CardContent>
        </Card>
        <div className="h-0.5 w-full bg-primary-foreground/40 rounded-full"></div>

        {currentSeason.mentors && currentSeason.mentors.length > 0 && (
          <Card className="bg-transparent border-transparent shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Mentors
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {currentSeason.mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-primary/60 rounded-lg"
                >
                  <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                    <Image
                      src={`${rootUrl}/${mentor.image}` || "/placeholder.svg"}
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
              ))}
            </CardContent>
          </Card>
        )}

        {currentSeason.judges && currentSeason.judges.length > 0 && (
          <Card className="bg-transparent border-transparent shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Judges
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Handle different data structures for judges */}
              {currentSeason.judges.map((judge, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg"
                  >
                    <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                      <Image
                        src={`${rootUrl}/${judge.image}` || "/placeholder.svg"}
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
            </CardContent>
          </Card>
        )}

        {/* Highlighted Joiners Carousel */}
        <div className="w-full max-w-6xl mt-8">
          <div className="text-center mb-4 md:mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 glow-effect animate-fade-in">
              <span
                className="bg-gradient-to-r text-shadow-sm text-shadow-background/10 
              primary-gradient bg-clip-text text-transparent"
              >
                Top 5 Finalists
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-secondary-foreground mx-auto 
            mt-2 md:mt-3 lg:mt-4 rounded-full animate-pulse"></div>
          </div>

          <FinalistList currentSeason={currentSeason} rootUrl={rootUrl} />
        </div>

        <div className="mt-8 text-center">
          <Badge
            variant="outline"
            className="px-6 py-3 bg-transparent backdrop-blur-sm border-transparent shadow-none animate-bounce-subtle"
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
