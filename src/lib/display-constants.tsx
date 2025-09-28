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
  Briefcase,
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
    gradient: "from-secondary-foreground to-secondary",
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
    gradient: "from-secondary-foreground to-accent-secondary",
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
    gradient: "from-muted/70 to-secondary-foreground",
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
    gradient: "from-background/70 to-secondary",
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
    gradient: "from-secondary to-accent-secondary",
  },
];
export const benefits = [
  {
    icon: Trophy,
    title: "Rewards & Recognition",
    description:
      "Stand out with prestigious certificates while gaining scholarships and exclusive rewards from both the Organizing Committee and leading companies in the Business Analytics and Data Analytics field.",
    // color: "from-yellow-400 via-orange-500 to-red-500",
    color: "from-secondary-foreground to-secondary",
    bgColor: "from-secondary to-primary",
    value: "1M+ VND",
    category: "REWARDS",
  },
  {
    icon: Network,
    title: "Real-World Experience",
    description:
      "Work on practical business cases sponsored by leading corporations, bridging theory with industry application.",
    color: "from-secondary-foreground via-secondary to-muted",
    bgColor: "from-muted to-primary",
    value: "500+ Leaders",
    category: "NETWORK",
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    description:
      "Sharpen your data and business analytics capabilities while strengthening critical thinking, teamwork, and presentation skills.",
    color: "from-pink-400/70 via-secondary-foreground to-secondary",
    bgColor: "from-purple-600/10 to-primary",
    value: "20+ Sessions",
    category: "GROWTH",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description:
      "Connect with industry professionals, mentors, judges, and like-minded peers across Vietnam.",
    color: "from-accent-secondary via-secondary-foreground to-secondary",
    bgColor: "from-accent-secondary via-secondary to-primary",
    value: "100+ Companies",
    category: "CAREERS",
  },
  {
    icon: Briefcase,
    title: "Career Pathway",
    description:
      "Gain internship and career opportunities with top companies looking for data-driven future leaders.",
    color: "from-secondary via-accent-foreground/80 to-accent-secondary",
    bgColor: "from-secondary/70 via-secondary/30 to-primary",
    value: "Global Stage",
    category: "RECOGNITION",
  },
];

export const criteria = [
  {
    title: "Business Students",
    description:
      "Undergraduate students across Vietnam majoring in Business fields such as International Business, Economics & Finance, Business Administration, and related disciplines.",
    icon: Code, // You might want to change this icon to something like GraduationCap
    color: "from-muted to-secondary-foreground",
    textColor: "from-accent-secondary via-secondary-foreground to-secondary-foreground",
    delay: "0ms",
  },
  {
    title: "Analytics Enthusiasts",
    description:
      "Ambitious students eager to challenge themselves and sharpen their skills in Data and Business Analytics.",
    icon: Zap,
    color: "from-primary/30 to-pink-600/30",
    textColor: "from-purple-300 to-pink-400",
    delay: "100ms",
  },
  {
    title: "Network Builders",
    description:
      "Individuals looking to expand their network and connect with professionals in the analytics industry.",
    icon: Users,
    color: "from-secondary-foreground to-secondary",
    textColor: "from-secondary-foreground to-primary-foreground",
    delay: "200ms",
  },
  {
    title: "Industry Collaborators",
    description:
      "Individuals seeking opportunities to collaborate with top companies and corporations.",
    icon: Clock, // You might want to change this to Building or Briefcase
    color: "from-muted/20 to-accent-secondary",
    textColor: "from-accent-secondary to-secondary-foreground",
    delay: "300ms",
  },
];

export const contactInfo = [
  {
    icon: <Users />,
    title: "Community",
    link: "https://www.facebook.com/groups/rbaccommunity",
    color: "bg-purple-400/15 border-2 border-cyan-300/30",
    delay: "delay-100",
  },
  {
    icon: <Facebook />,
    title: "Fanpage",
    link: "https://www.facebook.com/RBAChampion",
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
