import React from 'react';
import Tittle from './Tittle';
import {TbSend} from 'react-icons/tb';
import Person from '../../images/subscribe/person.png';
import Mailbox from '../../images/subscribe/maillogo.png';
import Mic from '../../images/subscribe/bgicon.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Subscribe = (props) => {
  const form = useRef();
  const [isSubscribd, setIsSubscribed] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Your email address");
  const sendEmail = (e) => {
    e.preventDefault();

    if(isSubscribd === false){
      emailjs.sendForm('service_9xnodym', 'template_8xap3ax', form.current, 'sQ2a7_gZFG0x2IXH5')
      .then((result) => {
          setPlaceholderText("Thanks for your subscription");
          setIsSubscribed(true);
      }, (error) => {
        setPlaceholderText("404 error! Please try again letter");
        setIsSubscribed(false);
      });   
    }
    else{
      setPlaceholderText("You allready subscribed!");
    }
    
      e.target.reset();
  };
  return (
    <div className='w-full'>
      <div className='w-[90vw] lg:w-[1000px] xl:w-[1316px] pt-[60px] mx-auto md:px-[60px] md:py-[100px] md:flex sibsCribgSmall relative'>
        <div className='w-full'>
        <Tittle tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
        {/* input form */}
        <div className='w-full pt-[20px] pb-[20px] md:pt-[30px] md:pb-[0] transition-all ease-linear duration-500'>
        <form
        ref={form} onSubmit={sendEmail} 
        className='w-[250px] ism:w-[300px] sm:w-[400px] xsm:w-[350px] md:w-[350px] lg:w-[400px] xl:w-[576px]
        mx-auto md:mx-0 bg-[#7270FF]/40 flex justify-center ism:justify-around xl:justify-between items-center
        rounded-[16px] py-[10px] ism:px-[30px] md:px-[16px] ism:py-[15px]
        xl:pl-[30px] xl-pr-[17px] text-[white]
        text-[12px] xsm:text-[14px] xl:text-[18px] gap-4 transition-all ease-linear duration-500'>
          <input type="email" name='user_email'
          placeholder={placeholderText} required
          className='w-[100px] ism:w-[250px] md:w-[200px] xl:w-[222px]  outline-none
          bg-transparent caret-gray-300
          transition-all ease-linear duration-500' />
          <button type='submit' 
          className='subscribeButton flex justify-center items-center text-white
          px-[10px] py-[8px] ism:px-[15px] ism:py-[10px] xl:px-[32px] xl:py-[24px]
          xl:text-[16px] rounded-[11.2827px] xl:rounded-[20px] select-none'>
            <p className='mr-[7px]'>Subscribe</p>
            <TbSend className='sendIcon'/>
          </button>
        </form>
        </div>
        </div>
        {/* Images section */}
        <div className='w-full select-none'>
          <div className='w-[250px] mx-auto h-[230px] md:h-full ism:h-[260px] relative'>
            <img src={Person} alt="icon" 
            className='w-[150px] ism:w-[160px] md:w-[200px] lg:w-[264px] absolute
            bottom-0 left-[10px] md:bottom-[-100px]
            lg:bottom-[-100px] lg:left-[-70px]'/>
            <img src={Mailbox} alt="icon" 
            className='w-[130px] ism:w-[140px] md:w-[150px] lg:w-[auto] xl:w-[413px] xl:h-[202px] xl:object-cover absolute
            right-[-10px] top-[50px]
            ism:right-[-40px] ism:top-[70px]
            md:top-[85px] md:right-[-70px]
            lg:right-[-120px] lg:top-[30px]
            xl:right-[-155px] xl:top-[67px]'/>

          </div>
        </div>
        <img src={Mic} alt="icon" 
        className='w-[90px] h-[90px] absolute
        bottom-[-20px] left-[-20px] z-10
        xxxsm:hidden md:block'/>
      </div>
    </div>
  )
}

export default Subscribe