import React from 'react'
import SectionHeading from '../components/SectionHeading'
import GamingCard from "../components/GamingCard";
import cardimg1 from "../assets/images/cardimg1.png";
import cardimg2 from "../assets/images/cardimg2.png";
import cardimg3 from "../assets/images/cardimg3.png";
import cardimg4 from "../assets/images/cardimg4.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react/dist/iconify.js';


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }

function CommingSoon() {
    const cardData = [
        { img: cardimg1, title: "Sekiro Shadows Die...", release: "2024" },
        { img: cardimg2, title: "Sekiro Shadows Die...", release: "2024" },
        { img: cardimg3, title: "Sekiro Shadows Die...", release: "2024" },
        { img: cardimg4, title: "Sekiro Shadows Die...", release: "2024" },
        { img: cardimg1, title: "Sekiro Shadows Die...", release: "2024" },
        { img: cardimg2, title: "Sekiro Shadows Die...", release: "2024" },
        { img: cardimg3, title: "Sekiro Shadows Die...", release: "2024" },
        { img: cardimg4, title: "Sekiro Shadows Die...", release: "2024" },
      ];
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <Icon icon={`icon-park-outline:right-c`} className='text-white text-2xl'/>,
        prevArrow: <Icon icon={`icon-park-outline:left-c`} className='text-white text-2xl'/>
      };
  return (
    <section className='!py-[30px] lg:py-[72px]'>
        <div className="container">
            <SectionHeading title="Comming Soon" btntext="Browse All" />
            <div className="upcoming">
                <Slider {...settings}>
                {cardData.map((item, index) => (
                    <GamingCard key={index} cardImg={item.img} title={item.title} release={item.release} className={`border-gradient`} />
                ))}
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default CommingSoon