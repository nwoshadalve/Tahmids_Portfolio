import React from 'react';
import Logo from './nav_img/logo.png';
import {BsArrowRightSquare} from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';

const Nav = () => {

  let navigator = useNavigate();

  return (
    <div className='hidden w-full h-auto p-4 px-12 lg:flex items-center justify-between lg:justify-around transition-all ease-in-out duration-200'>
      
      {/* Logo Section */}
      <motion.div  
      initial={{ y: -20, opacity:0 }}
      animate={{ y: 0, opacity:1 }}
      transition={{delay: 0, y: { duration:.5 }, ease: "linear", type: "spring", stiffness:100 }}
      className='w-44 cursor-pointer'>
        <img className='object-contain' 
        onClick={()=>{
          navigator("/");
        }}
        src={Logo} alt="logo" />
      </motion.div>
      {/* Menu Items */}
      <div className='hidden lg:flex'>
        <ul className='flex gap-8'>
          <motion.li 
          whileTap={{scale:0.9}}
          whileHover={{ scale: 1.1 }} 
          initial={{ y: -20, opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          transition={{delay: 0, y: {duration:.2}, ease: "linear", type: "spring", stiffness:50 ,default: {duration:0}}}
          className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/">Home</Link></motion.li>
          <motion.li 
          whileTap={{scale:0.9}}
          whileHover={{ scale: 1.1 }} 
          initial={{ y: -20, opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          transition={{delay: 0.2, y: {duration:.2}, ease: "linear", type: "spring", stiffness:50 ,default: {duration:0}}}
          className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/portfolio">Portfolio</Link></motion.li>
          <motion.li 
          whileTap={{scale:0.9}}
          whileHover={{ scale: 1.1 }} 
          initial={{ y: -20, opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          transition={{delay: 0.4, y: {duration:.2}, ease: "linear", type: "spring", stiffness:50 ,default: {duration:0}}}
          className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/casestudies">Case studies</Link></motion.li>
          <motion.li 
          whileTap={{scale:0.9}}
          whileHover={{ scale: 1.1 }} 
          initial={{ y: -20, opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          transition={{delay: 0.6, y: {duration:.2}, ease: "linear", type: "spring", stiffness:50 ,default: {duration:0}}}
          className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/about">About</Link></motion.li>
          <motion.li 
          whileTap={{scale:0.9}}
          whileHover={{ scale: 1.1 }} 
          initial={{ y: -20, opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          transition={{delay: 0.8, y: {duration:.2}, ease: "linear", type: "spring", stiffness:50 ,default: {duration:0}}}
          className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/contact">Contact</Link></motion.li>
          <motion.li 
          whileTap={{scale:0.9}}
          whileHover={{ scale: 1.1 }} 
          initial={{ y: -20, opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          transition={{delay: 1, y: {duration:.2}, ease: "linear", type: "spring", stiffness:50 ,default: {duration:0}}}
          className='text-black text-base font-normal cursor-pointer
                        hover:text-headingColor duration-500 
                        transition-all ease-in-out select-none'>
                          <Link to="/blog">Blog</Link></motion.li>
        </ul>
      </div>
      {/* Button */}
      <div className='flex'>
            
            <motion.div 
            initial={{ y: -10, opacity:0 }}
            animate={{ y: 0, opacity:1 }}
            transition={{ delay: 0, ease: "linear",duration:1 }}
            className='headerButton flex items-center select-none'
            onClick={()=>{
              navigator("/contact");
            }}
            >
                <p className='text-base font-semibold
                 text-white'>Start a project</p>
                <BsArrowRightSquare className='text-white hTextHover'></BsArrowRightSquare>

            </motion.div>
      </div>

    </div>
  )
}

export default Nav