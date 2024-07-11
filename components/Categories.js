import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Zoom, Navigation, Pagination } from "swiper/modules";
const categories = forwardRef((props, ref) => {
  const categoriesRef = useRef(null);
  const isInView = useInView(categoriesRef, {
    triggerOnce: true,
    threshold: 1,
  });

  return (
    // setting up section screen
    <div
      ref={(node) => {
        categoriesRef.current = node;
        ref.current = node;
      }}
      className="relative h-screen w-full bg-cover bg-transparent bg-white overflow-hidden"
    >
      {/* setting up content on the screen */}
      <motion.div
        initial={{ opacity: 0, x: -200, y: -200 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: -200, y: -200 }
        }
        transition={{ duration: 1 }}
        className="absolute flex justify-between items-center"
      >
        {/* upper screen text and arrow buttons */}
        <div className="absolute  text-slate-700 sm:text-xs md:text-3xl font-semibold tracking-wider left-16 text-nowrap pt-16">
          <h1>OUR CATEGORIES</h1>
        </div>
        {/* <div className="flex justify-end space-x-16">
          <Image
            src="/categories_section/arrow_left.png"
            alt="icon"
            width={20}
            height={0}
          />
          <Image
            src="/categories_section/arrow_right.png"
            alt="icon"
            width={20}
            height={0}
          />
        </div> */}
      </motion.div>
      {/* carousel */}
      <motion.div className="absolute mt-12 md:mt-36 max-w-screen-2xl left-16 right-12 ">
        <Swiper
          style={{
            "--swiper-navigation-color": "blue",
          }}
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="px-4">
              <Image
                src="/categories_section/image_1.png"
                alt="icon"
                width={420}
                height={420}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <Image
                src="/categories_section/image_2.png"
                alt="icon"
                width={420}
                height={420}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <Image
                src="/categories_section/image_3.png"
                alt="icon"
                width={420}
                height={420}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <Image
                src="/categories_section/image_4.png"
                alt="icon"
                width={420}
                height={420}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <Image
                src="/categories_section/image_5.png"
                alt="icon"
                width={420}
                height={420}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <Image
                src="/categories_section/image_6.png"
                alt="icon"
                width={420}
                height={420}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <Image
                src="/categories_section/image_7.png"
                alt="icon"
                width={420}
                height={420}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4">
              <Image
                src="/categories_section/image_8.png"
                alt="icon"
                width={420}
                height={420}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <motion.div className=" absolute text-slate-900 xs:text-xs sm:text-xl text-center py-4 md:text-2xl lg:text-3xl word-spacing font-semibold bottom-0 tracking-widest left-1/2  transform -translate-x-1/2 -translate-y-1/2 pb-20">
        ONE PLATFORM FOR ALL PREMIUM LISTINGS
      </motion.div>
      <motion.div className=" absolute text-slate-900 py-4 text-sm md:text-2xl word-spacing tracking-widest font-semibold bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 pb-8">
        UNLIMITED POTENTIAL
      </motion.div>
    </div>
  );
});

export default categories;
