import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import AboutSection from "@/components/home/about/AboutSection";
import EmailSection from "@/components/home/email/EmailSection";
import HeroSection from "@/components/home/hero/HeroSection";
import ProjectSection from "@/components/home/projects/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-base-300">
      <Navbar />
      <div className="container mx-auto">
        <section id="hero" className="flex flex-col justify-center items-center" style={{ marginTop: '15em', marginBottom: '12em' }}><HeroSection /></section>
        <section id="about" style={{ marginBottom: '12em' }}><AboutSection /></section>
        <section id="projects" style={{ marginBottom: '12em' }}><ProjectSection /></section>
        <section id="contact" style={{ marginBottom: '6em' }}><EmailSection /></section>
      </div>
      <Footer />
    </main>
  );
}
