import type { NextPage } from "next";
import Image from "next/image";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiSvelte,
  SiGraphql,
  SiApollographql,
  SiStyledcomponents,
  SiTailwindcss,
  SiWindicss,
} from "react-icons/si";
import Astro from "../../styles/astro.svg";
import Relay from "../../styles/relay.svg";
const Skills: NextPage = () => {
  return (
    <section w-h="min-100vh full" id="skills" w-pos="relative">
      <div
        w-p="x-10 t-20 <lg:x-10"
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
            style={{ stroke: "none", fill: "#335288" }}
          ></path>
        </svg>
        <p w-font="game " w-text="left white 3xl <md:center" w-z="1">
          <span w-text="mpink">S</span>kills
        </p>
        <div
          w-container="~"
          w-m="auto"
          w-flex="~"
          w-justify="center"
          w-p="t-40 <md:t-25"
        >
          <div w-grid="~ cols-4" w-gap="10" w-w="full">
            <div w-flex="~ col" w-items="center">
              <SiHtml5 w-svg="fill-mblue" w-w="full" w-h="100px <md:70px" />
              <p w-text="mblue">HTML5</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiCss3 w-svg="fill-mblue" w-w="full" w-h="100px <md:70px" />
              <p w-text="mblue">CSS</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiJavascript
                w-svg="fill-mblue"
                w-w="full"
                w-h="100px <md:70px"
              />
              <p w-text="mblue">JavaScript</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiTypescript
                w-svg="fill-mblue"
                w-w="full"
                w-h="100px <md:70px"
              />
              <p w-text="mblue">Typescript</p>
            </div>

            <div w-flex="~ col" w-items="center">
              <SiReact w-svg="fill-mblue" w-w="full" w-h="100px <md:70px" />
              <p w-text="mblue">React</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiNextdotjs w-svg="fill-mblue" w-w="full" w-h="100px <md:70px" />
              <p w-text="mblue">Next</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiGatsby w-svg="fill-mblue" w-w="full" w-h="100px <md:70px" />
              <p w-text="mblue">Gatsby</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <div w-w="max-100px <md:70px" w-h="max-100px <md:70px">
                <Image src={Astro} alt="astroImage" />
              </div>
              <p w-text="mblue">Astro</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiGraphql w-svg="fill-mblue" w-w="full" w-h="100px <md:70px" />
              <p w-text="mblue">Graphql</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiApollographql
                w-svg="fill-mblue"
                w-w="full"
                w-h="100px <md:70px"
              />
              <p w-text="mblue">Apollo</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <div w-w="max-100px <md:70px" w-h="max-100px <md:70px">
                <Image src={Relay} alt="astroImage" />
              </div>
              <p w-text="mblue">Relay</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiStyledcomponents
                w-svg="fill-mblue"
                w-w="full"
                w-h="100px <md:70px"
              />
              <p w-text="mblue">Emotion</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiTailwindcss
                w-svg="fill-mblue"
                w-w="full"
                w-h="100px <md:70px"
              />
              <p w-text="mblue">Tailwindcss</p>
            </div>
            <div w-flex="~ col" w-items="center">
              <SiWindicss w-svg="fill-mblue" w-w="full" w-h="100px <md:70px" />
              <p w-text="mblue">Windicss</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
