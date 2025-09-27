import { Building2, Users, Globe, Award, Calendar, MapPin } from "lucide-react";
export const organizerStats = [
  {
    icon: Calendar,
    label: "Founded",
    value: "2008",
    description: "Years of Innovation",
    color: "from-muted to-primary-foreground",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "RMIT Vietnam",
    description: "Global Tech Hub",
    color: "from-secondary-foreground/60 to-pink-300",
  },
  {
    icon: Globe,
    label: "Partners Reach",
    value: "50+",
    description: "Partners Worldwide",
    color: "from-secondary-foreground to-secondary",
  },
  {
    icon: Users,
    label: "Team Size",
    value: "200+",
    description: "Tech Experts",
    color: "from-secondary-foreground to-accent-secondary",
  },
];

export const organizerAchievements = [
  { number: "17+", label: "Years Experience", icon: Award },
  { number: "10K+", label: "Careers Launched", icon: Users },
  { number: "500+", label: "Competitions Hosted", icon: Globe },
  { number: "100+", label: "Industry Partners", icon: Building2 },
];
