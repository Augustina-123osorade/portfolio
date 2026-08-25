import steamtrainImg from "../assets/images/current/steamtrain.png";
import alignMediaImg from "../assets/images/current/align-media.png";
import mgWashingPowderImg from "../assets/images/current/mg-washingpowder.png";
import claritySecurityImg from "../assets/images/current/clarity-security.png";
import forgeImg from "../assets/images/current/forge.png";

export interface CurrentProject {
  id: number;
  title: string;
  description: string;
  liveLink?: string;
  status: "done" | "in-progress";
  initials: string;
  gradient: string;
  isGroupProject?: boolean;
  image?: string;
}

export const currentProjects: CurrentProject[] = [
  {
    id: 1,
    title: "SteamTrain",
    description:
      "A practical-learning platform that pairs new graduates with real industry briefs and mentors, turning coursework into verified, ship-ready portfolio work.",
    liveLink: "https://steamtrain.co",
    status: "in-progress",
    initials: "ST",
    gradient: "from-cyan-500 to-blue-600",
    isGroupProject: true,
    image: steamtrainImg,
  },
  {
    id: 2,
    title: "Align Media",
    description:
      "The creative-economy infrastructure platform behind SteamTrain — connecting African creative talent with data-driven insights, training, and industry collaboration.",
    liveLink: "https://align-media.vercel.app",
    status: "in-progress",
    initials: "AM",
    gradient: "from-fuchsia-500 to-purple-700",
    image: alignMediaImg,
  },
  {
    id: 3,
    title: "West VFX",
    description:
      "A bold, motion-driven site for an animation and VFX studio, built to showcase their creative work with striking 3D typography.",
    liveLink: "https://west-vfx.com",
    status: "done",
    initials: "WV",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    id: 4,
    title: "MG Washing Powder",
    description:
      "A product showcase site for a washing powder brand — highlighting each formula's benefits and available sizes for direct sales.",
    liveLink: "https://mg-washingpowder.vercel.app",
    status: "in-progress",
    initials: "MG",
    gradient: "from-fuchsia-600 to-pink-600",
    image: mgWashingPowderImg,
  },
  {
    id: 5,
    title: "Clarity Security Solutions",
    description:
      "A service site for a CCTV and smart-security installation company in Ghana — covering camera installation, access control, and more, with quick call, WhatsApp, and quote actions.",
    liveLink: "https://clarity-security-solutions.vercel.app",
    status: "done",
    initials: "CS",
    gradient: "from-slate-600 to-blue-700",
    image: claritySecurityImg,
  },
  {
    id: 6,
    title: "Forge",
    description:
      "A community platform connecting developers through meetups, collaboration, and shared learning — not yet hosted, still in build.",
    status: "in-progress",
    initials: "F",
    gradient: "from-emerald-700 to-green-900",
    isGroupProject: true,
    image: forgeImg,
  },
];
