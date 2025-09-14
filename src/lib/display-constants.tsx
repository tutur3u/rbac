import {
  Trophy,
  Users,
  Lightbulb,
  Network,
  Award,
  Zap,
  Clock,
  Shield,
  Code,
  Facebook,
  Linkedin,
  Mail,
} from "lucide-react";

export const achievements = [
  {
    number: "4500+",
    label: "Participants Worldwide",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "17K+",
    label: "Fanpage Followers",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "70+",
    label: "Universities",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500",
  },
  {
    number: "40+",
    label: "Partners",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    number: "9K+",
    label: "Community Members",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    gradient: "from-indigo-500 to-purple-500",
  },
];
export const benefits = [
  {
    icon: Trophy,
    title: "Substantial Prize Pool",
    description:
      "Compete for over 1,000,000 VND in prizes, including cash awards, tech equipment, and startup funding opportunities",
    color: "from-yellow-400 via-orange-500 to-red-500",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    value: "1M+ VND",
    category: "REWARDS",
  },
  {
    icon: Network,
    title: "Global Networking",
    description:
      "Connect with industry leaders, potential co-founders, and mentors from top tech companies worldwide",
    color: "from-blue-400 via-cyan-500 to-teal-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    value: "500+ Leaders",
    category: "NETWORK",
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    description:
      "Access exclusive workshops, masterclasses, and mentorship sessions to enhance your technical and entrepreneurial skills",
    color: "from-purple-400 via-pink-500 to-rose-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    value: "20+ Sessions",
    category: "GROWTH",
  },
  {
    icon: Users,
    title: "Career Opportunities",
    description:
      "Get noticed by leading tech recruiters and gain direct access to job opportunities at partner companies",
    color: "from-green-400 via-emerald-500 to-teal-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    value: "100+ Companies",
    category: "CAREERS",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Showcase your innovations on a global stage and build a portfolio that stands out to employers and investors",
    color: "from-indigo-400 via-purple-500 to-pink-500",
    bgColor: "from-indigo-500/10 to-purple-500/10",
    value: "Global Stage",
    category: "RECOGNITION",
  },
];

export const criteria = [
  {
    title: "Technical Expertise",
    description:
      "Demonstrated proficiency in programming, software development, or related technical fields",
    icon: Code,
    color: "from-sidebar-accent to-cyan-800",
    textColor: "from-sidebar-accent-foreground to-cyan-400",
    delay: "0ms",
  },
  {
    title: "Innovation Mindset",
    description:
      "Passion for creating novel solutions and thinking outside conventional boundaries",
    icon: Zap,
    color: "from-secondary to-pink-600/20",
    textColor: "from-secondary-foreground to-pink-400",
    delay: "100ms",
  },
  {
    title: "Team Collaboration",
    description:
      "Ability to work effectively in diverse, cross-functional teams of 2-5 members",
    icon: Users,
    color: "from-emerald-600 to-emerald-900",
    textColor: "from-green-600 to-emerald-300",
    delay: "200ms",
  },
  {
    title: "Project Commitment",
    description:
      "Availability to dedicate 20+ hours per week during the 8-week competition period",
    icon: Clock,
    color: "from-orange-600 to-yellow-500",
    textColor: "from-orange-400 to-yellow-300",
    delay: "300ms",
  },
  {
    title: "Age Requirement",
    description:
      "Participants must be 18+ years old or have guardian consent for minors",
    icon: Shield,
    color: "from-red-700 to-rose-400",
    textColor: "from-rose-400 to-rose-200",
    delay: "400ms",
  },
];

export const contactInfo = [
  {
    icon: <Users />,
    title: "Fanpage",
    link: "https://www.facebook.com/RBAChampion",
    color: "bg-purple-400/15 border-2 border-cyan-300/30",
    delay: "delay-100",
  },
  {
    icon: <Facebook />,
    title: "Community",
    link: "https://www.facebook.com/groups/rbaccommunity",
    color: "bg-blue-600/20 border-2 border-blue-300/30",
    delay: "delay-200",
  },
  {
    icon: <Linkedin />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/rba-champion",
    color: "bg-blue-400/20 border-2 border-blue-500/30",
    delay: "delay-300",
  },
  {
    icon: <Mail />,
    title: "Email",
    link: "mailto:rbachampion.06@gmail.com",
    color: "bg-red-400/20 border-2 border-red-300/30",
    delay: "delay-400",
  },
];
