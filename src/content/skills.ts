// Skills tab content. `icon` is either a real tool logo (ToolId, from src/content/tools.ts)
// or a generic line-icon glyph (GenericIconKey, from src/components/icons/SkillGlyphs.tsx).

import { ToolId } from "./tools";

// export type GenericIconKey =
//   | "code"
//   | "api"
//   | "grid"
//   | "layers"
//   | "sync"
//   | "queue"
//   | "bolt"
//   | "db"
//   | "cloud"
//   | "box"
//   | "container";

export type SkillCategory = {
  title: string;
  skills: { label: string; icon: ToolId | string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { label: "Go", icon: "go" },
      { label: "JavaScript", icon: "javascript" },
      { label: "TypeScript", icon: "typescript" },
      { label: "Java", icon: "java" },
      { label: "Angular", icon: "angular" },
      { label: "React", icon: "react" },
      { label: "Next.js", icon: "nextjs" },
      { label: "Vue.js", icon: "vue" },
      { label: "Java Spring Boot", icon: "springboot" },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { label: "REST APIs", icon: "api" },
      { label: "Microservices", icon: "grid" },
      { label: "Clean Architecture", icon: "layers" },
      { label: "Async Processing", icon: "sync" },
      { label: "Message Queues", icon: "queue" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { label: "MongoDB", icon: "mongodb" },
      { label: "PostgreSQL", icon: "postgresql" },
      { label: "Oracle", icon: "oracle" },
      { label: "Redis", icon: "redis" },
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { label: "AWS", icon: "aws" },
      { label: "Docker", icon: "docker" },
      { label: "GitLab CI/CD", icon: "gitlab" },
    ],
  },
];
