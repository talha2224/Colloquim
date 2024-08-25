import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Filters = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <div className='flex items-center gap-x-3 overflow-x-auto w-[100%]'>
      {
        arr?.map((i) => (
          <button className={`${i === 1 ? "bg-white text-black" : "bg-[#262626]"} min-w-[5rem] min-h-[2rem] rounded-2xl text-sm`}>#hashtag</button>
        ))
      }
      <div className={`bg-[#262626] min-w-[2rem] min-h-[2rem] rounded-md flex items-center justify-center cursor-pointer`}><FaSearch /></div>

    </div>
  )
}

export default Filters