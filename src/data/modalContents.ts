interface ModalContent {
  title: string;
  reason: string;
  knowledge: string;
  challenges: string;
  solutions: string;
}

export const modalContents: Record<string, ModalContent> = {
  "Moonyah's Portfolio": {
    title: "Moonyah's Portfolio",
    reason:
      '포트폴리오 용도로 제작한 웹사이트입니다. (프로젝트를 하게 된 이유)',
    knowledge:
      'React, Next.js, TypeScript를 사용하여 개발하는 경험을 쌓았습니다. (프로젝트를 통해 얻은 지식)',
    challenges: '프로젝트 중에 부딪힌 문제들...',
    solutions: '문제를 해결한 방안들...',
  },
  STAYINN: {
    title: 'STAYINN',
    reason: '숙박 예약 서비스를 개발하게 된 이유...',
    knowledge: 'React, Next.js, TypeScript, Recoil 등을 사용하여...',
    challenges: '개발 중에 마주한 어려움...',
    solutions: '어려움을 해결한 방법...',
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
