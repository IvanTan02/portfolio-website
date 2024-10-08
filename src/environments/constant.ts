
const HERO_TYPE_ANIMATION_INTERVAL = 2500;

export const CONSTANTS = {
  socialLinks: {
    GitHub: `https://github.com/IvanTan02`,
    LinkedIn: `https://www.linkedin.com/in/ivantan02/`,
    Resume: `https://ivantan-portfolio.s3.ap-southeast-2.amazonaws.com/IvanTan-Resume.pdf`
  },
  heroContent: {
    heroTitle: `Hello, I'm Ivan Tan`,
    typeAnimationSequence: [
      'Software Engineer',
      HERO_TYPE_ANIMATION_INTERVAL,
      'Web Developer',
      HERO_TYPE_ANIMATION_INTERVAL,
      'Mobile Developer',
      HERO_TYPE_ANIMATION_INTERVAL,
    ],
    summary: `As a recent Computer Science graduate, I’m passionate about building innovative applications that enhance everyday life. With a solid foundation in software engineering and a passion for problem-solving, I’m always eager to explore new technologies and develop projects that push the boundaries of what’s possible. My dedication towards delivering high-quality work, coupled with my ability to quickly adapt to emerging technologies, makes me a valuable asset to any team.`
  },
}

// Skills
export interface Skills {
  title: string;
  logoUrl: string;
  category: ENUM_SKILL_CATEGORY[];
}

export enum ENUM_SKILL_CATEGORY {
  WEB = 'Web',
  MOBILE = 'Mobile',
  BACKEND = 'Backend',
  FRAMEWORKS = 'Frameworks',
  LANGUAGES = 'Languages',
  OTHERS = 'Others',
}

export const MY_SKILLS: Skills[] = [
  {
    title: 'JavaScript',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.LANGUAGES]
  },
  {
    title: 'TypeScript',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.LANGUAGES]
  },
  {
    title: 'Java',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.LANGUAGES]
  },
  {
    title: 'Dart',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.LANGUAGES]
  },
  {
    title: 'HTML',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.WEB]
  },
  {
    title: 'CSS',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.WEB]
  },
  {
    title: 'Angular',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.WEB, ENUM_SKILL_CATEGORY.FRAMEWORKS]
  },
  {
    title: 'React',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.WEB, ENUM_SKILL_CATEGORY.FRAMEWORKS]
  },
  {
    title: 'Flutter',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.MOBILE, ENUM_SKILL_CATEGORY.FRAMEWORKS]
  },
  {
    title: 'Next.js',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.WEB, ENUM_SKILL_CATEGORY.FRAMEWORKS]
  },
  {
    title: 'Express.js',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.BACKEND, ENUM_SKILL_CATEGORY.FRAMEWORKS]
  },
  {
    title: 'Spring Boot',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.BACKEND, ENUM_SKILL_CATEGORY.FRAMEWORKS]
  },
  {
    title: 'PostgresQL',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.BACKEND]
  },
  {
    title: 'MongoDB',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.BACKEND]
  },
  {
    title: 'Git',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.OTHERS]
  },
  {
    title: 'GitHub',
    logoUrl: './images/typescript.png',
    category: [ENUM_SKILL_CATEGORY.OTHERS]
  },
]