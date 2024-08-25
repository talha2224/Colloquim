import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import DashboardLayout from './components/DashboardLayout'
import ExplorePage from './pages/ExplorePage/ExplorePage'
import { useEffect, useState } from 'react'
import Withdraw from './pages/Token/Withdraw'
import Channel from './pages/Channel/Channel'
import MyLive from './pages/Live/MyLive'
import Following from './pages/Following/Following'
import Profile from './pages/Profile/Profile'
import Subscription from './pages/Susbcription/Subscription'

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const nav = useNavigate()
  const location = useLocation().pathname.split("/")[1]


  useEffect(() => {
    if (!location) {
      nav("/dashboard/explore")
    }
  }, [])

  return (
    <>
      <Navbar isLogin={isLogin} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <Routes>
        <Route path='/dashboard/' element={<DashboardLayout isLogin={isLogin} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />}>
          <Route path='explore' element={<ExplorePage />} />
          <Route path='token' element={<Withdraw />} />
          <Route path='channel' element={<Channel />} />
          <Route path='following' element={<Following />} />
          <Route path='profile' element={<Profile />} />
          <Route path='subscriptions' element={<Subscription />} />
          <Route path='channel/live' element={<MyLive />} />
        </Route>
      </Routes>


    </>
  )
}

export default App
