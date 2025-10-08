"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const { elementRef: bgRef } = useParallax(0.3);
  const { elementRef: floatingRef, offset: floatingOffset } = useParallax(0.5);
  const { elementRef: contentRef } = useParallax(0.1);

  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "General Information",
      questions: [
        {
          question: "What is RBAC?",
          answer:
            "RBAC is open to all undergraduate students currently enrolled in universities across Vietnam. Participants must register in teams of four.",
        },
        {
          question: "Who can participate in RBAC?",
          answer:
            "RBAC is open to all undergraduate students currently enrolled in universities across Vietnam. Participants must register in teams of four.",
        },
        {
          question: "Does RBAC support team formation?",
          answer:
            "Currently, RBAC does not provide an official form or process to support team formation for individual participants. However, we encourage you to actively connect with potential teammates through the RMIT Business Analytics Champion Community.",
        },
        {
          question: "Can a team change its members after registration?",
          answer:
            "Scenario 1: If a member withdraws before Round 1 registration closes, the team must send an email to the RBAC Organizers with confirmation from the withdrawing member. The team must complete their lineup (4 members) before Round 1 begins. Scenario 2: If a member withdraws after Round 1 registration is completed, the team can continue with at least 3 remaining members.",
        },
        {
          question:
            "I'm concerned about the lack of experience and how realistic our insights will be in the later rounds. Will there be any support for teams?",
          answer:
            "RBAC provides comprehensive support to all participants. Each team will receive a detailed guidebook to help navigate the competition. In the final round, teams will also be paired with experienced mentors who bring practical industry knowledge to guide and refine your work. These resources are designed to help every team strengthen their analysis and deliver realistic, impactful insights.",
        },
        {
          question: "Is there a registration fee?",
          answer:
            "No, participation in RBAC is completely free of charge for all students.",
        },
      ],
    },
    {
      title: "Competition Details",
      questions: [
        {
          question: "What is the competition format?",
          answer:
            "RBAC consists of three main rounds: Qualification Round, Semi-final Round, and Final Round. Each round presents different challenges focusing on various aspects of business analytics.",
        },
        {
          question: "What skills are required to participate?",
          answer:
            "Participants should have basic knowledge of data analysis, critical thinking skills, and the ability to work with data visualization tools. Technical skills in Python, R, or SQL are beneficial but not mandatory.",
        },
        {
          question: "What are the evaluation criteria?",
          answer:
            "Submissions are evaluated based on analytical depth, business insights, creativity, presentation quality, and practical applicability of the solutions.",
        },
        {
          question: "What prizes can winners expect?",
          answer:
            "Winners receive cash prizes, internship opportunities with our partner companies, certificates, and trophies. The total prize pool is typically over 100,000,000 VND.",
        },
      ],
    },
    {
      title: "Registration Process",
      questions: [
        {
          question: "How do I register for RBAC?",
          answer:
            "Registration is done through our official website. You'll need to provide basic information about yourself and your team members (if applicable), and agree to the competition terms and conditions.",
        },
        {
          question: "What is the registration deadline?",
          answer:
            "The registration deadline for Season 6 is 5:00 PM on 9 October 2025. Follow the RBAC fanpage to stay updated on more key dates and important announcements!",
        },
        {
          question:
            "What should I do if I encounter problems during registration?",
          answer:
            "If you experience any issues with registration, please contact our support team at rbachampion.06@gmail.com or through our Facebook page. Please include screenshots of any error messages you encounter.",
        },
      ],
    },
    {
      title: "Technical Requirements",
      questions: [
        {
          question: "What software/tools will I need?",
          answer:
            "Participants typically need data analysis tools (Excel, Python, R, or similar), presentation software, and may benefit from data visualization tools like Tableau or Power BI. Specific requirements are announced with each challenge.",
        },
        {
          question: "Are there any specific data format requirements?",
          answer:
            "Submissions are generally required in PDF format for reports and PPTX for presentations. Data files should be in CSV or XLSX format unless otherwise specified.",
        },
        {
          question: "What if I have technical issues during the competition?",
          answer:
            "We have a technical support team available throughout the competition. Contact details are provided to all participants at the beginning of each round.",
        },
      ],
    },
    {
      title: "Partnership & Sponsorship",
      questions: [
        {
          question: "How can my company become a sponsor?",
          answer:
            "We welcome corporate sponsorships. Please contact our partnership team at rbachampion.06@gmail.com for more information about sponsorship packages and benefits.",
        },
        {
          question: "What are the benefits of sponsoring RBAC?",
          answer:
            "Sponsors gain access to top analytics talent, brand visibility among students and academics, opportunities to present challenges based on real business problems, and networking opportunities with other industry leaders.",
        },
        {
          question:
            "Can academics or industry professionals get involved as mentors?",
          answer:
            "Yes, we are always looking for experienced professionals to mentor participants. Please reach out to us at rbachampion.06@gmail.com with your background and areas of expertise.",
        },
      ],
    },
  ];

  // Filter questions based on search query
  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 opacity-40 bg-cover bg-bottom md:bg-center w-full h-full",
          `bg-[url('/backgrounds/rbac-hero-mobile.png')] md:bg-[url('/backgrounds/rbac.png')]`,
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
        className="relative z-10 h-full px-4 pt-20 pb-12 md:py-20 
         flex flex-col items-center justify-center gap-8 sm:gap-12
         min-h-screen text-center"
      >
        <div className="text-5xl md:text-7xl font-bold text-white glow-effect">
          <h1 className="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
            FAQs
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-blue-100">
            Frequently Asked Questions
          </p>
        </div>

        {/* Search Bar */}
        <Card className="w-full max-w-3xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search questions..."
                className="pl-10 bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* FAQ Accordion */}
        <div className="w-full max-w-4xl space-y-6 text-left">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`item-${index}-${qIndex}`}
                        className="border-slate-700/50"
                      >
                        <AccordionTrigger className="text-left text-white hover:text-blue-300 py-4">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-blue-100 pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardContent className="pt-6 text-center">
                <p className="text-blue-100">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-slate-400 mt-2">
                  Try different keywords or browse all categories
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
