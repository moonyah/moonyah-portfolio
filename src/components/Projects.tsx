'use client';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

// import '../styles/styles.css'; // 생성한 CSS 파일을 import
import { projectData } from '../data/projestsData'; // Adjust the import path accordingly
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';
import { HiOutlineExternalLink } from 'react-icons/hi';

interface Project {
  title: string;
  duration: string;
  teamMembers: number;
  images: string[];
  description: string;
  responsibilities?: string;
  techStack: string;
  githubUrl?: string;
  deploymentUrl?: string;
  demoUrl?: string;
}

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    type='button'
    className='absolute inset-y-1/2 right-0 z-10 text-[2rem] text-yellow-800
    '
  >
    <CgChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    type='button'
    className='absolute inset-y-1/2 left-0 z-10 text-[2rem] text-yellow-800'
  >
    <CgChevronLeft />
  </button>
);

const Projects = ({ projects }: { projects: Project[] }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  // 모달이 열릴 때 body에 스크롤 막기
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      // 모달이 닫힐 때 body에 스크롤 허용
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
  };

  // 모달 바깥 부분 클릭 시 닫기
  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // e.target이 모달 창의 자식 요소일 때에만 닫기
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const settings: Settings = {
    dots: false,
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
    <section id='projects' className='pt-8 pb-4 md:pt-20 md:pb-8'>
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
                  className='slick-dots-white relative mb-4'
                >
                  {project.images.map((image: string, index: number) => (
                    <div key={index} className='h-50 md:mt-10'>
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
              <div className='md:w-1/2 md:ml-10 mt-4'>
                <h3 className='text-2xl font-bold mb-2 text-yellow-200'>
                  {project.title}
                </h3>
                <p className='text-gray-400 mb-2 italic'>{project.duration}</p>
                <p className='text-gray-300 mb-4 text-sm'>{`${project.teamMembers}人 프로젝트`}</p>
                <p className='bg-yellow-400 bg-opacity-10 pl-1  mb-4 rounded-sm'>
                  {project.description}
                </p>
                {project.responsibilities && (
                  <p className='mb-1 flex items-center'>
                    <strong className='w-40 inline-block mr-2'>
                      Responsibilities
                    </strong>
                    {project.responsibilities}
                  </p>
                )}
                <p className='mb-6 flex items-center'>
                  <strong className='w-40 inline-block'>Tech Stack</strong>{' '}
                  {project.techStack}
                </p>
                {project.githubUrl && (
                  <p className='mb-1'>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-yellow-100 flex items-center'
                    >
                      <strong>Github</strong>
                      <HiOutlineExternalLink />
                    </a>
                  </p>
                )}
                {project.deploymentUrl && (
                  <p className='mb-1 flex flex-col'>
                    <a
                      href={project.deploymentUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-yellow-100 flex items-center'
                    >
                      <strong>Deployment</strong>
                      <HiOutlineExternalLink />
                    </a>
                  </p>
                )}
                {project.demoUrl && (
                  <p className='mb-1 flex flex-col'>
                    <a
                      href={project.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-yellow-100 flex items-center'
                    >
                      <strong>Demo</strong>
                      <HiOutlineExternalLink />
                    </a>
                  </p>
                )}
              </div>
            </div>
            <div className='flex justify-end pt-2'>
              <button
                className='text-yellow-500 hover:underline cursor-pointer text-sm font-bold flex items-center'
                onClick={() => openModal(project)}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
        {selectedProject && (
          // 모달 창
          <div
            className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50'
            onClick={handleModalClick}
          >
            <div className='bg-white p-8 rounded-lg'>
              <h2 className='text-2xl font-bold mb-4 text-yellow-800'>
                {selectedProject.title}
              </h2>
              <p className='text-gray-400 italic mb-4'>
                {selectedProject.duration}
              </p>
              {/* 기타 프로젝트 정보 출력 */}
              <p>
                {/* 프로젝트를 하게 된 이유, 얻은 지식, 부딪힌 문제, 해결 방안 등을 출력 */}
              </p>
              <button
                className='text-yellow-500 hover:underline cursor-pointer'
                onClick={closeModal}
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
