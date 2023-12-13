import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id='about-me' className='pt-20 pb-8'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold mb-8 text-yellow-300'>About Me</h2>

        {/* 자기소개 멘트 */}
        <p className='mb-4 text-gray-300'>
          안녕하세요! 저는 프론트엔드 개발자{' '}
          <span className='font-bold text-gray-50'>장문용 </span>
          입니다.
        </p>
        <p className='mb-4 text-gray-400'>
          새로운 아이디어에 열려있고 협업과 도전을 통해 더 나은 웹 경험을 만들기
          원합니다. <br />
          코드와 스토리텔링을 조화롭게 녹여내는 것을 목표로 합니다.✨
        </p>

        {/* Velog 링크 */}
        <p className='mb-4 text-gray-400'>
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
        <p className='mb-4 text-gray-400'>
          You can reach me at{' '}
          <a
            href='mailto:your.email@example.com'
            className='text-gray-300 underline'
          >
            dltk789@gmail.com
          </a>
          .
        </p>

        {/* 학력 정보 */}
        <div>
          <h3 className='text-2xl font-bold mb-2 text-yellow-100'>Education</h3>
          <ul className='list-disc pl-6 text-gray-300'>
            <li>숭실대학교 글로벌미디어학부 (2021 - 2022)</li>
            <li>한국공학대학교 소프트웨어학과 (2018 - 2019)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
