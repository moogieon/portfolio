import type { NextPage } from "next";
import { useRef, useState } from "react";

import Navgation from "../src/units/navgation";
import LandingPage from "../src/units/landingPage";
import AboutMe from "../src/units/aboutMe";
import Skills from "../src/units/skills";
import Experiences from "../src/units/experiences";
import Concat from "../src/units/concat";

const Home: NextPage = () => {
  const [isopen, setIsOpen] = useState<boolean>(false);
  const headerMenu = useRef<any>(null);
  const landing = useRef<any>(null);
  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div w-h="full" w-w="full" className="background">
        <div w-pos="relative">
          <Navgation headerMenu={headerMenu} />
          <LandingPage landing={landing} headerMenu={headerMenu} />
          <AboutMe />
          <Skills />
          <Experiences />
          <Concat />
          <a
            href="#concat"
            onClick={handleLinkClick("#concat")}
            style={{ borderRadius: "50%", border: "none" }}
            w-pos="fixed right-10 bottom-20"
            w-outline="~ 1 solid-mpink  hover:4"
            w-transition="all duration-100"
            w-cursor="pointer"
            w-bg="mpink"
            w-p="x-2 y-5"
            w-z="10"
            w-text="center"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
