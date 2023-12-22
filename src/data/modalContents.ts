interface ModalContent {
  title: string;
  reason?: string;
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
    reason:
      '해리포터 컨셉으로 각 기숙사에 대한 채팅방과 클럽에 대한 채팅방을 만들면 재미있을 것이라는 아이디어에서 기획/제작되었습니다.',
    knowledge:
      'React, Next.js, TypeScript, Recoil, Firebase를 사용하여 개발하였습니다.',
    challenges:
      '주어진 api에 대해서만 구현을 해야했기 때문에 기획한 것을 구현하는데 한계를 느꼈습니다. 가입한 사용자마다 기숙사를 배정받고 그 기숙사 정보를 이용해야 했습니다.',
    solutions:
      'Firebase를 추가로 이용해서 기숙사 정보를 저장하였고 그 문제를 해결하였습니다.',
  },
  'CS-yum-blog': {
    title: 'CS-yum-blog',
    reason:
      'CS스터디 내용을 정리해서 블로그를 만들어보면 복습도 되고 피드백도 얻을 수 있기 때문에 스터디 팀원들과 제작하게 되었습니다.',
    knowledge:
      '문서화 쉽게 도와주는 웹사이트 생성 도구인 Docusaurus 서비스를 이용해서 제작하였습니다.',
    // challenges: '블로그 개발 중에 부딪힌 문제들...',
    // solutions: '문제를 해결한 방안들...',
  },
  'Company Space': {
    title: 'Company Space',
    // reason: '직원 위키 서비스를 제작하였습니다.',
    knowledge: '처음으로 React를 경험한 협업 프로젝트입니다.',
    challenges:
      '출퇴근 모달 제작을 하는데 새로고침하면 타이머도 초기화되는 문제가 있었습니다.',
    solutions:
      '로컬 스토리지에 근무 시간(타이머)와 출퇴근 시간을 저장해서 문제를 해결하였습니다. 단, 이렇게 구현했을 때의 아쉬운 점은 로그인한 사용자와 타이머 정보를 저장해서 로그인을 하면 그 정보가 불러와지는 기능으로 되지 않는다는 것입니다.',
  },
  '카페 직원 관리 서비스': {
    title: '카페 직원 관리 서비스',
    // reason: '카페 직원들의 정보를 관리하는 서비스를 만든 이유...',
    knowledge:
      'JavaScript, CSS, AWS S3를 사용하여 개발을 하였습니다. AWS S3를 경험해본다는 점에서 의미를 두고 적용하였습니다.',
    // challenges: '체크 박스를 구현하고 ',
    solutions:
      '사진이 S3에 올라가기는 하지만 불러오는 기능까지 구현하지 못해서 아쉬운 부분이 있습니다. 처음에 스플레쉬 화면을 구현한 부분이 마음에 들었습니다.',
  },
  'Todolist Tomato': {
    title: 'Todolist Tomato',
    reason:
      '할 일을 완료하면 토마토가 열리고 그것을 수확함으로서 성취감을 느끼는 Todo앱을 기획하고 개발하였습니다.',
    knowledge:
      'Flutter, Firebase를 사용하여 회원 가입/로그인 기능을 구현하고 Todo 기능을 구현하였습니다.',
    // challenges: '앱 개발 중에 부딪힌 문제들...',
    // solutions: '문제를 해결한 방안들...',
  },
  '7호선 빌런': {
    title: '7호선 빌런',
    reason:
      '인터넷에서 유명한 지하철 빌런을 주제로 하여 게임을 만들면 재미있을 것 같다는 아이디어로 기획하고 제작하였습니다.',
    knowledge: 'Unity, Blender를 사용하여 개발하였습니다.',
    challenges:
      '처음에는 Maya로 모델링을 진행했는데 크고 무거운 프로그램이라서 빠르고 가벼운 블렌더로 툴을 변경하였습니다.',
    solutions:
      '협업에 있어서 소통의 중요성을 크게 느꼈고 마지막에 3일동안 졸업전시를 했는데 직접 만든 결과를 소개하고 피드백을 받는 과정에서 성취감과 큰 즐거움을 느낀 경험이었습니다.',
  },
};
