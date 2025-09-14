"use client";

import { useState, useEffect } from "react";
import { useParallax } from "@/hooks/use-parallax";
import { Facebook, Fan, Linkedin, Mail, PhoneCall, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/lib/display-constants";

export default function ContactContent() {
  const [isVisible, setIsVisible] = useState(false);
  const { offset: parallaxY } = useParallax(0.3);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
        />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"
          style={{ transform: `translateY(${parallaxY * 0.7}px)` }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-400/30 rounded-full animate-float-slow" />
      </div>

      <div className="relative z-10 container mx-auto  px-4 pt-20 pb-3 md:py-20 ">
        {/* Page Title */}
        <div className="text-center mb-16 glow-effect">
          <div
            className={`bg-gradient-to-r primary-gradient bg-clip-text text-transparent transition duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Connect with the RBAC Season 6 organizing team and the RMIT
              Analytics Club
            </p>
          </div>
        </div>

        {/* Contact Information Section */}
        <section className="mb-20">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-4 md:p-8 border border-slate-600/50 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <section
                  className={cn(
                    `bg-gradient-to-br from-purple-500/20 to-cyan-400/15 p-6 rounded-xl border border-slate-600 
                    backdrop-blur-sm transition-all duration-500 delay-700
                    col-span-full`,
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    About RBAC
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    RBAC (RMIT Business Analytics Champion) is one of the
                    pioneering academic competitions in data analytics at RMIT,
                    where students apply data-driven thinking to solve
                    real-world business problems and connect with industry
                    professionals.
                  </p>
                </section>
                {/* Contact Details */}
                <section className="space-y-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8
                  text-center md:text-left border-b-2 border-blue-200/20">
                    Get in Touch
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div
                        key={index}
                        className={`group flex flex-col md:flex-row items-center md:items-start 
                            gap-1 md:gap-4
                            transition-all duration-500 hover:translate-x-2 ${
                          contact.delay
                        } ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 ${contact.color} rounded-xl 
                            flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <span className="text-white text-lg">
                            {contact.icon}
                          </span>
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                            {contact.title}
                          </h3>
                          <a
                            href={contact.link}
                            className="text-blue-200 hover:text-blue-100 break-all transition-colors duration-300 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {contact.link
                              .replace("https://", "")
                              .replace("mailto:", "")}
                          </a>
                        </div>
                      </div>
                    ))}

                    {/* Phone Numbers */}
                    <div
                      className={`group flex flex-col md:flex-row items-center md:items-start 
                        gap-1 md:gap-4
                        transition-all duration-500 hover:translate-x-2 delay-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-10"
                      }`}
                    >
                      <div className="w-12 h-12 bg-green-500/20 border-2 border-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-white text-lg">
                          <PhoneCall />
                        </span>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          Hotline
                        </h3>
                        <p className="text-slate-200 mb-1">
                          0914 784 228 (Phuong Dai)
                        </p>
                        <p className="text-slate-200">
                          0901 875 879 (Minh Nhat)
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Location with Embedded Map */}
                <section>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8
                  text-center md:text-left border-b-2 border-purple-200/20">
                    Address{" "}
                  </h2>

                  <div
                    className={`md:bg-slate-700/80 px-6 md:p-6 rounded-xl md:border md:border-slate-500/50 backdrop-blur-sm 
                        text-center md:text-left
                        transition-all duration-500 delay-600 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">
                      RMIT University Vietnam
                    </h3>
                    <p className="text-slate-200 mb-4">
                      702 Nguyen Van Linh, Tan Hung Ward, District 7, Ho Chi
                      Minh City, Vietnam
                    </p>

                    {/* Embedded Google Map */}
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.0337013834132!2d106.69299098588502!3d10.729284798638325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbea5fe3db1%3A0xfae94aca5709003f!2zxJDhuqFpIGjhu41jIFJNSVQgVmnhu4d0IE5hbSAtIEPGoSBz4bufIE5hbSBTw6BpIEfDsm4!5e0!3m2!1sen!2sus!4v1757617096209!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
