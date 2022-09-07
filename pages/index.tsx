import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ImageSlider from "../src/components/ImageSlider";
import AboutMe from "../src/units/aboutMe";
import Used from "../src/units/used";

const Home: NextPage = () => {
  return (
    <>
      <div w-text="blue-500">안녕 포토폴리오</div>
      <AboutMe />
      <ImageSlider />
      <Used/>
    </>
  );
};

export default Home;
