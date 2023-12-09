import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id='skills' className='pt-8 pb-4 md:pt-20 md:pb-8'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold mb-4 text-yellow-300'>Skills</h2>

        {/* 기술 목록 */}
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <li className='border p-4 rounded-md border-gray-700'>
            <h3 className='text-xl font-semibold mb-2 text-yellow-100'>
              Programming Languages
            </h3>
            <ul className='list-disc pl-4 text-gray-300'>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
            </ul>
          </li>

          <li className='border p-4 rounded-md border-gray-700'>
            <h3 className='text-xl font-semibold mb-2 text-yellow-100'>
              Frontend
            </h3>
            <ul className='list-disc pl-4 text-gray-300'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Recoil</li>
              <li>Tailwind CSS</li>
              <li>Styled-components</li>
              <li>SCSS</li>
              <li>Flutter</li>
            </ul>
          </li>

          <li className='border p-4 rounded-md border-gray-700'>
            <h3 className='text-xl font-semibold mb-2 text-yellow-100'>
              Tools
            </h3>
            <ul className='list-disc pl-4 text-gray-300'>
              <li>Trello</li>
              <li>Jira</li>
              <li>Firebase</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Unity</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
