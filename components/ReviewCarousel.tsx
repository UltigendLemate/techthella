import React from "react";
import { testimonialCarouselData } from "../utilities/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

const renderStudentFeedbackCarouselSlides = testimonialCarouselData.map(
  (data, index) => (
    <SwiperSlide
      key={index}
      className="h-full bg-purple-50 rounded-3xl px-6 py-8  flex flex-col gap-8"
    >
      <div className="flex flex-col items-center justify-between  rounded-3xl xl:h-full w-full gap-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={`/reviews/${data.image}.svg`}
              alt="mentor"
              width={56}
              height={56}
              className="h-14 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-[#1B1D1F]">{data.name}</h1>
              <p className="text-gray-500">{data.designation}</p>
            </div>
          </div>
          <div>
            <img src={`/reviews/quoteLogo.svg`} alt=""  className="text-green-500"/>
          </div>
        </div>
      </div>
      <div className="text-[#363A3D]">{data.comment}</div>
    </SwiperSlide>
  )
);

type Props = {};

const ReviewCarousel = (props: Props) => {
  return (
    <div className="pb-10">
      <>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-student",
          }}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-student-prev",
            nextEl: ".swiper-button-student-next",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            // when window width is <= 499px


          }}
          className="xl:h-full gap-2 "
        >
          {renderStudentFeedbackCarouselSlides}
        </Swiper>
        <div className="swiper-button-student-prev  flex items-center justify-center font-bold text cursor-pointer h-9 w-9 rounded-full absolute bg-green-500 z-10 md:top-[60%] md:-left-12 bottom-0 right-10">
          {"<"}
        </div>
        <div className="swiper-button-student-next flex items-center justify-center font-bold text cursor-pointer h-9 w-9 rounded-full absolute bg-green-500 z-10 md:-right-12 md:top-[60%] bottom-0 right-0">
          {">"}
        </div>
        {/* <div className="swiper-pagination-student absolute cursor-pointer  text-green-500 text-center flex gap-2 pt-8 px-4 md:px-0  md:left-[46%]   md:pt-6 md:gap-4"></div> */}
      </>
    </div>
  );
};

export default ReviewCarousel;
