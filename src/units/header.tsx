import { NextPage } from "next";
import { MutableRefObject } from "react";
interface Props {
  headerMenu: MutableRefObject<any>;
}
const Header: NextPage<Props> = ({ headerMenu }) => {
  const nav = [
    { name: "AboutMe", href: "#about" },
    { name: "Skill", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
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
      w-items="<md:center"
      w-justify="<md:center"
      w-gap="5"
      w-pos="fixed left-10 top-5"
      w-z="10"
      w-transition="~ duration-200"
      ref={headerMenu}
    >
      <h1
        w-cursor="pointer"
        w-font="game "
        w-text="mred left 2xl hover:[#1c1d49]"
        w-transition="~ duration-150"
        onClick={scrollToTop}
      >
        Mook
        <p w-text="xs [#f8ae16] ">Frontend Developer</p>
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
          <>
            <li
              w-w="auto"
              w-pos="relative"
              w-transition="duration-75"
              w-cursor="pointer"
              w-text="white"
              className="hover-underline-animation"
            >
              <a href={data.href} onClick={handleLinkClick(data.href)}>
                {data.name}
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};
export default Header;
