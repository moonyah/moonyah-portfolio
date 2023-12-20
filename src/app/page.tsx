// pages/index.tsx
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
// import Career from '@/components/Career';
import Footer from '@/components/Footer';
import { projectData } from '@/data/projestsData';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex flex-col md:p-24 p-4 bg-black text-white'>
        <AboutMe />
        <hr className='border-t-2 border-yellow-600 opacity-80 my-8' />
        <Skills />
        <hr className='border-t-2 border-yellow-600 opacity-80 my-8' />
        <Projects projects={projectData} />
        <hr className='border-t-2 border-yellow-600 opacity-80 my-8' />
        {/* <Career /> */}
      </main>
      <Footer />
    </>
  );
}
