import React from 'react'
import TipsCard from './TipsCard'
import img1 from '../assets/images/icon-eating.svg'
import img2 from '../assets/images/icon-exercise.svg'
import img3 from '../assets/images/icon-sleep.svg'


const Tips = () => {
  return (
    <div 
        className='lg:flex lg:gap-8 lg:my-23 lg:max-w-[1159px]'
    >
        <TipsCard
            imgSrc = {img1}
            title = "Healthy eating"
            content = "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        />
        <TipsCard 
            imgSrc =  {img2}
            title =  "Regular exercise"
            content = "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        />
        <TipsCard 
            imgSrc = {img3}
            title = "Adequate sleep"
            content = "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        />

    </div>
  )
}

export default Tips