// Education tab content.

export type EducationEntry = {
  school: string;
  detail: string;
  dateRange: string;
  // Filename (without extension) in public/assets/icons/education/.
  logo: string;
};

export const education: EducationEntry[] = [
  {
    school: "Taylor's University",
    detail: "BSc Computer Science (Honours), First Class Honours — CGPA 3.9/4.0",
    dateRange: "Aug 2021 – Aug 2024",
    logo: "taylors",
  },
  {
    school: "University of the West of England, Bristol",
    detail: "BSc Computer Science, First Class Honours (dual award)",
    dateRange: "Aug 2021 – Aug 2024",
    logo: "uwe",
  },
  {
    school: "Manchester Metropolitan University",
    detail: "Student Exchange Programme",
    dateRange: "Jan – Jun 2023",
    logo: "mmu",
  },
];
