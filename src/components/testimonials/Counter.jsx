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
     className='w-full flex flex-col md:flex-row'>
        <div className='w-full flex flex-col justify-center items-center
        p-x10 py-12 countDivider'>
            <img className='w-[50px] pb-[5px]' src={pen} alt="icon" />
            <p className='text-[32px] countText font-bold text-center
            '>{on && <CountUp duration={2} delay={0} start={0} end={300} ></CountUp>}+</p>
            <p className='text-[14px] leading-[16px] text-center countName
            '>Projects</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center
        p-x10 py-12 countDivider'>
            <img className='w-[50px] pb-[5px]' src={trophy} alt="icon" />
            <p className='text-[32px] countText font-bold text-center
            '>{on && <CountUp duration={4} delay={0} start={0} end={6} ></CountUp>}+</p>
            <p className='text-[14px] leading-[16px] text-center countName
            '>Years of experience</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center
        p-x10 py-12 countDivider'>
            <img className='w-[50px] pb-[5px]' src={like} alt="icon" />
            <p className='text-[32px] countText font-bold text-center
            '>{on && <CountUp duration={2} delay={0} start={0} end={200} ></CountUp>}+</p>
            <p className='text-[14px] leading-[16px] text-center countName
            '>Feedbacks</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center
        p-x10 py-12'>
            <img className='w-[50px] pb-[5px]' src={bag} alt="icon" />
            <p className='text-[32px] countText font-bold text-center
            '>{on && <CountUp duration={3} delay={0} start={0} end={25} ></CountUp>}+</p>
            <p className='text-[14px] leading-[16px] text-center countName
            '>Comapnies</p>
        </div>
    </ScrollTrigger>
  )
}

export default Counter