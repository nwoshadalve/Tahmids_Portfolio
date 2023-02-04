import React from 'react'
import HeadingTexts from '../common/HeadingTexts';
import ProcessDesktop from './ProcessDesktop';
import ProcessMobile from './ProcessMobile';
import icon1 from '../../images/process/icon1.png';
import icon2 from '../../images/process/icon2.png';
import {motion,spring} from 'framer-motion';

const Process = (props) => {
  return (
    <div className='w-full py-[60px] lg:py-[0px] lg:pt-[100px] lg:pb-[41px]'>
      <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className='w-full select-none'>
        <HeadingTexts tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
      </div>
      <div className='w-full hidden lg:flex'>
        <ProcessDesktop/>
      </div>
      <div className='w-full flex lg:hidden'>
        <ProcessMobile/>
      </div>
      {/* Icons */}
      <div className='w-full h-0 relative'>
      <motion.img 
          animate={{
            y:[0,8,0],
          }}
          transition={{
            type: spring,
            stiffness:50,
            duration:4.5,
            repeat: Infinity
          }} 
        src={icon1} alt="icon" 
        className='w-[50px] md:w-[60px] lg:w-[70px] xl:w-[93px] absolute 
        bottom-[470px] left-[5px]
        xsm:bottom-[550px] xsm:left-[10px]
        md:bottom-[620px] md:left-[40px]
        lg:left-[70px]
        xl:bottom-[750px]
        '
        />
        <motion.img 
          animate={{
          y:[0,-8,0],
          }}
          transition={{
          type: spring,
          stiffness:50,
          duration:4.5,
          repeat: Infinity
          }} 
        src={icon2} alt="icon" 
        className='w-[50px] md:w-[60px] lg:w-[70px] xl:w-[93px] absolute 
        bottom-[10px] right-[5px]
        xsm:right-[10px] xsm:bottom-[15px]
        sm:right-[20px] sm:bottom-[20px]
        md:bottom-[250px] md:right-[50px]
        lg:bottom-[180px] lg:right-[70px]'
        />
      </div>

    </div>
  )
}

export default Process