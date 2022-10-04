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
      detail:
        "Gatsby를 이용해 마크업 요소와 다양한 API 를 통해 만든 정적 웹 사이트",
      do: ["전체 페이지 html,css,markDown 작업"],
      know: [
        "JAM Stack 장점 기존 방식보다 더 빠르게 웹 사이트를 제공할 수 있다.",
        "Gatsby는 Build 과정에서 마크업이 생성 검색 엔진 최적화와 성능 모두 챙기수 있었다.",
        "아토믹 css의 편의성, 속도",
      ],
      live: "https://www.nutritioncourt.com/",
      skill: ["Gatsby", "CSS", "WindiCss", "MarkDown"],
    },
    {
      name: "웰코치",
      src: welcoah,
      info: "혈액 분석 맞춤형 헬스케어 웰코치앱 소개 사이트",
      detail:
        "대세는 리얼돔 빌드 타임에 돔을 업데이트하는 효율적인 명령 코드로 변환하는 컴파일러 겸 프레임워크 Svelte를 이용한 정적 사이트",
      do: ["전체 페이지 html,css,svelte,astro 작업"],
      know: [
        "Svelte 번들의 크기가 작아 SPA의 단점(첫 로딩에 시간이 많이 걸린다)을 보완 할 수있다.",
        "Svelte 가상돔을 사용하지 않아서 번들에는 변경된 내용을 알기 위해 사용되는 런타임 프레임워크 없기에 번들 크기가 작아 진다.",
        "Svelte 반응형 프레임워크",
      ],
      live: "https://www.welcoach.com/",
      skill: ["Svelte", "CSS", "Astro", "Vite", "Windicss"],
    },
    {
      name: "웰코치 히어로",
      src: hero,
      info: "한인 대상의 헬스케어 웰코치샵 소개 사이트",
      detail:
        "프레임워크를 위한 프레임워크라 불리고 웹사이트를 빠르게 하기 위해 기존 웹프레임워크에서 JS를 최대한 걷어내주는 Astro를 이용한 정적 사이트",
      do: ["전체 페이지 astro, fullPage api로 작업"],
      know: [
        "실제로 쓰지 않는 코드들을 제외한다는 뜻으로 Tree Shaking이라는 개념을 알게 되었다.",
        " 더욱 빠른 렌더링이 가능해진다.",
        "이외에는 특출난 장점도 자료도 많이 없어서 주력 프레임워크 + 빌드시 Astro가 효율이 좋은듯 하다.",
      ],
      live: "https://www.welcoachshop.com/",
      skill: ["Astro", "CSS", "WindiCss"],
    },
    {
      name: "웰코치샵",
      src: welcoahshop,
      info: "건강 기능 식품 판매, 건강검진 서비스 및 검진 결과를 알려 주는 헬스케어 쇼핑몰",
      detail:
        "쇼피파이를 이용한 쉽고 빠르게 해외 이커머스의 장점과 내부 서버와 페이지를 이용한 헬스케어 쇼핑몰",
      do: [
        "Liquid 이용한 마이페이지 레이아웃 작업",
        "쇼피파이 api 와 graphql-request를 이용해 사내 api와 연결",
        "쇼피파이 로그인 정보와 와 사내 서버와 이중 인증 토큰 방식의 로그인 기능",
        "이중 인증 토큰 방식으로 React, Relay, Graphql을 이용한 검진 EREQ,반품 신청서 작성 페이지",
        "React, Relay, Graphql을 이용한 건강검진 결과를 알려주는 리포트",
      ],
      know: [
        "협업 할 때는 더블체크와 의사소통이 가장 중요하다.",
        "실무에서 타임라인에 맞춰 작업 하는 최선의 방법",
        "Liquid를 통한 새로운 언어에 대한 호기심과 재미",
      ],
      live: "https://shop.welcoach.com/",
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
      detail:
        "대세는 중고거래! 구현하는 모든것이 처음이였던 CRUD 프로젝트 반응형, 최적화, 디테일한 기본기 까지 부족 했던 프로젝트",
      do: [
        "카테고리 컴포넌트 제작 및  카테고리 별 데이터 분류 구현",
        "데이터 조회 컴포넌트 구성",
        "게시글 작성 컴포넌트 구현",
        "react-hook-form과 yup을 사용한 성능 최적화 및 유효성 검사 구현",
        "게시글 내용 컴포넌트 구성",
        "카카오 맵 api를 이용한 위치 서비스",
        "게시글 추천 기능",
        "댓글 작성 수정 삭제 기능",
        "내가 작성한 글 불러오기 기능 구현",
        "아임포트를 활용한 간단한 결제 기능 구현",
      ],
      know: [
        "미흡한 hooks 사용, 반응형, api 통신, 최적화",
        "Next.js의 다이나믹 라우팅과 간편한 SSG/SSR 구현",
        "REST API 의 언더패치와 오버패치의 문제를 해결한 graphql API의 편의성",
        "동기들과 코드 리뷰를 진행하며, 같은 문제도 사람마다 해석이 굉장히 다를 수 있다는 것을 깨달았다, 좋은 점은 받아들이고, 다른 사람의 코드를 읽고 의견을 제시하는 방법을 배웠다.",
      ],
      git: "https://github.com/moogieon/codecamp-02/tree/master/freeboard_frontend",
      live: "http://moogie.shop/",
      skill: ["Next", "CSS", "Emotion", "graphql", "ApolloClient"],
    },
    {
      name: "헤이고",
      src: heygo,
      detail: "",
      do: ["- 전체 페이지 html,css 작업"],
      know: [""],
      git: "https://github.com/moogieon/TravelApp",
      info: "처음 도전한 앱,팀 프로젝트\n'리액트 네이티브'로 만든 '동행' 서비스 앱 서비스",
      skill: ["ReactNative", "Emotion", "graphql", "ApolloClient"],
    },
    {
      name: "깃 이슈 트래커",
      src: issue,
      detail: "",
      do: ["- 전체 페이지 html,css 작업"],
      know: [""],
      git: "https://github.com/moogieon/vite-ssr-relay-template",
      info: "relay를 배우고자 테스트한 'git issues 트래커'",
      skill: ["React18", "graphql", "Relay", "CSS", "WindiCss"],
    },
    {
      name: "깃 블로그",
      src: blog,
      detail: "",
      do: ["- 전체 페이지 html,css 작업"],
      know: [""],
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
