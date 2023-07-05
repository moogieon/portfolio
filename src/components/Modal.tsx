import { NextPage } from "next";
import { StaticImageData } from "next/image";
import { useEffect, Dispatch, SetStateAction, ImgHTMLAttributes } from "react";
import { BsXLg, BsGithub } from "react-icons/bs";
import { Image, Card } from "antd";
interface Props {
  data: {
    name?: string;
    src?: StaticImageData;
    info?: string;
    detail?: string;
    do?: string[];
    know?: string[];
    git?: string;
    live?: string;
    skill?: string[] | number[];
    images?: {
      href: string;
      url: string;
    }[];
  };
  isOpen: boolean;
  setIsOPen: Dispatch<SetStateAction<boolean>>;
}
const Modal: NextPage<Props> = ({ data, setIsOPen, isOpen }) => {
  const closeModal = () => {
    setIsOPen(false);
    const scrollY = document.body.style.top;
    document.body.style.cssText = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
  }, []);
  console.log(data);
  return (
    <div
      w-bg="black opacity-60"
      w-z="999"
      w-pos="fixed inset-0"
      w-w="full"
      w-h="full"
      w-overflow="y-scroll"
      w-p="20 <md:10"
      w-filter="~ drop-shadow"
      w-animate="fade-in duration-200"
      className={`${isOpen ? "opacity-100" : "opacity-0"}`}
    >
      <div>
        <div
          w-w="full"
          w-h="full min-500px <md:min-700px"
          w-pos="relative"
          w-bg="mblue"
          w-p="x-10 y-5 <md:x-5"
          w-flex="~ col"
          w-justify="between"
          w-gap="5"
        >
          <BsXLg
            w-pos="absolute right-10 top-5 <md:right-5"
            w-text="2xl"
            w-cursor="pointer"
            onClick={closeModal}
          />
          <div w-text="2xl">{data?.name}</div>
          <div>
            <span w-text="xl">💁 정보</span>
            <div>{data.detail}</div>
          </div>
          <div>
            <span w-text="xl" w-font="">
              🏃‍♂️ 활동 내용
            </span>
            <ul w-list="circle " w-p="l-5">
              {data?.do?.map((ido) => (
                <li key={ido}>{ido}</li>
              ))}
            </ul>
          </div>
          <div>
            <span w-text="xl">💡 깨달은 점</span>
            <ul w-list="circle" w-p="l-5">
              {data?.know?.map((iknow) => (
                <li key={iknow}>{iknow}</li>
              ))}
            </ul>
          </div>
          <ul w-flex="~ wrap" w-gap="3">
            {data?.skill?.map((res, idx) => (
              <li
                key={res}
                className={`${idx % 2 ? "bg-mpink" : "text-mpink bg-white"}`}
                w-text="center"
                w-w="max-content"
                w-p="1"
                w-border="rounded-2xl"
              >
                {res}
              </li>
            ))}
          </ul>
          <ul w-flex="~ row " w-gap="2">
            {data?.images?.map((img, idx) => (
              <li
                key={idx}
                w-w="200px <md:150px"
                w-h="150px <md:100px"
                w-pos="relative"
              >
                <div w-h="150px <md:100px">
                  <Image
                    src={img.url}
                    alt="example img"
                    w-h="max-150px <md:max-100px"
                    w-pos="absolute inset-0"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div
            w-flex="~ row"
            w-items="center"
            w-justify="center"
            w-gap="5"
            w-text="2xl"
          >
            {data.git && (
              <a href={data?.git}>
                <BsGithub w-svg="hover:stroke-1 hover:stroke-mpink" />
              </a>
            )}
            {data.live && (
              <a href={data?.live} w-text="hover:mpink" w-border="rounded-lg">
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
