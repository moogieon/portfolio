import type { NextPage } from "next";
import ImageSlider from "../components/ImageSlider";
import Img from "../../public/vercel.svg";
const Experiences: NextPage = () => {
  const work = [
    { name: "뉴트리션코트", src: Img },
    { name: "웰코치", src: Img },
    { name: "웰코치 히어로", src: Img },
    { name: "웰코피샵", src: Img },
  ];
  const personal = [
    { name: "중고나라", src: Img },
    { name: "헤이고", src: Img },
    { name: "깃 이슈 트래커", src: Img },
    { name: "깃 블로그", src: Img },
  ];
  return (
    <section w-h="700px" id="experiences" w-p="x-40 t-20">
      <p w-font="game" w-text="[#f8ae16]  2xl right <md:center">
        <span w-text="[#c73f16]">E</span>xperiences
      </p>
      <div w-m="t-40 x-auto" w-container="~">
        <ul>
          <li>
            <p w-font="game">Work</p>
            <div>
              <p>
                Nutrition Court <span>2021.12 ~</span>
              </p>
              <p>맞춤형 스마트헬스케어 서비스</p>
              <p>프론트엔드 개발자로 근무</p>
            </div>
            <ImageSlider data={work} />
          </li>
          <li>
            <p w-font="game">Personal</p>
            <div>
              <p>
                Code Camp <span>2021. 07 ~ 2021. 09</span>
              </p>
              <p>맞춤형 스마트헬스케어 서비스</p>
              <p>
                Vanilla JS, React, Next.js, 간단한 Typescript, API 통신 사용법
                등 공부
              </p>
            </div>
            <ImageSlider data={personal} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
