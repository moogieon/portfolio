import type { NextPage } from "next";
import ImageSlider from "../components/ImageSlider";
import nutri from "../../styles/works/nutri.png";
import welcoah from "../../styles/works/welcoah.png";
import hero from "../../styles/works/welcoahHero.png";
import welcoahshop from "../../styles/works/welcoachShop1.png";
import heygo from "../../styles/personal/heygo.png";
import blog from "../../styles/personal/blog.png";
import shop from "../../styles/personal/shop.png";
import issue from "../../styles/personal/issue.png";

const Experiences: NextPage = () => {
  const work = [
    {
      name: "뉴트리션코트",
      src: nutri,
      info: "뉴트리션코트 회사 소개 사이트",
      detail: "",
      do: "",
      know: "",
      live: "",
      skill: ["Gatsby", "CSS", "WindiCss", "MarkDown"],
    },
    {
      name: "웰코치",
      src: welcoah,
      info: "혈액 분석 맞춤형 헬스케어 웰코치앱 소개 사이트",
      detail: "",
      do: "",
      know: "",
      live: "",
      skill: ["Svelte", "CSS", "Astro", "Vite", "Windicss"],
    },
    {
      name: "웰코치 히어로",
      src: hero,
      info: "한인 대상의 헬스케어 웰코치샵 소개 사이트",
      detail: "",
      do: "",
      know: "",
      live: "",
      skill: ["Astro", "CSS", "WindiCss"],
    },
    {
      name: "웰코치샵",
      src: welcoahshop,
      info: "건강 기능 식품 판매, 건강검진 서비스 및 검진 결과를 알려 주는 헬스케어 쇼핑몰",
      detail: "",
      do: "",
      know: "",
      live: "",
      skill: [
        "Shopify",
        "CSS",
        "WindiCss",
        "React18",
        "graphql",
        "Relay",
        "graphql-request",
      ],
    },
  ];
  const personal = [
    {
      name: "중고나라",
      src: shop,
      info: "CRUD가 구현된 게시판, 아임포트를 이용한\n간단한 결제 시스템까지 '중고 거래' 웹 서비스",
      detail: "",
      do: "",
      know: "",
      git: "",
      live: "",
      skill: ["Next", "CSS", "Emotion", "graphql", "ApolloClient"],
    },
    {
      name: "헤이고",
      src: heygo,
      detail: "",
      do: "",
      know: "",
      git: "https://github.com/moogieon/TravelApp",
      info: "처음 도전한 앱,팀 프로젝트\n'리액트 네이티브'로 만든 '동행' 서비스 앱 서비스",
      skill: ["ReactNative", "Emotion", "graphql", "ApolloClient"],
    },
    {
      name: "깃 이슈 트래커",
      src: issue,
      detail: "",
      do: "",
      know: "",
      git: "https://github.com/moogieon/vite-ssr-relay-template",
      info: "relay를 배우고자 테스트한 'git issues 트래커'",
      skill: ["React18", "graphql", "Relay", "CSS", "WindiCss"],
    },
    {
      name: "깃 블로그",
      src: blog,
      detail: "",
      do: "",
      know: "",
      git: "https://github.com/moogieon/my-blog",
      live: "https://moogieon.github.io/",
      info: "자유롭게 만든 개인 블로그",
      skill: ["Gatsby", "CSS", "TailwindCss", "MarkDown", "gh-pages"],
    },
  ];
  return (
    <>
      <section
        w-h="min-100vh full"
        w-pos="relative"
        id="experiences"
        w-bg="mblue"
      >
        <div
          w-p="x-10 y-20 <lg:x-10"
          w-container="~"
          w-m="x-auto"
          w-flex="~ col"
          w-justify="center"
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            w-pos="absolute inset-0"
            w-w="full"
            w-h="260px <md:230px"
          >
            <path
              d="M0.00,92.27 C116.83,202.92 300.30,20.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#e5e8ec" }}
            ></path>
          </svg>
          <p
            w-font="game"
            w-text="mblue  3xl left <md:center"
            w-m="b-10"
            w-z="1"
          >
            <span w-text="mpink">E</span>xperiences
          </p>
          <div
            w-flex="~ col"
            w-gap="5"
            w-justify="<md:start"
            w-p="t-40 b-10 <md:t-20"
          >
            <div>
              <div w-text="xl" w-font="bold">
                <p w-bg="mpink" w-w="max-content" w-p="x-2 y-1">
                  <span>Nutrition</span> Court
                </p>

                <p w-text="mpink"> 2021.12 ~ 현재</p>
              </div>
              <p>-맞춤형 스마트헬스케어 서비스</p>
              <p>-프론트엔드 개발자로 근무</p>
            </div>
            <div>
              <div w-text="xl" w-font="bold">
                <p w-bg="mpink" w-w="max-content" w-p="x-2 y-1">
                  <span>Code</span> Camp
                </p>
                <p w-text="mpink"> 2021. 07 ~ 2021. 09</p>
              </div>
              <p>-코딩 부트캠프 교육 프로그램</p>
              <p>
                -Vanilla JS, React, Next.js, 간단한 Typescript, API 통신 사용법
                등 공부
              </p>
            </div>
          </div>
          <div w-m="x-auto" w-container="~">
            <ul>
              <li>
                <p w-text="2xl underline underline-mpink  underline-offset-6 ">
                  Work
                </p>
                <ImageSlider data={work} />
              </li>
              <li>
                <p w-text="2xl underline underline-mpink  underline-offset-6">
                  Personal
                </p>
                <ImageSlider data={personal} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
