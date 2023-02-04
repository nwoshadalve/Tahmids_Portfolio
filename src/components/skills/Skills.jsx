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
        <div 
        data-aos="fade-down"
        data-aos-duration="1200"
        className='w-full pt-[60px] lg:pt-[100px]
            pb-[60px] md:pb-0 select-none'>
            <HeadingTexts tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
            {/* Icons */}
          <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className='w-full h-0 relative'>            
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
              src={Icon1} alt="icon" className='
              absolute w-[40px] sm:w-[45px] md:w-[55px] lg:w-[60px] xl:w-[93px]
              right-[5vw] top-[7vh]
              ism:right-[10vw] ism:top-[7vh]
              xsm:right-[10vw] xsm:top-[7vh]
              sm:right-[10vw]
              md:left-[5vw] md:top-[-15vh]
              lg:top-[250px]
              xl:top-[350px]
              ' />
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
              src={Icon2} alt="icon" className='
              absolute w-[40px] sm:w-[45px] md:w-[55px] lg:w-[60px] xl:w-[93px]
              left-[5vw] top-[590px] 
              sm:right-[10vw]
              md:top-[-70px] md:right-[40px] md:left-[auto]
              '/>
          </div>
          {/* icons end */}
        </div>
        <div className='w-full pb-[60px] md:pb-20 lg:pb-40 xl:pb-[237px] xl:pt-[40px] skillsBg'>
          <div className='w-[90vw] mx-auto md:w-[80vw] mt-10
           flex flex-col md:flex-row lg:flex-row justify-between'>
            {/* first part */}
            <div className='w-[60px] h-[450px] xl:h-[685px] xl:w-[110px] 
            border-l-2 border-t-2 border-[#656575]
            relative pt-[30px] lg:ml-[15vw] xl:ml-[5vw]'>
              <div className='w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] border-2 border-[#656575]
              flex justify-center items-center rounded-[50%]
              absolute top-[-27px] left-[58px]
              xl:top-[-35px] xl:left-[107px]'>
                <img
                className='w-[33px] h-[33px] xl:w-[35px] xl:h-[auto]' 
                src={icon1} alt="icon" />
              </div>
              {/* content */}
              {
                expData.map((elem,i)=>{
                  const {date, designation, company} = elem
                  return (
                    <div key={designation}  
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className='w-[240px] xl:w-[409px] sm:w-[300px] xxsm:w-[260px] lg:w-[390px]
                    pl-[20px] xl:pl-[65px] pt-[20px] xl:pt-[56px] text-white absolute itemsBorderLeft
                    top-[0px]'>
                    <p className='text-[12px] xl:text-[16px] xl:leading-[21.82px] font-thin fontRegular leading-[30px]'>{date}</p>
                    <p className='text-[18px] xl:text-[24px] xl:leading-[23.21px] xl:pt-[15px] xl:pb-[7px] font-bold fontBold leading-[20px]'>{designation}</p>
                    <p className='text-[14px] xl:text-[18px] xl:leading-[24.55px] font-normal leading-[23px]'>{company}</p>
                    </div>
                  )
                })
              }
            </div>
            {/* second part */}
            <div className='w-[60px] md:h-[450px] h-[520px] lg:h-[450px] xl:h-[685px] xl:w-[110px]
            border-r-2 ml-auto md:border-l-2 md:border-r-0 border-t-2 border-[#656575]
            relative pt-[30px] md:mr-[auto] lg:mr-[24vw] mt-[60px] md:mt-0'>
              {/* icon */}
              <div className='w-[55px] h-[55px] 
              xl:w-[70px] xl:h-[70px] border-2 border-[#656575]
              flex justify-center items-center rounded-[50%]
              absolute 
              md:top-[-27px] md:left-[58px]
              top-[-27px] right-[58px]
              xl:top-[-35px] xl:left-[107px]'>
                <img
                className='w-[33px] h-[33px] xl:w-[35px] xl:h-[auto]' 
                src={icon2} alt="icon" />
              </div>
              {/* content */}
              {
                eduData.map((elem,i)=>{
                  const {date, deg, ins} = elem
                  return (
                    <div key={deg} 
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className='w-[240px] lg:w-[401px] xl:w-[577px] md:w-[380px] sm:w-[300px] xxsm:w-[260px]
                    pr-[20px] md:pl-[20px] pt-[20px] xl:pt-[56px] xl:pl-[65px] text-white absolute itemsBorderLeft2
                    lg:top-[0px]
                    top-0
                    right-[182px]
                    xxsm:right-[202px] sm:right-[242px] md:right-0 lg:right-0
                    text-right md:text-left'>
                    <p className='text-[12px] xl:text-[16px] xl:leading-[21.82px] font-thin fontRegular leading-[30px]'>{date}</p>
                    <p className='text-[18px] xl:text-[24px] xl:leading-[23.21px] xl:pt-[15px] xl:pb-[7px] font-bold fontBold leading-[20px]'>{deg}</p>
                    <p className='text-[14px] xl:text-[18px] xl:leading-[24.55px] font-normal leading-[23px]'>{ins}</p>
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