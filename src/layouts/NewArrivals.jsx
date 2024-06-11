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

function NewArrivals() {
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
          dots: true
        }
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <section className="!py-[30px] lg:py-[72px]">
      <div className="container">
        <div className="lg:!py-[40px] !py-5 lg:!px-[30px]">
          {/* upper part starts*/}
          <div className="flex justify-between items-center mb-[11px] lg:mb-[35px]">
            <SubHeading text={`New Arrivals`} className={``} />
            <Image
              src={DealsLine}
              className={`inline-block min-w-[133px] lg:max-w-[672px]`}
            />
            <Button2 text={`Browse All`} className={``} />
          </div>
          {/* upper part ends*/}
          {/* lower part starts */}
          <div className="new">
            <div className="block sm:!hidden">
              <Slider {...settings} >
                <GamingCard
                  className={`border-gradient`}
                  cardImg={cardimg1}
                  title={`Sekiro Shadows Die...`}
                  price={`$59.99`}
                />
                <GamingCard
                  className={`border-gradient`}
                  cardImg={cardimg2}
                  title={`Sekiro Shadows Die...`}
                  price={`$59.99`}
                />
                <GamingCard
                  className={`border-gradient`}
                  cardImg={cardimg3}
                  title={`Sekiro Shadows Die...`}
                  price={`$59.99`}
                />
                <GamingCard
                  className={`border-gradient`}
                  cardImg={cardimg4}
                  title={`Sekiro Shadows Die...`}
                  price={`$59.99`}
                />
                <GamingCard
                  className={`border-gradient`}
                  cardImg={cardimg1}
                  title={`Sekiro Shadows Die...`}
                  price={`$59.99`}
                />
                <GamingCard
                  className={`border-gradient`}
                  cardImg={cardimg2}
                  title={`Sekiro Shadows Die...`}
                  price={`$59.99`}
                />
                <GamingCard
                  className={`border-gradient`}
                  cardImg={cardimg3}
                  title={`Sekiro Shadows Die...`}
                  price={`$59.99`}
                />
                <GamingCard
                  className={`border-gradient`}
                  cardImg={cardimg4}
                  title={`Sekiro Shadows Die...`}
                  price={`$59.99`}
                />
              </Slider>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 gap-2 lg:gap-4 xl:grid-cols-4 hidden">
              <GamingCard
                className={`border-gradient`}
                cardImg={cardimg1}
                title={`Sekiro Shadows Die...`}
                price={`$59.99`}
              />
              <GamingCard
                className={`border-gradient`}
                cardImg={cardimg2}
                title={`Sekiro Shadows Die...`}
                price={`$59.99`}
              />
              <GamingCard
                className={`border-gradient`}
                cardImg={cardimg3}
                title={`Sekiro Shadows Die...`}
                price={`$59.99`}
              />
              <GamingCard
                className={`border-gradient`}
                cardImg={cardimg4}
                title={`Sekiro Shadows Die...`}
                price={`$59.99`}
              />
              <GamingCard
                className={`border-gradient`}
                cardImg={cardimg1}
                title={`Sekiro Shadows Die...`}
                price={`$59.99`}
              />
              <GamingCard
                className={`border-gradient`}
                cardImg={cardimg2}
                title={`Sekiro Shadows Die...`}
                price={`$59.99`}
              />
              <GamingCard
                className={`border-gradient`}
                cardImg={cardimg3}
                title={`Sekiro Shadows Die...`}
                price={`$59.99`}
              />
              <GamingCard
                className={`border-gradient`}
                cardImg={cardimg4}
                title={`Sekiro Shadows Die...`}
                price={`$59.99`}
              />
            </div>
          </div>
          {/* lower part ends */}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
