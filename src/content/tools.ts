// Tool/platform logos used in the sidebar marquee and Skills tab.
// Each tool is a single config object — icon paths point into public/images/icons/.
// For a mark that needs different artwork per theme (e.g. black details that
// vanish on a dark background), set `icon` to { light, dark } instead of a string;
// the site swaps between them automatically with the light/dark toggle.

export type ToolIcon = string | { light: string; dark: string };

export type Tool = {
  id: string;
  name: string;
  icon: ToolIcon;
};

const ICON_DIR = "/assets/icons/tools";

export const TOOLS: Record<string, Tool> = {
  go: {
    id: "go",
    name: "Go",
    icon: `${ICON_DIR}/go.svg`,
  },
  java: {
    id: "java",
    name: "Java",
    icon: `${ICON_DIR}/java.svg`,
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: `${ICON_DIR}/javascript.svg`,
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: `${ICON_DIR}/typescript.svg`,
  },
  angular: {
    id: "angular",
    name: "Angular",
    icon: `${ICON_DIR}/angular.svg`,
  },
  springboot: {
    id: "springboot",
    name: "Spring Boot",
    icon: `${ICON_DIR}/spring-boot.svg`,
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    icon: `${ICON_DIR}/nodejs.svg`,
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    icon: `${ICON_DIR}/mongodb.svg`,
  },
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    icon: `${ICON_DIR}/postgresql.svg`,
  },
  oracle: {
    id: "oracle",
    name: "Oracle",
    icon: `${ICON_DIR}/oracle.svg`,
  },
  supabase: {
    id: "supabase",
    name: "Supabase",
    icon: `${ICON_DIR}/supabase.svg`,
  },
  aws: {
    id: "aws",
    name: "AWS",
    icon: {
      light: `${ICON_DIR}/aws-light.svg`,
      dark: `${ICON_DIR}/aws-dark.svg`,
    },
  },
  docker: {
    id: "docker",
    name: "Docker",
    icon: `${ICON_DIR}/docker.svg`,
  },
  gitlab: {
    id: "gitlab",
    name: "GitLab CI/CD",
    icon: `${ICON_DIR}/gitlab.svg`,
  },
  react: {
    id: "react",
    name: "React",
    icon: {
      light: `${ICON_DIR}/react-light.svg`,
      dark: `${ICON_DIR}/react-dark.svg`,
    },
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    icon: `${ICON_DIR}/nextjs.svg`,
  },
  vue: {
    id: "vue",
    name: "Vue.js",
    icon: `${ICON_DIR}/vue.svg`,
  },
  redis: {
    id: "redis",
    name: "Redis",
    icon: `${ICON_DIR}/redis.svg`,
  },
};

export type ToolId = keyof typeof TOOLS;

// Deterministic seeded shuffle (mulberry32) — same order every render (no SSR/hydration
// mismatch, unlike Math.random()), but reshuffles automatically whenever a tool is
// added/removed/renamed in TOOLS above, so top/bottom never need manual upkeep.
function seededShuffle<T>(items: T[], seed: number): T[] {
  let state = seed;
  const random = () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const MARQUEE_SEED = 20260929;
const shuffledToolIds = seededShuffle(Object.keys(TOOLS) as ToolId[], MARQUEE_SEED);
const midpoint = Math.ceil(shuffledToolIds.length / 2);

export const toolsMarquee: { top: ToolId[]; bottom: ToolId[] } = {
  top: shuffledToolIds.slice(0, midpoint),
  bottom: shuffledToolIds.slice(midpoint),
};
