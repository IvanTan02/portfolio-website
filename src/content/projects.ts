// Projects tab content.

export type ProjectEntry = {
  name: string;
  dateRange: string;
  description: string;
  tags: string[];
};

export const projects: ProjectEntry[] = [
  {
    name: "WashCubes — Smart Laundry Locker System",
    dateRange: "Sep 2023 – Mar 2024",
    description:
      "Led a team of 5 as team lead and backend developer on a smart laundry locker system for an external industry client — user and rider mobile apps, a web admin dashboard, and a Node.js/Express backend with MongoDB, shared across all three clients built in Flutter.",
    tags: ["Node.js", "Express", "MongoDB", "Flutter"],
  },
];
