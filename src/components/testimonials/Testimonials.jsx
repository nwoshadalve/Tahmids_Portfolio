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
        <div className='w-full py-6 select-none relative'>
            <div className='w-[80vw] lg:w-[900px] md:w-[90vw] md:h-[150px] countdownBg
            flex flex-col md:flex-row mx-auto rounded-[15px]
            md:absolute md:top-[-50px] lg:top-[-80px] md:left-[50%] md:translate-x-[-50%]'>
                <Counter/>
            </div>
        </div>
        {/* icons */}
        <div className='w-full h-0 relative'>
          <motion.img 
          animate={{
          y:[1,-5,1],
          }}
          transition={{
          type: spring,
          stiffness:50,
          duration:5,
          repeat: Infinity
          }} 
          src={BgIcon} alt="icon"
          className='w-[30px] xsm:w-[40px] md:w-[50px] lg:w-[60px] z-[50] absolute 
          right-[5vw] lg:right-[15vw] top-[260px] xsm:top-[280px] lg:top-[400px]' />
        </div>
        {/* Section starts from here */}
        <div className='w-full pt-10 md:pt-24
        pb-4 md:pb-8 select-none'>
            <HeadingTexts tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
      </div>
      {/* Slider section */}
      <div className='w-full'>
        <TSlider/>
      </div>
        
    </div>
  )
}

export default Testimonials