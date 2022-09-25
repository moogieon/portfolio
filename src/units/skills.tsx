import type { NextPage } from "next";

const Skills: NextPage = () => {
  return (
    <section w-h="100vh" id="skills">
      <div
        w-p="x-20 t-15 <lg:x-10"
        w-container="~"
        w-m="x-auto"
        w-flex="~ col"
        w-justify="center"
      >
        <p w-font="game " w-text="right [#686eff]  2xl <md:center">
          <span w-text="[#f8ae16]">S</span>kills
        </p>
        <div w-container="~" w-m="x-auto "></div>
      </div>
    </section>
  );
};

export default Skills;
