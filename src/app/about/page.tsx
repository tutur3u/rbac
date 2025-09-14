"use client"

import { useParallax } from "@/hooks/use-parallax"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export default function AboutUs() {
  const { elementRef: bgRef, offset: bgOffset } = useParallax(0.3)
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5)
  const { elementRef: contentRef, offset: contentOffset } = useParallax(0.1)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const events = [
    {
      year: "2025",
      title: "Hội thảo: Hướng dẫn sử dụng tool NVivo",
      description: "Workshop chuyên sâu về công cụ NVivo cho nghiên cứu định tính và phân tích dữ liệu.",
      participants: "80+",
      image: "/nvivo-workshop-training-session-with-students-and-.jpg",
      color: "blue",
    },
    {
      year: "2025",
      title: "Tọa đàm: Từ Dữ liệu đến Quyết định",
      description: "Con đường sự nghiệp của bạn trong Phân Tích cùng các chuyên gia hàng đầu.",
      participants: "150+",
      image: "/t-a---m-career-guidance-session-with-professionals.jpg",
      color: "purple",
    },
    {
      year: "2024",
      title: "Hoạt động gây quỹ từ thiện ngày Tết",
      description: "Chương trình gây quỹ từ thiện ý nghĩa nhân dịp Tết Nguyên Đán của RMIT Analytics Club.",
      participants: "200+",
      image: "/charity-fundraising-event-during-tet-holiday-with-.jpg",
      color: "cyan",
    },
    {
      year: "2024",
      title: "Khám phá văn hóa làm việc tại PwC",
      description: "Tìm hiểu môi trường làm việc tại một trong những công ty BIG4 hàng đầu thế giới.",
      participants: "120+",
      image: "/pwc-office-visit-with-professionals-in-business-at.jpg",
      color: "emerald",
    },
    {
      year: "2024",
      title: "Trải nghiệm cùng Samsung Electronics",
      description: "Lắng nghe - trải nghiệm - truyền cảm hứng cùng các chuyên gia tại Samsung Electronics.",
      participants: "100+",
      image: "/samsung-electronics-office-visit-with-technology-d.jpg",
      color: "rose",
    },
    {
      year: "2023",
      title: "Workshop: Pathway to BIG4",
      description: "Hướng dẫn chi tiết về con đường gia nhập các công ty tư vấn BIG4 hàng đầu.",
      participants: "180+",
      image: "/placeholder-ac5eh.png",
      color: "indigo",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, events.length])

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/30 border-blue-400/20 from-blue-400 to-purple-400 hover:border-blue-400/50 group-hover:text-blue-300",
      purple:
        "bg-purple-500/30 border-purple-400/20 from-purple-400 to-pink-400 hover:border-purple-400/50 group-hover:text-purple-300",
      cyan: "bg-cyan-500/30 border-cyan-400/20 from-cyan-400 to-blue-400 hover:border-cyan-400/50 group-hover:text-cyan-300",
      emerald:
        "bg-emerald-500/30 border-emerald-400/20 from-emerald-400 to-teal-400 hover:border-emerald-400/50 group-hover:text-emerald-300",
      rose: "bg-rose-500/30 border-rose-400/20 from-rose-400 to-orange-400 hover:border-rose-400/50 group-hover:text-rose-300",
      indigo:
        "bg-indigo-500/30 border-indigo-400/20 from-indigo-400 to-violet-400 hover:border-indigo-400/50 group-hover:text-indigo-300",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
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
          <h1 className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">ABOUT US</h1>
          <p className="text-xl md:text-2xl mt-4 text-blue-100">RMIT Vietnam Analytics Club SGS</p>
        </div>

        <div className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-blue-100 text-left">
                  Established in 2008, RMIT Vietnam Analytics Club SGS is dedicated to creating a learning environment
                  for young enthusiasts passionate about data and business analytics.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Core Values</h2>
                <ul className="space-y-2 text-blue-100 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    Work hard, play hard
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Family sense
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    Self-development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                    Precious networks
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Fields of Activity</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">
                    Business Analytics
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
                    Data Analytics
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4">
                  <p className="text-amber-200 font-semibold">Best Academic Club 7 consecutive years</p>
                </div>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Major Events</h3>
                <ul className="space-y-3 text-blue-100 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                    <span>From Data to Decisions: Your Career Path in Analytics (2025)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                    <span>Exploring Work Culture at PwC - One of the leading BIG4 (2024)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                    <span>Listen - Experience - Get Inspired with experts at Samsung Electronics (2024)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2"></div>
                    <span>Workshop: Pathway to BIG4 (2023)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-8">
          <h2 className="text-3xl font-bold text-white mb-6">About RBAC</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                <p className="text-blue-100 text-left mb-6">A national competition for students established in 2020.</p>

                <h3 className="text-xl font-semibold text-white mb-3">Core Values</h3>
                <ul className="space-y-2 text-blue-100 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                    Adaptability
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Business Connection
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    Practicality
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Vision & Mission</h3>
                <p className="text-blue-100 text-left mb-4">
                  <span className="font-semibold text-white">Vision:</span> To become an influential business analytics
                  competition in Vietnam, where young people develop data thinking skills, practice practical skills
                  through real-world challenges, and receive practical support from businesses.
                </p>
                <p className="text-blue-100 text-left">
                  <span className="font-semibold text-white">Mission:</span> To provide an experiential playground where
                  students can challenge themselves, practice analytical thinking, and accumulate experience in Business
                  Analytics.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-blue-200 text-center">
                Organizer: <span className="text-white font-semibold">RMIT Analytics Club SGS</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mt-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4 glow-effect animate-fade-in">
              <span className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">Triển Lãm Sự Kiện</span>
            </h2>
            <p className="text-xl text-blue-200 animate-fade-in-delay">Hành Trình Qua Di Sản Của Chúng Ta</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full animate-pulse"></div>
          </div>

          <div className="mb-12 relative">
            <div
              className="relative overflow-hidden rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {events.map((event, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <span
                            className={`px-4 py-2 text-white rounded-full text-lg font-bold border ${getColorClasses(event.color).split(" ")[0]} ${getColorClasses(event.color).split(" ")[1]}`}
                          >
                            {event.year}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{event.title}</h3>
                          <p className="text-blue-100 text-lg leading-relaxed">{event.description}</p>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-blue-300">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-lg font-semibold">{event.participants} Participants</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(event.color).split("from-")[1]?.split(" ")[0] ? `from-${getColorClasses(event.color).split("from-")[1].split(" ")[0]} ${getColorClasses(event.color).split("to-")[1]?.split(" ")[0] ? `to-${getColorClasses(event.color).split("to-")[1].split(" ")[0]}` : ""}` : "from-blue-400 to-purple-400"} rounded-full flex items-center justify-center animate-spin-slow`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                          <span className="text-blue-200 text-sm">Featured Event</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {events.map((_, index) => (
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
                onClick={() => setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-600/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % events.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-600/50 flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300 hover:scale-110"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .concat([
                {
                  year: "2023",
                  title: "Hội thảo Thanh Toán Số & Phân Tích",
                  description:
                    "Cùng RMIT Fintech Club tổ chức hội thảo về lĩnh vực Thanh Toán Số và Phân Tích Dữ Liệu.",
                  participants: "160+",
                  image: "/placeholder-hol2b.png",
                  color: "amber",
                },
                {
                  year: "2022",
                  title: "Hội thảo Trực quan hóa dữ liệu",
                  description: "Phân Tích Kinh Doanh: Trực quan hóa dữ liệu - Vẽ nên Bảng điều khiển hiệu quả.",
                  participants: "140+",
                  image: "/data-visualization-dashboard-workshop-with-charts-.jpg",
                  color: "teal",
                },
                {
                  year: "2022",
                  title: "Hội thảo Định Hướng Nghề Nghiệp",
                  description:
                    "Kết hợp cùng RMIT Careers, Alumni & Industry Relations tổ chức hội thảo định hướng nghề nghiệp.",
                  participants: "220+",
                  image: "/career-guidance-seminar-with-rmit-careers-team.jpg",
                  color: "violet",
                },
              ])
              .map((event, index) => {
                const colorClasses = getColorClasses(event.color)
                return (
                  <div
                    key={index}
                    className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3 py-1 text-white rounded-full text-sm font-medium border ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]}`}
                        >
                          {event.year}
                        </span>
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${colorClasses.split("from-")[1]?.split(" ")[0] ? `from-${colorClasses.split("from-")[1].split(" ")[0]}` : "from-blue-400"} ${colorClasses.split("to-")[1]?.split(" ")[0] ? `to-${colorClasses.split("to-")[1].split(" ")[0]}` : "to-purple-400"} rounded-full flex items-center justify-center group-hover:animate-spin`}
                        >
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <h3
                        className={`text-lg font-bold text-white mb-3 transition-colors duration-300 ${colorClasses.split("group-hover:")[1] || "group-hover:text-blue-300"}`}
                      >
                        {event.title}
                      </h3>
                      <p className="text-blue-100 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {event.description}
                      </p>
                      <div className="flex items-center text-xs text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        {event.participants} Participants
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 animate-bounce-subtle">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-200 text-sm">Kỷ niệm 17 năm xuất sắc trong giáo dục phân tích</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
