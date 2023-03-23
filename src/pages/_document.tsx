import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
        name="description"
        content="프론트엔드, 백엔드 면접 막막하다면? 개발 언어만 선택하면 10초만에 맞춤 질문을 뽑아드려요. 답변이 어려운 꼬리 질문까지, AI로 면접 준비 한번에!"
      />

      <link
        rel="icon"
        href="https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/logo-blue.svg"
      />
      <meta
        property="og:image"
        content="https://effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com/og-image.svg"
      />
      <meta property="og:title" content="이펙티브 기술면접 - ChatGPT로 연습하는 개발자 면접" />
      <meta
        property="og:description"
        content="프론트엔드, 백엔드 면접 막막하다면? 개발 언어만 선택하면 10초만에 맞춤 질문을 뽑아드려요. 답변이 어려운 꼬리 질문까지, AI로 면접 준비 한번에!"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
