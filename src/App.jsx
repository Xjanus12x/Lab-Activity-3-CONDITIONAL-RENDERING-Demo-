import { useState } from 'react'
import './App.css'
import { RedButton, GreenButton, CustomButton } from './components/React-Demo-1'
import { ConditionalButton } from './components/React-Demo-2'
import { IsGreenBtn } from './components/React-Demo-3'
import { ConditionalFormatting2 } from './components/React-Demo-4'

function App() {
  return (
    <>
    <div>
      <h2>React Demo 1</h2>
      <div className='flex gap-1'>
       <RedButton/>
        <GreenButton/>
        <CustomButton alertMsg="Hi, i am custom button" content="Please click me" class="text-white"/>
      </div>
    </div>


    <div>
      <h2>React Demo 2</h2>
      <div className='flex gap-1'>
        <ConditionalButton isRed={true}/>
        <ConditionalButton isRed={false}/>
      </div>
    </div>


    <div>
      <h2>React Demo 3</h2>
      <div className='flex gap-1'>
          <IsGreenBtn />
      </div>
    </div>

    <div>
      <h2>React Demo 4</h2>
      <div className='flex gap-1'>
          <ConditionalFormatting2 isDarkBtn={true}/>
          <ConditionalFormatting2 isDarkBtn={false}/>
      </div>
    </div>

    </>
    
  )
}

export default App
