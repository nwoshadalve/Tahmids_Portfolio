import React from 'react';
import {RiCalendarCheckLine} from 'react-icons/ri';
import {RiFacebookFill, RiInstagramFill, RiLinkedinFill} from 'react-icons/ri';
import Logo from '../../images/footer/logo.png';
import { Link } from 'react-router-dom';
import icon from '../../images/footer/icon.png';

const Footer = () => {
  return (
  <footer
  data-aos="fade-up"
  data-aos-duration="1200"
  className='w-full footerBg relative'>
    <img src={icon} alt="icon" 
    className='w-[100px] lg:w-[200px] md:w-[150px] sm:w-[120px] absolute 
    top-[-10px] lg:top-[0px] sm:top-[-20px] 
    right-[10%] lg:right-[10%]'
    />
    {/* Content Starts from here */}
    <div className='w-full pt-[60px] md:pt-[176px] pb-[40px] md:pb-[95px]'>
    <div className='w-full text-white'>
        {/* First Part */}
        <div className='w-full'>
          <h1
          data-aos="fade-right"
          data-aos-duration="1200"
          className='w-[90vw] ism:w-[350px] sm:w-[480px] md:w-full mx-auto fontBold font-bold 
          text-[32px] sm:text-[42px] lg:text-[48px] 
          leading-[30.94px] sm:leading-[40px] lg:leading-[46.42px]
          text-center mb-[16px]
          '>Let’s build something together</h1>
          <p 
          data-aos="fade-up"
          data-aos-duration="1200"
          className='w-[90vw] ism:w-[320px] sm:w-[440px] md:w-[650px] mx-auto 
          fontRegular text-[16px] leading-[21.82px] text-center
          font-normal mb-[44.72px]
          '>At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency</p>
          <button
          data-aos="fade-up"
          data-aos-duration="1200"
          className='w-[220px] h-[43.44px] md:w-[244px] md:h-[67px] mx-auto fontRegular text-[14.03px] md:text-[16px] leading-[13.57px] font-semibold
          footerBtn transition-all ease-in duration-500 origin-left
          '>Schedule a free call
              <RiCalendarCheckLine className='w-[20px] md:w-[25px] md:h-[25px] h-[20px] rounded-[5px] calendarHover opacity-80'></RiCalendarCheckLine>
          </button>
        </div>
        {/* Seond Part */}
        <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className='w-full mt-[44.56px] md:mt-[100px] lg:flex lg:items-center lg:justify-around lg:px-[90px]'>
          <div className='w-full lg:max-w-[670px]'>
            <p className='w-[269px] lg:w-[full] sm:w-[400px] md:w-full mx-auto lg:mx-0
            fontRegular text-[18px] leading-[24.55px]
            text-center font-normal
            '>© 2023 Tahmidul Hassan, All Rights Reserved. Developed by MD. Nwoshad Alam</p>
          </div>
          <div className='w-[80vw] xsm:w-[390px] lg:w-[390px] mx-auto lg:mx-0 mt-[12px] lg:mt-0
          fontRegular text-[18px] leading-[25px] font-normal
          underline flex justify-center items-center flex-wrap
          gap-5'>
            <p className='seperatorLink cursor-pointer'>Support</p>
            <p className='cursor-pointer seperatorLink2'>Privacy policy</p>
            <p className='cursor-pointer'>Terms and conditions</p>
          </div>
        </div>
        {/* diveder */}
        <div
        data-aos="zoom-in"
        data-aos-duration="1200"
        className='w-[90vw] xsm:w-[400px] md:w-[80vw] h-[1px] bg-[#656575] mx-auto my-[30px]'>

        </div>
        {/* Third part */}
        <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className='w-full md:px-[50px] md:flex md:justify-around'>
          <div className='w-full md:w-[175px] md:flex md:items-center'>
            <img className='mx-auto' src={Logo} alt="logo" />
          </div>
          <ul className='w-full md:w-[200px] flex justify-center items-center
          fontRegular my-[30px] md:my-0 font-normal text-[16px] gap-[32px]'>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
            <Link to="/casestudies">Case studies</Link>
            </li>
          </ul>
          <div className='w-[273px] mx-auto md:mx-0 gap-[15px]
          flex justify-center items-center'>
            <p className='text-[16px] fontRegular
            font-normal leading -[15.47px]'>Stay tuned in loop:</p>
            <div className='text-[#F7B733] flex justify-center items-center gap-[15px]'>
              <RiFacebookFill className='w-[30px] h-[30px] border-[1px] border-[#F7B733]
              text-center rounded-[5px] p-[2px] cursor-pointer
              hover:bg-[#F7B733] hover:text-[white]
              transition-colors ease-linear origin-center
              duration-500'></RiFacebookFill>
              <RiInstagramFill className='w-[30px] h-[30px] border-[1px] border-[#F7B733]
              text-center rounded-[5px] p-[2px] cursor-pointer
              hover:bg-[#F7B733] hover:text-[white]
              transition-colors ease-linear origin-center
              duration-500'></RiInstagramFill>
              <RiLinkedinFill className='w-[30px] h-[30px] border-[1px] border-[#F7B733]
              text-center rounded-[5px] p-[2px] cursor-pointer
              hover:bg-[#F7B733] hover:text-[white]
              transition-colors ease-linear origin-center
              duration-500'></RiLinkedinFill>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer