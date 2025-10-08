import { Navbar } from "@/components/navbar";
import { contactInfo } from "@/lib/display-constants";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RMIT Business Analytics Champions",
  description:
    "RMIT Business Analytics Champions is RMIT's national-level data analytics competitions, where students tackle real-world business problems, compete in challenging rounds, and connect with industry experts. It's the perfect stage to showcase your skills, creativity, and problem-solving mindset.",
  openGraph: {
    url: "https://rbac.vn",
    images: "/cover.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-background focus:text-foreground focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

const Footer = () => (
  <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-primary to-slate-900 border-t border-secondary/50">
    {/* Animated background effects */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>

    <div className="relative z-10 px-5 md:px-10 lg:px-20 py-10 lg:py-20">
      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-10 text-center tracking-tight">
          Get In Touch
        </h2>

        <div className="bg-gradient-to-br from-muted/20 to-primary/30 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-secondary/40 shadow-2xl hover:shadow-cyan-500/10 transition-shadow duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group text-center md:text-left space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-3">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Project Leader</h3>
              <p className="text-blue-100 font-medium">Nguyen Thi Phuong Dai</p>
              <div className="space-y-2 pt-2">
                <a
                  href="mailto:s3914588@rmit.edu.vn"
                  className="flex items-center justify-center md:justify-start text-primary-foreground hover:text-blue-300 transition-colors group"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  s3914588@rmit.edu.vn
                </a>
                <a
                  href="tel:0914784228"
                  className="flex items-center justify-center md:justify-start text-primary-foreground hover:text-blue-300 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0914 784 228
                </a>
              </div>
            </div>

            <div className="group text-center md:text-left space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-3">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                External Relations Leader
              </h3>
              <p className="text-blue-100 font-medium">Kieu Hoang Minh Nhat</p>
              <div className="space-y-2 pt-2">
                <a
                  href="mailto:s4052258@rmit.edu.vn"
                  className="flex items-center justify-center md:justify-start text-primary-foreground hover:text-purple-300 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  s4052258@rmit.edu.vn
                </a>
                <a
                  href="tel:0901875879"
                  className="flex items-center justify-center md:justify-start text-primary-foreground hover:text-purple-300 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0901 875 879
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-secondary/30">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {contactInfo.map((contact) => {
                return (
                  <a
                    key={contact.link}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative text-primary-foreground hover:text-white transition-all duration-300 p-4 rounded-xl bg-gradient-to-br from-muted/20 to-transparent border border-secondary/20 hover:border-secondary/50 hover:scale-110 hover:shadow-lg",
                      contact.color,
                    )}
                  >
                    {contact.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Organizers & Sponsors */}
      <div className="mb-16 bg-gradient-to-br from-primary/40 via-accent-secondary/10 to-purple-900/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-accent-secondary/20 shadow-2xl">
        <section className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary via-blue-400 to-secondary-foreground mb-10 tracking-wider uppercase">
            Organizers
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="w-full md:w-auto group relative bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-muted to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <Image
                  src="/components/rmit-scp-logo.png"
                  alt="RMIT Student Club Programs Logo"
                  width={200}
                  height={80}
                  className="mx-auto max-h-20 max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                />
              </div>
            </div>

            <div className="w-full md:w-auto group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-400/30 hover:border-pink-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary-foreground to-pink-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <Image
                  src="/club-logo.png"
                  alt="RMIT Analytics Club Logo"
                  width={200}
                  height={80}
                  className="mx-auto max-h-20 max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                />
              </div>
            </div>

            <div className="w-full md:w-auto group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-2xl border border-cyan-400/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <Image
                  src="/logo-main.png"
                  alt="RBAC Logo"
                  width={200}
                  height={80}
                  className="mx-auto max-h-20 max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-10 tracking-wider uppercase">
            Web Sponsor
          </h3>
          <div className="flex justify-center">
            <Link
              href="https://tuturuuu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-2xl p-10 border border-purple-400/30 hover:border-pink-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/30 max-w-md w-full hover:-translate-y-2"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <Image
                  width={200}
                  height={200}
                  src="/components/tuturuuu.png"
                  alt="Tuturuuu Sponsor Logo"
                  className="max-h-32 max-w-full object-contain mx-auto filter drop-shadow-[0_0_20px_rgba(192,38,211,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(192,38,211,1)] transition-all duration-300"
                />
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 mt-6 font-bold text-4xl tracking-wide">
                  Tuturuuu
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* Bottom Footer */}
      <div className="pt-10 border-t border-slate-700/40">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                RMIT Analytics Club
              </span>
            </div>
            <p className="text-blue-200/80 font-medium">
              Organizer of RBAC Season 6
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://tuturuuu.com/privacy"
              className="text-primary-foreground hover:text-blue-300 transition-colors font-medium hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <span className="text-secondary/50">•</span>
            <a
              href="https://tuturuuu.com/terms"
              className="text-primary-foreground hover:text-blue-300 transition-colors font-medium hover:underline underline-offset-4"
            >
              Terms & Conditions
            </a>
            <span className="text-secondary/50">•</span>
            <a
              href="/faqs"
              className="text-primary-foreground hover:text-blue-300 transition-colors font-medium hover:underline underline-offset-4"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700/30 text-center text-blue-200/70 text-sm">
          <p>
            © 2025{" "}
            <Link
              href="https://tuturuuu.com"
              target="_blank"
              className="hover:underline font-semibold hover:text-blue-300 transition-colors underline-offset-4"
            >
              Tuturuuu
            </Link>{" "}
            &{" "}
            <Link
              href="https://www.facebook.com/RMIT.AnalyticsClub"
              target="_blank"
              className="hover:underline font-semibold hover:text-blue-300 transition-colors underline-offset-4"
            >
              RMIT Vietnam Analytics Club
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
