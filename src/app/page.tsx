import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

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
