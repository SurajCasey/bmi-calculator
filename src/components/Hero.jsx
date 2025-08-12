import React from 'react'
import Card from './Card'
import IconLogo from '../assets/images/logo.svg'

const Hero = () => {
  return (
    <div className='relative flex flex-col gap-8 items-center mx-6 mb-15 lg:gap-6 lg:items-start  lg:h-[737px] lg:max-w-[1160px] lg:mx-0' >
        
        {/* background */}
        <div className='absolute bg-gradient-to-r from-white to-[#D6E6FE] 
            w-screen h-[640px] -z-10 rounded-b-4xl lg:w-3/4 lg:h-[737px]'
        >    
        </div>

        <div className='mt-8 lg:mt-22'>
            <img src={IconLogo} className='w-10 h-10 lg:w-16 lg:h-16' alt="logo of bmi calculator" />
        </div>

        <div className='flex flex-col items-center gap-8 lg:flex-row lg:w-full 
                lg:items-start '
        >
            <div className='text-center flex flex-col gap-6 lg:w-1/2 lg:text-left md:py-8 lg:py-18 lg:gap-8'>
                <h1 className='text-5xl font-semibold text-blue-900 lg:pr-24'>
                    Body Mass <br /> Index Calculator
                </h1>
                <p className='text-grey-500 leading-[1.5]'>
                    Better understand your weight in relation to your height using our 
                    body mass index (BMI) calculator. 
                    While BMI is not the sole determinant of a healthy weight, 
                    it offers a valuable starting point to evaluate your 
                    overall health and well-being.
                </p>
            </div>
            <Card 
                
            />
        </div>

    </div>
  )
}

export default Hero