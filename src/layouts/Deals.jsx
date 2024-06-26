import React from "react";
import SubHeading from "../components/SubHeading";
import Button2 from "../components/Button2";
import Image from "../components/Image";
import DealsLine from "../assets/images/DealsLine1.png";
import cardimg1 from "../assets/images/cardimg1.png";
import cardimg2 from "../assets/images/cardimg2.png";
import cardimg3 from "../assets/images/cardimg3.png";
import cardimg4 from "../assets/images/cardimg4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useCountDownTarget } from "react_js_coundown_helper";
import GamingCard from "../components/GamingCard";
function Deals() {
  const deadline = new Date("2024-08-31T23:59:59");
  const [seconds, minutes, hours, days] = useCountDownTarget(deadline);

  const cardData = [
    { img: cardimg1, title: "Sekiro Shadows Die...", price: "$59.99" ,discount:"-25%" },
    { img: cardimg2, title: "Sekiro Shadows Die...", price: "$59.99" ,discount:"-25%" },
    { img: cardimg3, title: "Sekiro Shadows Die...", price: "$59.99" ,discount:"-25%" },
    { img: cardimg4, title: "Sekiro Shadows Die...", price: "$59.99" ,discount:"-25%" },
    { img: cardimg1, title: "Sekiro Shadows Die...", price: "$59.99" ,discount:"-25%" },
    { img: cardimg2, title: "Sekiro Shadows Die...", price: "$59.99" ,discount:"-25%" },
    { img: cardimg3, title: "Sekiro Shadows Die...", price: "$59.99" ,discount:"-25%" },
    { img: cardimg4, title: "Sekiro Shadows Die...", price: "$59.99" ,discount:"-25%" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 4,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="!py-[30px] lg:py-[72px]">
      <div className="container">
        <div className="lg:!py-[40px] !py-5 lg:!px-[30px] lg:border-gradient border-none">
          {/* upper part starts*/}
          <div className="flex justify-between items-center mb-[11px] lg:mb-[35px]">
            <SubHeading text={`Weekly Deals`} className={`order-1`} />
            <Button2 text={`Browse All`} className={`order-3 lg:order-2`} />
            <Image
              src={DealsLine}
              className={`!inline-block max-w-[133px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[672px] order-2 lg:order-3`}
            />
            <div className="lg:flex gap-3 text-white items-center hidden order-4">
              <div className="grid place-content-center lg:w-[49.8px] lg:h-[44px] xl:w-[63.8px] xl:h-[58px] rounded-lg bg-gradient-to-r from-gradF to-gradT text-white font-secondary lg:text-[17px] xl:text-2xl">
                {days}
              </div>
              :
              <div className="grid place-content-center lg:w-[49.8px] lg:h-[44px] xl:w-[63.8px] xl:h-[58px] rounded-lg bg-gradient-to-r from-gradF to-gradT text-white font-secondary lg:text-[17px] xl:text-2xl">
                {hours}
              </div>
              :
              <div className="grid place-content-center lg:w-[49.8px] lg:h-[44px] xl:w-[63.8px] xl:h-[58px] rounded-lg bg-gradient-to-r from-gradF to-gradT text-white font-secondary lg:text-[17px] xl:text-2xl">
                {minutes}
              </div>
              :
              <div className="grid place-content-center lg:w-[49.8px] lg:h-[44px] xl:w-[63.8px] xl:h-[58px] rounded-lg bg-gradient-to-r from-gradF to-gradT text-white font-secondary lg:text-[17px] xl:text-2xl">
                {seconds}
              </div>
            </div>
          </div>
          {/* upper part ends */}

          {/* lower part starts */}
          <div className="deal">
            <Slider {...settings}>
            {cardData.map((card, index) => (
                  <GamingCard
                    key={index}
                    className="border-gradient"
                    cardImg={card.img}
                    title={card.title}
                    fromPrice={`$70`}
                    price={card.price}
                    discount={card.discount}
                    favoriteBtn={true}
                    batchclassName={`text-black from-[#FF0000] to-[#FFC700]`}
                  />
                ))}
            </Slider>
          </div>
          {/* lower part ends */}
        </div>
      </div>
    </section>
  );
}

export default Deals;
