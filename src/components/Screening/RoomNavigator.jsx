import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomNavigator = () => {
    const navigate=useNavigate();

    const [RoomId, setRoomId] = useState()
    const handleRoomLogin=()=>{
       navigate('/room'+ `/${RoomId}`);
    }
  return (
    <div className='flex  justify-center items-center w-[100vw] h-[100vh] border-4 border-indigo-500/100 '>
      <div className='border-[2px] p-[60px]  gap-[10px] border-gray-700 flex flex-col  items-center'>
    <input value={RoomId} onChange={(e)=>{ setRoomId(e.target.value)}} className='text-[25px] p-[10px] mx-[20px] ' type="text" placeholder='Enter Room Id'/>
    <button onClick={handleRoomLogin} className='bg-green-400 text-[25px] w-[299px] text-white rounded-[20px]  '>Join Room</button>
    </div>
    </div>
  )
}

export default RoomNavigator