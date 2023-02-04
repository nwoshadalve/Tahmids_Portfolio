import React from 'react';
import HeadingTexts from '../common/HeadingTexts';
import Counter from './Counter';
import TSlider from './TSlider';
import BgIcon from '../../images/testimonials/bgicon-1.png';
import { motion, spring } from 'framer-motion';

const Testimonials = (props) => {
  return (
    <div className='w-full'>
        {/* Achivements */}
        <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className='w-full py-[60px] select-none relative'>
            <div className='w-[80vw] lg:w-[80vw] xl:w-[1316px] md:w-[90vw] md:h-auto countdownBg
            flex flex-col md:flex-row mx-auto rounded-[15px]
            md:absolute md:top-[-50px] lg:top-[-100px] xl:top-[-110px] md:left-[50%] md:translate-x-[-50%]'>
                <Counter/>
            </div>
        </div>
        {/* icons */}
        <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className='w-full h-0 relative'>
          <motion.img 
          animate={{
          y:[1,-9,1],
          }}
          transition={{
          type: spring,
          stiffness:50,
          duration:4.5,
          repeat: Infinity
          }} 
          src={BgIcon} alt="icon"
          className='w-[30px] xsm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[93px] z-10 absolute 
          right-[5vw] lg:right-[5vw] top-[260px] xsm:top-[280px] lg:top-[400px] xl:top-[380px] xl:right-[15vw]' />
        </div>
        {/* Section starts from here */}
        <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className='w-full pt-[0px] md:pt-[91px]
        pb-[30px] md:pb-8 lg:pb-[44px] select-none'>
            <HeadingTexts tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
      </div>
      {/* Slider section */}
      <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className='w-full'>
        <TSlider/>
      </div>
        
    </div>
  )
}

export default Testimonials