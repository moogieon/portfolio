import type { NextPage } from "next";

import AboutMe from "../src/units/aboutMe";
import Experiences from "../src/units/experiences";
import LandingPage from "../src/units/landingPage";
import Used from "../src/units/used";

const Home: NextPage = () => {
  return (
    <>
      <div w-h="full" w-gradient="from-[#245e9d]  to-b">
        <div w-container="~" w-m="x-auto" w-p="x-10px y-30px">
          <div
            w-flex="<md:~ <md:row"
            w-items="<md:center"
            w-gap="5"
            w-pos="fixed"
          >
            <h1 w-font="game " w-text="[#f8ae16] left 2xl">
              Mook
              <p w-text="xs">Frontend Developer</p>
            </h1>
            <ul
              w-m="md:t-20"
              w-flex="~ col <md:row"
              w-justify="<md:between"
              w-gap="10"
            >
              <li
                w-w="max-content"
                w-transition="duration-75"
                w-text="hover:[#f8ae16]"
                w-cursor="pointer"
              >
                AboutMe
              </li>
              <li>Experiences</li>
              <li>Skills</li>
            </ul>
          </div>

          <LandingPage />
          <AboutMe />
          <Experiences />

          <Used />
        </div>
      </div>
    </>
  );
};

export default Home;
