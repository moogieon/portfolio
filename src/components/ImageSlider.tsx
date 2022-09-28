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

interface Props {
  data: { name: string; src: StaticImageData }[];
}
const ImageSlider: NextPage<Props> = ({ data }) => {
  const params = {
    direction: "horizontal",
    paginationClickable: true,
    autoplay: 1000,
    autoplayDisableOnInteraction: false,
    loop: true,
  };

  const onClickPage = () => {};
  return (
    <>
      {/* <Modal data={data} /> */}
      <div
        w-flex="~"
        w-items="center"
        w-h="full"
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
          // scrollbar={{ draggable: true }}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            768: {
              //slidesPerView: 2.2,
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: true,
            },
            1024: {
              //slidesPerView: 2.2,
              slidesPerView: 4,
              spaceBetween: 50,
              centeredSlides: true,
            },
          }}
        >
          {data.map((res, idx) => (
            <SwiperSlide
              w-border="rounded-xl 1px"
              w-p="x-2 y-2"
              w-m="b-10"
              w-h="400px max-400px"
              key={res.name}
            >
              <div w-h="400px max-400px">
                <div>{res.name}</div>
                <div w-h="200px max-200px">
                  <Image
                    src={res.src}
                    alt={res.name}
                    w-object="cover"
                    w-w="full"
                    w-h="full"
                  />
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
