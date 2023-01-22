import React from 'react';
import HeadingTexts from '../common/HeadingTexts';
import icon1 from '../../images/skills/icon_1.png';
import icon2 from '../../images/skills/icon_2.png';
import {eduData, expData} from './qData';
import { motion, spring } from 'framer-motion';
import Icon1 from '../../images/skills/bg_icon1.png';
import Icon2 from '../../images/skills/bg_icon2.png';


const Skills = (props) => {
  return (
    <div className='w-full bg-servicesBG'>
        <div className='w-full pt-10 md:pt-14 lg:pt-20
            pb-4 md:pb-0 select-none'>
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
              right-[5vw] top-[0vh]
              ism:right-[10vw] ism:top-[0vh]
              xsm:right-[10vw] xsm:top-[3vh]
              sm:right-[10vw]
              md:left-[5vw] md:top-[-15vh]
              lg:top-[250px]
              ' />
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
              left-[5vw] top-[550px] 
              sm:right-[10vw]
              md:top-[-70px] md:right-[40px] md:left-[auto] 
              '/>
          </div>
          {/* icons end */}
        </div>
        <div className='w-full pb-40 md:pb-20 lg:pb-40 skillsBg'>
          <div className='w-[90vw] mx-auto lg:w-[80vw] mt-10
           flex flex-col md:flex-row lg:flex-row justify-between'>
            {/* first part */}
            <div className='w-[60px] h-[450px] 
            border-l-2 border-t-2 border-[#656575]
            relative pt-[30px] lg:ml-[15vw]'>
              <div className='w-[50px] h-[50px] border-2 border-[#656575]
              flex justify-center items-center rounded-[50%]
              absolute top-[-27px] left-[58px]'>
                <img
                className='w-[33px] h-[33px]' 
                src={icon1} alt="icon" />
              </div>
              {/* content */}
              {
                expData.map((elem,i)=>{
                  const {date, designation, company} = elem
                  return (
                    <div key={designation} className='w-[240px] sm:w-[300px] xxsm:w-[260px] lg:w-[390px]
                    pl-[20px] pt-[20px] text-white absolute itemsBorderLeft
                    top-[0px]'>
                    <p className='text-[12px] font-thin leading-[30px]'>{date}</p>
                    <p className='text-[18px] font-bold leading-[20px]'>{designation}</p>
                    <p className='text-[14px] font-normal leading-[23px]'>{company}</p>
                    </div>
                  )
                })
              }
            </div>
            {/* second part */}
            <div className='w-[60px] md:h-[450px] h-[520px] lg:h-[450px] 
            border-r-2 ml-auto lg:border-l-2 lg:border-r-0 border-t-2 border-[#656575]
            relative pt-[30px] lg:mr-[24vw] mt-[60px] md:mt-0'>
              {/* icon */}
              <div className='w-[55px] h-[55px] border-2 border-[#656575]
              flex justify-center items-center rounded-[50%]
              absolute 
              lg:top-[-27px] lg:left-[58px]
              top-[-27px] right-[58px]'>
                <img
                className='w-[33px] h-[33px]' 
                src={icon2} alt="icon" />
              </div>
              {/* content */}
              {
                eduData.map((elem,i)=>{
                  const {date, deg, ins} = elem
                  return (
                    <div key={deg} className='w-[240px] lg:w-[401px] md:w-[390px] sm:w-[300px] xxsm:w-[260px]
                    pr-[20px] lg:pl-[20px] pt-[20px] text-white absolute itemsBorderLeft2
                    lg:top-[0px]
                    top-0
                    right-[182px]
                    xxsm:right-[202px] sm:right-[242px] md:right-[332px] lg:right-0
                    text-right lg:text-left'>
                    <p className='text-[12px] font-thin leading-[30px]'>{date}</p>
                    <p className='text-[18px] font-bold leading-[20px]'>{deg}</p>
                    <p className='text-[14px] font-normal leading-[23px]'>{ins}</p>
                    </div>
                  )
                })
              }
            </div>

          </div>

        </div>
    </div>
  )
}

export default Skills