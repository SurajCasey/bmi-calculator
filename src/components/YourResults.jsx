import React from 'react'
import ImgManEating from '../assets/images/image-man-eating.webp'
import ImgCurvePattern from '../assets/images/pattern-curved-line-left.svg'

const YourResults = () => {
  return (
    <div className='lg:flex lg:justify-center lg:items-center lg:h-[585px]'>
        <div 
            className='flex flex-col gap-12 mb-15 sm:flex-row sm:my-22 
                sm:gap-18 lg:my-0 lg:h-full lg:items-center'
        >
            
            <img 
                className='sm:w-[435px] sm:h-[411px] sm:-ml-28 lg:ml-0 lg:w-[564px] lg:h-[533px]' 
                src={ImgManEating} alt="Man eating sushi" 
            />
            
            <div className='px-6 sm:px-0 sm:py-8 flex flex-col gap-8 lg:gap-8 lg:w-[585px] lg:py-0'>
                <div className='hidden lg:flex justify-end'>
                    <img 
                     src={ImgCurvePattern} alt="curve pattern" 
                        className='hidden lg:block lg:w-[85px] lg:h-[200px] '
                    />
                </div>
               
                <h2 className='text-blue-900 font-semibold text-3xl leading-[1.1] lg:text-5xl'>
                    What your BMI result <br /> means
                </h2>
                <p className=' text-grey-500 lg:mb-[43px]'>
                    A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' 
                    Maintaining a healthy weight may lower your chances of experiencing 
                    health issues later on, such as obesity and type 2 diabetes. 
                    Aim for a nutritious diet with reduced fat and sugar content, 
                    incorporating ample fruits and vegetables. Additionally, 
                    strive for regular physical activity, 
                    ideally about 30 minutes daily for five days a week.
                </p>
            </div>

        </div>
    </div>
   
  )
}

export default YourResults