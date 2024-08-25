import React, { useEffect } from 'react'
import Spinner from '../../assets/Spinner.svg'
import { useNavigate } from 'react-router-dom'

const Counter = ({ setCounter }) => {
  const nav = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      nav("/dashboard/channel/live")
    }, 3000);
  }, [])
  return (
    <div className='flex justify-center items-center flex-col p-4'>
      <p className='text-lg text-center'>Going live in...</p>
      <img src={Spinner} alt="" className='h-[3rem] mt-2 mb-2' />
      <p className='text-sm text-[#606062] mt-1 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>

      <button className='mt-4 rounded-xl w-[100%] h-[2.3rem] bg-[#E83144] ' onClick={() => { setCounter(false) }}>Cancel</button>
    </div >
  )
}

export default Counter
