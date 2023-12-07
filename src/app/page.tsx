import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Career from '@/components/Career';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col p-24">
        <AboutMe />
        <hr className="border-t border-gray-700 my-8" />
        <Skills />
        <hr className="border-t border-gray-700 my-8" />
        <Projects />
        <hr className="border-t border-gray-700 my-8" />
        <Career />
      </main>
    </>
  );
}
