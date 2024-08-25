import React, { useState } from 'react'
// import Filters from '../../components/Filters'
import { FaUser } from 'react-icons/fa'
import Cover from '../../assets/Video.svg'
import Filters from '../../assets/filters.svg'


const MyLive = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, , 1, 1]

  return (
    <div className='w-[100%]'>
      {/* <Filters /> */}
      <img src={Filters} alt="" />

      <div className='flex justify-between items-start mt-4 flex-wrap overflow-y-auto'>

        <div className='flex-1 mt-2'>
          <p>Tokens earned - 0.606</p>

          <div className='relative w-[100%] mt-3'>
            <img src={Cover} alt="" className='w-[100%] h-[29rem] rounded-md' />
          </div>

        </div>

        <div className='min-w-[20rem]  ml-7 shadow-5xl rounded-2xl bg-[#262626] mt-2 '>
          <p className='mb-4 pt-5 px-3'>Live Chat</p>
          {
            arr.map((i, index) => (
              <div key={index} className='py-0 px-3'>
                <div className='flex items-center gap-x-2 mb-2'>

                  <div>
                    <div className='w-[2.5rem] h-[2.5rem] rounded-full border border-[#E83144] flex justify-center items-center'><FaUser /></div>
                  </div>

                  <div>
                    <p className='text-sm'>@johndoe...</p>
                    <p className='text-xs'>Nemo enim ipsam voluptatem q</p>
                  </div>

                </div>
              </div>
            ))
          }

          <input type="text" className='bg-[#1d1d1f] w-[100%] h-[2.5rem]  border border-[#fffff] rounded-md px-3' placeholder='Write a message' />
        </div>

      </div>




    </div >
  )
}

export default MyLive
