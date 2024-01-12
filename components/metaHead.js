import Head from "next/head";

const MetaHead = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "이종호 포트폴리오"}</title>
      <meta
        name="description"
        content={
          description ||
          "웹 개발자 포트폴리오."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "이종호 포트폴리오"} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        // 나중에 닉네임 혹은 이름 도메인 작성
        // content={url || "https://jonggulog.vercel.app/"}
      />
      <meta property="og:image" content={image || "/profile.png"} />
      <meta
        property="og:description"
        content={
          description ||
          "이종호 포트폴리오"
        }
      />
      <meta property="og:article:author" content="이종호" />
    </Head>
  );
};

export default MetaHead;
