// components/Projects.tsx
'use client';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

interface Project {
  title: string;
  duration: string;
  teamMembers: number;
  images: string[];
  description: string;
  responsibilities: string;
  techStack: string;
}

// 프로젝트 정보 배열
export const projectData = [
  {
    title: '프로젝트 1',
    duration: '2022년 1월 - 2022년 3월',
    teamMembers: 3,
    images: ['/project1_1.jpg', '/project1_1.jpg', '/project1_1.jpg'],
    description: '프로젝트 1에 대한 설명',
    responsibilities: '나의 역할',
    techStack: 'React',
  },
  {
    title: '프로젝트 2',
    duration: '2022년 4월 - 2022년 6월',
    teamMembers: 5,
    images: ['/project1_1.jpg', '/project1_1.jpg', '/project1_1.jpg'],
    description: '프로젝트 2에 대한 설명',
    responsibilities: '나의 역할',
    techStack: 'React',
  },
  // 추가 프로젝트 정보...
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

// interface CarouselProps {
//   images: string[];
// }

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
          <div key={index} className='mb-12'>
            <h3 className='text-2xl font-bold mb-2 text-yellow-100'>
              {project.title}
            </h3>
            <p className='text-gray-600 mb-2'>{project.duration}</p>
            <p className='text-gray-600 mb-4'>{`Team: ${project.teamMembers} members`}</p>
            <Slider {...settings} className='relative'>
              {project.images.map((image: string, index: number) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt={`Main Image ${index + 1}`}
                    width={2304}
                    height={1044}
                    className='h-auto w-full'
                  />
                </div>
              ))}
            </Slider>
            <p className='text-gray-500 mb-4'>{project.description}</p>
            <p className='mb-4'>
              <strong>Responsibilities:</strong> {project.responsibilities}
            </p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
