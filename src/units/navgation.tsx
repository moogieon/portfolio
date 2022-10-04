import { NextPage } from "next";
import { MutableRefObject } from "react";
interface Props {
  headerMenu: MutableRefObject<any>;
}
const Navgation: NextPage<Props> = ({ headerMenu }) => {
  const nav = [
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
    { name: "Concat", href: "#concat" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      w-opacity="0"
      w-flex="~ row"
      w-w="full"
      w-p="x-10 y-3"
      w-items="<md:center"
      w-justify="<md:between"
      w-gap="5"
      w-pos="fixed"
      w-z="10"
      w-backdrop="~ blur-md brightness-120"
      w-transition="~ duration-200"
      ref={headerMenu}
    >
      <h1
        w-cursor="pointer"
        w-font="game bold"
        w-text=" [#213455] left 2xl hover:[#152136]"
        w-transition="~ duration-150"
        onClick={scrollToTop}
      >
        Mook
        <p w-text="xs mpink">Frontend Developer</p>
      </h1>
      <ul
        w-h="auto"
        w-flex="~ row"
        w-items="md:center"
        w-justify="<md:between"
        w-gap="10"
        w-transition="duration-200 delay-75"
      >
        {nav.map((data) => (
          <li
            key={data.name}
            w-w="auto"
            w-pos="relative"
            w-transition="duration-75"
            w-cursor="pointer"
            w-text="[#152136]"
            className="hover-underline-animation"
          >
            <a href={data.href} onClick={handleLinkClick(data.href)}>
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navgation;
