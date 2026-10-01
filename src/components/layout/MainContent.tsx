import { TabKey } from "@/content/nav";
import AboutPanel from "@/components/panels/AboutPanel";
import ExperiencePanel from "@/components/panels/ExperiencePanel";
import SkillsPanel from "@/components/panels/SkillsPanel";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import EducationPanel from "@/components/panels/EducationPanel";

const PANEL_BY_KEY: Record<TabKey, React.ComponentType> = {
  about: AboutPanel,
  experience: ExperiencePanel,
  skills: SkillsPanel,
  projects: ProjectsPanel,
  education: EducationPanel,
};

export default function MainContent({ active }: { active: TabKey }) {
  const ActivePanel = PANEL_BY_KEY[active];

  return (
    <main className="min-w-0 flex-1 bg-paper/45 pb-20 max-[780px]:pb-16">
      <div className="flex justify-center p-8 pt-10 max-[780px]:p-6 max-[780px]:pt-10">
        <ActivePanel />
      </div>
    </main>
  );
}
