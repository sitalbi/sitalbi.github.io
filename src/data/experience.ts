export type Experience = {
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    role: "Game Programmer",
    company: "Stage Games Inc.",
    dates: "Feb 2025 — Present",
    location: "Tokyo, Japan",
    description: [
      "Game development and prototyping on game projects.",
      "Work on both internal and client projects as a game programmer.",
    ],
  },
  {
    role: "R&D Programmer Assistant",
    company: "Ubisoft Bordeaux",
    dates: "Apr 2024 — Sep 2024",
    location: "Bordeaux, France",
    description: [
      "R&D programmer intern at Ubisoft La Forge (R&D team).",
      "Game Engine and library development, for machine learning bots deployment in game production.",
    ],
  },
];
