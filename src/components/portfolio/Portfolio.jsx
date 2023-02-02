import React from 'react';
import HeadingTexts from '../common/HeadingTexts';
import Gallery from './Gallery';
import Icon1 from '../../images/portfolio/Rectangle.png';
import Icon2 from '../../images/portfolio/Rectangle1.png';
import {motion,spring} from 'framer-motion';
import { BsArrowRightSquare } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const Portfolio = (props) => {

  let navigator = useNavigate();

  return (
    <div className='w-full portfolioBg transition-all ease-linear duration-500'>
       <div className='w-full h-auto py-[60px] md:py-[100px]
       transition-[height] linear duration-500'>
          <HeadingTexts tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
          {/* Icons */}
          <div className='w-full h-0 relative'>            
          <motion.img 
          animate={{
            y:[-1,7,-1],
          }}
          transition={{
            type: spring,
            stiffness:50,
            duration:5,
            repeat: Infinity
          }} 
              src={Icon1} alt="icon" className='
              absolute w-[40px] sm:w-[45px] md:w-[55px] lg:w-[60px] xl:w-[93px]
              left-[5px] top-[-20px]
              ism:left-[0px] ism:top-[500px]
              xsm:left-[10px] xsm:top-[500px]
              sm:left-[30px]
              lg:top-[310px] lg:left-[5%]
              xl:top-[500px] xl:left-[2%]
              fixPortfolioIcon' />
           <motion.img 
          animate={{
          y:[-1,-8,-1],
          }}
          transition={{
          type: spring,
          stiffness:50,
          duration:5,
          repeat: Infinity
          }} 
              src={Icon2} alt="icon" className='
              absolute w-[40px] sm:w-[45px] md:w-[55px] lg:w-[60px] xl:w-[93px]
              right-[10px] top-[-60px] lg:top-[-70px]
              sm:right-[30px] lg:right-[40px]
              '/>
          </div>
          {/* icons end */}
          <AnimatePresence>
            <Gallery/>
          </AnimatePresence>
          {/* Button */}
      <div className='w-full flex justify-center pt-[25px]'>
            
        <div className='portfolioButton flex items-center select-none'
            onClick={()=>{
              navigator("/portfolio");
            }}
            >
             <p className='text-base font-semibold
             text-white transition-all ease-linear 500ms'>View all works</p>
            <BsArrowRightSquare 
            className='text-white text-[16px] font-bold iconHover'></BsArrowRightSquare>
         </div>
      </div>
       </div>
    </div>
  )
}

export default Portfolio