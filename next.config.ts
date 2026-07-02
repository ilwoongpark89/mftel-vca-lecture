import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // 깔끔한 URL /weekN → 정적 인터랙티브 강의(mockup). 미존재 주차는 404(홈에서 링크 안 함).
    const weeks = Array.from({ length: 15 }, (_, i) => i + 1).map((n) => ({
      source: `/week${n}`,
      destination: `/week${n}/index.html`,
    }));
    // 정적 강의 페이지의 favicon.ico 자동요청 404 제거(SVG 파비콘).
    return [...weeks, { source: "/favicon.ico", destination: "/favicon.svg" }];
  },
};

export default nextConfig;
