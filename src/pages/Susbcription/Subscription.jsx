import React from 'react'
import Plan1 from '../../assets/plan-1.svg'
import Plan2 from '../../assets/plan-2.svg'
import Plan3 from '../../assets/plan-3.svg'
import Plan4 from '../../assets/plan-4.svg'
const Subscription = () => {
  return (
    <div>
      <div>
        <h1 className='text-lg'>Subscribe</h1>
        <p className='text-[#606062] text-sm'>Nemo enim ipsam voluptatem</p>
      </div>


      <div className='flex  gap-x-4 items-center mt-2 flex-wrap mt-4'>
        <img src={Plan1} alt="" className='h-[15rem] cursor-pointer' />
        <img src={Plan2} alt="" className='h-[15rem] cursor-pointer' />
      </div>
      <div className='flex  gap-x-4 items-center mt-2 flex-wrap mt-4'>
        <img src={Plan3} alt="" className='h-[15rem] cursor-pointer' />
        <img src={Plan4} alt="" className='h-[15rem] cursor-pointer' />
      </div>
    </div>
  )
}

export default Subscription