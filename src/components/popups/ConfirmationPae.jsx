import React from 'react'
import Correct from '../../assets/correct.svg'

const ConfirmationPage = ({ setConfirmation }) => {
  return (
    <div className='flex justify-center items-center flex-col p-4'>
      <img src={Correct} alt="" />
      <p className='text-lg text-center'>Payment successful</p>
      <p className='text-sm text-[#606062] mt-1 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>

      <button className='mt-4 rounded-xl w-[100%] h-[2.3rem] bg-[#4055E2]' onClick={() => { setConfirmation(false) }}>Continue</button>
    </div >
  )
}

export default ConfirmationPage

