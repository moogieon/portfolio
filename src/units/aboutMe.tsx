import type { NextPage } from "next";
import Image from "next/image";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import Avater from "../../styles/Bust.png";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const AboutMe: NextPage = () => {
  const [active, setAcite] = useState(false);
  const about = useRef<any>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAcite(true);
            }, 300);
          } else {
            setAcite(false);
          }
        });
      },

      { rootMargin: "0px 0px 0px 0px", threshold: 0.2 }
    );
    observer.observe(about.current);
  }, []);

  return (
    <section ref={about} w-h="100vh" w-bg="[#ffff]" id="about">
      <div
        w-p="x-20 t-15 <lg:x-10"
        w-container="~"
        w-m="x-auto"
        w-flex="~ col"
        w-justify="center"
      >
        <p w-font="game " w-text="[#686eff] 2xl <md:center">
          <span w-text="[#f8ae16]">A</span>bout me
        </p>
        <div
          w-flex="~ row <md:col-reverse"
          w-justify="between"
          w-items="<md:center"
          w-pos="relative"
        >
          <div
            w-m="t-10"
            w-transition="all"
            w-transform="gpu"
            className={`${
              active
                ? "translate-x-0 opacity-100 duration-700 delay-200"
                : " -translate-x-30/10  opacity-0 duration-0 delay-0"
            } `}
          >
            <div
              w-font="leading-7"
              w-text="lg <lg:base"
              w-grid="~ cols-2"
              w-gap="5"
            >
              <div w-text="xl">
                코드 한줄마다 이유가 있으려고 노력하고있습니다.
              </div>
              <div w-text="xl">문법보다 동작원리를 이해하려고 합니다.</div>
              <div w-text="xl"> 휴먼 에러를 최소로 줄이려고 노력 합니다.</div>
              <div w-text="xl">
                현재 함수형 프로그래밍 큰 흥미를 가지고 있습니다.
              </div>
              <div w-text="xl">도전,성장에 목말라 있습니다!</div>
              <div w-text="xl">
                늦었지만 단순한 취업이 목표가 아닌 누구보다 강한 개발에 대한
                관심으로 시작 했고, 전공생에 뒤쳐지기 않으려 아니 앞서가기 위해
                늘 최선을 다하려고 노력하고있습니다!!
              </div>
            </div>
          </div>
          <div
            w-m="t-10"
            w-flex="~ col"
            w-h="full"
            w-justify="between"
            w-transition="all"
            w-transform="gpu"
            className={` ${
              active
                ? "translate-x-0 opacity-100 duration-700 delay-500"
                : "translate-x-30/10 opacity-0"
            } `}
          >
            <div className="speech-bubble2" w-text="black">
              안녕하세요!
              <span w-font="bold" w-text="black" w-underline="~ myellow 3">
                JavaScript
              </span>
              의 재미를 추구하는
              <br />
              프론트엔드 개발자
              <span w-font="bold" w-text="black">
                이창묵
              </span>
              입니다.
              <br />
              <span w-font="bold" w-text="black" w-underline="~ myellow 3">
                React, React Native, Next.js
              </span>
              를 사용한
              <br /> Web / Mobile Application 개발을 하고 있습니다.
            </div>
            <div w-border="b-1" w-p="x-4" w-w="300px" w-h="300px" w-m="b-10">
              <Image src={Avater} alt="avater" />
            </div>
            <div w-font="game">
              <p w-flex="~ row" w-items="center" w-h="20px">
                <span>
                  <HiOutlineMail w-w="30px" w-h="30px" w-svg="fill-mblue " />
                </span>
                moogieon817@gmail.com
              </p>
              <p w-flex="~ row" w-items="center" w-h="20px">
                <span>
                  <HiOutlinePhone w-w="30px" w-h="30px" w-svg="fill-mblue " />
                </span>
                010-5007-7365
              </p>
              <p w-flex="~ row" w-gap="2">
                <span>Github</span>
                <span>Blog</span>
                <span>Velog</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
