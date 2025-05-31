import React, { useEffect, useState } from 'react'
// import Filters from '../../components/Filters'
import { FaUser } from 'react-icons/fa'
import Cover from '../../assets/Video.svg'
import Filters from '../../assets/filters.svg'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../config';


const MyLive = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, , 1, 1]
  const location = useLocation()
  let id = location.search.split("=")[1].split("?")[0]
  // console.log(id, 'roleSt')

  const randomID = (len) => {
    let result = '';
    if (result) return result;
    let chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMVCZXASDQWERTYHGFUIOLKJP', maxPos = chars.length, i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  const roomID = id;
  let role_str = location.search.split("=")[2];
  const role = role_str === 'Host' ? ZegoUIKitPrebuilt.Host : role_str === 'Cohost' ? ZegoUIKitPrebuilt.Cohost : ZegoUIKitPrebuilt.Audience;
  const appID = 531316054;
  const serverSecret = "1c717f71f0f17d8fb37ee2ebbb1afd00";

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url:window.location.protocol + '//' +window.location.host + window.location.pathname +'?roomID=' +roomID +'&role=Cohost',
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url:window.location.protocol + '//' +window.location.host + window.location.pathname +'?roomID=' +roomID +'&role=Audience',
  });

  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));


  // start the call
  let myMeeting = async (element) => {
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({container: element,showPreJoinView: false,scenario: {mode: ZegoUIKitPrebuilt.LiveStreaming,config: {role,},},sharedLinks,});
    if(role_str === 'Host'){
      let res = await axios.post(`${baseUrl}/stream/create`,{accountId:localStorage.getItem("userId"),userLink:sharedLinks[1].url,coHostLink:sharedLinks[0].url})
      console.log(res)
    }
  };


  return (
    <div className='w-[100%]'>
      {/* <Filters /> */}
      <img src={Filters} alt="" />

      <div className='flex justify-between items-start mt-4 flex-wrap overflow-y-auto'>

        <div className='flex-1 mt-2'>
          <p>Tokens earned - 0.606</p>

          <div className='relative w-[100%] mt-3'>
            {/* STREAMER PAGE VIDEO HERE REPLACE THE COVER IMAGE WITH ACTUAL VIDEO LIVE */}
            <div className="myCallContainer" ref={myMeeting} style={{ width: '100%', height: '29rem' }}></div>

            {/* <img src={Cover} alt="" className='w-[100%] h-[29rem] rounded-md' /> */}
          </div>

        </div>

        <div className='min-w-[20rem]  ml-7 shadow-5xl rounded-2xl bg-[#262626] mt-2 '>
          <p className='mb-4 pt-5 px-3'>Live Chat</p>
          {
            arr.map((i, index) => (
              <div key={index} className='py-0 px-3'>
                <div className='flex items-center gap-x-2 mb-2'>

                  <div>
                    <div className='w-[2.5rem] h-[2.5rem] rounded-full border border-[#E83144] flex justify-center items-center'><FaUser /></div>
                  </div>

                  <div>
                    <p className='text-sm'>@johndoe...</p>
                    <p className='text-xs'>Nemo enim ipsam voluptatem q</p>
                  </div>

                </div>
              </div>
            ))
          }

          <input type="text" className='bg-[#1d1d1f] w-[100%] h-[2.5rem]  border border-[#fffff] rounded-md px-3' placeholder='Write a message' />
        </div>

      </div>




    </div >
  )
}

export default MyLive
