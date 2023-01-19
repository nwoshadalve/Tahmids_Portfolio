import React from 'react';
import UnderLine from '../../images/header_img/body/Vector1.svg';
import WebPage from '../../images/header_img/body/Web_page.png';
import Person from '../../images/header_img/body/code_icon.png';
import Carpet from '../../images/header_img/body/web_banner.png';
import Puzzle from '../../images/header_img/body/puzzle.png';
import Bottle from '../../images/header_img/body/bottle.png';
import InnerItems from './InnerItems';
import {motion, spring} from 'framer-motion';


const Header = () => {
  return (
    <div className='w-full h-auto backgroundImage flex flex-col justify-center items-center'>
      {/*Intro text Section*/}
      <div className='
      lg:mt-[107px] lg:mx-[0px]
      md:mt-[155px] md:mx-[20px]
      sm:mt-[147px] sm:mx-[19px]
      mt-[147px] mx-[25px]
      select-none
      '>
        <h1 className='text-center text-[#17141B] font-bold 
        lg:text-[52px] lg:leading-[45px]
        md:text-[48px] md:leading-[47px]
        sm:text-[42px] sm:leading-[41px]
        text-[36px] leading-[35px]'>
          Hi<motion.span
          className='inline-flex'
          animate={{
              rotate: [0,14,-8,14,-4,10,0]
          }}
          transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1
          }}
          >👋
          </motion.span>I am Tahmid,
        </h1>
        <h2 className='text-center text-[#17141B] font-bold 
        lg:text-[52px] lg:leading-[62px]
        md:text-[48px] md:leading-[47px]
        sm:text-[42px] sm:leading-[41px]
        text-[36px] leading-[35px]'>
          Website and Digital Product <span className='
          text-headerTextBlue relative'>
            Designer
              <img className='absolute left-1
              bottom-[0px] z-[-50]' 
              src={UnderLine} alt="Icon" />
            </span>
        </h2>
      </div>
      {/* Additioinal Images */}
        <div className='w-full h-0 relative flex justify-around items-center select-none'>
        <motion.img 
        animate={{
          y:[0,-3,0],
        }}
        transition={{
          type: 'spring',
          stiffness:50,
          delay:2,
          duration:5,
          repeat: Infinity
        }} 
          src={Puzzle} alt="icon" className='absolute
          w-[45px] left-4 top-3
          sm:w-[50px] sm:left-[80px] sm:top-[20px]
          md:w-[65px]
          lg:w-[80px] lg:top-[10px] lg:left-[15%]' />
          <motion.img 
          animate={{
            y:[0,4,0],
          }}
          transition={{
            type: spring,
            stiffness:50,
            delay:3,
            duration:5,
            repeat: Infinity
          }} 
          src={Bottle} alt="icon" className='absolute
          w-[45px] right-3 top-12
          sm:w-[50px] sm:right-[80px] sm:top-[60px]
          md:w-[65px] md:top-[140px]
          lg:w-[80px] lg:right-[15%]' />
        </div>
      {/* Animated Picture Section */}
      <div className='flex flex-col items-center justify-center 
      max-w-[373px] max-h-[371px]
      lg:max-w-[811px] lg:h-[534px]
      md:max-w-[600px] md:max-h-[auto]
      my-[61px] lg:my-[20px] mx-[10px]
      relative select-none'>
        <img src={WebPage} alt="img" className='
        lg:w-[600px] lg:h-[auto]
        md:w-[500px] md:h-[auto]'/>
        <InnerItems/>
        <img src={Person} alt="img" className='
        h-[170px] theUser
        absolute bottom-0 right-5' />
        <img src={Carpet} alt="img" className='
        w-[140px] carpet
        absolute bottom-0 left-16' />
      </div>
    </div>
  )
}

export default Header