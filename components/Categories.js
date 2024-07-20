import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
const categories = forwardRef((props, ref) => {
  const { t } = useTranslation("common");
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
      <div className="absolute w-full h-screen ">
        {/* setting up content on the screen */}
        <motion.div
          initial={{ opacity: 0, x: -200, y: -200 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, y: 0 }
              : { opacity: 0, x: -200, y: -200 }
          }
          transition={{ duration: 1 }}
          className="flex justify-between items-center w-full space-x-4  md:space-x-32 p-16 pt-64 md:pt-16 top-0 "
        >
          {/* upper screen text and arrow buttons */}
          <div className="flex text-slate-700 text-2xl items-center md:text-3xl font-semibold md:py-4 tracking-wider text-nowrap">
            <h1>{t("OUR CATEGORIES")}</h1>
          </div>
          <div className="flex space-x-8 md:space-x-16">
            <button className="arrow-left arrow">
              <Image
                src="/categories_section/arrow_left.png"
                alt="icon"
                width={20}
                height={0}
              />
            </button>
            <button className="arrow-right arrow">
              <Image
                src="/categories_section/arrow_right.png"
                alt="icon"
                width={20}
                height={0}
              />
            </button>
          </div>
        </motion.div>
        {/* carousel */}
        <motion.div className="p-6">
          <Swiper
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}

            modules={[Autoplay, Pagination, Navigation]}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
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
          >
            <SwiperSlide>
              <div className="">
                <Image
                  src="/categories_section/image_1.png"
                  alt="icon"
                  width={420}
                  height={0}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image
                  src="/categories_section/image_2.png"
                  alt="icon"
                  width={420}
                  height={0}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image
                  src="/categories_section/image_3.png"
                  alt="icon"
                  width={420}
                  height={0}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image
                  src="/categories_section/image_4.png"
                  alt="icon"
                  width={420}
                  height={0}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image
                  src="/categories_section/image_5.png"
                  alt="icon"
                  width={420}
                  height={0}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image
                  src="/categories_section/image_6.png"
                  alt="icon"
                  width={420}
                  height={0}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image
                  src="/categories_section/image_7.png"
                  alt="icon"
                  width={420}
                  height={0}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <Image
                  src="/categories_section/image_8.png"
                  alt="icon"
                  width={420}
                  height={0}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <motion.div className=" absolute text-slate-900 text-sm text-center  md:text-xl font-semibold bottom-0 tracking-widest left-1/2  transform -translate-x-1/2 -translate-y-1/2 pb2">
          {t("ONE PLATFORM FOR ALL PREMIUM LISTINGS")}
        </motion.div>
        <motion.div className=" absolute text-slate-900 text-sm md:text-2xl tracking-widest font-semibold bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 pb-4">
          {t("UNLIMITED POTENTIAL")}
        </motion.div>
      </div>
    </div>
  );
});

export default categories;
