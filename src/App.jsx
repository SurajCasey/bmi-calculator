import { useState } from 'react'
import Hero from './components/Hero'
import YourResults from './components/YourResults'
import Tips from './components/Tips'
import Limitations from './components/Limitations'

function App() {

  return (
    <>
      <div className='flex flex-col items-center mb-24'>
        <Hero/>
        <YourResults/>
        <div className='flex justify-center'>
          <Tips/>

        </div>
        <Limitations/>
      </div>
    </>
  )
}

export default App
