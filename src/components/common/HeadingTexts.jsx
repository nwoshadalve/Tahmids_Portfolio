import React from 'react';
import OrangeBallIcon from '../../images/services/orange_ball.png';

const HeadingTexts = (props) => {
  return (
    <div className='w-full relative'>
      {/* Intro Segment */}
      <div className='w-full flex justify-center items-center
       '>
              <h3 className={`${(props.tittle === "Clinet Testimonials") ? "w-36 xsm:w-44 md:w-48 lg:w-52":"w-32 md:w-36"} flex justify-center items-center
               px-[0px] py-[6px] gap-2 
               font-noraml text-[12px]
               xsm:text-[14px] md:text-[16px] lg:text-[18px]
               text-${props.color} ${(props.bg)}
               rounded-[60px]`}>
                <span><img className='w-[12px] h-[12px]' src={OrangeBallIcon} alt="icon" /></span>
                {props.tittle}
              </h3>
            </div>
      <div className='w-full flex justify-center'>
      <p className={`${(props.tittle === "My Skills")?"w-[260px]":"w-[220px]"} 
      ${(props.tittle === "My Skills")?"ism:w-[300px] xsm:w-[360px]":"xsm:w-[250px]"}
      ${(props.tittle === "My Process")?"xsm:w-[360px]":"xsm:w-[250px]"}
      sm:w-[auto] md:w-[auto]
            text-center text-${props.color} fontBold
            text-[24px] xsm:text-[30px] md:text-[36px] lg:text-[48px]
            leading-[24px] xsm:leading-[29px] md:leading-[34.5px] lg:leading-[46px]
            pt-[12px] sm:pt-[18px] md:pt-[20px] lg:pt-[24px]
            font-bold`}>
            {props.text}
            </p>
      </div>
    </div>
  )
}

export default HeadingTexts;