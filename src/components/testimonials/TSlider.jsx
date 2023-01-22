import React from 'react';
import Quote from '../../images/testimonials/quote.png';
import StarRatings from 'react-star-ratings';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from './data';


const TSlider = () => {
  return (
    <div className='w-full flex flex-col pb-8'>
        <Slider
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        arrows = {false}
        autoplay={true}
        autoplaySpeed={5000}
        speed={1000}
        infinite={true}
        cssEase='linear'
        pauseOnHover={false}
        pauseOnFocus={false}
        >
        {
        data.map((elm)=>{
        
        const {id, img, name, desig, rtng, descrip} = elm;
            
        return(
        <div key={id} className='w-[80vw] mx-auto flex
        flex-col items-center justify-center'>
            <div className='w-[100px] mx-auto flex justify-center items-center
            relative'>
                {/* will be customised letter */}
                <img src={img} alt="avatar" 
                className=''
                />
                <img src={Quote} alt="icon" 
                className='w-[30px] absolute
                top-[0px] right-[0px]'
                />
            </div>
            <p className='font-bold text-center'>{name}</p>
            <p className='text-[14px] text-center text-[#737373]'>{desig}</p>
            <div className='flex justify-center items-center py-2'>
            <StarRatings
            rating={rtng}
            starRatedColor="#F7B733"
            numberOfStars={5}
            name='rating'
            starDimension='18px'
            starSpacing='2px'
            />
            </div>
            <p className='w-[230px] xxsm:w-[70vw] md:w-[530px] mx-auto text-center'>
                {descrip}
            </p>

        </div>
                )
            })
        }
        </Slider>
    </div>
  )
}

export default TSlider