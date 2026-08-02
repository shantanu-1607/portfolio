import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Shantanu Kumar Singh",
  initials: "SS",
  url: "https://github.com/shantanu-1607",
  location: "Ranchi, Jharkhand, India",
  locationLink: "https://www.google.com/maps/place/Ranchi",
  description:
    "B.Tech in Electrical and Electronics Engineering student at BIT Mesra. Full-Stack and Backend Engineer.",
  summary:
    "I am a B.Tech student in Electrical and Electronics Engineering at BIT Mesra, deeply passionate about building scalable full-stack applications and backend systems. I recently interned as a Software Engineering Intern at Parikshak.ai, where I built hybrid delay-routing architectures and deployed microservices on AWS. I enjoy competitive programming (Max rating 1790 on LeetCode) and crafting robust systems with Go, TypeScript, Python, and React.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "singhshantanu.0210@gmail.com",
    tel: "+919140094421",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shantanu-1607",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shantanu-singh-b46984240/",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/shantanu_singh28/",
        icon: Icons.leetcode,
        navbar: true,
      },
      Codeforces: {
        name: "Codeforces",
        url: "https://codeforces.com/profile/shandy_16",
        icon: Icons.codeforces,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:singhshantanu.0210@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Parikshak.ai",
      href: "https://parikshak.ai",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/images/parikshak.png",
      start: "May 2026",
      end: "July 2026",
      description: [
        "Engineered a hybrid delay-routing architecture tiering SQS with EventBridge Scheduler.",
        "Deployed an ARM64 Lambda microservice as an ECR container image via AWS CDK.",
        "Owned pre-launch black-box QA across product modules.",
        "Hardened reliability by deferring MongoDB initialization, blocking duplicate records, and rejecting unauthorized webhooks via HMAC-SHA1."
      ],
    }
  ],
  education: [
    {
      school: "Birla Institute of Technology (BIT), Mesra",
      href: "https://bitmesra.ac.in",
      degree: "B.Tech in Electrical and Electronics Engineering – CGPA: 7.75",
      logoUrl: "/images/bit.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "St. Patrick's Sr. Sec. School, Jaunpur",
      href: "#",
      degree: "Class XII (Senior Secondary) – 86.6%",
      logoUrl: "/images/school.png",
      start: "2021",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "Niyantran (GridLock)",
      href: "https://alphaq.duckdns.org",
      dates: "Jun 2026",
      active: true,
      description:
        "Architected an AI-powered Traffic Command Center for event-driven congestion. Includes a 10-stage planning pipeline, an ML ensemble (CatBoost + RF) predicting duration/severity, and BFS congestion propagation over a 294-junction road graph with live WebSocket heatmap updates.",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "Groq",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://alphaq.duckdns.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shantanu-1607/Niyantran",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/niyantran.png",
      video: "",
    },
    {
      title: "Distributed Rate Limiter",
      href: "https://github.com/shantanu-1607/rate-limiter",
      dates: "Jul 2026",
      active: true,
      description:
        "Built a horizontally scaled API rate limiter in Go, enforcing per-tenant quotas via an O(1) single-round-trip atomic Lua script in Redis. Eliminates split counters and check-then-set races. Validated correctness under k6 load harness.",
      technologies: [
        "Go",
        "Redis",
        "Lua",
        "nginx",
        "Docker",
        "k6"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shantanu-1607/rate-limiter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/rate_limiter.png",
      video: "",
    },
    {
      title: "Simple Social",
      href: "https://github.com/shantanu-1607/simple_social",
      dates: "Apr 2026",
      active: true,
      description:
        "A FastAPI-based social backend with Streamlit frontend. Supports JWT bearer-token authentication, image/video uploads with captions (ImageKit integration), and ownership-based access control via fastapi-users over async SQLAlchemy.",
      technologies: [
        "FastAPI",
        "Async SQLAlchemy",
        "JWT",
        "ImageKit",
        "Streamlit",
        "SQLite"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shantanu-1607/simple_social",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Flipkart GRID 8.0 & Gridlock 2.0",
      dates: "2026",
      location: "Online",
      description:
        "Semi-finalist in GRID 8.0; qualified for Round 2, Gridlock 2.0 (AI traffic management, 4,500+ teams).",
      image: "/images/flipkart.png",
      links: [] as any[],
    },
    {
      title: "Competitive Programming",
      dates: "2025 - Present",
      location: "Online",
      description:
        "850+ problems solved; maximum rating 1790 on LeetCode and 1268 (Pupil) on Codeforces. Global Rank 1994 in LeetCode Weekly Contest 489; Global Rank 2830 in Codeforces Round 1090 (Div. 4).",
      image: "/images/leetcode.png",
      links: [] as any[],
    },
    {
      title: "Leadership & Athletics",
      dates: "School / College",
      location: "Various",
      description:
        "Design Head at IET Coding Club, BIT Mesra; Best Speaker at Model United Nations. District-level Gold Medallist in Kho Kho and Kabaddi.",
      image: "/images/trophy.png",
      links: [] as any[],
    }
  ],
} as const;
