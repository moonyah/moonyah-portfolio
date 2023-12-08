import React from 'react';

const Career: React.FC = () => {
  return (
    <section id="career" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-yellow-300">Career</h2>

        {/* 경력 정보 */}
        <div className="border p-4 rounded-md border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Bootcamp Experience</h3>
          <p>
            <strong className="italic text-yellow-100">
              야놀자X패스트캠퍼스 프론트엔드 부트캠프 1기
            </strong>
            <br />
            <span className="italic text-gray-500">
              2023년 7월 10일 - 2024년 1월 30일
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
