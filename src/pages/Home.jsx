import React from 'react'
import NavBar from '../layouts/NavBar'
import Banner from '../layouts/Banner'
import Review from '../layouts/Review'
import Deals from '../layouts/Deals'
import PromotionCard from '../layouts/PromotionCard'
import promotion1 from "../assets/images/promotion1.png";
import xbox from "../assets/icons/xb.svg";
import ps4 from "../assets/icons/ps.svg";
import line from "../assets/icons/LineHorizontal.svg";
import key from "../assets/icons/key.svg";
import user from "../assets/icons/user.svg";
import sw from "../assets/icons/switch.svg";
import stargrp from "../assets/icons/stargrp.png";

function Home() {
  const iconsArr = [ps4, xbox, sw, line, key, user];
  return (
    <>
    <NavBar/>
    <Banner/>
    <Review/>
    <Deals/>
    <PromotionCard iconsArray={iconsArr} cardImg={promotion1} cardTitle={"The Last Of Us Part II"} fromPrice={70} toPrice={59.99} rating={stargrp}/>
    </>
  )
}

export default Home