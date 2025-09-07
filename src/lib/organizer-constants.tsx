import { Building2, Users, Globe, Award, Calendar, MapPin } from "lucide-react";
export const organizerStats = [
  {
    icon: Calendar,
    label: "Founded",
    value: "2009",
    description: "Years of Innovation",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "RMIT Vietnam",
    description: "Global Tech Hub",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Globe,
    label: "Partners Reach",
    value: "50+",
    description: "Partners Worldwide",
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: Users,
    label: "Team Size",
    value: "200+",
    description: "Tech Experts",
    color: "from-orange-400 to-red-400",
  },
];

export const organizerAchievements = [
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "10K+", label: "Careers Launched", icon: Users },
  { number: "500+", label: "Competitions Hosted", icon: Globe },
  { number: "100+", label: "Industry Partners", icon: Building2 },
];
