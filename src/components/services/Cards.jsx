import React from 'react';
import c1 from '../../images/services/cardImg/card_1.png';
import c2 from '../../images/services/cardImg/card_2.png';
import c3 from '../../images/services/cardImg/card_3.png';

const Cards = () => {
  
  const cardInfo =[
    {
      img: c1,
      title: "UX-UI",
      description:"A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea ."
    },
    {
      img: c2,
      title: "Graphics",
      description:"A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea ."
    },
    {
      img: c3,
      title: "Branding",
      description:"A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea ."
    }
  ]
  
  return (
    <div className='w-full flex flex-col lg:flex-row justify-center items-center pt-[15px] gap-5'>
      {
        cardInfo.map((item,i)=>(
          <div key={i.toString()} className='w-[270px] h-[330px] flex relative flex-col items-center border px-6 py-8 border-cardBorder rounded-[20px] cardEffect'>
            <img className='w-36 h-36 object-contain ' src={item.img} alt="img" />
            <p className='font-bold py-2 text-[24px] text-cardBorderBottom'>{item.title}<span className='text-white'> Design</span></p>
            <p className='text-justify text-[12px] text-slate-200 font-[100]'>{item.description}</p>
            <div className='w-[272px] h-7 absolute -bottom-[1px] 
            border-r-2 border-r-cardBorderBottom
            border-l-2 border-l-cardBorderBottom
            border-b-2 border-b-cardBorderBottom
            rounded-b-[20px]
            rounded-t-[1px]
            '>

            </div>
          </div>
        ))
      }
      
    </div>

  )
}

export default Cards