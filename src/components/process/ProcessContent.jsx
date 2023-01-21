import React from 'react';

const ProcessContent = (props) => {
    const textColor = props.color;
    const icon= props.icon;
    return (
    <>
    <div className='hidden items-center lg:flex'>
        {/* Desktop */}
        <div className={`w-[50px] h-[50px] rounded-[50%]
            flex justify-center items-center
            mr-[10px]`}>
            <img className='w-[50px] h-[50px]' src={icon} alt="icon" />
        </div>
        <div className='w-[217px] border border-transparent'>
        <p className={`text-left text-[18px] font-bold ${textColor}`}>{props.id}</p>
        <p className='text-left text-[18px] font-bold leading-[15px]'>{props.tittle}</p>
        <p className='text-left text-[12px] font-normal leading-[14px] pt-1'>{props.text}</p>
        </div>
    </div>

    {/* Mobile & tab */}
    <div className='flex lg:hidden'>
        <p className={`text-left text-[18px] font-bold ${textColor}`}>{props.id}</p>
    </div>
    </>
  )
}

export default ProcessContent;