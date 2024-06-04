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
          position: "absolute",
          bottom: "5%",
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
          src={`src/assets/images/hero${i+1}.png`}
          className="inline-block w-[62px] h-[62px] md:w-[105px] md:h-[105px] rounded-[5px] md:rounded-[10px] "
        />
      </div>
    ),
  };
  return (
    <section className="">
      <div className="container">
        <div className="relative">
          <Slider {...settings}>
            <div>
              <Image src={hero1} className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}/>
            </div>
            <div>
              <Image src={hero2} className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}/>
            </div>
            <div>
              <Image src={hero3} className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}/>
            </div>
            <div>
              <Image src={hero4} className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}/>
            </div>
            <div>
              <Image src={hero5} className={`md:w-full md:h-auto min-w-[327px] h-[445px]`}/>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Banner;
