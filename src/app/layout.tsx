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
    url: "https://rbac.tuturuuu.com",
    images: "/cover.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
  <div
    className="px-5 md:px-10 lg:px-20 py-10 lg:py-20 bg-gradient-to-br from-slate-950 to-muted/10
  border-t border-secondary"
  >
    {/* Contact Section */}
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Contact Us
      </h2>

      <div className="bg-gradient-to-br from-muted/10 to-primary backdrop-blur-sm rounded-xl p-8 border border-secondary/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              Project Leader
            </h3>
            <p className="text-primary-foreground">Nguyen Thi Phuong Dai</p>
            <p className="text-primary-foreground">
              Email: s3914588@rmit.edu.vn
            </p>
            <p className="text-primary-foreground">Phone: 0914 784 228</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              External Relations Leader
            </h3>
            <p className="text-primary-foreground">Kieu Hoang Minh Nhat</p>
            <p className="text-primary-foreground">
              Email: s4052258@rmit.edu.vn
            </p>
            <p className="text-primary-foreground">Phone: 0901 875 879</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary/40">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            {contactInfo.map((contact) => {
              return (
                <a
                  key={contact.link}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-primary-foreground hover:text-white transition-colors p-3 rounded-full",
                    contact.color
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

    <div
      className="mb-16 bg-gradient-to-br from-primary via-accent-secondary/10 to-purple-900/50 p-8 rounded-xl 
    border border-accent-secondary/30 shadow-lg shadow-muted/20"
    >
      <section className="text-center mb-12">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-secondary-foreground mb-8 tracking-widest uppercase">
          Organizers
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* RMIT SCP Logo */}
          <div className="w-full md:w-auto group relative bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-5 rounded-xl border border-blue-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="absolute -inset-1 bg-gradient-to-r from-muted to-secondary rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <img
                src="/components/rmit-scp-logo.png"
                alt="RMIT Student Club Programs Logo"
                className="mx-auto max-h-20 max-w-full object-contain filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>
          </div>

          {/* Analytics Club Logo */}
          <div className="w-full md:w-auto group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-5 rounded-xl border border-purple-400/30 hover:border-pink-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-foreground to-pink-200 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <img
                src="/club-logo.png"
                alt="RMIT Analytics Club Logo"
                className="mx-auto max-h-20 max-w-full object-contain filter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              />
            </div>
          </div>

          {/* RBAC Logo */}
          <div className="w-full md:w-auto group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-5 rounded-xl border border-cyan-400/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <img
                src="/logo-main.png"
                alt="RBAC Logo"
                className="mx-auto max-h-20 max-w-full object-contain filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 tracking-widest uppercase">
          Web Sponsor
        </h3>
        <div className="flex justify-center">
          <Link
            href="https://tuturuuu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-xl p-8 border border-purple-400/30 hover:border-pink-400/50 transition-all duration-500 hover:shadow-pink-500/20 max-w-md w-full sm:w-1/4 block"
          >
            <div className="relative">
              <Image
                width={200}
                height={200}
                src="/components/tuturuuu.png"
                alt="Sponsor Logo"
                className="max-h-32 max-w-full object-contain mx-auto filter drop-shadow-[0_0_15px_rgba(192,38,211,0.7)]"
              />
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mt-4 font-bold text-4xl tracking-wide">
                Tuturuuu
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>

    {/* Footer */}
    <footer className="pt-12 mt-16 border-t-2 border-slate-600">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="text-xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              RMIT Analytics Club
            </span>
          </div>
          <p className="text-primary-foreground mt-2">
            Organizer of RBAC Season 6
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://tuturuuu.com/privacy"
            className="text-primary-foreground hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://tuturuuu.com/terms"
            className="text-primary-foreground hover:text-white transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="/faqs"
            className="text-primary-foreground hover:text-white transition-colors"
          >
            FAQ
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-blue-300">
        <p>© 2025 RMIT Vietnam Analytics Club SGS. All rights reserved.</p>
      </div>
    </footer>
  </div>
);
