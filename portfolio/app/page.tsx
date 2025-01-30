import Intro from "./components/intro";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <section id="body" className="flex flex-col justify-center items-center p-6">
      <Intro/>

      <Projects/>

      <Skills/>
    </section>
  );
}
