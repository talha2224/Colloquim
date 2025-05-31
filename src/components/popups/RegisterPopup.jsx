import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import Logo from '../../assets/logo.svg'
import toast from 'react-hot-toast'
import axios from 'axios'
import baseUrl from '../../config'
const RegisterPopup = ({ setregisterPopup }) => {

  const [data, setData] = useState({ name: "", password: "" })

  const onChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (data?.name.length === 0 || data?.password.length === 0) {
      toast.error("All Fields Are Required")
    }
    else {
      try {
        let res = await axios.post(`${baseUrl}/account/register`, data)
        if (res) {
          localStorage.setItem("userId", res?.data?.data?._id)
          toast.success("Account Created")
          setregisterPopup(false)
        }
      }
      catch (error) {
        console.log(error)
        if (error.status == 403) {
          toast.error("Name Exits")
        }
      }
    }
  }


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

      <input onChange={(e)=>onChangeInput(e)} type="text" name='name' className='bg-[#262626] w-[100%] mt-6 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='Username' />
      <input onChange={(e)=>onChangeInput(e)} type='password' name='password' className='bg-[#262626] w-[100%] mt-2 rounded-md h-[2.3rem] px-3 placeholder:text-white' placeholder='Create password' />

      <button onClick={handleSubmit} className='mt-4 rounded-xl w-[100%] h-[2.3rem] bg-[#E83144]'>Continue</button>
      <p className='mt-3 text-sm text-center'>Already have an account? <span className='text-[#4055e2] cursor-pointer'>Login</span></p>
    </div>
  )
}

export default RegisterPopup