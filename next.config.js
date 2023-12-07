// next.config.js

module.exports = {
  // 다른 설정...

  // 정적 내보내기를 위한 빌드
  target: 'serverless',

  // 정적 내보내기를 위한 경로 매핑
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/_not-found': { page: '/_not-found' },
      // 필요한 경우 다른 페이지 추가
    };
  },
};
