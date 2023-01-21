import React from 'react'
import HeadingTexts from '../common/HeadingTexts'

const Skills = (props) => {
  return (
    <div className='w-full bg-servicesBG'>
        <div className='w-full pt-10 md:pt-14 lg:pt-20
            pb-4 md:pb-8 select-none'>
            <HeadingTexts tittle={props.tittle} text={props.text} color={props.color} bg={props.bg}/>
        </div>
        <div className='w-full'>

        </div>
    </div>
  )
}

export default Skills