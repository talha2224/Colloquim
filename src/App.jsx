import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import DashboardLayout from './components/DashboardLayout'
import ExplorePage from './pages/ExplorePage/ExplorePage'
import { useEffect, useState } from 'react'

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const nav = useNavigate()
  const location = useLocation().pathname.split("/")[1]


  useEffect(()=>{
    if(!location){
      nav("/dashboard/explore")
    }
  },[])
  
  return (
    <>
      <Navbar isLogin={isLogin} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <Routes>
        <Route path='/dashboard/' element={<DashboardLayout isLogin={isLogin} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>}>
          <Route path='explore' element={<ExplorePage showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
        </Route>
      </Routes>


    </>
  )
}

export default App
