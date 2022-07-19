import type { NextPage } from "next";
import Image from "next/image";
import Img from "../../public/vercel.svg";

const ImageSlider: NextPage = () => {
  const data = [
    { name: "중고나라", src: Img },
    { name: "헤이고", src: Img },
    { name: "깃 이슈 트래커", src: Img },
  ];

  return (
    <div w-flex="~" w-items="center">
      <span> left </span>
      <ul w-flex="~" w-gap="4">
        {data.map((res, idx) => (
          <li w-border="rounded-full 1px" w-p="x-2 y-2" key={res.name}>
            <Image src={res.src} alt={res.name} />
          </li>
        ))}
      </ul>
      <span> right </span>
    </div>
  );
};

export default ImageSlider;
