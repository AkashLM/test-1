import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import Image from "next/image";

const SwiperWithoutArrows = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      slidesPerView='4'
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      {data.map((d, index) => (
        <SwiperSlide key={index}>
          <Image
            className='w-full md:w-3/4 lg:w-max mx-auto'
            src={d}
            alt='image'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};