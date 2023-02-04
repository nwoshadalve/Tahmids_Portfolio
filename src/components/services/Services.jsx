import React from 'react';
import Cards from './Cards';
import {motion,spring} from 'framer-motion';
import GreenBallIcon from '../../images/services/green_ball.png';
import OrangeBallIcon from '../../images/services/orange_ball.png';
import SettingIcon from '../../images/services/setting_icon.png';
import ClockIcon from '../../images/services/clock_icon.png';
import HeadingTexts from '../common/HeadingTexts';


const Services = (props) => {
  return (
    <div className='w-full bg-servicesBG'>
        {/* Animated Round Circle */}
        <div className='w-full relative flex justify-center'>
            <motion.div 
              animate={{
                rotate: [0,359]
              }}
              transition={{
                  duration:60,
                  repeat: Infinity,
                  ease: "linear",
              }}
            className='lg:h-[650px] lg:w-[650px]
            xl:h-[780px] xl:w-[780px]
            md:h-[500px] md:w-[500px]
            h-[200px] w-[200px]
            hidden md:block
            border-[2px] 
            border-[#2E2E39] rounded-[50%] absolute 
            lg:top-3 md:top-[70px] serviceSecAnimFix'
            >
                <img src={GreenBallIcon} alt="icon" 
                className='lg:w-[18px] lg:h-[18px]
                md:w-[18px] md:h-[18px]
                sm:w-[18px] sm:h-[18px] sm:left-[-10px]
                w-[10px] h-[10px]  absolute 
                top-[50%] left-[-6px]'/>
                <img src={OrangeBallIcon} alt="icon" 
                className='lg:w-[18px] lg:h-[18px]
                md:w-[18px] md:h-[18px]
                sm:w-[18px] sm:h-[18px] sm:right-[-10px]
                w-[10px] h-[10px] absolute 
                top-[50%] right-[-6px]'/>

            </motion.div>
        </div>
        {/* Section's Contents */}
        <div className=' w-full flex flex-col justify-center px-6 py-[60px] md:py-[100px]'>
        
        <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className='w-full h-0 relative'>
        <motion.img 
        animate={{
          y:[-1,-8,-1],
        }}
        transition={{
          type: spring,
          stiffness:50,
          duration:4,
          repeat: Infinity
        }}
           className='h-[30px] w-[30px]
          xsm:w-[40px] xsm:h-[40px] 
          sm:w-[45px] sm:h-[45px]
          md:w-[50px] md:h-[50px]
          lg:w-[60px] lg:h-[60px]
          xl:w-[74px] xl:h-[73px] 
          absolute
          top-[60px] left-[-20px]
          sm:left-[20px]
          ' src={SettingIcon} alt="icon" />
        </div>
        <div 
        data-aos="zoom-in"
        data-aos-duration="1500"
        className='w-full h-0 relative'>
        <motion.img 
        animate={{
          y:[-2,7,-2],
        }}
        transition={{
          type: spring,
          stiffness:50,
          duration:4.5,
          repeat: Infinity
        }} 
          className='h-[auto] w-[30px]
          xsm:w-[40px] 
          sm:w-[45px]
          md:w-[50px]
          lg:w-[60px]
          xl:w-[95px]
          absolute 
          right-[-20px] top-[28.1rem]
          xsm:right-0
          lg:top-[17rem]'
          src={ClockIcon} alt="icon" />
        </div>
        
        <div className='w-full'>
          {/* Texts */}
          <div 
          data-aos="fade-up"
          data-aos-duration="1500"
          className='w-full'>
            <HeadingTexts tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
          </div>
          {/* Card Section */}
          <div>
            <Cards/>
          </div>
        </div>

      </div>
        

    </div>
  )
}

export default Services