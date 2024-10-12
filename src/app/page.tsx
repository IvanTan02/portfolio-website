import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import AboutSection from "@/components/home/about/AboutSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ProjectSection from "@/components/home/projects/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-base-300">
      <Navbar />
      <div className="container mx-auto">
        <section id="hero" className="hero-container section-container"><HeroSection /></section>
        <section id="about" className="section-container" style={{ scrollMarginTop: '130px' }}><AboutSection /></section>
        <section id="projects" className="section-container" style={{ scrollMarginTop: '130px' }}><ProjectSection /></section>
        {/* <section id="contact" style={{ marginBottom: '6em' }}><EmailSection /></section> */}
      </div>
      <Footer />
    </main>
  );
}
