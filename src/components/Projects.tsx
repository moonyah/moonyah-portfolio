// components/Projects.tsx
'use client';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
// import '../styles/styles.css'; // 생성한 CSS 파일을 import

interface Project {
  title: string;
  duration: string;
  teamMembers: number;
  images: string[];
  description: string;
  responsibilities?: string;
  techStack: string;
  githubUrl: string;
  deploymentUrl?: string;
}

// 프로젝트 정보 배열
export const projectData = [
  {
    title: 'Final Project',
    duration: '2023년 12월 26일 - 2024년 1월 29일',
    teamMembers: 16,
    images: ['/project1_2.gif', '/project1_2.gif', '/project1_2.gif'],
    description: 'Final project에 대한 설명',
    responsibilities: '나의 역할',
    techStack: 'React',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: "Moonyah's Portfolio",
    duration: '2023년 11월 20일 - 2023년 12월 1일',
    teamMembers: 5,
    images: ['/project1_2.gif', '/project1_2.gif', '/project1_2.gif'],
    description: '프로젝트 2에 대한 설명',
    responsibilities: '나의 역할',
    techStack: 'Next.js, TypeScript',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: 'STAYINN',
    duration: '2023년 11월 20일 - 2023년 12월 1일',
    teamMembers: 8,
    images: ['/project1_2.gif', '/project1_2.gif', '/project1_2.gif'],
    description: '숙박 예약 서비스',
    responsibilities: '나의 역할',
    techStack: 'Next.js, TypeScript',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: '호그와톡',
    duration: '2023년 11월 6일 - 2023년 11월 16일',
    teamMembers: 5,
    images: ['/project1_2.gif', '/project1_2.gif', '/project1_2.gif'],
    description: '해리포터 컨셉의 소켓 기반 채팅 서비스',
    responsibilities: '나의 역할',
    techStack: 'Next.js, TypeScript',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: 'CS-yum-blog',
    duration: '',
    teamMembers: 5,
    images: ['/project1_2.gif', '/project1_2.gif', '/project1_2.gif'],
    description: 'CS스터디 내용을 정리해 놓은 블로그',
    responsibilities: '',
    techStack: 'React',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: 'Company Space',
    duration: '2023년 9월 8일 - 2023년 9월 22일',
    teamMembers: 5,
    images: ['/project1_2.gif', '/project1_2.gif', '/project1_2.gif'],
    description: '직원 위키 서비스',
    responsibilities: '나의 역할',
    techStack: 'React',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: '카페 직원 관리 서비스',
    duration: '2023년 8월 7일 - 2023년 8월 17일',
    teamMembers: 1,
    images: [
      '/project4_1.gif',
      '/project4_2.png',
      '/project4_3.gif',
      '/project4_2.png',
    ],
    description: '카페 직원들의 정보를 관리하는 서비스',
    responsibilities: '나의 역할',
    techStack: 'JavaScript, CSS, AWS S3',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: '룸루랄라',
    duration: '',
    teamMembers: 3,
    images: ['/project1_2.gif', '/project1_2.gif', '/project1_2.gif'],
    description: '방탈출 카페를 모아놓은 웹사이트',
    responsibilities: '나의 역할',
    techStack: 'React',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: '7호선 빌런',
    duration: '',
    teamMembers: 3,
    images: ['/project1_2.gif', '/project1_2.gif', '/project1_2.gif'],
    description: '7호선 빌런을 물리치는 3D 리듬 게임 (졸업 작품)',
    responsibilities: '3D 모델링, 게임 UI/UX',
    techStack: 'Unity, Blender',
    githubUrl: 'https://github.com/your-username/final-project',
    deploymentUrl: 'https://final-project.netlify.app',
  },
  {
    title: 'Todolist Tomato',
    duration: '2022년 1학기 기말 과제',
    teamMembers: 1,
    images: [
      '/project1_1.png',
      '/project1_2.png',
      '/project1_3.png',
      '/project1_4.png',
    ],
    description:
      '할 일을 완료하면 토마토가 열리는 일정 관리 앱 (2022-1학기 모바일 프로그래밍 수업 과제)',
    techStack: 'Flutter, Firebase',
    githubUrl: 'https://github.com/moonyah/TodolistTomato',
  },
];

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    type='button'
    className='absolute inset-y-1/2 right-0 z-10 pr-4 text-[3rem] text-white
    '
  >
    <CgChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    type='button'
    className='absolute inset-y-1/2 left-0 z-10 pl-4 text-[3rem] text-white'
  >
    <CgChevronLeft />
  </button>
);

const Projects = ({ projects }: { projects: Project[] }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true, // 자동으로 넘어가기
    autoplaySpeed: 3000, // 3초마다 넘어가기
  };
  return (
    <section id='projects' className='pt-20 pb-8'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold mb-8 text-yellow-300'>Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className='my-8 p-8 bg-yellow-100 bg-opacity-10 rounded-lg'
          >
            <div className='md:flex'>
              <div className='md:w-1/2 pr-4'>
                <Slider
                  {...settings}
                  className='slick-dots-white relative mb-8'
                >
                  {project.images.map((image: string, index: number) => (
                    <div key={index} className='h-48 w-96 md:mt-8'>
                      <Image
                        src={image}
                        alt={`Main Image ${index + 1}`}
                        width={2304}
                        height={1044}
                        className='object-contain h-full w-full object-center'
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className='md:w-1/2'>
                <h3 className='text-2xl font-bold mb-2 text-yellow-200'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-2'>{project.duration}</p>
                <p className='text-gray-600 mb-4'>{`${project.teamMembers}人 프로젝트`}</p>
                <p className='text-gray-500 mb-4'>{project.description}</p>
                {project.responsibilities && (
                  <p className='mb-1 flex items-center'>
                    <strong className='w-40 inline-block'>
                      Responsibilities
                    </strong>
                    {project.responsibilities}
                  </p>
                )}
                <p className='mb-1 flex items-center'>
                  <strong className='w-40 inline-block'>Tech Stack</strong>{' '}
                  {project.techStack}
                </p>
                <p className='mb-1 flex flex-col'>
                  <strong>Github</strong>{' '}
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-yellow-100'
                  >
                    {project.githubUrl}
                  </a>
                </p>
                {project.deploymentUrl && (
                  <p className='mb-1 flex flex-col'>
                    <strong>Deployment</strong>{' '}
                    <a
                      href={project.deploymentUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-yellow-100'
                    >
                      {project.deploymentUrl}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
