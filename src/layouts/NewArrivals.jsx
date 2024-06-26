import React from "react";
import SubHeading from "../components/SubHeading";
import Image from "../components/Image";
import Button2 from "../components/Button2";
import DealsLine from "../assets/images/DealsLine1.png";
import GamingCard from "../components/GamingCard";
import cardimg1 from "../assets/images/cardimg1.png";
import cardimg2 from "../assets/images/cardimg2.png";
import cardimg3 from "../assets/images/cardimg3.png";
import cardimg4 from "../assets/images/cardimg4.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../components/SectionHeading";

function NewArrivals() {
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
    className: "center",
    infinite: true,
    dots: true,
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 757,
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
        },
      },
    ],
  };
  return (
    <section className="!py-[30px] lg:py-[72px]">
      <div className="container">
        <div className="lg:!py-[40px] !py-5 lg:!px-[30px]">
          {/* upper part starts*/}
          <SectionHeading title={`New Arrivals`} btntext={`Browse All`} />
          {/* upper part ends*/}
          {/* lower part starts */}
          <div className="new">
            <div className="block sm:!hidden">
              <Slider {...settings}>
                {cardData.map((card, index) => (
                  <GamingCard
                    key={index}
                    className="border-gradient"
                    cardImg={card.img}
                    title={card.title}
                    price={card.price}
                    discount={card.discount}
                  />
                ))}
              </Slider>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 gap-2 lg:grid-cols-3 lg:h-[800px] lg:overflow-y-hidden lg:gap-4 xl:h-auto xl:grid-cols-4 hidden">
              {cardData.map((card, index) => (
                <GamingCard
                  key={index}
                  className="border-gradient"
                  cardImg={card.img}
                  title={card.title}
                  price={card.price}
                  discount={card.discount}
                />
              ))}
            </div>
          </div>
          {/* lower part ends */}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
