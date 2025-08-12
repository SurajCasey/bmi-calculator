import React from 'react'

const TipsCard = ({imgSrc, title, content}) => {
  return (
    <div 
      className='flex flex-col my-14 mx-6 sm:flex-row sm:my-12 sm:mx-10 sm:gap-10
        sm:items-center lg:flex-col lg:gap-12 lg:items-start lg:mx-0 lg:my-0'
    >
      <img 
        src={imgSrc}
        alt={title} 
        className='w-16 h-16 mb-8 sm:mb-0'
      />
      <div>
        <h3
          className='mb-6 text-blue-900 font-semibold text-2xl leading-7'
        >
          {title}
        </h3>
        <p
          className='text-grey-500 leading-[1.5]'  
        >
          {content}
        </p>
      </div>
    </div>
  )
}

export default TipsCard