import type { NextPage } from "next";
import { useRef, useState } from "react";

import Navgation from "../src/units/navgation";
import LandingPage from "../src/units/landingPage";
import AboutMe from "../src/units/aboutMe";
import Skills from "../src/units/skills";
import Experiences from "../src/units/experiences";

const Home: NextPage = () => {
  const [isopen, setIsOpen] = useState<boolean>(false);
  const headerMenu = useRef<any>(null);
  const landing = useRef<any>(null);
  return (
    <>
      <div w-h="full" w-w="full" className="background">
        <div w-pos="relative">
          <Navgation headerMenu={headerMenu} />
          <LandingPage landing={landing} headerMenu={headerMenu} />
          <AboutMe />
          <Skills />
          <Experiences />
        </div>
      </div>
    </>
  );
};

export default Home;
