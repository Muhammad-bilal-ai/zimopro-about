import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function categories() {
  //next button click for carousel
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{ ...style, display: "block", right: "-25px" }}
        onClick={onClick}
      >
        <Image
          src="/categories_section/arrow_right.png"
          alt="Next"
          width={20}
          height={20} // Set the desired height
        />
      </div>
    );
  }
  //prev button click for carousel
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        style={{ ...style, display: "block", left: "-25px" }} // Adjust the position as needed
        onClick={onClick}
      >
        <Image
          src="/categories_section/arrow_left.png"
          alt="Previous"
          width={20}
          height={20} // Set the desired height
        />
      </div>
    );
  }
  // carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    // setting up section screen
    <div className="relative h-screen w-full bg-cover bg-transparent bg-white">
      {/* setting up content on the screen */}
      <div className="absolute flex justify-between items-center space-x-10 pt-8 left-16 right-16">
        {/* upper screen text and arrow buttons */}
        <div className="text-slate-700 text-2xl font-semibold tracking-wider">
          <h1>OUR CATEGORIES</h1>
        </div>
        <div className="flex justify-end space-x-16">
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
        </div>
      </div>
      {/* carousel */}
      <div className="absolute mt-36 max-w-screen-2xl left-16 right-12">
        <Slider {...settings}>
          <div className="px-4">
            <Image
              src="/categories_section/image_1.png"
              alt="icon"
              width={420}
              height={420}
            />
          </div>
          <div className="px-4">
            <Image
              src="/categories_section/image_2.png"
              alt="icon"
              width={420}
              height={420}
            />
          </div>
          <div className="px-4">
            <Image
              src="/categories_section/image_3.png"
              alt="icon"
              width={420}
              height={420}
            />
          </div>
          <div className="px-4">
            <Image
              src="/categories_section/image_4.png"
              alt="icon"
              width={420}
              height={420}
            />
          </div>
          <div className="px-4">
            <Image
              src="/categories_section/image_5.png"
              alt="icon"
              width={420}
              height={420}
            />
          </div>
          <div className="px-4">
            <Image
              src="/categories_section/image_6.png"
              alt="icon"
              width={420}
              height={420}
            />
          </div>
          <div className="px-4">
            <Image
              src="/categories_section/image_7.png"
              alt="icon"
              width={420}
              height={420}
            />
          </div>
          <div className="px-4">
            <Image
              src="/categories_section/image_8.png"
              alt="icon"
              width={420}
              height={420}
            />
          </div>
        </Slider>
      </div>
      <div className=" absolute text-slate-900 text-3xl word-spacing font-semibold bottom-0 tracking-widest left-1/2  transform -translate-x-1/2 -translate-y-1/2 pb-20">
        ONE PLATFORM FOR ALL PREMIUM LISTINGS
      </div>
      <div className=" absolute text-slate-900 text-2xl word-spacing tracking-widest font-semibold bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 pb-8">
        UNLIMITED POTENTIAL
      </div>
    </div>
  );
}

export default categories;
