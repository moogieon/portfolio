import type { NextPage } from "next";
import ImageSlider from "../components/ImageSlider";
import nutri from "../../styles/works/nutri.png";
import welcoah from "../../styles/works/welcoah.png";
import hero from "../../styles/works/welcoahHero.png";
import shop from "../../styles/works/welcoachShop1.png";
import heygo from "../../styles/personal/heygo.png";

const Experiences: NextPage = () => {
  const work = [
    { name: "뉴트리션코트", src: nutri },
    { name: "웰코치", src: welcoah },
    { name: "웰코치 히어로", src: hero },
    { name: "웰코치샵", src: shop },
  ];
  const personal = [
    { name: "중고나라", src: heygo },
    { name: "헤이고", src: heygo },
    { name: "깃 이슈 트래커", src: heygo },
    { name: "깃 블로그", src: heygo },
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
            w-flex="~ row <md:col"
            w-gap="<md:5"
            w-justify="around <md:start"
            w-p="t-40 b-10 <md:t-20"
          >
            <div>
              <p w-text="xl" w-font="bold">
                Nutrition Court <span>2021.12 ~</span>
              </p>
              <p>맞춤형 스마트헬스케어 서비스</p>
              <p>프론트엔드 개발자로 근무</p>
            </div>
            <div>
              <p w-text="xl" w-font="bold">
                Code Camp <span>2021. 07 ~ 2021. 09</span>
              </p>
              <p>코딩 부트캠프 교육 프로그램</p>
              <p>
                Vanilla JS, React, Next.js, 간단한 Typescript, API 통신 사용법
                등 공부
              </p>
            </div>
          </div>
          <div w-m="x-auto" w-container="~">
            <ul>
              <li>
                <p w-font="game" w-text="2xl">
                  Work
                </p>
                <ImageSlider data={work} />
              </li>
              <li>
                <p w-font="game" w-text="2xl">
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
