import type { NextPage } from "next";
import ImageSlider from "../src/components/ImageSlider";
import AboutMe from "../src/units/aboutMe";
import Experiences from "../src/units/experiences";
import Used from "../src/units/used";

const Home: NextPage = () => {
  return (
    <>
      <div w-h="full" w-gradient="from-[#245e9d] to-b">
        <div w-container="~" w-m="x-auto" w-p="x-10px y-70px">
          <h1 w-font="game " w-text="[#f8ae16] center 4xl">안녕 포토폴리오</h1>
          <AboutMe />
          <Experiences />
          <ImageSlider />
          <Used />
        </div>
      </div>
    </>
  );
};

export default Home;
