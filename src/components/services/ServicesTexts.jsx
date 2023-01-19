import React from 'react';
import OrangeBallIcon from '../../images/services/orange_ball.png';

const ServicesTexts = () => {
  return (
    <div className='w-full relative'>
      {/* Intro Segment */}
      <div className='w-full flex justify-center items-center
       pb-2'>
              <h3 className='w-32 flex justify-center items-center
               px-[0px] py-[6px] gap-1 
               font-noraml text-[12px] 
               xsm:text-[14px] md:text-[16px] lg:text-[18px]
               text-white bg-sectionsTittleBg 
               rounded-[60px]'>
                <span><img className='w-2 h-2' src={OrangeBallIcon} alt="icon" /></span>
                My Services
              </h3>
            </div>
      <div className='w-full flex justify-center'>
      <p className='w-[200px] xsm:w-[250px] md:w-[auto]
       text-center text-white 
            text-[24px] xsm:text-[32px] md:text-[36px] lg:text-[48px] 
            font-bold'>
            What I've Been up to
            </p>
      </div>
    </div>
  )
}

export default ServicesTexts;