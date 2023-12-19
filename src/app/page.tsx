// pages/index.tsx
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects, { projectData } from '@/components/Projects';
import Career from '@/components/Career';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col md:p-24 p-4 bg-black text-white'>
        <AboutMe />
        <hr className='border-t border-gray-700 my-8' />
        <Skills />
        <hr className='border-t border-gray-700 my-8' />
        <Projects projects={projectData} />
        <hr className='border-t border-gray-700 my-8' />
        <Career />
      </main>
    </>
  );
}
