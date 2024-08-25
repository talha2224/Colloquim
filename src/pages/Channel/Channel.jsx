import React, { useState } from 'react'
import { BsBroadcast } from 'react-icons/bs'
import { IoIosSettings } from 'react-icons/io'
import Lives from '../../assets/lives.svg'
import Counter from '../../components/popups/Counter'
const Channel = () => {

  const [counter, setcounter] = useState(false)
  return (

    <>
      <div className='flex justify-between items-center flex-wrap'>
        <div>
          <h1 className='text-lg'>My channel</h1>
          <p className='text-[#606062] text-sm'>Nemo enim ipsam voluptatem</p>
        </div>

        <div onClick={() => { setcounter(true) }} className='flex cursor-pointer items-center justify-center w-[11rem] h-[2.3rem] rounded-md gap-x-2 bg-[#4055e2]'>
          <BsBroadcast />
          <p className='text-sm'>Start broadcasting</p>
        </div>
      </div>

      <div className='flex items-center gap-x-4 rounded-md bg-[#262626] w-[14rem] h-[2.3rem] px-3 mt-5 cursor-pointer'>
        <IoIosSettings />
        <p>Live settings</p>
      </div>


      <p className='border-b border-[#262626] text-lg mt-4 pb-2 mt-6'>My live sessions</p>
      <p className='mt-3 text-sm'>Today - 02:33 AM</p>


      <img src={Lives} alt="" className='mt-5' />


      {
        counter && (

          <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50'>
            <div className='w-[30%] p-4 rounded-md bg-[#1d1d1f]'>
              <Counter setCounter={setcounter} />
            </div>
          </div>
        )
      }

    </>

  )
}

export default Channel