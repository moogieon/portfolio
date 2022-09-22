import type { NextPage } from "next";

const LandingPage: NextPage = () => {
  return (
    <div
      w-container="~"
      w-m="x-auto t-20"
      w-h="500px"
      w-flex="~ col"
      w-items="center"
      w-gap="5"
      w-font="game"
    >
      <p w-text="white  6xl <lg:4xl" w-transition="duration-200">
        <span w-text="[#f8ae16]">도전 </span>
        하는
      </p>
      <p w-text="white 6xl <lg:4xl" w-transition="duration-200">
        주니어 프론트엔드 개발자
      </p>
    </div>
  );
};

export default LandingPage;
