import React from 'react';
import SettingsBody from '../../images/header_img/body/settings_body.png';
import SettingsIcon from '../../images/header_img/body/settings_icon.png';
import Colors from '../../images/header_img/body/Colors.png';
import Arrow from '../../images/header_img/body/Arrow.png';
import Aa from '../../images/header_img/body/Aa.png';
import ColorPage from '../../images/header_img/body/Colors_page.png';
import Gallery from '../../images/header_img/body/Image.png';
import {motion, spring} from 'framer-motion';

const InnerItems = () => {
  return (
    <div className='flex items-end w-full'>
        {/* Setting icon */}
            <img
            className='w-16 h-16 object-contain absolute settingBody' 
            src={SettingsBody} alt="Settings" />
            <motion.img
            animate={{
                rotate: [0,359]
            }}
            transition={{
                duration:10,
                repeat: Infinity,
                ease: "linear"
            }}
            className='w-6 absolute settingsIcon' src={SettingsIcon} alt="icon" />

        {/* Aa icon */}
        <motion.img 
        animate={{
            x:[0,2,0]
        }} 
        transition={{
          type: spring,
          stiffness:50,
          delay:3,
          duration:5,
          repeat: Infinity
        }}
        className='absolute aAIcon' src={Aa} alt="Aa" />

        {/* Gellary icon */}
        <motion.img
            animate={{
                y:[0,3,0]
            }} 
            transition={{
              type: spring,
              stiffness:50,
              delay:2,
              duration:5,
              repeat: Infinity
            }}
        className='absolute galleryIcon' src={Gallery} alt="Images" />

        {/* color selector icon */}

        <motion.img 
        animate={{
          y:[0,3,0]
        }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        className='absolute colorIcon' src={Colors} alt="colors" />

        {/* Arrow png */}
        <motion.img
        animate={{
            y:[0,2,0],
            x:[0,2,0]
        }} 
        transition={{
          type: spring,
          stiffness:50,
          delay:2,
          duration:5,
          repeat: Infinity
        }}
        className='absolute arrowIcon' src={Arrow} alt="arrow" />
        
        {/* Selector Image */}
    <motion.img 
        animate={{
            y:[0,4,0]
        }} 
        transition={{
          type: spring,
          stiffness:60,
          delay:3,
          duration:5,
          repeat: Infinity
        }}
    className='absolute selectorIcon' src={ColorPage} alt="selctor" />
    </div>
  )
}

export default InnerItems;