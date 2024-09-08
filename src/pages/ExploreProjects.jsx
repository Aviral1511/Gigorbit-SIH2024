import ExploreCard from '../components/Explore/ExploreCard'
import React from 'react'

const ExploreProjects = () => {
  return (
    <>
   <div className='flex text-white bg-black  text-[40px] flex justify-center '>Explore Projects </div>
    <div className='mt-[20px] bg-white w-[100vw] flex justify-center flex-wrap items-center gap-[40px]'>
      <ExploreCard className='rounded-[30px] ' />
      <ExploreCard className='rounded-[30px] ' />
      <ExploreCard className='rounded-[30px] '  />
      <ExploreCard className='rounded-[30px] ' />
      <ExploreCard className='rounded-[30px] ' />
      <ExploreCard className='rounded-[30px] ' />
      <ExploreCard className='rounded-[30px] ' />
      <ExploreCard className='rounded-[30px] ' />
    </div>
    </>
  )
}

export default ExploreProjects