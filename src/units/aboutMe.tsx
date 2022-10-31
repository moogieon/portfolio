import type { NextPage } from "next";
import Image from "next/image";
import { useState, useRef, useEffect, MutableRefObject } from "react";
import Avater from "../../styles/Bust.png";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

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
    <section
      ref={about}
      w-pos="relative"
      w-h="min-100vh full"
      w-bg="mblue"
      id="about"
    >
      <div
        w-p="x-10 t-23 <lg:x-10"
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
          w-h="3/10 <md:230px"
        >
          <path
            d="M0.00,92.27 C116.83,202.92 300.30,20.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#e5e8ec" }}
          ></path>
        </svg>
        <p w-font="game " w-text="mblue 3xl <md:center" w-z="1">
          <span w-text="mpink">A</span>bout me
        </p>
        <div
          w-flex="~ row <md:col-reverse"
          w-justify="between"
          w-items="center"
          w-pos="relative"
          w-overflow="x-hidden"
          w-p="t-20"
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
              w-text="lg <lg:base <md:center"
              w-grid="~ cols-1"
              w-gap="5"
            >
              <h2 w-text="2xl underline underline-mpink underline-offset-6">
                일단 해보려고 하는 사람
              </h2>
              <div w-w="max-content" w-h="full" w-p="2">
                <span w-text="mblue stroke-md stroke-mpink">1.</span> 코드
                한줄마다 이유가 있으려고 노력하고있습니다.
              </div>
              <div w-w="max-content" w-h="full" w-p="2">
                <span w-text="mblue stroke-md stroke-mpink">2.</span> 문법보다
                동작원리를 이해하려고 합니다.
              </div>
              <div w-w="max-content" w-h="full" w-p="2">
                <span w-text="mblue stroke-md stroke-mpink">3.</span> 휴먼
                에러를 최소로 줄이려고 노력 합니다.
              </div>
              <div w-w="max-content" w-h="full" w-p="2">
                <span w-text="mblue stroke-md stroke-mpink">4.</span> 현재
                함수형 프로그래밍 큰 흥미를 가지고 있습니다.
              </div>
              <div w-w="max-content" w-h="full" w-p="2">
                <span w-text="mblue stroke-md stroke-mpink">5.</span>{" "}
                도전,성장에 목말라 있습니다!
              </div>
              <div w-h="full" w-p="2" w-text="left">
                어떠한 일이든 결국은 오래 버티고 노력하는 자가 완성된 결과물을
                만든다고 생각합니다.
                <br />
                늦은 출발이지만 단순한 취업이 목표가 아닌 누구보다 강한 개발에
                대한 관심으로 시작했고,
                <br /> 전공생에 뒤처지지 않으려 아니 앞서가기 위해 늘 최선을
                다하려고 노력하고 있습니다!
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
              <span w-font="bold" w-text="black" w-underline="~ mpink 3">
                {" "}
                JavaScript
              </span>
              의 재미를 추구하는
              <br />
              프론트엔드 개발자
              <span w-font="bold" w-text="black xl">
                {" "}
                이창묵
              </span>
              입니다.
              <br />
              <span w-font="bold" w-text="black" w-underline="~ mpink 3">
                React, React Native, Next.js
              </span>
              를 사용한
              <br /> Web / Mobile App 개발을 하고 있습니다.
            </div>
            <div w-border="b-1" w-p="x-4" w-w="300px" w-h="300px" w-m="b-5">
              <Image src={Avater} alt="avater" />
            </div>
            <div w-font="game" w-flex="~ col" w-gap="3">
              <a
                href="mailto:moogieon817@gmail.com"
                w-flex="~ row"
                w-items="center"
                w-gap="3"
                w-h="20px"
              >
                <span>
                  <HiOutlineMail
                    w-w="30px"
                    w-h="30px"
                    w-transition="~ duration-300"
                    w-svg="hover:stroke-1 hover:stroke-mpink"
                  />
                </span>
                moogieon817@gmail.com
              </a>
              <p w-flex="~ row" w-items="center" w-gap="3" w-h="20px">
                <span>
                  <HiOutlinePhone
                    w-w="30px"
                    w-h="30px"
                    w-transition="~ duration-300"
                    w-svg="hover:stroke-1 hover:stroke-mpink"
                  />
                </span>
                010-5007-7365
              </p>
              <p w-flex="~ row" w-gap="3">
                <a href="https://github.com/moogieon">
                  <BsGithub
                    w-w="30px"
                    w-h="30px"
                    w-transition="~ duration-300"
                    w-svg="hover:stroke-1 hover:stroke-mpink"
                  />
                </a>
                <a
                  href="https://moogieon.github.io/"
                  w-w="max-content"
                  w-h="30px"
                  w-bg="mpink"
                  w-border="rounded-md hover:rounded-none"
                  w-transition="~ duration-300"
                  w-p="x-2"
                >
                  Blog
                </a>
                <a
                  href="https://velog.io/@moogieon"
                  w-w="max-content"
                  w-h="30px"
                  w-text="mpink"
                  w-bg="mwhite"
                  w-border="rounded-md hover:rounded-none"
                  w-transition="~ duration-300"
                  w-p="x-2"
                >
                  Velog
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
