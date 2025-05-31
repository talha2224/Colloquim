import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import baseUrl from '../config'
import axios from 'axios'

const Filters = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const [categories, setCategories] = useState([])
  const getCategoriesData = async () => {
    let res = await axios.get(`${baseUrl}/category/all`)
    setCategories(res?.data?.data)
  }

  useEffect(()=>{
    getCategoriesData()
  },[])

  return (
    <div className='flex items-center gap-x-3 overflow-x-auto w-[100%]'>
      {
        categories?.map((i) => (
          <button className={`${i === 1 ? "bg-white text-black" : "bg-[#262626]"} min-w-[5.2rem] min-h-[2rem] rounded-2xl text-sm`}># {i?.title}</button>
        ))
      }
      <div className={`bg-[#262626] min-w-[2rem] min-h-[2rem] rounded-md flex items-center justify-center cursor-pointer`}><FaSearch /></div>

    </div>
  )
}

export default Filters