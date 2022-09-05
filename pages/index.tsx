import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ImageSlider from "../src/components/ImageSlider";
import AboutMe from "../src/units/aboutMe";

const Home: NextPage = () => {
  return (
    <>
      <div w-text="blue-500">안녕 포토폴리오용</div>
      <AboutMe />
      <ImageSlider />
    </>
  );
};

export default Home;
