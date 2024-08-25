import React from 'react'
import Dollar from '../../assets/dollar.svg'
import Transffer from '../../assets/transffer.svg'
const Withdraw = () => {

  return (

    <div>

      <div className='flex justify-between items-center flex-wrap'>
        <div>
          <h1 className='text-lg'>Withdraw Tokens</h1>
          <p className='text-[#606062] text-sm'>Nemo enim ipsam voluptatem</p>
        </div>

        <button className='bg-[#606062] min-w-[6rem] h-[2rem] rounded-md text-sm'>Withdraw</button>
      </div>


      <div className='flex justify-between items-center overflow-x-auto mt-6 gap-x-4'>

        <div className='flex items-center gap-x-3'>
          <img src={Dollar} alt="" className='h-[1.5rem]' />
          <p className='text-[#4055E2] text-nowrap'>0.606 Tokens</p>
        </div>

        <div>
          <img src={Transffer} alt="" />
        </div>

        <div>
          <p className='text-nowrap'>0.606 XMR</p>
        </div>

        <div>
          <img src={Transffer} alt="" />
        </div>

        <div>
          <p className='text-nowrap'>$100</p>
        </div>

      </div>



      <p className='text-sm mt-4 md:w-[70%]'>You need to have a minimum of 3.034 Tokens to withdraw money.You need to add your bank details for us to send you the money. The money will be sent to you in Dollars, subtracting a 10% commission for the network + the small commission for transferring with Monero.</p>

    </div>
  )
}

export default Withdraw