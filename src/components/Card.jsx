import React, { useEffect, useState } from 'react';

const Card = () => {
  const [selected, setSelected] = useState('Metric');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');

  // For imperial
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [stone, setStone] = useState('');
  const [pounds, setPounds] = useState('');

  const [bmi, setBmi] = useState(null);
  const [interpretation, setInterpretation] = useState('');

  useEffect(() => {
    let h, w;

    if (selected === 'Metric') {
      h = parseFloat(heightCm);
      w = parseFloat(weightKg);
      if (h > 0 && w > 0) {
        const heightInMeters = h / 100;
        const bmiValue = w / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(1));
        setInterpretation(getInterpretation(bmiValue));
      } else {
        setBmi(null);
        setInterpretation('');
      }
    } else {
      // Imperial: combine feet+inches, stone+pounds
      const ft = parseFloat(feet) || 0;
      const inch = parseFloat(inches) || 0;
      const st = parseFloat(stone) || 0;
      const lb = parseFloat(pounds) || 0;

      // Convert height to total inches
      h = ft * 12 + inch;
      // Convert weight to total pounds
      w = st * 14 + lb;

      if (h > 0 && w > 0) {
        const bmiValue = (w * 703) / (h * h);
        setBmi(bmiValue.toFixed(1));
        setInterpretation(getInterpretation(bmiValue));
      } else {
        setBmi(null);
        setInterpretation('');
      }
    }
  }, [selected, heightCm, weightKg, feet, inches, stone, pounds]);

  const getInterpretation = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Healthy weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    return 'Obese';
  };

  // Reset all inputs on unit change
  const onUnitChange = (unit) => {
    setSelected(unit);
    setHeightCm('');
    setWeightKg('');
    setFeet('');
    setInches('');
    setStone('');
    setPounds('');
    setBmi(null);
    setInterpretation('');
  };

  return (
    <div className='bg-white flex flex-col gap-8 rounded-sm p-8 w-[564px] max-lg:w-[686px] 
        max-sm:w-[328px] max-sm:p-6 max-sm:gap-6 max-sm:rounded-2xl'
        style={{
                    boxShadow: '16px 32px 56px rgba(143, 174, 207, 0.25)'
                }}
    >
      <h1 className='font-semibold leading-7 text-2xl text-blue-900'>
        Enter your details below
      </h1>

      <div className='flex gap-6 text-blue-900 w-full'>
        <div className='flex w-1/2'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='unit'
              value='Metric'
              checked={selected === 'Metric'}
              className='mr-2 w-8 h-8 hover:cursor-pointer'
              onChange={() => onUnitChange('Metric')}
            />
            Metric
          </label>
        </div>
        <div className='flex'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='unit'
              value='Imperial'
              checked={selected === 'Imperial'}
              className='mr-2 w-8 h-8 hover:cursor-pointer'
              onChange={() => onUnitChange('Imperial')}
            />
            Imperial
          </label>
        </div>
      </div>

      <div className={`flex gap-6 max-sm:flex-col ${selected === 'Imperial' ? 'flex-col' : ''}`}>
        {/* Height */}
        <form className={`max-sm:w-full ${selected === 'Metric' ? "w-1/2": ""}`} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='height'>Height</label> <br />
          {selected === 'Imperial' ? (
            <div className='flex gap-4'>
              <div className='font-semibold text-2xl border rounded-md px-6 py-4 flex-1 flex justify-between hover:cursor-pointer'>
                <input
                  type='number'
                  placeholder='0'
                  min='0'
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  className='w-full placeholder:text-grey-500 text-grey-500 placeholder:font-semibold placeholder:text-2xl focus:outline-none'
                />
                <span className='text-blue-500'>ft</span>
              </div>
              <div className='font-semibold text-2xl border rounded-md px-6 py-4 flex-1 flex justify-between hover:cursor-pointer'>
                <input
                  type='number'
                  placeholder='0'
                  min='0'
                  max='11'
                  value={inches}
                  onChange={(e) => {
                    let val = e.target.value;
                    // Optional: Limit inches to 0-11
                    if (val === '') setInches('');
                    else if (parseInt(val) <= 11) setInches(val);
                  }}
                  className='w-full placeholder:text-grey-500 text-grey-500 placeholder:font-semibold placeholder:text-2xl focus:outline-none'
                />
                <span className='text-blue-500'>in</span>
              </div>
            </div>
          ) : (
            <div className='font-semibold text-2xl border rounded-md px-6 py-4 flex justify-between hover:cursor-pointer'>
              <input
                type='number'
                placeholder='0'
                min='0'
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className='w-full placeholder:text-grey-500 text-grey-500 placeholder:font-semibold placeholder:text-2xl focus:outline-none'
              />
              <span className='text-blue-500'>cm</span>
            </div>
          )}
        </form>

        {/* Weight */}
        <form className={`max-sm:w-full ${selected === 'Metric' ? "w-1/2": ""}`} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='weight'>Weight</label> <br />
          {selected === 'Imperial' ? (
            <div className='flex gap-4'>
              <div className='font-semibold text-2xl border rounded-md px-6 py-4 flex-1 flex justify-between hover:cursor-pointer'>
                <input
                  type='number'
                  placeholder='0'
                  min='0'
                  value={stone}
                  onChange={(e) => setStone(e.target.value)}
                  className='w-full placeholder:text-grey-500 text-grey-500 placeholder:font-semibold placeholder:text-2xl focus:outline-none'
                />
                <span className='text-blue-500'>st</span>
              </div>
              <div className='font-semibold text-2xl border rounded-md px-6 py-4 flex-1 flex justify-between hover:cursor-pointer'>
                <input
                  type='number'
                  placeholder='0'
                  min='0'
                  max='13'
                  value={pounds}
                  onChange={(e) => {
                    let val = e.target.value;
                    // Optional: Limit pounds to 0-13
                    if (val === '') setPounds('');
                    else if (parseInt(val) <= 13) setPounds(val);
                  }}
                  className='w-full placeholder:text-grey-500 text-grey-500 placeholder:font-semibold placeholder:text-2xl focus:outline-none'
                />
                <span className='text-blue-500'>lbs</span>
              </div>
            </div>
          ) : (
            <div className='font-semibold text-2xl border rounded-md py-4 px-6 flex justify-between hover:cursor-pointer'>
              <input
                type='number'
                placeholder='0'
                min='0'
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className='w-full placeholder:text-grey-500 text-grey-500 placeholder:font-semibold placeholder:text-2xl focus:outline-none'
              />
              <span className='text-blue-500'>kg</span>
            </div>
          )}
        </form>
      </div>

      <div className='bg-blue-500 text-white p-8 rounded-r-full max-sm:rounded-2xl'>
        {bmi ? (
          <div className='flex justify-between gap-6 max-sm:flex-col'>
            <div className='w-1/2 '>
              <h1>Your BMI is ...</h1>
              <span className='text-5xl font-semibold'>{bmi}</span>
            </div>
            <div className='w-1/2 max-sm:w-full'>
                Your BMI suggests you’re a {interpretation}. 
                Your ideal weight is between 
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-6'>
            <h2 className='font-semibold leading-7 text-2xl'>Welcome!</h2>
            <p className='mt- text-[14px]'>
              Enter your height and weight and you'll see your BMI result here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
