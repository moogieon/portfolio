import { NextPage } from "next";
import { StaticImageData } from "next/image";
import { useEffect } from "react";
interface Props {
  data: { name: string; src: StaticImageData }[];
}
const Modal: NextPage<Props> = ({ data }) => {
  //   const openModal = () => {
  //     setModalOpen(true);
  //     document.body.style.overflow = "hidden";
  //   };
  //   const closeModal = () => {
  //     setModalOpen(false);
  //     document.body.style.overflow = "unset";
  //   };
  useEffect(() => {
    // modal이 떠 있을 땐 스크롤 막음
    // modal 닫히면 다시 스크롤 가능하도록 함
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
        <div w-w="full" w-h="full" w-bg="mblue">
          sss
        </div>
      </div>
    </div>
  );
};

export default Modal;
