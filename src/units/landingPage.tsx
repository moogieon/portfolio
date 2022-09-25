import type { NextPage } from "next";
import Image from "next/image";
import { MutableRefObject, useEffect } from "react";
import Avater from "../../styles/Avatar.png";
interface Props {
  landing: MutableRefObject<any>;
  headerMenu: MutableRefObject<any>;
}
const LandingPage: NextPage<Props> = ({ landing, headerMenu }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerMenu.current.style = "opacity:0";
          } else {
            headerMenu.current.style = "opacity:1";
          }
        });
      },

      { rootMargin: "0px 0px 0px 0px", threshold: 0.6 }
    );
    observer.observe(landing.current);
  }, []);

  const nav = [
    { name: "AboutMe", href: "#about", style: "text-white bg-[#f90057]" },

    {
      name: "Experiences",
      href: "#experiences",
      style: "text-[#f90057] bg-[#e5e8ec]",
    },
  ];

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      w-w="full"
      w-h="100vh"
      w-flex="~ col"
      w-items="center"
      w-gap="5"
      w-pos="relative"
      className="landing"
      ref={landing}
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        w-pos="absolute inset-0"
        w-w="full"
        w-h="500px <md:6/10"
      >
        <path
          d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "#f90057" }}
        ></path>
      </svg>
      <div
        w-z="1"
        w-w="full"
        w-h="full"
        w-container="~"
        w-m="x-auto t-60 <md:t-75"
        w-p="x-20 b-20 <lg:x-10"
        w-flex="~ row"
        w-justify="around <md:center"
        w-items="end"
      >
        <div w-h="full" w-flex="~ col" w-justify="center">
          <div
            w-w="300px <md:200px"
            w-h="300px <md:200px"
            w-transition="~ duration-200"
          >
            <Image src={Avater} alt="my photo_1" />
          </div>
        </div>
        <div
          w-flex="~ col"
          w-justify="center"
          w-h="full"
          w-text="white 6xl <lg:4xl"
          w-transition="duration-200"
        >
          <div>
            <ul className="animate_text">
              <li className="line" w-text="mred">
                호기심 많은
              </li>
              <li className="line" w-text="mred">
                도전하는
              </li>
              <li className="line" w-text="mred">
                성장이 고픈
              </li>
              <li className="line" w-text="mred">
                엉덩이가 무거운
              </li>
            </ul>
            <p
              w-text="black 6xl <lg:4xl "
              w-transition="duration-200"
              w-font="leading-20"
            >
              프론트엔드 <br w-display="md:hidden" />
              개발자
            </p>
          </div>
          <ul
            w-h="auto"
            w-flex="~ row"
            w-items="md:center"
            w-justify="<md:between"
            w-gap="10"
            w-m="t-10"
            w-transition="duration-200 delay-75"
          >
            {nav.map((data) => (
              <>
                <li
                  className={data.style}
                  w-border="rounded-lg"
                  w-shadow="lg"
                  w-p="x-3 y-2"
                  w-w="auto"
                  w-pos="relative"
                  w-transition="duration-75"
                  w-cursor="pointer"
                  w-text=" lg"
                >
                  <a href={data.href} onClick={handleLinkClick(data.href)}>
                    {data.name}
                  </a>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
