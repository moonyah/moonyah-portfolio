import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id='about-me' className='pt-20 pb-8'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold mb-8 text-white'>
          <span className='font-bold text-yellow-500'>꿈</span>을{' '}
          <span className='font-bold text-yellow-300'>실현</span>하는
          <span className='font-bold text-yellow-100'> 개발자</span>
        </h1>
        {/* <span className='font-bold text-yellow-300'>
          새로운 가능성을 열어가는 개발자
        </span> */}

        {/* 자기소개 멘트 */}

        <div className='space-y-4 text-gray-300 pl-4 border-l-4 border-yellow-200'>
          <p className='mb-4 text-white'>
            안녕하세요! 저는 프론트엔드 개발자{' '}
            <span className='font-semibold text-white'>장문용 </span>
            입니다.
          </p>
          <p>
            저는 꿈을 실현하는 프론트엔드 개발자로서 열정과 역량을 갖추고
            있습니다. 주요 스킬로는 React, Next.js를 활용하여 웹 서비스를
            개발하는 것입니다. 새로운 기술에 빠르게 적응하며, 사용자 중심의
            직관적이고 효율적인 웹 경험을 제공하기 위해 끊임없이 노력합니다.
            함께 일하는 것을 즐기고 꾸준히 도전하며 성장하는 것에 가치를 둡니다.
            💫
          </p>
        </div>

        {/* Velog 링크 */}
        <p className='mb-4 mt-6 font-semibold text-gray-400'>
          Check out my writings on{' '}
          <a
            href='https://velog.io/@moonyah'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 underline'
          >
            Velog
          </a>
          .
        </p>

        {/* 이메일 */}
        <p className='mb-4 text-gray-400 font-semibold'>
          You can reach me at{' '}
          <a
            href='mailto:your.email@example.com'
            className='text-gray-300 underline'
          >
            dltk789@gmail.com
          </a>
          .
        </p>

        <div>
          <hr className='border-t border-gray-600 my-10' />
          <ul className='list-disc pl-6 text-yellow-50'>
            <li className='mb-2'>
              야놀자 X 패스트캠퍼스 프론트엔드 부트캠프 1기 (2023.07 - 2024.01)
            </li>
            <li className='mb-2'>
              숭실대학교 글로벌미디어학부 (2021.03 - 2022.12)
            </li>
            <li className='mb-2'>
              한국공학대학교 소프트웨어학과 (2018.03 - 2019.12)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
