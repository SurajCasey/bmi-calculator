import React from 'react'

const LimitationsCard = ({imgSrc, title, content}) => {
  return (
    <div className='flex flex-col gap-4 shadow-box bg-white p-6 rounded-2xl lg:max-w-[365px] lg:p-8'>
        <div className='flex gap-4'>
            <img 
            src={imgSrc} 
            alt={title} 
            className='w-8 h-8'
            />
            <h3>{title}</h3>
        </div>
        <p
            className='text-grey-500 leading-[1.5]'
        >
            {content}
        </p>
    </div>
  )
}

export default LimitationsCard