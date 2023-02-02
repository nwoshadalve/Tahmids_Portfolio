import React from 'react';
import OrangeBallIcon from '../../images/services/orange_ball.png';

const Tittle = (props) => {
  return (
    <div className='w-full relative select-none'>
      {/* Intro Segment */}
      <div className='w-full flex justify-center md:justify-start items-center
       transition-all ease-linear duration-500'>
              <h3 className={`w-40 lg:w-[240px] xsm:w-[180px] flex justify-center items-center
               px-[0px] py-[6px] gap-1 lg:gap-2
               font-noraml text-[12px] 
               xsm:text-[14px] lg:text-[18px]
               text-${props.color} bg-[#7270FF]/40
               rounded-[60px] transition-all ease-linear duration-500`}>
                <span><img className='w-[12px] h-[12px]' src={OrangeBallIcon} alt="icon" /></span>
                {props.tittle}
              </h3>
            </div>
      <div className='w-full pt-[24px] flex justify-center md:justify-start'>
      <p className={`w-[250px] 
      xsm:w-[320px]
      md:w-[320px] lg:w-[365px] xl:w-[495px]
      md:text-left
        text-center text-${props.color} 
        text-[24px] leading-[23px]  xsm:text-[30px] xsm:leading-[29px] 
        lg:text-[36px] lg:leading-[34.42px]
        xl:text-[48px] xl:leading-[46.42px]
         fontBold 
        font-bold transition-all ease-linear duration-500`}>
        {props.text}
        </p>
      </div>
    </div>
  )
}

export default Tittle;