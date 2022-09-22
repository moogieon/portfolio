import type { NextPage } from "next";
import { useState } from "react";

import AboutMe from "../src/units/aboutMe";
import Experiences from "../src/units/experiences";
import LandingPage from "../src/units/landingPage";
import Skills from "../src/units/skills";

const Home: NextPage = () => {
  const [isopen, setIsOpen] = useState<boolean>(false);
  const nav = [
    { name: "AboutMe", href: "#about" },
    { name: "Experiences", href: "#experiences" },
    { name: "Skills", href: "#skills" },
  ];
  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div w-h="full" className="background">
        <div w-container="~" w-m="x-auto" w-p="x-10px y-30px" w-pos="relative">
          <div
            w-flex="<md:~ <md:row"
            w-items="<md:center"
            w-gap="5"
            w-pos="fixed"
          >
            <h1
              w-cursor="pointer"
              w-font="game "
              w-text="[#f8ae16] left 2xl hover:[#c73f16]"
              w-transition="duration-150"
              onClick={scrollToTop}
            >
              Mook
              <p w-text="xs [#f416f8]">Frontend Developer</p>
            </h1>
            <ul
              w-m="md:t-20"
              w-flex="~ col <md:row"
              w-justify="<md:between"
              w-gap="10"
              w-transition="duration-200 delay-75"
            >
              {nav.map((data) => (
                <>
                  <li
                    w-w="auto"
                    w-pos="relative"
                    w-transition="duration-75"
                    w-cursor="pointer"
                    w-text="white"
                    className="hover-underline-animation"
                  >
                    <a href={data.href} onClick={handleLinkClick(data.href)}>
                      {data.name}
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <LandingPage />
          <AboutMe />
          <Experiences />
          <Skills />
        </div>
      </div>
    </>
  );
};

export default Home;
