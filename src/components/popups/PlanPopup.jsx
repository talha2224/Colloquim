import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import Logo from '../../assets/logo.svg'
import Plan1 from '../../assets/plan-1.svg'
import Plan2 from '../../assets/plan-2.svg'
import Plan3 from '../../assets/plan-3.svg'
import Plan4 from '../../assets/plan-4.svg'

const PlanPopup = ({ setregisterPopup, setPayment }) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-3'>
          <img src={Logo} alt="" className='h-[2rem]' />
          <p>Colloquium</p>
        </div>
        <ImCross onClick={() => { setregisterPopup(false) }} className='cursor-pointer' />
      </div>
      <p className=' text-white mt-3'>Purchase Tokens</p>
      <p className='text-sm text-[#606062] mt-1'>Nemo enim ipsam voluptatem</p>

      <div className='flex justify-between items-center mt-2 flex-wrap'>
        <img onClick={() => { setregisterPopup(false); setPayment(true) }} src={Plan1} alt="" className='h-[15rem] cursor-pointer' />
        <img onClick={() => { setregisterPopup(false); setPayment(true) }} src={Plan2} alt="" className='h-[15rem] cursor-pointer' />
      </div>
      <div className='flex justify-between items-center mt-2 flex-wrap'>
        <img onClick={() => { setregisterPopup(false); setPayment(true) }} src={Plan3} alt="" className='h-[15rem] cursor-pointer' />
        <img onClick={() => { setregisterPopup(false); setPayment(true) }} src={Plan4} alt="" className='h-[15rem] cursor-pointer' />
      </div>


    </div>
  )
}

export default PlanPopup

