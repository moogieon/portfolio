import type { NextPage } from "next";

const LandingPage: NextPage = () => {
  return (
    <div
      w-container="~"
      w-m="x-auto t-20"
      w-h="700px"
      w-flex="~ col"
      w-items="center"
      w-gap="5"
    >
      <p w-text="[#f8ae16]  6xl" w-font="game">
        <span w-text="[#c73f16]">도전 </span>
        하는
      </p>
      <p w-text="[#f8ae16]  6xl">주니어 프론트엔드 개발자</p>
    </div>
  );
};

export default LandingPage;
