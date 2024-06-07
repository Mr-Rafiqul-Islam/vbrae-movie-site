import React from "react";
import Image from "../components/Image";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";
import hero5 from "../assets/images/hero5.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BannerPost from "./BannerPost";


function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    dotsClass: "slick-dots slick-thumb",
    appendDots: (dots) => (
      <div
        style={{
          display: "inline",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <Image
          src={`src/assets/images/hero${i + 1}.png`}
          className="inline-block w-[62px] h-[62px] md:w-[105px] md:h-[105px] rounded-[5px] md:rounded-[10px] "
        />
      </div>
    ),
  };
  return (
    <section className="pb-[72px]">
      <div className="container">
        <div className="">
          <Slider {...settings}>
            <div className="relative">
              <Image
                src={hero1}
                className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}
              />
              <BannerPost className={` bottom-[10%] md:bottom-[40%] left-8 z-10`}/>
            </div>
            <div className="relative">
              <Image
                src={hero2}
                className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}
              />
              <BannerPost className={` bottom-[10%] md:bottom-[40%] left-8 z-10`}/>
            </div>
            <div className="relative">
              <Image
                src={hero3}
                className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}
              />
              <BannerPost className={` bottom-[10%] md:bottom-[40%] left-8 z-10`}/>
            </div>
            <div className="relative">
              <Image
                src={hero4}
                className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}
              />
              <BannerPost className={` bottom-[10%] md:bottom-[40%] left-8 z-10`}/>
            </div>
            <div className="relative">
              <Image
                src={hero5}
                className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}
              />
              <BannerPost className={` bottom-[10%] md:bottom-[40%] left-8 z-10`}/>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Banner;
