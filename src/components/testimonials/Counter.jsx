import React from 'react';
import pen from '../../images/testimonials/pen.png';
import trophy from '../../images/testimonials/trophy.png';
import like from '../../images/testimonials/like.png';
import bag from '../../images/testimonials/bag.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

const Counter = () => {
    const [on, setOn]=useState(false);
    return (
    <ScrollTrigger onEnter={()=>setOn(true)} onExit={()=>setOn(false)}
     className='w-full flex flex-col md:flex-row
     md:mt-[44px] md:mb-[31px]'>
        <div className='w-full flex flex-col justify-center items-center
        py-12 md:py-0 countDivider'>
            <img className='w-[50px] xl:w-[67px] pb-[5px] xl:pb-[18.83px]' src={pen} alt="icon" />
            <p className='text-[32px] xl:text-[36px] xl:leading-[34.81px] countText font-bold fontBold text-center
            '>{on && <CountUp duration={3} delay={0} start={0} end={300} ></CountUp>}+</p>
            <p className='text-[14px] lg:text-[16px] leading-[16px] xl:text-[18px] xl:leading-[24.55px] text-center countName fontRegular
            '>Projects</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center
        py-12 md:py-0 countDivider'>
            <img className='w-[50px] xl:w-[67px] pb-[5px] xl:pb-[18.83px]' src={trophy} alt="icon" />
            <p className='text-[32px] xl:text-[36px] xl:leading-[34.81px] countText font-bold fontBold text-center
            '>{on && <CountUp duration={4} delay={0} start={0} end={6} ></CountUp>}+</p>
            <p className='text-[14px] lg:text-[16px] leading-[16px] xl:text-[18px] xl:leading-[24.55px] text-center countName fontRegular
            '>Years of experience</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center
        py-12 md:py-0 countDivider'>
            <img className='w-[50px] xl:w-[67px] pb-[5px] xl:pb-[18.83px]' src={like} alt="icon" />
            <p className='text-[32px] xl:text-[36px] xl:leading-[34.81px] countText font-bold fontBold text-center
            '>{on && <CountUp duration={3} delay={0} start={0} end={200} ></CountUp>}+</p>
            <p className='text-[14px] lg:text-[16px] leading-[16px] xl:text-[18px] xl:leading-[24.55px] text-center countName fontRegular
            '>Feedbacks</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center
        py-12 md:py-0'>
            <img className='w-[50px] xl:w-[67px] pb-[5px] xl:pb-[18.83px]' src={bag} alt="icon" />
            <p className='text-[32px] xl:text-[36px] xl:leading-[34.81px] countText font-bold fontBold text-center
            '>{on && <CountUp duration={3} delay={0} start={0} end={25} ></CountUp>}+</p>
            <p className='text-[14px] lg:text-[16px] leading-[16px] xl:text-[18px] xl:leading-[24.55px] text-center countName fontRegular
            '>Comapnies</p>
        </div>
    </ScrollTrigger>
  )
}

export default Counter