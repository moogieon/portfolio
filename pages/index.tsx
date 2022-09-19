import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ImageSlider from "../src/components/ImageSlider";
import AboutMe from "../src/units/aboutMe";
import Experiences from "../src/units/experiences";
import Used from "../src/units/used";

const Home: NextPage = () => {
  return (
    <>
      <div w-h="full" w-gradient="from-[#245e9d] to-t">
        <div w-container="~" w-m="x-auto">
          <h1 w-text="blue-500">안녕 포토폴리오</h1>
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
