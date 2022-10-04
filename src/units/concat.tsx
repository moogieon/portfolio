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
        <div w-font="game " w-text="left white 3xl <md:center" w-z="1">
          <span w-text="mpink">C</span>ontact
          <span w-text="mpink"> M</span>e
        </div>
        <div
          w-container="~"
          w-m="auto"
          w-h="full"
          w-flex="~ col"
          w-justify="between"
          w-gap="5"
          w-p="t-40 <md:t-25"
        >
          <div>
            <input
              placeholder="이름"
              w-text="black"
              w-p="x-2 y-1"
              w-w="full"
              w-border="rounded-xl"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              w-text="black"
              w-p="x-2 y-1"
              w-w="full"
              w-border="rounded-xl"
            />
          </div>
          <div>
            <textarea
              placeholder="내용"
              w-text="black"
              w-p="x-2 y-1"
              w-w="full"
              w-h="min-200px"
              w-border="rounded-xl"
            />
          </div>
          <button w-m="x-auto" w-p="x-6 y-1" w-border="rounded-xl" w-bg="mblue">
            전송
          </button>
        </div>
      </div>
    </section>
  );
};

export default Concat;
