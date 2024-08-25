import React from 'react'
import { ImCross } from 'react-icons/im'
import Logo from '../../assets/logo.svg'
const RegisterPopup = ({ setregisterPopup }) => {
  return (
    <div>
      <div className='flex justify-between items-center'>


        <div className='flex items-center gap-x-3'>
          <img src={Logo} alt="" className='h-[2rem]' />
          <p>Colloquium</p>
        </div>


        <ImCross onClick={() => { setregisterPopup(false) }} className='cursor-pointer' />
      </div>
      <p className=' text-white mt-3'>Sign up</p>
      <p className='text-sm text-[#606062] mt-1'>Create a username and a password</p>

      <input type="text" className='bg-[#262626] w-[100%] mt-6 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='Username' />
      <input type="text" className='bg-[#262626] w-[100%] mt-2 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='Create password' />

      <button className='mt-4 rounded-xl w-[100%] h-[2.3rem] bg-[#E83144]'>Continue</button>
      <p className='mt-3 text-sm text-center'>Already have an account? <span className='text-[#4055e2] cursor-pointer'>Login</span></p>
    </div>
  )
}

export default RegisterPopup