import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id='about-me' className='pt-20 pb-8'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold mb-8 text-white'>
          <span className='font-bold text-yellow-500'>꿈</span>을{' '}
          <span className='font-bold text-yellow-300'>현실</span>로 만드는
          <span className='font-bold text-yellow-100'> 개발자</span>
        </h2>
        {/* <span className='font-bold text-yellow-300'>
          새로운 가능성을 열어가는 개발자
        </span> */}

        {/* 자기소개 멘트 */}
        <p className='mb-4 text-white'>
          안녕하세요! 저는 프론트엔드 개발자{' '}
          <span className='font-semibold text-white'>장문용 </span>
          입니다.
        </p>
        <div className='space-y-4 text-gray-300 pl-4 border-l-4 border-gray-500'>
          <p>
            꿈을 현실로 만드는 개발자로서, 창의적인 아이디어에 늘 열려있고,
            협업과 도전을 통해 더 나은 웹 경험을 창조하는 것을 즐깁니다. <br />
            코드와 스토리텔링을 조화롭게 녹여내는 것이 제 목표입니다. ✨
          </p>
          <p>
            또한 새로운 아이디어를 탐험하고, 사용자들에게 더 나은 상호작용을
            제공하기 위해 끊임없이 노력하고 있습니다. 현장에서 발생하는 도전에
            대한 열린 마음을 가지고 있으며, 항상 기술적으로 성장하고자 하는
            의지를 지니고 있습니다. ✍️
          </p>
          <p>
            함께 일하게 된다면, 팀의 목표를 달성하는 데 기여하면서 동시에
            사용자들에게 새로운 경험을 선사하는 웹 개발의 매력을 함께 느낄 수
            있을 것이라 믿습니다. <br />
            함께 더 나은 미래를 만들어 나가기를 기대합니다! 🚀
          </p>
        </div>

        {/* Velog 링크 */}
        <p className='mb-4 mt-4 font-semibold text-gray-400'>
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
          <hr className='border-t border-gray-500 my-8' />
          <ul className='list-disc pl-6 text-white'>
            <li>
              야놀자 X 패스트캠퍼스 프론트엔드 부트캠프 1기 (2023.07 - 2024.01)
            </li>
            <li>숭실대학교 글로벌미디어학부 (2021.03 - 2022.12)</li>
            <li>한국공학대학교 소프트웨어학과 (2018.03 - 2019.12)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
