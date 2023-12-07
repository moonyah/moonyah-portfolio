import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Career from '@/components/Career';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AboutMe />
        <Skills />
        <Projects />
        <Career />
      </main>
    </>
  );
}
