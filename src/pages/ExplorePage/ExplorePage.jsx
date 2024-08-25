import React, { useState } from 'react'
import Filters from '../../components/Filters'
import { FaUser } from 'react-icons/fa'
import Cover from '../../assets/cover.jpeg'
import Token from '../../assets/token.png'
import Stream1 from '../../assets/streams-1.png'
import Stream2 from '../../assets/streams-2.png'
import Stream3 from '../../assets/streams-3.png'
import { AiFillEye } from 'react-icons/ai'
import PlanPopup from '../../components/popups/PlanPopup'
import PaymentPopup from '../../components/popups/PaymentPopup'
import ConfirmationPage from '../../components/popups/ConfirmationPae'

const ExplorePage = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, , 1, 1]
  const [planPopup, setplanPopup] = useState(false)
  const [payment, setPayment] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  return (
    <div className='w-[100%]'>
      <Filters />

      <div className='flex justify-between items-start mt-4 flex-wrap overflow-y-auto -z-50'>

        <div className='flex-1 mt-2'>
          <div className='flex items-center justify-between mt-3'>

            <div className='flex items-center gap-x-2'>

              <div>
                <div className='w-[3rem] h-[3rem] rounded-full border border-[#E83144] flex justify-center items-center'><FaUser /></div>
              </div>

              <div>
                <p className='text-sm'>@johndoe...</p>
                <p className='text-xs'>Nemo enim ipsam voluptatem quia voluptas</p>
              </div>

            </div>

            <div className='flex items-center gap-x-3'>
              <button className='bg-[#4055e2] w-[4rem] h-[2rem] rounded-2xl text-xs flex items-center justify-center'>Follow</button>
              <button onClick={() => { setplanPopup(true) }} className='bg-[#E83144] w-[6rem] h-[2rem] rounded-2xl text-sm'>Subscribe</button>


            </div>

          </div>

          <div className='relative w-[100%] mt-3'>
            <img src={Cover} alt="" className='w-[100%] h-[29rem] rounded-md' />

            <div className=' absolute top-[1rem] left-[1rem] flex items-center gap-x-4'>
              <button className='bg-[#E83144] w-[3.5rem] h-[2rem] rounded-2xl text-sm'>Live</button>
              <div className='flex items-center text-sm'><AiFillEye className='mr-2' /> 2.3k</div>
            </div>
          </div>

          <div className='flex items-center gap-x-4 w-[100%] overflow-x-auto mt-4'>
            <img src={Token} alt="" className='border-2 border-[#262626] max-h-[10rem] min-h-[10rem] rounded-md' />
            <img src={Token} alt="" className='border-2 border-[#262626] max-h-[10rem] min-h-[10rem] rounded-md' />
            <img src={Token} alt="" className='border-2 border-[#262626] max-h-[10rem] min-h-[10rem] rounded-md' />
            <img src={Token} alt="" className='border-2 border-[#262626] max-h-[10rem] min-h-[10rem] rounded-md' />
            <img src={Token} alt="" className='border-2 border-[#262626] max-h-[10rem] min-h-[10rem] rounded-md' />
            <img src={Token} alt="" className='border-2 border-[#262626] max-h-[10rem] min-h-[10rem] rounded-md' />
          </div>


          <p className='text-lg font-semibold mt-4'>Suggested live videos</p>

          <div className='flex items-center gap-x-4 w-[100%] flex-wrap mt-4'>
            <img src={Stream1} alt="" className=' rounded-md mb-2' />
            <img src={Stream2} alt="" className=' rounded-md mb-2' />
            <img src={Stream3} alt="" className=' rounded-md mb-2' />
            <img src={Stream1} alt="" className=' rounded-md mb-2' />
            <img src={Stream2} alt="" className=' rounded-md mb-2' />
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



      {
        planPopup && (

          <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='w-[50%] p-4 rounded-md bg-[#1d1d1f]'>
              <PlanPopup setregisterPopup={setplanPopup} setPayment={setPayment} />
            </div>
          </div>
        )
      }

      {
        payment && (

          <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='w-[30%] p-4 rounded-md bg-[#1d1d1f]'>
              <PaymentPopup setPaymentPopup={setPayment} setConfirmation={setConfirmation} />
            </div>
          </div>
        )
      }

      {
        confirmation && (

          <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='w-[30%] p-4 rounded-md bg-[#1d1d1f]'>
              <ConfirmationPage setConfirmation={setConfirmation} />
            </div>
          </div>
        )
      }

    </div >
  )
}

export default ExplorePage