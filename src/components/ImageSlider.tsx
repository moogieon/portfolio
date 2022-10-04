import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import Modal from "./Modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

interface Props {
  data: {
    name: string;
    src: StaticImageData;
    info: string;
    skill: string[];
    detail: string;
    do: string[];
    know: string[];
    git?: string;
    live?: string;
  }[];
}
const ImageSlider: NextPage<Props> = ({ data }) => {
  const [isOpen, setIsOPen] = useState(false);
  const [info, setInfo] = useState({});
  const params = {
    direction: "horizontal",
    paginationClickable: true,
    autoplay: 1000,
    autoplayDisableOnInteraction: false,
    loop: true,
  };

  const onClickPage =
    (res: {
      name: string;
      src: StaticImageData;
      info: string;
      skill: string[];
    }) =>
    () => {
      setInfo(res);
      setIsOPen(true);
    };
  return (
    <>
      {isOpen && <Modal data={info} setIsOPen={setIsOPen} isOpen={isOpen} />}
      <div
        w-flex="~"
        w-items="center"
        w-h="full "
        w-p="y-2"
        w-overflow="x-hidden"
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={50}
          centeredSlides={true}
          navigation
          loop={true}
          loopedSlides={2}
          pagination={{ clickable: true }}
          // effect={"coverflow"}

          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            // slideShadows: true,
          }}
          breakpoints={{
            760: {
              //slidesPerView: 2.2,
              slidesPerView: 2.2,
              spaceBetween: 50,
              centeredSlides: true,
            },
            1024: {
              //slidesPerView: 2.2,
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: true,
            },
          }}
        >
          {data.map((res, idx) => (
            <SwiperSlide
              w-m="b-10"
              w-border="rounded-xl"
              key={res.name}
              onClick={onClickPage(res)}
            >
              <div
                w-h="200px <lg:180px"
                w-p="l-4 r-2 y-2"
                w-w="full"
                w-pos="relative"
                w-border="rounded-xl "
                w-flex="~ col"
                w-justify="end"
                w-cursor="pointer"
                // className="slider_section"
              >
                <Image
                  src={res.src}
                  alt={res.name}
                  w-pos="absolute inset-0"
                  w-border="rounded-xl "
                  w-z="-1"
                  layout="fill"
                />

                <div
                  className="slider_section"
                  w-p="l-4 r-2 b-2"
                  w-border="rounded-xl "
                  w-opacity="hover:100"
                  w-transition="all duration-200"
                >
                  <div
                    w-text="base center"
                    w-bg="mpink opacity-70"
                    w-border="rounded-xl"
                    w-flex="~"
                    w-p="x-4"
                    w-w="max-content"
                  >
                    <div w-text="center lg" w-h="max-content">
                      {res.name}
                    </div>
                  </div>
                  <div
                    w-h="3/10 max-100px"
                    w-text="14px space-pre-wrap"
                    w-font="leading-6"
                  >
                    {res.info}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSlider;
