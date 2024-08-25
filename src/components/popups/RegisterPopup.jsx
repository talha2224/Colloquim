import React from 'react'
import { ImCross } from 'react-icons/im'

const RegisterPopup = ({setregisterPopup}) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <p>Colloquium</p>
            <ImCross onClick={()=>{setregisterPopup(false)}} className='cursor-pointer'/>
        </div>
        <p className=' text-white mt-3'>Sign up</p>
        <p className='text-sm text-[#606062] mt-1'>Create a username and a password</p>

        <input type="text" className='bg-[#262626] w-[100%] mt-6 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='Username' />
        <input type="text" className='bg-[#262626] w-[100%] mt-2 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='Create password' />
    </div>
  )
}

export default RegisterPopup