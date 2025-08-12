import React from 'react'
import LimitationsCard from './LimitationsCard'
import img1 from '../assets/images/icon-gender.svg'
import img2 from '../assets/images/icon-age.svg'
import img3 from '../assets/images/icon-muscle.svg'
import img4 from '../assets/images/icon-pregnancy.svg'
import img5 from '../assets/images/icon-race.svg'
import imgCurvePattern from '../assets/images/pattern-curved-line-right.svg'

const Limitations = () => {
  return (
    <div className="mx-5 my-24 sm:mx-10 lg:grid lg:grid-cols-5 lg:grid-rows-[auto_auto_auto] 
    lg:gap-8 lg:mx-[144px] lg:my-[104px] lg:max-w-[1160px] ">
      
      

      {/* Heading + Paragraph */}
        <div 
            className="flex flex-col gap-8 sm:text-center 
            lg:text-left lg:max-w-[564px] lg:col-span-2 lg:row-start-1"
        >
        <h2 
            className="font-semibold text-3xl leading-[1.1] text-blue-900"
        >
          Limitations of BMI
        </h2>
        <p 
            className="text-grey-500 leading-[1.5]">
          Although BMI is often a practical indicator of healthy weight, it is not suited for every person. 
          Specific groups should carefully consider their BMI outcomes, and in certain cases, 
          the measurement may not be beneficial to use.
        </p>
      </div>

      {/* Cards */}
        <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-5 lg:col-span-5 lg:contents"
        >
            {/* Gender */}
            <div className="lg:row-start-1 lg:col-start-3 lg:col-end-5 lg:justify-self-center">
                <LimitationsCard 
                imgSrc={img1}
                title="Gender"
                content="The development and body fat composition of girls and boys vary with age. 
                Consequently, a child's age and gender are considered when evaluating their BMI."
                />
            </div>

            {/* Age */}
            <div className="lg:row-start-2 lg:col-start-2 lg:col-end-4 lg:justify-self-end lg:relative">
                <img src={imgCurvePattern} alt="image of curve pattern" 
                        className='hidden lg:block lg:absolute lg:-top-[13px] lg:-left-[139px]'
                />
                <LimitationsCard 
                    imgSrc={img2}
                    title="Age"
                    content="In aging individuals, increased body fat and muscle loss may cause 
                    BMI to underestimate body fat content."
                />
            </div>

            {/* Muscle */}
            <div className="lg:row-start-2 lg:col-start-4 lg:col-end-6 lg:justify-self-start">
                <LimitationsCard 
                    imgSrc={img3}
                    title="Muscle"
                    content="BMI may misclassify muscular individuals as overweight or obese, 
                    as it doesn't differentiate muscle from fat."
                />
            </div>

            {/* Pregnancy */}
            <div className="lg:row-start-3 lg:col-start-1 lg:col-end-3 lg:justify-self-end">
                <LimitationsCard 
                    imgSrc={img4}
                    title="Pregnancy"
                    content="Expectant mothers experience weight gain due to their growing baby. 
                    Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
                />
            </div>

            {/* Race */}
            <div className="sm:col-span-2 sm:justify-self-center sm:max-w-[365px] lg:row-start-3 lg:col-start-3 lg:col-end-5 lg:justify-self-start">
                <LimitationsCard 
                    imgSrc={img5}
                    title="Race"
                    content="Certain health concerns may affect individuals of some Black and 
                    Asian origins at lower BMIs than others. To learn more, 
                    it is advised to discuss this with your GP or practice nurse."
            />
            </div>
      </div>
    </div>
  )
}

export default Limitations
