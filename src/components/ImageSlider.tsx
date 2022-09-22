import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
interface Props {
  data: { name: string; src: string }[];
}
const ImageSlider: NextPage<Props> = ({ data }) => {
  return (
    <div w-flex="~" w-items="center">
      <Swiper
        w-gap="4"
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
      >
        {data.map((res, idx) => (
          <SwiperSlide w-border="rounded-1/2 1px" w-p="x-2 y-2" w-h="min-250px" key={res.name}>
            <Image src={res.src} alt={res.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
