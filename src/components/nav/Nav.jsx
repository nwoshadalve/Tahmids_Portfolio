import React from 'react';
import Logo from './nav_img/logo.png';
import Arrow from './nav_img/arrow.svg';

const Nav = () => {
  return (
    <div className='hidden w-full h-auto p-4 px-12 lg:flex items-center justify-between transition-all ease-in-out duration-200'>
      
      {/* Logo Section */}
      <div className='w-44 cursor-pointer'>
        <img className='object-contain' src={Logo} alt="logo" />
      </div>
      {/* Menu Items */}
      <div className='hidden lg:flex'>
        <ul className='flex gap-8'>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <a href="/">Home</a></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <a href="/">Portfolio</a></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <a href="/">Case studies</a></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <a href="/">About</a></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <a href="/">Contact</a></li>
          <li className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <a href="/">Blog</a></li>
        </ul>
      </div>
      {/* Button */}
      <div className='flex'>
            
            <div className='headerButton flex select-none'>
                <p className='text-base font-semibold
                 text-white'>Start a project</p>
                <img src={Arrow} alt="Arrow" />

            </div>
      </div>

    </div>
  )
}

export default Nav