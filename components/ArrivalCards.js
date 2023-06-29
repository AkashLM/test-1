import React from "react";
import Image from "next/image";
import arrival1 from "../assets/arrival1.svg";
import arrival2 from "../assets/arrival2.svg";
import arrival3 from "../assets/arrival3.svg";
import arrival4 from "../assets/arrival4.svg";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

const ArrivalCards = () => {
  const cards = [
    {
      img: arrival1,
      title: "Mini Love Bag",
      description: "Product ID : YUSHD898",
      btnText: "Shop now",
    },
    {
      img: arrival2,
      title: "Mini Love Bag",
      description: "Product ID : YUSHD898",
      btnText: "Shop now",
    },
    {
      img: arrival3,
      title: "Mini Love Bag",
      description: "Product ID : YUSHD898",
      btnText: "Shop now",
    },
    {
      img: arrival4,
      title: "Mini Love Bag",
      description: "Product ID : YUSHD898",
      btnText: "Shop now",
    },
    {
      img: arrival1,
      title: "Mini Love Bag",
      description: "Product ID : YUSHD898",
      btnText: "Shop now",
    },
    {
      img: arrival2,
      title: "Mini Love Bag",
      description: "Product ID : YUSHD898",
      btnText: "Shop now",
    },
    {
      img: arrival3,
      title: "Mini Love Bag",
      description: "Product ID : YUSHD898",
      btnText: "Shop now",
    },
    {
      img: arrival4,
      title: "Mini Love Bag",
      description: "Product ID : YUSHD898",
      btnText: "Shop now",
    },
  ];

  return (
    <div className='flex justify-start text-white align-middle'>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          650: {
            slidesPerView: 2.8,
            spaceBetween: 200,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 140,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className='mx-2'>
            <div className='w-[300px] md:w-[375px]'>
              <div className='text-left m-4 p-3 bg-[#212121] rounded-2xl '>
                <div className='relative top-[-20px]'>
                  <Image
                    src={card.img}
                    alt='nft'
                    className='hover:scale-105 mt-6 ease-in-out duration-1000 flex rounded-xl justify-center align-middle h-[30vh] object-cover'
                  />
                </div>
                <div className='text-xl mb-3'>{card.title}</div>
                <div className='text-[#9D9D9D] text-sm mb-3'>
                  {card.description}
                </div>
                <button className='p-2 w-full font-[Raleway] rounded-full font-bold bg-white text-black'>
                  {card.btnText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArrivalCards;
