import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import AboutSection from "@/components/home/about/AboutSection";
import AchievementSection from "@/components/home/achievements/AchievementSection";
import EmailSection from "@/components/home/email/EmailSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ProjectSection from "@/components/home/projects/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-base-300">
      <Navbar />
      <div className="container mt-24 mx-auto px-2">
        <section id="hero" className="my-16"><HeroSection /></section>
        <section id="about" className="mb-16" style={{ scrollMarginTop: '120px' }}><AboutSection /></section>
        <section id="projects" style={{ scrollMarginTop: '150px' }}><ProjectSection /></section>
        <section id="contact"><EmailSection /></section>
      </div>
      <Footer />
    </main>
  );
}
