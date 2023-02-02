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

  const word1='I am Tahmid,'.split(" ");

    const container ={
        hidden:{oppacity:0},
        visible: (i=1) =>({
            oppacity:1,
            transition: {staggerChildren: 0.12, delayChildren: 0.07*i}
        }),
    }
    const child ={
        visible:{
            oppacity:1,
            y:0,
            transition:{
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        },
        hidden:{
            oppacity:0,
            y:20,
            transition:{
                type: "spring",
                damping: 12,
                stiffness: 100,
                
            }
        }
    }

  return (
    <div className='w-full h-auto backgroundImage flex flex-col justify-center items-center'>
      {/*Intro text Section*/}
      <div className='
      lg:mt-[110px] lg:mx-[0px]
      md:mt-[155px] md:mx-[20px]
      sm:mt-[147px] sm:mx-[19px]
      mt-[147px] xl:mt-[160px] mx-[25px]
      select-none
      '>
        <h1 className='text-center text-[#17141B] font-bold fontBold flex items-center justify-center flex-wrap
        xl:text-[64px] xl:leading-[61.89px]
        lg:text-[52px] lg:leading-[45px]
        md:text-[48px] md:leading-[47px]
        sm:text-[42px] sm:leading-[41px]
        text-[36px] leading-[35px]'>
          <motion.span 
            initial={{x:"-20vw", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{
                type: "spring",
                stiffness: 30
            }}
        >Hi
        <motion.span
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
            </motion.span>
        </motion.span>
        <motion.span className='flex' variants={container} initial='hidden' animate='visible'>
            {word1.map( (word,index)=> <motion.span variants={child} className='mr-2' key={index}>{word}</motion.span> )}
        </motion.span>
        </h1>
        <motion.h2
        initial={{y:30, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1}} 
        className='text-center text-[#17141B] font-bold fontBold
        xl:text-[64px] xl:leading-[61.89px]
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
        </motion.h2>
      </div>
      {/* Additioinal Images */}
        <motion.div
        initial={{
          y:-100,
          opacity:0
        }}
        animate={{
          y:0,
          opacity:1
        }}
        transition={{
          type: 'spring',
          stiffness:50,
          duration:5,
        }}
        className='w-full h-0 relative flex justify-around items-center select-none'>
        <motion.img 
        animate={{
          y:[0,-6,0],
        }}
        transition={{
          type: 'spring',
          stiffness:50,
          duration:5,
          repeat: Infinity
        }} 
          src={Puzzle} alt="icon" className='absolute
          w-[45px] left-4 top-3
          sm:w-[50px] sm:left-[80px] sm:top-[20px]
          md:w-[65px]
          lg:w-[80px] 
          xl:w-[108px]
          lg:top-[10px] lg:left-[15%]
          xl:top-[60px] xl:left-[16vw]' />
          <motion.img
          animate={{
            y:[-4,4,-4],
          }}
          transition={{
            type: spring,
            stiffness:50,
            duration:5,
            repeat: Infinity
          }} 
          src={Bottle} alt="icon" className='absolute
          w-[45px] right-3 top-12
          sm:w-[50px] sm:right-[80px] sm:top-[60px]
          md:w-[65px] md:top-[140px]
          lg:w-[80px] lg:right-[15%]
          xl:w-[108px] xl:top-[200px] xl:right-[16vw]' />
        </motion.div>
      {/* Animated Picture Section */}
      <motion.div 
      initial={{
        y:-50,
        opacity:0
      }}
      animate={{
        y:0,
        opacity:1
      }}
      transition={{
        type: 'spring',
        stiffness:50,
        duration:10,
      }}
      className='flex flex-col items-center justify-center 
      max-w-[373px] max-h-[371px]
      lg:max-w-[811px] lg:h-[534px]
      md:max-w-[600px] md:max-h-[auto]
      my-[60px] lg:my-0 lg:mb-[90px] xl:mb-[140px] lg:mt-[20px] xl:mt-[80px] mx-[10px]
      relative select-none'>
        <img src={WebPage} alt="img" className='
        xl:w-[750px] xl:h-[auto]
        lg:w-[600px] lg:h-[auto]
        md:w-[500px] md:h-[auto]'/>
        <InnerItems/>
        <img src={Person} alt="img" className='
        h-[170px] theUser
        absolute bottom-[-25px] right-5' />
        <img src={Carpet} alt="img" className='
        w-[150px] carpet
        absolute bottom-[-20px] left-14' />
      </motion.div>
    </div>
  )
}

export default Header