import React from 'react';
import Logo from './nav_img/logo.png';
import Arrow from './nav_img/arrow.svg';
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

  let navigator = useNavigate();

  return (
    <div className='hidden w-full h-auto p-4 px-12 lg:flex items-center justify-between transition-all ease-in-out duration-200'>
      
      {/* Logo Section */}
      <div className='w-44 cursor-pointer'>
        <img className='object-contain' 
        onClick={()=>{
          navigator("/");
        }}
        src={Logo} alt="logo" />
      </div>
      {/* Menu Items */}
      <div className='hidden lg:flex'>
        <ul className='flex gap-8'>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/">Home</Link></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/portfolio">Portfolio</Link></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/casestudies">Case studies</Link></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/about">About</Link></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/contact">Contact</Link></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/blog">Blog</Link></li>
        </ul>
      </div>
      {/* Button */}
      <div className='flex'>
            
            <div className='headerButton flex select-none'
            onClick={()=>{
              navigator("/contact");
            }}
            >
                <p className='text-base font-semibold
                 text-white'>Start a project</p>
                <img src={Arrow} alt="Arrow" />

            </div>
      </div>

    </div>
  )
}

export default Nav