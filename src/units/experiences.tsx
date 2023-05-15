import type { NextPage } from "next";
import ImageSlider from "../components/ImageSlider";
import nutri from "../../styles/works/nutri.png";
import welcoah from "../../styles/works/welcoah.png";
import hero from "../../styles/works/welcoahHero.png";
import welcoahshop from "../../styles/works/welcoachShop1.png";
import myPage_1 from "../../styles/myPage/myPage_1.png";
import myPage_2 from "../../styles/myPage/myPage_2.png";
import myPage_3 from "../../styles/myPage/myPage_3.png";
import welcoah_borad from "../../styles/works/welcoah_borad.png";
import reportMain from "../../styles/works/reportMain.png";
import report_1 from "../../styles/report/report_1.png";
import report_2 from "../../styles/report/report_2.png";
import report_3 from "../../styles/report/report_3.png";
import heygo from "../../styles/personal/heygo.png";
import blog from "../../styles/personal/blog.png";
import shop from "../../styles/personal/shop.png";
import issue from "../../styles/personal/issue.png";
import partner from "../../styles/personal/partner.png";
import todo from "../../styles/personal/todo.png";

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
        "Liquid 이용한 쇼핑몰 마이페이지 레이아웃 작업",
        "쇼피파이 api 와 graphql-request를 이용해 사내 api와 연결",
        "쇼피파이 로그인 정보와 와 사내 서버와 이중 인증 토큰 방식의 로그인 기능",
        "이중 인증 토큰 방식으로 React, Relay, Graphql을 이용한 검진 EREQ,반품 신청서 작성 페이지",
        "React, Relay, Graphql을(를) 이용한 건강검진 결과를 알려주는 i18n을 이용한 국문/영문 리포트",
        "Shopify storefront API를 이용한 장바구니 기능",
        "검진 국문 리포트 페이지",
        "영양상담 게시판 페이지",
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
        "React",
        "Typescript",
        "graphql",
        "Relay",
        "graphql-request",
        "i18n",
      ],
      images: [
        {
          href: "https://github.com/moogieon/nestJS-test/assets/86825253/a32443ce-df15-464e-9ddf-8f35778269e2",
          url: myPage_1,
        },
        {
          href: "https://github.com/moogieon/nestJS-test/assets/86825253/ef896102-39ed-44f4-8c19-63a84c2bef94",
          url: myPage_2,
        },
        {
          href: "https://github.com/moogieon/nestJS-test/assets/86825253/58e331a4-2356-4ed9-873b-45188cf83e83",
          url: myPage_3,
        },
      ],
    },
    {
      name: "건강상담 게시판",
      src: welcoah_borad,
      info: "1대1 건강 상담을 받을 수 있는 게시판",
      detail: "건강검진 결과, 건기식 상담을 받을 수 있는 게시판",
      do: [
        "CSS,HTML을 이용한 UI 작업",
        "쇼피파이 api 와 graphql-request를 이용해 사내 api와 연결",
        "사진 첨부 기능 기능",
        "비밀글 활성화 기능",
        "상담사와 소통 할 수 있는 댓글 기능 ",
      ],
      know: [
        "협업 할 때는 더블체크와 의사소통이 가장 중요하다.",
        "사용자를 고려하는 UI.UX의 중요성(댓글의 가독성, 첨부 파일 확인)",
        "사용자 편의와 개인정보 보호를 위한 기능의 중요성(비밀글, 사진 첨부, 링크 첨부)",
      ],
      live: "https://shop.welcoach.com/pages/%EA%B1%B4%EA%B0%95%EC%83%81%EB%8B%B4",
      skill: ["Shopify", "CSS", "graphql", "Relay", "graphql-request"],
    },
    {
      name: "검진 리포트",
      src: reportMain,
      info: "건강검진 결과를 보여주는 리포트",
      detail: "건강검진 결과, 건기식 추천을 받을 수 있는 리포트",
      do: [
        "React, windi css 을 이용한 UI 작업",
        "React, Relay, Graphql을(를) 이용한 건강검진 결과를 알려주는 i18n을 이용한 국문/영문 리포트",
        "Shopify storefront API를 이용한 장바구니 기능",
        "쇼피파이 api 와 graphql-request를 이용해 사내 api와 연결해서 건기식 추천",
        "원형 그래프를 이용한 요약 리포트",
        "그래프를 이용해 알 수 있는 임상범위, 건강범위 그래프",
      ],
      know: [
        "UI.UX의 중요성(기존 간단하게 디자인 된 리포트와, 리뉴얼 된 리포트의 선호도 차이)",
        "백엔드 개발자와의 원활한 소통은 빠른 작업물을 만들 수 있다.(노션을 통한 커뮤니케이션)",
        "바퀴를 재창조 하지말자(chart.js 같은 라이브러리를 적극 이용하자!)",
        "chat GPT를 이용해서 코드를 짜면 시간이 단축된다!",
      ],
      skill: ["React", "windiCSS", "graphql", "Relay", "graphql-request"],
      images: [
        {
          href: "https://github.com/moogieon/nestJS-test/assets/86825253/8e6bbf3b-d5b8-47f7-a79c-34e5d2b2717e",
          url: report_1,
        },
        {
          href: "https://github.com/moogieon/nestJS-test/assets/86825253/ca5d47d8-0503-4580-834d-e37d762b186b",
          url: report_2,
        },
        {
          href: "https://github.com/moogieon/nestJS-test/assets/86825253/bd26d4a2-23ce-441a-88b2-a57b6737346a",
          url: report_3,
        },
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
        "getStaticProps, getStaticPath를 이용한 SSG dynamic route",
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
      live: "https://mookmarket.shop/",
      skill: [
        "Next",
        "Typescript",
        "CSS",
        "Emotion",
        "graphql",
        "ApolloClient",
      ],
    },
    {
      name: "헤이고",
      src: heygo,
      info: "마음만 맞으면 같이 가고 싶은데 없을까? '리액트 네이티브'로 만든 동행 앱 서비스",
      detail:
        "내 근처에 동행을 구하자! 첫 팀 프로젝트 첫 리엑트 네이티브 프로젝트",
      do: [
        "팀원 모두 React-Native는 처음 사용해 보기 때문에  대표로 공식 문서를 참고하여 작동 원리를 공부해서 팀원들에게 배운것들을 공유함 ",
        "그 외 높은 빈도로 쓰이는 라이브러리(react-navigation) 등을 공부후 공유 ",
        "Google Maps를 활용한 CRUD 기능 구현",
      ],
      know: [
        "실제 사용 경험이 중요하다는 것을 다시 한번 배움",
        "새로운 기술을 배울 때 어떻게 하면 효과적으로 빠르게 내 것으로 만들 수 있는지 고려하게 됨",
        "팀원들과의 원활한 소통이 merge출동을 방지 할 수 있다.",
        "디자이너와의 협업을 어떻게 진행해야 효과적인지, 피그마 사용법을 배움",
      ],
      git: "https://github.com/moogieon/TravelApp",
      skill: [
        "ReactNative",
        "Typescript",
        "Emotion",
        "graphql",
        "ApolloClient",
      ],
    },
    {
      name: "파트너스",
      src: partner,
      info: "체크박스 필터링 기능 구현",
      detail: "라이브러리 없이 만들어보는 여러가지 기능들",
      do: [
        "요청 목록 필터링 여집합",
        " 요청 목록 토글 필터링",
        "요청 목록 체크박스 필터링",
        "반응형 햄버거 메뉴",
      ],
      know: [
        "코드를 치다보니 어느새 100줄이 넘어가고 최대한 70줄 이상 되면 컴포넌트를 따로 빼려고 노력 헀다.",
        "타입을 공부중이라 타입을 잡는데 생각을 많이 했다.",
        "반응형은 처음이라 아직 반복적인 작업을 통해서 구현했다.",
      ],
      git: "https://github.com/moogieon/ATEAM-Challenge",
      skill: ["React", "Typescript", "Emotion", "Axios"],
    },
    {
      name: "내 투자일지",
      src: todo,
      info: "리액트 네이트브를 이용한 투자일지 기록",
      detail: "투자 일지를 작성해서 투자 종목들의 수익율을 비교 해보자!",
      do: [
        "회원가입, Email, Password 를 입력해서 유저를 식별할 수 있는 JWT token을 받기",
        "JWT token을 통한 인증으로 투자일지 목록, 투자일지 작성,삭제 기능",
        "투자한 종목에는, 기존 종목 리스트들 투자종목들의 data를 비교해서 수익률 표시",
      ],
      know: [
        "Promise all을 이용해 동시에 순차적인 서버 통신 방법",
        "react native의 로컬 저장소 저장 방법",
        "사용자가 경험해야 하는 약간의 지연이 항상 있으므로 유용한 로드 상태를 표시하는 것이 중요하다.",
      ],
      git: "https://github.com/moogieon/Investing-Diary-ReactNative-Test",
      skill: [
        "ReactNative",
        "Typescript",
        "Emotion",
        "Axios",
        "React.Asyncstorige",
      ],
    },
    {
      name: "깃 이슈 트래커",
      src: issue,
      info: "relay를 배우고자 테스트한 'git issues 트래커'",
      detail:
        "회사 팀원과 함께 다음 프로젝트를 위한 React18, graphql, relay를 스터디 할겸 이용한 깃 이슈 트래커",
      do: [
        "이슈 작성 페이지",
        "이슈 목록 페이지",
        "이슈 댓글 달기",
        "React18의 suspense,startTransition 기능들 스터디",
      ],
      know: [
        "Apollo에 비해 Relay의 러닝커브가 길었다",
        "Relay 컴포넌트마다 필요한 데이터를 근처에 선언해서 의존성 문제를 줄여준다.",
        "Relay 데이터 의존성을 모은 뒤에 하나의 GraphQL 요청으로 만들어 가져와 적은 네트워크 요청 처리를 한다.",
        "<Suspense>를 통해 애플리케이션을 작고 독립적인 단위로 쪼개어 위 단계들을 독립적으로 진행할 수 있게 한다.",
        "startTransition 우선순위를 정해줄 수 있다.",
        "startTransition 크게 리엑트가 UI 업데이트를 위해 크고 복잡한 일을 함으로 써 대기 시간이 발생하거나 느린 네트워크 환경에서 데이터를 받아오기 위해 기다리는 상황에서 사용한다.",
      ],
      git: "https://github.com/moogieon/vite-ssr-relay-template",
      skill: ["React18", "Typescript", "graphql", "Relay", "CSS", "WindiCss"],
    },
    {
      name: "깃 블로그",
      src: blog,
      info: "자유롭게 만든 개인 블로그",
      detail:
        "React 기반의 정적 페이지 생성 프레임워크 마크업을 생성하여 SEO 점수도 높히고 입맛대로 디자인하자!ㄴ",
      do: [
        "전체 레이아웃 css 작업",
        "게시물 목록 구성",
        "카테고리별 게시물 나누기",
        "markDown 이용한 게시글 작성 및 렌더링 작업",
        "git hub 이슈로 댓글 작성 구현",
        "이슈로 댓글 작성 구현",
        "gh-pages 로 간단한 배포",
      ],
      know: [
        "Gatsby 공식문서에 대부분 내용이 나와 있어 편했고 역시나 개발은 공식문서",
        "다양한 Gatsby Plugin으로 쉽게 개발 가능 했다. ",
        "문서도 좋지만 직접 부딪히고 적용해야 알 수 있는 부분이 많다.(유의미한 삽질..)",
        "gh-pages는 vercel 과 다르게 빌드 에러가 나게 된다면 어디서 에러가 났는지 찾기 어려워서 불편했다.",
      ],
      git: "https://github.com/moogieon/my-blog",
      live: "https://moogieon.github.io/",
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
          w-p="x-10 y-23 <lg:x-10"
          w-container="~"
          w-m="x-auto"
          w-flex="~ col"
          w-justify="center"
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            w-pos="absolute inset-0 -top-1px"
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
              <p>-해외 이커머스 쇼핑몰 서비스</p>
              <p>-건강검진을 통한 맞춤식 영양제 서비스</p>
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
                -Vanilla JS, React, Next.js, Typescript, API 통신 사용법 등 공부
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
