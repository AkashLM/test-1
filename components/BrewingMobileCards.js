import Image from "next/image";
import React from "react";
import dash1 from "../assets/dash1.svg";
import dash2 from "../assets/dash2.svg";
import dash3 from "../assets/dash3.svg";
import heartIcon from "../assets/heartIcon.svg";
import img4 from "../assets/dash2.svg";
import img5 from "../assets/dash2.svg";
import "swiper/css";

const BrewingMobileCards = () => {
  const cards = [
    {
      overlayBtnText: "People",
      img: dash1,
      title: "Pinko take care",
      description:
        "Being a family to us means protecting and supporting each other, taking care of the people around us, accepting the others.",
      lastComp: (
        <button className='p-2 w-full font-[Raleway] rounded-full font-bold bg-white text-black'>
          Know More
        </button>
      ),
    },
    {
      overlayBtnText: "People",
      img: dash2,
      title: "#Pinkotakecarechronicles: 6 pinkoctober",
      description:
        "October is Breast Cancer Awareness Month, and #PINKOtakecare is in the front line!",
      lastComp: (
        <div className='flex justify-between'>
          <div className='flex items-center cursor-pointer'>
            <svg
              className='fill-transparent mr-2 hover:fill-[#BF286F]'
              width='23'
              height='18'
              viewBox='0 0 23 18'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.16548 1.38916L6.16613 1.38916C7.01015 1.38862 7.8385 1.57371 8.5801 1.92487C9.32149 2.27594 9.94977 2.7803 10.4176 3.38793C10.6068 3.63362 10.8992 3.77765 11.2093 3.77785C11.5194 3.77805 11.812 3.63439 12.0015 3.38895C12.9221 2.19655 14.4702 1.38916 16.2544 1.38916C19.1961 1.38916 21.4199 3.54331 21.4199 6.01081C21.4199 8.40161 19.8485 10.8357 17.6089 12.898C15.5062 14.8341 12.9955 16.2727 11.21 16.8813C9.42447 16.2727 6.9137 14.8341 4.81105 12.898C2.57139 10.8357 1 8.40161 1 6.01081C1 3.54331 3.22383 1.38916 6.16548 1.38916Z'
                stroke='#BF286F'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p>Like</p>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg
              width='22'
              height='18'
              className='fill-transparent mr-2 hover:fill-[#BF286F]'
              viewBox='0 0 22 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.9429 8.67318L20.9429 8.67651C20.9465 9.75702 20.6248 10.838 19.9817 11.8343L19.9791 11.8383C19.2131 13.0376 18.0133 14.0788 16.4846 14.8186C14.9562 15.5581 13.1794 15.9566 11.3554 15.9572L11.3536 15.9572C9.83081 15.9603 8.33498 15.6815 6.99015 15.15C6.79274 15.072 6.57562 15.0588 6.37022 15.1124L1.24107 16.4502L2.80949 12.7685C2.93959 12.4632 2.90967 12.1131 2.72965 11.8343C2.08655 10.838 1.76489 9.75702 1.7685 8.67651L1.7685 8.67368C1.76914 7.37979 2.22879 6.08692 3.13579 4.93933C4.04576 3.788 5.37134 2.82937 6.98679 2.19764L6.9868 2.19764L6.99015 2.19632C8.33498 1.66482 9.83081 1.38608 11.3536 1.38919H11.3557H11.9565C14.3609 1.49705 16.5981 2.29299 18.2491 3.58482C19.8899 4.86872 20.8129 6.52772 20.9429 8.22259L20.9429 8.67318Z'
                stroke='#BF286F'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p>43 Comments</p>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg
              width='22'
              height='18'
              className='fill-transparent mr-2 hover:fill-[#BF286F]'
              viewBox='0 0 22 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.0871 1.53999C10.173 0.73331 11.1121 0.0686883 12.059 0.55371C14.0276 1.58768 15.8853 2.76573 17.6819 4.02496C19.8993 5.5957 21.6789 7.07613 22.9393 8.25824C23.4857 8.77269 23.4348 9.58546 22.9121 10.0766C21.664 11.2344 20.3439 12.3279 18.958 13.352C16.7655 14.9623 14.4948 16.5229 12.0228 17.774C11.1845 18.1981 10.276 17.7131 10.1142 16.9612L10.095 16.8466L9.83816 13.2201C7.78361 13.2586 5.79469 13.8918 4.204 15.0698L3.90419 15.2951L3.75938 15.4006L3.47993 15.5955C3.43468 15.6259 3.38942 15.6563 3.34417 15.6847L3.08396 15.8471C3.00314 15.8948 2.9209 15.9404 2.83732 15.9841L2.60426 16.0967C1.51137 16.5807 0.907227 16.1525 0.907227 14.2327C0.907227 9.76404 4.57848 5.78747 9.54174 5.18475L9.83476 5.15329L10.0871 1.541V1.53999ZM12.2468 3.03564L12.0296 6.55864C12.0223 6.67907 11.9673 6.79322 11.8747 6.88061C11.782 6.96801 11.6576 7.02294 11.5239 7.03554L9.9841 7.17963C6.51649 7.551 3.76503 9.9822 3.25479 13.1602C4.95074 12.0387 6.96354 11.3665 9.06431 11.2201L9.51346 11.1968L11.4413 11.1603C11.5879 11.1574 11.7301 11.2058 11.8377 11.2951C11.9454 11.3845 12.0101 11.5078 12.0183 11.6392L12.2412 15.288C14.0547 14.252 15.7834 13.0597 17.5178 11.7873C18.6379 10.9527 19.7164 10.0742 20.7501 9.15421L20.4582 8.89445L19.8292 8.35362C18.6914 7.39769 17.5084 6.48599 16.2835 5.62107C14.9843 4.70241 13.6373 3.83963 12.2468 3.03564V3.03564Z'
                fill='#BF286F'
              />
            </svg>
            <p>Share</p>
          </div>
        </div>
      ),
    },
    {
      overlayBtnText: "Subscribe",
      img: dash3,
      title: "Keep in touch, 10% off!",
      description:
        "The new arrivals are also waiting for you in Store and online.Come take a look at them with 10% off of your first purchase!",
      lastComp: (
        <button className='p-2 w-full font-[Raleway] rounded-full font-bold bg-white text-black'>
          Subscribe
        </button>
      ),
    },
    {
      overlayBtnText: "People",
      img: dash1,
      title: "Pinko take care",
      description:
        "Being a family to us means protecting and supporting each other, taking care of the people around us, accepting the others.",
      lastComp: (
        <button className='p-2 w-full font-[Raleway] rounded-full font-bold bg-white text-black'>
          Know More
        </button>
      ),
    },
    {
      overlayBtnText: "People",
      img: dash2,
      title: "#Pinkotakecarechronicles: 6 pinkoctober",
      description:
        "October is Breast Cancer Awareness Month, and #PINKOtakecare is in the front line!",
      lastComp: (
        <div className='flex justify-between'>
          <div className='flex items-center cursor-pointer'>
            <svg
              className='fill-transparent mr-2 hover:fill-[#BF286F]'
              width='23'
              height='18'
              viewBox='0 0 23 18'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.16548 1.38916L6.16613 1.38916C7.01015 1.38862 7.8385 1.57371 8.5801 1.92487C9.32149 2.27594 9.94977 2.7803 10.4176 3.38793C10.6068 3.63362 10.8992 3.77765 11.2093 3.77785C11.5194 3.77805 11.812 3.63439 12.0015 3.38895C12.9221 2.19655 14.4702 1.38916 16.2544 1.38916C19.1961 1.38916 21.4199 3.54331 21.4199 6.01081C21.4199 8.40161 19.8485 10.8357 17.6089 12.898C15.5062 14.8341 12.9955 16.2727 11.21 16.8813C9.42447 16.2727 6.9137 14.8341 4.81105 12.898C2.57139 10.8357 1 8.40161 1 6.01081C1 3.54331 3.22383 1.38916 6.16548 1.38916Z'
                stroke='#BF286F'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p>Like</p>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg
              width='22'
              height='18'
              className='fill-transparent mr-2 hover:fill-[#BF286F]'
              viewBox='0 0 22 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.9429 8.67318L20.9429 8.67651C20.9465 9.75702 20.6248 10.838 19.9817 11.8343L19.9791 11.8383C19.2131 13.0376 18.0133 14.0788 16.4846 14.8186C14.9562 15.5581 13.1794 15.9566 11.3554 15.9572L11.3536 15.9572C9.83081 15.9603 8.33498 15.6815 6.99015 15.15C6.79274 15.072 6.57562 15.0588 6.37022 15.1124L1.24107 16.4502L2.80949 12.7685C2.93959 12.4632 2.90967 12.1131 2.72965 11.8343C2.08655 10.838 1.76489 9.75702 1.7685 8.67651L1.7685 8.67368C1.76914 7.37979 2.22879 6.08692 3.13579 4.93933C4.04576 3.788 5.37134 2.82937 6.98679 2.19764L6.9868 2.19764L6.99015 2.19632C8.33498 1.66482 9.83081 1.38608 11.3536 1.38919H11.3557H11.9565C14.3609 1.49705 16.5981 2.29299 18.2491 3.58482C19.8899 4.86872 20.8129 6.52772 20.9429 8.22259L20.9429 8.67318Z'
                stroke='#BF286F'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p>43 Comments</p>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg
              width='22'
              height='18'
              className='fill-transparent mr-2 hover:fill-[#BF286F]'
              viewBox='0 0 22 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.0871 1.53999C10.173 0.73331 11.1121 0.0686883 12.059 0.55371C14.0276 1.58768 15.8853 2.76573 17.6819 4.02496C19.8993 5.5957 21.6789 7.07613 22.9393 8.25824C23.4857 8.77269 23.4348 9.58546 22.9121 10.0766C21.664 11.2344 20.3439 12.3279 18.958 13.352C16.7655 14.9623 14.4948 16.5229 12.0228 17.774C11.1845 18.1981 10.276 17.7131 10.1142 16.9612L10.095 16.8466L9.83816 13.2201C7.78361 13.2586 5.79469 13.8918 4.204 15.0698L3.90419 15.2951L3.75938 15.4006L3.47993 15.5955C3.43468 15.6259 3.38942 15.6563 3.34417 15.6847L3.08396 15.8471C3.00314 15.8948 2.9209 15.9404 2.83732 15.9841L2.60426 16.0967C1.51137 16.5807 0.907227 16.1525 0.907227 14.2327C0.907227 9.76404 4.57848 5.78747 9.54174 5.18475L9.83476 5.15329L10.0871 1.541V1.53999ZM12.2468 3.03564L12.0296 6.55864C12.0223 6.67907 11.9673 6.79322 11.8747 6.88061C11.782 6.96801 11.6576 7.02294 11.5239 7.03554L9.9841 7.17963C6.51649 7.551 3.76503 9.9822 3.25479 13.1602C4.95074 12.0387 6.96354 11.3665 9.06431 11.2201L9.51346 11.1968L11.4413 11.1603C11.5879 11.1574 11.7301 11.2058 11.8377 11.2951C11.9454 11.3845 12.0101 11.5078 12.0183 11.6392L12.2412 15.288C14.0547 14.252 15.7834 13.0597 17.5178 11.7873C18.6379 10.9527 19.7164 10.0742 20.7501 9.15421L20.4582 8.89445L19.8292 8.35362C18.6914 7.39769 17.5084 6.48599 16.2835 5.62107C14.9843 4.70241 13.6373 3.83963 12.2468 3.03564V3.03564Z'
                fill='#BF286F'
              />
            </svg>
            <p>Share</p>
          </div>
        </div>
      ),
    },
    {
      overlayBtnText: "Subscribe",
      img: dash3,
      title: "Keep in touch, 10% off!",
      description:
        "The new arrivals are also waiting for you in Store and online.Come take a look at them with 10% off of your first purchase!",
      lastComp: (
        <button className='p-2 w-full font-[Raleway] rounded-full font-bold bg-white text-black'>
          Subscribe
        </button>
      ),
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center text-white align-middle'>
      {cards.map((card, index) => (
        <div key={index}>
          <div className='w-[375px]'>
            <div className='text-left m-4 p-3 bg-[#212121] rounded-2xl '>
              <div className='relative top-[-20px]'>
                <div className='bg-black w-20 text-center rounded-lg text-xs font-bold py-1 relative top-10 left-3 z-10'>
                  {card.overlayBtnText}
                </div>
                <Image
                  src={card.img}
                  alt='nft'
                  className='hover:scale-105 mb-[-10px] ease-in-out duration-1000 flex rounded-xl justify-center align-middle h-[30vh] object-cover'
                />
              </div>
              <div className='text-xl mb-3'>{card.title}</div>
              <div className='text-[#9D9D9D] text-sm mb-3'>
                {card.description}
              </div>
              {card.lastComp}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrewingMobileCards;
