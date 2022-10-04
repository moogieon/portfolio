import { NextPage } from "next";
import { StaticImageData } from "next/image";
import { useEffect, Dispatch, SetStateAction } from "react";
import { BsXLg, BsGithub } from "react-icons/bs";
interface Props {
  data: {
    name?: string;
    src?: StaticImageData;
    info?: string;
    detail?: string;
    do?: string;
    know?: string;
    git?: string;
    live?: string;
    skill?: string[] | number[];
  };

  setIsOPen: Dispatch<SetStateAction<boolean>>;
}
const Modal: NextPage<Props> = ({ data, setIsOPen }) => {
  const closeModal = () => {
    setIsOPen(false);
    document.body.style.overflow = "unset";
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div
      w-bg="black opacity-60"
      w-z="999"
      w-pos="fixed inset-0"
      w-w="full"
      w-h="full"
      w-overflow="y-scroll"
      w-p="20"
    >
      <div>
        <div
          w-w="full"
          w-h="full min-500px"
          w-pos="relative"
          w-bg="mblue"
          w-p="x-10 y-5"
          w-flex="~ col"
          w-justify="between"
        >
          <BsXLg
            w-pos="absolute right-10 top-5"
            w-text="2xl"
            w-cursor="pointer"
            onClick={closeModal}
          />
          <div w-text="2xl">{data?.name}</div>
          <div>
            <span w-text="xl">💁 정보</span>
            <div>{data?.info}</div>
          </div>
          <div>
            <span w-text="xl">활동 내용</span>
          </div>
          <div>
            <span w-text="xl">💡 깨달은 점</span>
          </div>
          <ul w-flex="~ wrap" w-gap="3">
            {data?.skill?.map((res, idx) => (
              <li
                key={res}
                className={`${idx % 2 ? "bg-mpink" : "text-mpink bg-white"}`}
                w-text="center"
                w-w="max-content"
                w-p="x-1"
                w-border="rounded-xl"
              >
                {res}
              </li>
            ))}
          </ul>
          <div w-flex="~ row" w-items="center" w-text="xl">
            {data.git && (
              <a href={data?.git}>
                <BsGithub />
              </a>
            )}
            {data.live && <a href={data?.live}>Live</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
