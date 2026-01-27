import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      <Navbar />
      {/* 
        Scroll Container 
        500vh ensures we have enough scroll distance to play the sequence 
      */}
      <div id="home" className="relative h-[500vh]">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Content continues after the scroll sequence */}
      <AboutMe />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
    </main>
  );
}
