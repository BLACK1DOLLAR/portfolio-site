import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Systems from "@/components/Systems";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Systems />
      <Skills />
      <About />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
