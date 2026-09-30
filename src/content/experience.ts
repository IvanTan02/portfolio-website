// Experience tab content.

export type ExperienceEntry = {
  dateRange: string;
  role: string;
  org: string;
  // Filename (without extension) in public/assets/icons/experience/.
  logo: string;
  bullets: string[];
  tags: { label: string; accent?: boolean }[];
};

export const experience: ExperienceEntry[] = [
  {
    dateRange: "Mar 2025 — Current",
    role: "Software Engineer II",
    org: "Payments Network Malaysia (PayNet)",
    logo: "paynet",
    bullets: [
      "Built backend microservices in Go for PayNet's One Stop Portal, delivering the Unified Dispute Management Portal and DuitNow NextSwitch Migration — supporting DuitNow, MyDebit, and SAN payment schemes.",
      "Designed the workflow engine and refund verification mechanism for the Dispute Management Portal.",
      "Rebuilt National Addressing Database maintenance, Cross-Border Participant Management, and DuitNow Transaction Search for the new switch infrastructure.",
      "Built a core email notification engine on AWS SQS and contributed to a centralized audit trail using CloudWatch and Kinesis, both adopted across internal PayNet services.",
      "Drove AWS cost-savings via ECS rightsizing and Graviton/Fargate Spot migration — cut cloud costs 20%.",
    ],
    tags: [
      { label: "Go", accent: true },
      { label: "AWS SQS" },
      { label: "ECS" },
      { label: "CloudWatch" },
      { label: "GitLab CI/CD" },
    ],
  },
  {
    dateRange: "Apr 2024 — Dec 2024",
    role: "Web Developer — Intern → Full-Time",
    org: "Continental AG",
    logo: "continental",
    bullets: [
      "Built end-to-end features across Order Placement, Bundle Sales, Payment Advice, and Financial Reports on the ContiOnlineContact APAC dealer portal, using Angular and Java Spring Boot.",
      "Automated the Bundle Sales flow, replacing a manual email-based process with direct online purchase.",
      "Integrated legacy SAP systems via SOAP alongside internal REST APIs.",
    ],
    tags: [
      { label: "Angular" },
      { label: "Spring Boot" },
      { label: "SOAP" },
      { label: "Jenkins" },
      { label: "ArgoCD" },
    ],
  },
];
