import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ isLogin,setShowSidebar }) => {
    return (

        <div className='border-b border-[#262626] w-screen h-[17vh] md:h-fit px-5'>
            <div className='flex justify-between items-center md:my-3 mt-3'>

                {/* LOGO  */}
                <div className='flex items-center gap-x-4'>
                    <h1>Colloquium</h1>
                </div>


                {/* SEARCH BAR  */}
                <div className='bg-[#262626] hidden w-[23rem] h-[2.3rem] rounded-3xl md:flex items-center gap-x-4 px-5'>
                    <FaSearch className='text-white text-sm' />
                    <input type="text" className='flex-1 border-none outline-none bg-transparent text-sm placeholder:text-gray-300' placeholder='Search - eg. #english #girl #travel' />
                </div>



                {/* BUTTONS  */}

                {
                    !isLogin ?
                        <div className='flex gap-x-4 items-center'>
                            <button className='bg-[#262626] w-[5rem] h-[2rem] rounded-2xl text-sm'>Login</button>
                            <button className='bg-[#E83144] w-[5rem] h-[2rem] rounded-2xl text-sm'>Signup</button>
                        </div>
                        :
                        <button className='border border-[#262626]  px-3 h-[2.3rem] rounded-3xl text-sm flex justify-center items-center gap-x-3'><FaSearch className='text-white text-sm' />0.000 Tokens</button>

                }



            </div>


            <div className=' flex md:hidden justify-start items-center gap-x-4 my-2'>

                <div onClick={()=>setShowSidebar(true)} className=' flex items-center justify-center gap-x-3 bg-[#262626] h-[2rem] w-[2rem] rounded-md'>
                    <GiHamburgerMenu/>
                </div>
                <div className='bg-[#262626] flex  w-[90%] h-[2.3rem] rounded-md items-center gap-x-4 px-5'>
                    <FaSearch className='text-white text-sm' />
                    <input type="text" className='flex-1 border-none outline-none bg-transparent text-sm placeholder:text-gray-300' placeholder='Search - eg. #english #girl #travel' />
                </div>

            </div>



        </div>

    )
}

export default Navbar
