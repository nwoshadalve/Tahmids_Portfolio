import React from 'react';
import OrangeBallIcon from '../../images/services/orange_ball.png';

const HeadingTexts = (props) => {
  return (
    <div className='w-full relative'>
      {/* Intro Segment */}
      <div className='w-full flex justify-center items-center
       pb-2'>
              <h3 className={`w-32 ${(props.tittle === "Clinet Testimonials") ? "lg:w-48 md:w-40":"md:w-36"} flex justify-center items-center
               px-[0px] py-[6px] gap-1 
               font-noraml text-[12px] 
               xsm:text-[14px] md:text-[16px] lg:text-[18px]
               text-${props.color} ${(props.bg)}
               rounded-[60px]`}>
                <span><img className='w-2 h-2' src={OrangeBallIcon} alt="icon" /></span>
                {props.tittle}
              </h3>
            </div>
      <div className='w-full flex justify-center'>
      <p className={`${(props.tittle === "My Skills")?"w-[250px]":"w-[200px]"} 
      ${(props.tittle === "My Skills")?"xsm:w-[300px]":"xsm:w-[250px]"}
      sm:w-[auto] md:w-[auto]
            text-center text-${props.color} 
            text-[24px] xsm:text-[30px] md:text-[36px] lg:text-[48px] 
            font-bold`}>
            {props.text}
            </p>
      </div>
    </div>
  )
}

export default HeadingTexts;