// ============================================================
// BOOTCAMP DATA — edit this file to update the site content
// ============================================================

export const EVENT = {
  title: "Colosseum Frontier Hackathon Bootcamp",
  organizer: "Superteam SG",
  tagline: "Build on Solana. Ship for the frontier.",
  description:
    "A 5-session bootcamp supporting Singapore builders in the Colosseum Frontier Hackathon. Get mentorship, form teams, attend workshops, and compete for $250K in prizes.",
  lumaUrl: "https://lu.ma/r52silm0",
  hackathonUrl: "https://colosseum.com/frontier",
  registrationNote:
    "Register for the hackathon at colosseum.com/frontier (select Singapore as your country), then apply for the bootcamp on Luma.",
};

export const HACKATHON_PRIZES = [
  { label: "Grand Champion", amount: "$30,000" },
  { label: "Public Goods Award", amount: "$10,000" },
  { label: "University Award", amount: "$10,000" },
  { label: "20 Standout Teams", amount: "$10,000 each" },
];

// Logo paths — files are in /public/logos/
export const LOGOS = {
  superteam: "/logos/superteam.d554d881.svg",
  colosseum: "/logos/Colosseum_Logo.4b0268dc.svg",
  solanaFoundation: "/logos/solana_foundation_logo.c699502f.svg",
  solana: "/logos/solanaLogoMark.113cb367.svg",
  altitude: "/logos/AltitudeIcon.11cef082.svg",
  phantom: "/logos/Phantom-Icon_App.200407a8.svg",
  metaplex: "/logos/metaplexIcon.255a6dc1.jpeg",
  world: "/logos/WorldLogoBlack.ee1d2f70.svg",
  bedrock: "/logos/BedrockFndn.jpg",
};

export type Session = {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  tag?: string;         // e.g. "INTRODUCTION", "INVITE-ONLY", "DEMODAY"
  inviteOnly?: boolean;
  logo: string;
  agenda: { time: string; item: string; speaker?: string; logo?: string }[];
  status: "upcoming" | "live" | "past";
};

export const SESSIONS: Session[] = [
  {
    id: "session-1",
    date: "Saturday, 11 Apr 2026",
    time: "12:30 PM – 5:00 PM SGT",
    title: "Opening Mixer + Hackathon Briefing",
    description:
      "Everything you need to know about tracks, deadlines, and resources — plus a chance to find your team.",
    tag: "INTRODUCTION",
    logo: LOGOS.superteam,
    agenda: [
      { time: "12:30 PM", item: "Doors Open", speaker: "Lunch will be provided", logo: LOGOS.superteam },
      {
        time: "2:00 PM",
        item: "Introduction to Colosseum Frontier",
        speaker: "Explanation of the hackathon's Tracks, Deadlines, Prize and Resources",
        logo: LOGOS.colosseum,
      },
      { time: "3:00 PM", item: "Form your Team", speaker: "Each participant will introduce themselves and their working ideas to find team members who are aligned", logo: LOGOS.superteam },
      { time: "5:00 PM", item: "End of Mixer", speaker: "The frontier building begins!", logo: LOGOS.superteam },
    ],
    status: "upcoming",
  },
  {
    id: "session-2",
    date: "Saturday, 18 Apr 2026",
    time: "1:30 PM – 3:30 PM SGT",
    title: "Workshops & Build Day",
    description:
      "Hands-on technical workshops, then stay to start building with your team.",
    tag: "WORKSHOPS",
    logo: LOGOS.superteam,
    agenda: [
      {
        time: "1:30 PM",
        item: "ICM & Bedrock Foundation",
        speaker: "@0xSoju, @BedrockFndn",
        logo: LOGOS.bedrock,
      },
      {
        time: "2:00 PM",
        item: "AI-powered marketing automation for Web3 projects",
        logo: LOGOS.superteam,
      },
      {
        time: "3:00 PM",
        item: "On-chain data querying via Google BigQuery + x402 payments",
        logo: LOGOS.superteam,
      },
      {
        time: "3:30 PM",
        item: "Solana RPC best practices & node management",
        logo: LOGOS.solanaFoundation,
      },
    ],
    status: "upcoming",
  },
  {
    id: "session-3",
    date: "Saturday, 25 Apr 2026",
    time: "TBC",
    title: "Pitch Practice & Mentor Feedback",
    description:
      "Present your progress to experienced mentors, get honest feedback, and refine your direction.",
    tag: "INVITE-ONLY",
    inviteOnly: true,
    logo: LOGOS.superteam,
    agenda: [],
    status: "upcoming",
  },
  {
    id: "session-4",
    date: "Saturday, 2 May 2026",
    time: "TBC",
    title: "Internal Demo Day & Top 5 Selection",
    description:
      "All teams present — top 5 get selected to pitch to investors.",
    tag: "DEMO DAY",
    logo: LOGOS.superteam,
    agenda: [],
    status: "upcoming",
  },
  {
    id: "session-5",
    date: "Saturday, 9 May 2026",
    time: "TBC",
    title: "Final Build Sprint",
    description:
      "Last day to build, polish, and submit before the 11 May deadline.",
    tag: "SUBMISSIONS",
    logo: LOGOS.superteam,
    agenda: [],
    status: "upcoming",
  },
  {
    id: "closing",
    date: "Wednesday, 13 May 2026",
    time: "TBC",
    title: "Closing Party",
    description:
      "You shipped it. Now celebrate with everyone who made it to the finish line.",
    tag: "SUBMITTED BUILDERS",
    logo: LOGOS.superteam,
    agenda: [],
    status: "upcoming",
  },
  // Add more sessions here as they are confirmed
];

export type Mentor = {
  name: string;
  title: string;
  org: string;
  twitter?: string;
  avatar?: string; // path in /public/mentors/ or full URL
};

export const MENTORS: Mentor[] = [
  {
    name: "Kimmi Kim",
    title: "Lead",
    org: "Superteam SG",
    twitter: "kimmi_unni",
    avatar: "/mentors/kimmi_unni.jpg",
  },
  {
    name: "Arnold Toh",
    title: "Organizer",
    org: "Superteam SG",
    twitter: "imhihi23",
    avatar: "/mentors/imhihi23.jpg",
  },
  { name: "Eugene", title: "Mentor", org: "Chainstack", twitter: "toxzique", avatar: "/mentors/toxzique.jpg" },
  { name: "Ake", title: "Mentor", org: "Chainstack", twitter: "AkeGaviar", avatar: "/mentors/AkeGaviar.jpg" },
  { name: "Soju", title: "Mentor", org: "Meteora", twitter: "0xSoju", avatar: "/mentors/0xSoju.jpg" },
  { name: "Anmol", title: "Mentor", org: "Jupiter", twitter: "0xanmol", avatar: "/mentors/0xanmol.jpg" },
  { name: "Melvin", title: "Mentor", org: "Jupiter", twitter: "melvinzzy", avatar: "/mentors/melvinzzy.jpg" },
  { name: "FP", title: "Mentor", org: "Sanctum", twitter: "soleconomist", avatar: "/mentors/soleconomist.jpg" },
  { name: "Cleon", title: "Mentor", org: "Sanctum", twitter: "cwchanchan", avatar: "/mentors/cwchanchan.jpg" },
  { name: "Seb", title: "Mentor", org: "Mesa", twitter: "Sirolaso", avatar: "/mentors/Sirolaso.jpg" },
  { name: "Devan", title: "Mentor", org: "Google Web3", twitter: "mitchem", avatar: "/mentors/mitchem.jpg" },
  { name: "Mustafa", title: "Mentor", org: "Pivot Global", twitter: "MustafaYilham", avatar: "/mentors/MustafaYilham.jpg" },
  { name: "Lanna", title: "EIR", org: "Antler", twitter: "lannaroche", avatar: "/mentors/lannaroche.jpg" },
  { name: "Chaerin", title: "APAC Growth", org: "Solana Foundation", twitter: "decentra1ized_", avatar: "/mentors/decentra1ized_.jpg" },
  // ── Add more mentors here ──
  // {
  //   name: "Jane Doe",
  //   title: "Protocol Engineer",
  //   org: "Phantom",
  //   twitter: "janedoe",
  //   avatar: "/mentors/janedoe.jpg",   // download via: curl -sL https://unavatar.io/twitter/janedoe -o public/mentors/janedoe.jpg
  // },
];

export type Workshop = {
  topic: string;
  speaker: string;
  org?: string;
  logo?: string;
  sessionId: string;
};

export const WORKSHOPS: Workshop[] = [
  {
    topic: "ICM & Bedrock Foundation",
    speaker: "@0xSoju, @BedrockFndn",
    logo: LOGOS.bedrock,
    sessionId: "session-2",
  },
  {
    topic: "AI-powered marketing automation for Web3 projects",
    speaker: "TBA",
    logo: LOGOS.superteam,
    sessionId: "session-2",
  },
  {
    topic: "On-chain data querying via Google BigQuery",
    speaker: "TBA",
    logo: LOGOS.superteam,
    sessionId: "session-2",
  },
  {
    topic: "x402 Payments",
    speaker: "TBA",
    logo: LOGOS.superteam,
    sessionId: "session-2",
  },
  {
    topic: "Solana RPC best practices & node management",
    speaker: "TBA",
    logo: LOGOS.solanaFoundation,
    sessionId: "session-2",
  },
  // ── Add more workshops here as they are confirmed ──
];
