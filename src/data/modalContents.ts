interface ModalContent {
  title: string;
  reason: string;
  knowledge: string;
  challenges?: string;
  solutions?: string;
}

export const modalContents: Record<string, ModalContent> = {
  "Moonyah's Portfolio": {
    title: "Moonyah's Portfolio",
    reason: '포트폴리오 용도로 제작한 웹사이트입니다.',
    knowledge:
      'React, Next.js, TypeScript를 사용하여 개발하고 배포하는 프로세스를 진행하였습니다. 또한 반응형을 고려해 UI/UX에 신경을 썼습니다.',
    challenges:
      '앞으로도 프로젝트를 추가할 것이기 때문에 효과적인 파일 구조에 대해 고민을 하였고 각 프로젝트마다의 자세한 정보를 넣기 위해 모달창을 이용했습니다.',
  },
  STAYINN: {
    title: 'STAYINN',
    reason:
      '숙박 예약 서비스를 개발하면서 그에 대한 구매/검색 플로우와 사용자들의 편의성을 고려하였고 백엔드와의 첫 협업 프로젝트로서 의미가 있었습니다.',
    knowledge:
      'React, Next.js, TypeScript, Recoil을 사용하였고 css 라이브러리로 tailwind를 사용했습니다.',
    challenges:
      '호텔 카테고리와 지역을 동시에 분류해야 하는 상황에서, URL을 slug로 설정하여 호텔을 분류하려고 했으나 slug를 사용한 URL은 category와 location의 명시성이 부족해 혼란을 초래해서 사용자가 원하는 정보를 정확히 식별하기 어렵다는 문제가 있었습니다.',
    solutions:
      'URL을 product?category=&location=로 명시적으로 변경하여 각각의 매개변수를 명확히 나타내게 되었다. 사용자가 쉽게 필터링하고 원하는 정보를 찾을 수 있도록 개선이 되었다. 이로서 URL 구조의 중요성을 깨달았고, 명확한 매개변수를 통해 사용자 경험을 향상시키는 문제 해결을 하였습니다.',
  },
  호그와톡: {
    title: '호그와톡',
    reason: '해리포터 컨셉의 소켓 기반 채팅 서비스를 개발한 이유...',
    knowledge: 'React, Next.js, TypeScript, Recoil, Firebase를 사용하여...',
    challenges: '개발 중에 마주한 어려움...',
    solutions: '어려움을 해결한 방법...',
  },
  'CS-yum-blog': {
    title: 'CS-yum-blog',
    reason: 'CS스터디 내용을 정리해 놓은 블로그를 만든 이유...',
    knowledge: 'React, TypeScript, Firebase를 사용하여...',
    challenges: '블로그 개발 중에 부딪힌 문제들...',
    solutions: '문제를 해결한 방안들...',
  },
  'Company Space': {
    title: 'Company Space',
    reason: '직원 위키 서비스를 제작한 이유...',
    knowledge: 'React를 사용하여...',
    challenges: '출퇴근 모달 제작 중에 부딪힌 문제들...',
    solutions: '문제를 해결한 방안들...',
  },
  '카페 직원 관리 서비스': {
    title: '카페 직원 관리 서비스',
    reason: '카페 직원들의 정보를 관리하는 서비스를 만든 이유...',
    knowledge: 'JavaScript, CSS, AWS S3를 사용하여...',
    challenges: '서비스 개발 중에 부딪힌 문제들...',
    solutions: '문제를 해결한 방안들...',
  },
  'Todolist Tomato': {
    title: 'Todolist Tomato',
    reason: '할 일을 완료하면 토마토가 열리는 일정 관리 앱을 만든 이유...',
    knowledge: 'Flutter, Firebase를 사용하여...',
    challenges: '앱 개발 중에 부딪힌 문제들...',
    solutions: '문제를 해결한 방안들...',
  },
  '7호선 빌런': {
    title: '7호선 빌런',
    reason: '7호선 빌런을 물리치는 3D 리듬 게임을 만든 이유...',
    knowledge: 'Unity, Blender를 사용하여...',
    challenges: '게임 개발 중에 부딪힌 문제들...',
    solutions: '문제를 해결한 방안들...',
  },
};
