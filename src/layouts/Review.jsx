import React from "react";
import Image from "../components/Image";
import Line from "../assets/icons/revLine.png";
import ReviewStar from "../assets/icons/ReviewStar.svg";
import ReviewCard from "../components/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../assets/images/rev1.png";
import user2 from "../assets/images/rev2.png";
import user3 from "../assets/images/rev3.png";
import stargrp from "../assets/icons/stargrp.png";
function Review() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="lg:py-[72px] pt-[72px] pb-[30px]">
      <div className="container">
        <div className="flex">
          <div className="grid place-content-center max-w-[210px]">
            <div className="text-center">
              <h3 className="font-third font-bold text-[12px] lg:text-[36px] text-white">
                Trustpilot <br /> Reviews
              </h3>
              <Image src={Line} className={`min-w-[74px] lg:my-[10px] my-2`} />
              <div className="flex gap-2 justify-center items-center">
                <h5 className="font-third font-bold text-[16px] lg:text-[47px] text-[#38AAE6]">
                  5.0
                </h5>
                <Image
                  src={ReviewStar}
                  className={`lg:w-[49.82px] w-[18.21px] lg:h-[47.38px] h-[17.32px] my-[10px]`}
                />
              </div>
            </div>
          </div>
          <div className="w-[82%] lg:w-[90%] review">
            <Slider {...settings}>
              <ReviewCard
                img={user1}
                name={"Username"}
                rating={stargrp}
                review={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsumdolor amet sit."
                }
              />
              <ReviewCard
                img={user2}
                name={"Username"}
                rating={stargrp}
                review={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsumdolor amet sit."
                }
              />
              <ReviewCard
                img={user3}
                name={"Username"}
                rating={stargrp}
                review={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsumdolor amet sit."
                }
              />
              
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
