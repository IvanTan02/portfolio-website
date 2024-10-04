import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import AboutSection from "@/components/home/about/AboutSection";
import AchievementSection from "@/components/home/achievements/AchievementSection";
import EmailSection from "@/components/home/email/EmailSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ProjectSection from "@/components/home/projects/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto p-4">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>

    </main>
  );
}
