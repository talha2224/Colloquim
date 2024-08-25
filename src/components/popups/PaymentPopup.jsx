import React from 'react'
import { ImCross } from 'react-icons/im'
import Logo from '../../assets/logo.svg'
import MasterCard from '../../assets/mastercard.svg'

const PaymentPopup = ({ setPaymentPopup, setConfirmation }) => {
  return (
    <div>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-3'>
          <img src={Logo} alt="" className='h-[2rem]' />
          <p>Colloquium</p>
        </div>
        <ImCross onClick={() => { setPaymentPopup(false) }} className='cursor-pointer' />
      </div>

      <div className='flex items-center gap-x-4'>
        <p className='text-white mt-3'>Credit Card</p>
        <img src={MasterCard} alt="" className='h-[2rem]' />
      </div>
      <p className='text-sm text-[#606062] mt-1'>Your payment method is save and secure</p>

      <input type="text" className='bg-[#262626] w-[100%] mt-6 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='Your name on your card' />
      <input type="text" className='bg-[#262626] w-[100%] mt-2 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='Your card number' />
      <input type="text" className='bg-[#262626] w-[100%] mt-6 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='MM/YY' />
      <input type="text" className='bg-[#262626] w-[100%] mt-2 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='CVV' />

      <button className='mt-4 rounded-xl w-[100%] h-[2.3rem] bg-[#E83144]' onClick={() => { setPaymentPopup(false); setConfirmation(true) }}>Confirm Payment</button>
    </div >
  )
}

export default PaymentPopup
