import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Systems from "@/components/Systems";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Projects />
      <Process />
      <Systems />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
