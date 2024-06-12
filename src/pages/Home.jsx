import React from "react";
import NavBar from "../layouts/NavBar";
import Banner from "../layouts/Banner";
import Review from "../layouts/Review";
import Deals from "../layouts/Deals";
import PromotionCard from "../layouts/PromotionCard";
import promotion1 from "../assets/images/promotion1.png";
import promotion2 from "../assets/images/promotion2.png";
import xbox from "../assets/icons/xb.svg";
import ps4 from "../assets/icons/ps.svg";
import line from "../assets/icons/LineHorizontal.svg";
import key from "../assets/icons/key.svg";
import user from "../assets/icons/user.svg";
import sw from "../assets/icons/switch.svg";
import stargrp from "../assets/icons/stargrp.png";
import NewArrivals from "../layouts/NewArrivals";

function Home() {
  const iconsArr = [ps4, xbox, sw, line, key, user];
  return (
    <>
      <NavBar />
      <Banner />
      <Review />
      <Deals />
      <PromotionCard
        iconsArray={iconsArr}
        cardImg={promotion1}
        cardTitle={"The Last Of Us Part II"}
        discount={`25%`}
        fromPrice={`$70`}
        toPrice={`$59.99`}
        rating={stargrp}
      />
      <NewArrivals />
      <PromotionCard
        className={`lg:flex-row-reverse`}
        cardImg={promotion2}
        cardTitle={`RE4 Remake DLC`}
        discount={`25%`}
        fromPrice={`$70`}
        toPrice={`$59.77`}
        iconsArray={iconsArr}
        rating={stargrp}
      />
    </>
  );
}

export default Home;
