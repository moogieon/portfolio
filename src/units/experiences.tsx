import type { NextPage } from "next";
import ImageSlider from "../components/ImageSlider";

const Experiences: NextPage = () => {
  return (
    <div w-h="700px">
      <p w-font="game " w-text="[#f8ae16]  2xl">
        Experiences
      </p>
      <div>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Experiences;
