"use client"

import { useParallax } from "@/hooks/use-parallax"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SeasonDetail() {
  const { id } = useParams()
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3)
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5)
  const { elementRef: contentRef, offset: contentOffset } = useParallax(0.1)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Mock data for seasons
  const seasons = [
    {
      id: "2",
      year: "2024",
      name: "Season 2",
      theme: "Data-Driven Transformation",
      logoColors: "Blue and Silver",
      logoImage: "/season2-logo-blue-silver-design.png",
      partners: ["PwC Vietnam", "Samsung Electronics", "Microsoft Vietnam"],
      partnersLogo: "/season2-partners-all-logos-combined.png",
      strategicPartner: "PwC Vietnam",
      strategicPartnerLogo: "/pwc-logo-official.png",
      mentors: [
        { name: "Dr. John Smith", affiliation: "RMIT University", initials: "JS" },
        { name: "Ms. Lisa Johnson", affiliation: "PwC Analytics Lead", initials: "LJ" },
        { name: "Mr. David Kim", affiliation: "Samsung Data Science Director", initials: "DK" }
      ],
      mentorsImage: "/season2-mentors-group-photo.jpg",
      judges: [
        { name: "Prof. Alan Thompson", affiliation: "RMIT Business School", initials: "AT" },
        { name: "Ms. Sarah Williams", affiliation: "Microsoft AI Specialist", initials: "SW" },
        { name: "Mr. Robert Chen", affiliation: "KPMG Analytics Partner", initials: "RC" }
      ],
      judgesImage: "/season2-judges-panel-photo.jpg",
      winner: { name: "Team Data Pioneers", affiliation: "RMIT University", initials: "DP" },
      winnerImage: "/season2-winners-team-photo.jpg",
      highlights: [
        "Record participation with 50+ teams",
        "Introduction of real-time analytics challenge",
        "First international participants from Singapore"
      ],
      highlightedParticipants: [
        { name: "Nguyen Van A", achievement: "Best Data Visualization", initials: "NA" },
        { name: "Tran Thi B", achievement: "Most Innovative Solution", initials: "TB" },
        { name: "Le Van C", achievement: "Best Presentation Skills", initials: "LC" }
      ],
      highlightedParticipantsImage: "/season2-highlighted-participants-group.jpg",
      seasonImage: "/season2-main-competition-hall.jpg"
    },
    {
      id: "1",
      year: "2023",
      name: "Season 1",
      theme: "Analytics for Tomorrow",
      logoColors: "Purple and Gold",
      logoImage: "/season1-logo-purple-gold-design.png",
      partners: ["KPMG Vietnam", "Viettel Solutions", "FPT Software"],
      partnersLogo: "/season1-partners-all-logos-combined.png",
      strategicPartner: "KPMG Vietnam",
      strategicPartnerLogo: "/kpmg-logo-official.png",
      mentors: [
        { name: "Dr. Emily Wilson", affiliation: "RMIT University", initials: "EW" },
        { name: "Mr. Michael Brown", affiliation: "KPMG Analytics Director", initials: "MB" },
        { name: "Ms. Jennifer Lee", affiliation: "Viettel Data Science Manager", initials: "JL" }
      ],
      mentorsImage: "/season1-mentors-group-photo.jpg",
      judges: [
        { name: "Prof. James Anderson", affiliation: "RMIT Business School", initials: "JA" },
        { name: "Mr. Thomas Nguyen", affiliation: "FPT Software CTO", initials: "TN" },
        { name: "Ms. Sophia Tran", affiliation: "Vietnam National University", initials: "ST" }
      ],
      judgesImage: "/season1-judges-panel-photo.jpg",
      winner: { name: "Team Insight Warriors", affiliation: "Foreign Trade University", initials: "IW" },
      winnerImage: "/season1-winners-team-photo.jpg",
      highlights: [
        "Pioneering analytics competition in Vietnam",
        "30+ participating teams from top universities",
        "Successful industry-academia collaboration"
      ],
      highlightedParticipants: [
        { name: "Pham Van D", achievement: "Best Analytical Approach", initials: "PD" },
        { name: "Hoang Thi E", achievement: "Most Creative Solution", initials: "HE" },
        { name: "Do Van F", achievement: "Best Technical Implementation", initials: "DF" }
      ],
      highlightedParticipantsImage: "/season1-highlighted-participants-group.jpg",
      seasonImage: "/season1-inaugural-competition-with-students-and-jud.jpg"
    }
  ]

  const currentSeason = seasons.find(season => season.id === id) || seasons[0]
  console.log("Current Season:", currentSeason, "ID from params:", id)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentSeason.highlights.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSeason.highlights.length])

  const getColorClasses = (index: number) => {
    const colors = [
      "bg-blue-500/30 border-blue-400/20 from-blue-400 to-purple-400 hover:border-blue-400/50 group-hover:text-blue-300",
      "bg-purple-500/30 border-purple-400/20 from-purple-400 to-pink-400 hover:border-purple-400/50 group-hover:text-purple-300",
      "bg-cyan-500/30 border-cyan-400/20 from-cyan-400 to-blue-400 hover:border-cyan-400/50 group-hover:text-cyan-300",
      "bg-emerald-500/30 border-emerald-400/20 from-emerald-400 to-teal-400 hover:border-emerald-400/50 group-hover:text-emerald-300",
      "bg-rose-500/30 border-rose-400/20 from-rose-400 to-orange-400 hover:border-rose-400/50 group-hover:text-rose-300",
      "bg-indigo-500/30 border-indigo-400/20 from-indigo-400 to-violet-400 hover:border-indigo-400/50 group-hover:text-indigo-300",
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 opacity-40 bg-cover bg-bottom md:bg-center w-full h-full",
          `bg-[url('/backgrounds/rbac-hero-mobile.png')] md:bg-[url('/backgrounds/rbac.png')]`,
        )}
      />

      <div ref={bgRef} className="absolute inset-0 matrix-bg opacity-20 md:opacity-100" />
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
          <h1 className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">RBAC {currentSeason.year}</h1>
          <p className="text-xl md:text-2xl mt-4 text-blue-100">{currentSeason.name} - {currentSeason.theme}</p>
        </div>

        {/* Season Logo */}
        <Card className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Season Logo</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="w-48 h-48 relative">
              <Image
                src={currentSeason.logoImage || "/placeholder.svg"}
                alt={`RBAC ${currentSeason.year} Logo`}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-blue-100 mt-4">Colors: {currentSeason.logoColors}</p>
          </CardContent>
        </Card>

        {/* Partners Section */}
        <Card className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Partners & Sponsors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Partner</h3>
              <div className="flex flex-col items-center">
                <div className="w-64 h-32 relative mb-4">
                  <Image
                    src={currentSeason.strategicPartnerLogo || "/placeholder.svg"}
                    alt={currentSeason.strategicPartner}
                    fill
                    className="object-contain"
                  />
                </div>
                <Badge variant="outline" className="text-blue-100 font-medium text-lg py-1 px-4">
                  {currentSeason.strategicPartner}
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">All Partners</h3>
              <div className="w-full h-40 relative">
                <Image
                  src={currentSeason.partnersLogo || "/placeholder.svg"}
                  alt="All Partners"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                {currentSeason.partners.map((partner, index) => (
                  <Badge key={index} variant="secondary" className="text-blue-100 bg-slate-700/30 p-2">
                    {partner}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Mentors & Judges */}
        <Tabs defaultValue="mentors" className="w-full max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 backdrop-blur-sm">
            <TabsTrigger value="mentors" className="data-[state=active]:bg-slate-700/50">Mentors</TabsTrigger>
            <TabsTrigger value="judges" className="data-[state=active]:bg-slate-700/50">Judges</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mentors">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={currentSeason.mentorsImage || "/placeholder.svg"}
                    alt="Season Mentors"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentSeason.mentors.map((mentor, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-slate-700/30 rounded-lg">
                      <Avatar>
                        <AvatarFallback className="bg-blue-500/30 text-white">
                          {mentor.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-white font-medium">{mentor.name}</p>
                        <p className="text-blue-100 text-sm">{mentor.affiliation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="judges">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Judges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={currentSeason.judgesImage || "/placeholder.svg"}
                    alt="Season Judges"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentSeason.judges.map((judge, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-slate-700/30 rounded-lg">
                      <Avatar>
                        <AvatarFallback className="bg-purple-500/30 text-white">
                          {judge.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-white font-medium">{judge.name}</p>
                        <p className="text-blue-100 text-sm">{judge.affiliation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Winners & Highlights */}
        <Card className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Winners & Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Champion</h3>
              <div className="flex flex-col items-center">
                <div className="w-full h-64 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={currentSeason.winnerImage || "/placeholder.svg"}
                    alt="Season Winner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-2xl font-bold">{currentSeason.winner.name}</p>
                    <p className="text-blue-100">{currentSeason.winner.affiliation}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-slate-700/30 rounded-lg w-full max-w-md">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-amber-500/30 text-white">
                      {currentSeason.winner.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-white font-medium">{currentSeason.winner.name}</p>
                    <p className="text-blue-100 text-sm">{currentSeason.winner.affiliation}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Highlighted Participants</h3>
              <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={currentSeason.highlightedParticipantsImage || "/placeholder.svg"}
                  alt="Highlighted Participants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentSeason.highlightedParticipants.map((participant, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-slate-700/30 rounded-lg">
                    <Avatar>
                      <AvatarFallback className="bg-green-500/30 text-white">
                        {participant.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-white font-medium">{participant.name}</p>
                      <p className="text-blue-100 text-sm">{participant.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Season Highlights Carousel */}
        <div className="w-full max-w-6xl mt-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4 glow-effect animate-fade-in">
              <span className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">Season Highlights</span>
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
                  {currentSeason.highlights.map((highlight, index) => {
                    const colorClasses = getColorClasses(index)
                    return (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                          <div className="relative overflow-hidden rounded-xl">
                            <Image
                              src={currentSeason.seasonImage || "/placeholder.svg"}
                              alt={highlight}
                              fill
                              className="object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <Badge className={`text-white text-lg font-bold ${colorClasses}`}>
                                {currentSeason.year}
                              </Badge>
                            </div>
                          </div>

                          <div className="flex flex-col justify-center space-y-6">
                            <div>
                              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Highlight #{index + 1}</h3>
                              <p className="text-blue-100 text-lg leading-relaxed">{highlight}</p>
                            </div>

                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-12 h-12 bg-gradient-to-br ${colorClasses.split("from-")[1]?.split(" ")[0] ? `from-${colorClasses.split("from-")[1].split(" ")[0]} ${colorClasses.split("to-")[1]?.split(" ")[0] ? `to-${colorClasses.split("to-")[1].split(" ")[0]}` : ""}` : "from-blue-400 to-purple-400"} rounded-full flex items-center justify-center animate-spin-slow`}
                              >
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                              </div>
                              <span className="text-blue-200 text-sm">Season Highlight</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {currentSeason.highlights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-blue-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + currentSeason.highlights.length) % currentSeason.highlights.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-600/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % currentSeason.highlights.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-600/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
                >
                  →
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Badge variant="outline" className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 animate-bounce-subtle">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-200 text-sm">RBAC {currentSeason.year} - {currentSeason.theme}</span>
          </Badge>
        </div>
      </div>
    </section>
  )
}