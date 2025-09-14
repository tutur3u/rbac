import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import "./globals.css";
import { Facebook, Linkedin } from "lucide-react";
import { contactInfo } from "@/lib/display-constants";
import { cn } from "@/lib/utils";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
  <div className="px-5 md:px-10 lg:px-20 py-10 lg:py-20 bg-primary/80">
    <section className="mb-16 text-center">
      <h3 className="text-xl font-semibold text-white mb-6">
        Official Sponsor
      </h3>
      <div className="flex justify-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 flex items-center justify-center h-40 w-60">
          <img
            src="/path-to-your-sponsor-logo.png"
            alt="Sponsor Logo"
            className="max-h-20 max-w-full object-contain"
          />
        </div>
      </div>
    </section>
    {/* Contact Section */}
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Contact Us
      </h2>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              Project Leader
            </h3>
            <p className="text-blue-200">Nguyen Thi Phuong Dai</p>
            <p className="text-blue-200">Email: s3914588@rmit.edu.vn</p>
            <p className="text-blue-200">Phone: 0914 784 228</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              External Relations Leader
            </h3>
            <p className="text-blue-200">Kieu Hoang Minh Nhat</p>
            <p className="text-blue-200">Email: s4052258@rmit.edu.vn</p>
            <p className="text-blue-200">Phone: 0901 875 879</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            {contactInfo.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.link}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-blue-200 hover:text-white transition-colors p-3 rounded-full",
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

    {/* Footer */}
    <footer className="pt-12 mt-16 border-t-2 border-slate-600">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="text-xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              RMIT Analytics Club
            </span>
          </div>
          <p className="text-blue-200 mt-2">Organizer of RBAC Season 6</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="#"
            className="text-blue-200 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-blue-200 hover:text-white transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-blue-200 hover:text-white transition-colors"
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
