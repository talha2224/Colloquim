import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { sidebar } from '../constants/Sidebar'
import { FaUser } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const DashboardLayout = ({ isLogin, setShowSidebar, showSidebar }) => {
  const location = useLocation().pathname
  const arr = [1, 2, 3]

  return (
    <div className='h-[90vh] flex items-start overflow-y-auto'>


      {/* SIDEBAR  */}
      <div className='min-w-[15rem] h-[100%] max-w-[15rem] border-r border-[#262626] px-3 pt-7 overflow-y-auto md:block hidden'>
        {
          sidebar.map((i) => (

            <div key={i.id} className='flex items-center -[100%] h-[2.2rem] mb-[1rem]'>
              <div className={`w-[2px] h-[1rem] rounded-md ${i.link.includes(location) && "bg-[#E83144]"}`}></div>
              <Link to={i.link} className={`flex-1 ${i.id == 5 && "border border-[#262626]"}  ${i.link.includes(location) && "bg-[#262626]"} w-[100%] h-[100%] rounded-md px-2 flex items-center gap-x-3 cursor-pointer`}>
                <span className=' text-sm'>{i.icon}</span>
                <p>{i.name}</p>
              </Link>
            </div>

          ))
        }
        <span className=' text-xs text-[#606062]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</span>
        {
          isLogin ? (
            <button className='bg-[#E83144] w-[100%] h-[2rem] rounded-2xl text-sm mt-4'>Signup</button>
          )
            :
            (

              arr?.map((i, _inddx) => (
                <>
                  {
                    _inddx === 0 && (
                      <p className='mt-3'>Suggested live creators</p>
                    )
                  }
                  <div className='flex items-center justify-between mt-3'>

                    <div className='flex items-center gap-x-2'>

                      <div>
                        <div className='w-[2.3rem] h-[2.3rem] rounded-full border border-[#E83144] flex justify-center items-center'><FaUser /></div>
                      </div>

                      <div>
                        <p className='text-xs'>@johndoe...</p>
                      </div>

                    </div>

                    <div>
                      <button className='bg-[#4055e2] w-[4rem] h-[2rem] rounded-2xl text-xs flex items-center justify-center'>Join live</button>

                    </div>

                  </div>

                </>
              ))
            )
        }

      </div>
      {/* RESPONSIVE  */}

      {
        showSidebar && (
          <div className='min-w-[15rem] fixed top-0 left-0 bg-[black] h-[100%] max-w-[15rem] border-r border-[#262626] p-3 overflow-y-auto md:hidden block'>
            <ImCross onClick={()=>setShowSidebar(false)} className=' float-right '/>
            {
              sidebar.map((i) => (

                <div key={i.id} className='flex items-center -[100%] h-[2.2rem] mb-[1rem] mt-6'>
                  <div className={`w-[2px] h-[1rem] rounded-md ${i.link.includes(location) && "bg-[#E83144]"}`}></div>
                  <Link to={i.link} className={`flex-1 ${i.id == 5 && "border border-[#262626]"}  ${i.link.includes(location) && "bg-[#262626]"} w-[100%] h-[100%] rounded-md px-2 flex items-center gap-x-3 cursor-pointer`}>
                    <span className=' text-sm'>{i.icon}</span>
                    <p>{i.name}</p>
                  </Link>
                </div>

              ))
            }
            <span className=' text-xs text-[#606062]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</span>
            {
              !isLogin ? (
                <button className='bg-[#E83144] w-[100%] h-[2rem] rounded-2xl text-sm mt-4'>Signup</button>
              )
                :
                (

                  arr?.map((i, _inddx) => (
                    <>
                      {
                        _inddx === 0 && (
                          <p className='mt-3'>Suggested live creators</p>
                        )
                      }
                      <div className='flex items-center justify-between mt-3'>

                        <div className='flex items-center gap-x-2'>

                          <div>
                            <div className='w-[2.3rem] h-[2.3rem] rounded-full border border-[#E83144] flex justify-center items-center'><FaUser /></div>
                          </div>

                          <div>
                            <p className='text-xs'>@johndoe...</p>
                          </div>

                        </div>

                        <div>
                          <button className='bg-[#4055e2] w-[4rem] h-[2rem] rounded-2xl text-xs flex items-center justify-center'>Join live</button>

                        </div>

                      </div>

                    </>
                  ))
                )
            }

          </div>
        )
      }




      {/* RIGHT DYNAMIC CONTENT  */}
      <div className='py-3 md:py-7 px-5 overflow-x-auto'>
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout