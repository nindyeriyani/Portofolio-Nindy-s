import Landing from "./Home/page";
import About from "./About/page";
import Skills from "./Skills/page";
import Experience from "./Experiences/page";
import Projects from "./Projects/page";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left section */}
      <section className="sticky top-0 h-screen overflow-y-auto">
        <Landing />
      </section>
      {/* right section */}
      <section className="overflow-y-auto h-screen px-8 pb-20 pt-20">
        <p className="text-base text-[#5F84CD] w-2xl">
          I started learning front-end development during my studies, and along
          the way I discovered how much I enjoy creating interactive,
          user-friendly interfaces.
        </p>

        <p className="text-base text-[#5F84CD] w-2xl mt-4">
          Now, I’m eager to keep improving my skills in Front-End Engineering
          and grow into a professional software engineer in the future.
        </p>

        <section id="about">
          <About />
        </section>

        <section id="skills" className="mt-8">
          <Skills />
        </section>

        <section id="experience" className="mt-8">
          <Experience />
        </section>

        <section id="projects" className="mt-8">
          <Projects />
        </section>

        <footer className="text-[#5F84CD] mt-70 mr-10 text-right">
          <p>Copyright © 2025 Nindy Eriyani</p>
        </footer>
      </section>
    </main>
  );
}
