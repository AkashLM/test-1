import React from "react";
import Image from "next/image";
import arrival1 from "../assets/arrival1.svg";
import arrival2 from "../assets/arrival2.svg";
import arrival3 from "../assets/arrival3.svg";
import arrival4 from "../assets/arrival4.svg";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";

const ArrivalMobileCards = () => {
  const cards = [
    {
      img: arrival1,
      btnText: "Shop now",
    },
    {
      img: arrival2,
      btnText: "Shop now",
    },
    {
      img: arrival3,
      btnText: "Shop now",
    },
    {
      img: arrival4,
      btnText: "Shop now",
    },
    {
      img: arrival1,
      btnText: "Shop now",
    },
    {
      img: arrival2,
      btnText: "Shop now",
    },
    {
      img: arrival3,
      btnText: "Shop now",
    },
    {
      img: arrival4,
      btnText: "Shop now",
    },
  ];

  return (
    <div className='flex justify-start text-white align-middle'>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          350: {
            slidesPerView: 1.4,
          },
          540: {
            slidesPerView: 2.8,
            spaceBetween: 200,
          },
        }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className='mx-2'>
            <div className='w-[250px] object-cover object-top'>
              <div className='text-left m-4 p-3 bg-[#212121] rounded-2xl '>
                <Image
                  src={card.img}
                  alt='nft'
                  className='hover:scale-105 mb-[-10px] ease-in-out duration-1000 flex rounded-xl justify-center align-middle h-[30vh] object-cover'
                />
                <div className='items-center justify-center flex'>
                  <button className='min-w-[100px] p-2 absolute bottom-6 font-[Raleway] rounded-full font-bold bg-white text-black'>
                    {card.btnText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArrivalMobileCards;
