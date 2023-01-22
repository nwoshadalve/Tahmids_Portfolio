import React from 'react';
import HeadingTexts from '../common/HeadingTexts';
import Gallery from './Gallery';
import Icon1 from '../../images/portfolio/Rectangle.png';
import Icon2 from '../../images/portfolio/Rectangle1.png';
import {motion,spring} from 'framer-motion';
import Arrow from '../nav/nav_img/arrow.svg';
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const Portfolio = (props) => {

  let navigator = useNavigate();

  return (
    <div className='w-full portfolioBg ease-in-out duration-500 origin-top'>
       <div className='w-full h-auto pt-10 md:pt-14 lg:pt-20
       pb-4 md:pb-8 origin-top duration-500'>
          <HeadingTexts tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
          {/* Icons */}
          <div className='w-full h-0 relative'>            
          <motion.img 
          animate={{
            y:[0,5,0],
          }}
          transition={{
            type: spring,
            stiffness:50,
            duration:5,
            repeat: Infinity
          }} 
              src={Icon1} alt="icon" className='
              absolute w-[40px] sm:w-[45px] md:w-[55px] lg:w-[60px]
              left-[5px] top-[-20px]
              ism:left-[0px] ism:top-[500px]
              xsm:left-[10px] xsm:top-[500px]
              sm:left-[30px]
              lg:top-[310px] lg:left-[5%]
              fixPortfolioIcon' />
           <motion.img 
          animate={{
          y:[0,-5,0],
          }}
          transition={{
          type: spring,
          stiffness:50,
          duration:5,
          repeat: Infinity
          }} 
              src={Icon2} alt="icon" className='
              absolute w-[40px] sm:w-[45px] md:w-[55px] lg:w-[60px]
              right-[10px] top-[-60px] lg:top-[-70px]
              sm:right-[30px] lg:right-[40px]
              '/>
          </div>
          {/* icons end */}
          <AnimatePresence>
            <Gallery/>
          </AnimatePresence>
          {/* Button */}
      <div className='w-full flex justify-center'>
            
        <div className='md:portfolioButton flex select-none
        portfolioButtonMobile'
            onClick={()=>{
              navigator("/portfolio");
            }}
            >
             <p className='text-base font-semibold
             text-white'>View all works</p>
            <img src={Arrow} alt="Arrow" />
         </div>
      </div>
       </div>
    </div>
  )
}

export default Portfolio