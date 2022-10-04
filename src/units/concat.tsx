import type { NextPage } from "next";

const Concat: NextPage = () => {
  return (
    <section w-h="min-100vh full" id="concat" w-pos="relative">
      <div
        w-p="x-10 t-20 <lg:x-10"
        w-container="~"
        w-m="x-auto"
        w-flex="~ col"
        w-justify="center"
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          w-pos="absolute inset-0"
          w-w="full"
          w-h="260px <md:230px"
        >
          <path
            d="M0.00,92.27 C116.83,202.92 300.30,20.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#335288" }}
          ></path>
        </svg>
        <p w-font="game " w-text="left white 3xl <md:center" w-z="1">
          <span w-text="mpink">C</span>oncat<span w-text="mpink">M</span>e
        </p>
        <div
          w-container="~"
          w-m="auto"
          w-flex="~"
          w-justify="center"
          w-p="t-40 <md:t-25"
        ></div>
      </div>
    </section>
  );
};

export default Concat;
