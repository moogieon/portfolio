import type { NextPage } from "next";
import { useRef, useState } from "react";

import AboutMe from "../src/units/aboutMe";
import Experiences from "../src/units/experiences";
import Header from "../src/units/header";
import LandingPage from "../src/units/landingPage";
import Skills from "../src/units/skills";

const Home: NextPage = () => {
  const [isopen, setIsOpen] = useState<boolean>(false);
  const headerMenu = useRef<any>(null);
  const landing = useRef<any>(null);
  return (
    <>
      <div w-h="full" className="background">
        <div w-pos="relative">
          <Header headerMenu={headerMenu} />
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
