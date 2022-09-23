import type { NextPage } from "next";
import Image from "next/image";
import Avater from "../../styles/Avatar.png";
const LandingPage: NextPage = () => {
  return (
    <div
      w-w="!full"
      w-h="100vh"
      w-flex="~ col"
      w-items="center"
      w-gap="5"
      w-pos="relative"
      className="landing"
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
          style={{ stroke: "none", fill: "#72738f" }}
        ></path>
      </svg>
      <div
        w-z="1"
        w-w="full"
        w-container="~"
        w-m="x-auto t-60 <md:t-75"
        w-p="x-20 <lg:x-10"
        w-flex="~ row"
        w-justify="start <md:center"
        w-items="center"
      >
        <div
          w-w="300px <md:200px"
          w-h="300px <md:200px"
          w-flex="~"
          w-m="b-10"
          w-transition="~ duration-200"
        >
          <Image src={Avater} alt="my photo_1" />
        </div>
        <div className="speech-bubble">
          <div w-text="white  6xl <lg:4xl" w-transition="duration-200">
            <ul className="animate_text">
              <li className="line" w-text="[#686eff]">
                호기심 많은
              </li>
              <li className="line" w-text="[#686eff]">
                도전하는
              </li>
              <li className="line" w-text="[#686eff]">
                성장이 고픈
              </li>
              <li className="line" w-text="[#686eff]">
                엉덩이가 무거운
              </li>
            </ul>
          </div>
          <p
            w-text="[#686eff] 6xl <lg:4xl "
            w-transition="duration-200"
            w-font="leading-20"
          >
            프론트엔드 <br w-display="md:hidden" />
            개발자
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
