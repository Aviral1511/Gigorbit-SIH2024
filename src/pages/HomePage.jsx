import React from 'react'
import Navbar from '../components/Navbar'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import PopularServices from '../components/PopularServices';

const HomePage = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div className="my-20 mx-auto bg-gray-900 w-11/12 h-96 text-white py-16 px-6 lg:px-12 relative rounded-lg">
        <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
          <div className="flex flex-col items-center mx-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src="https://images.squarespace-cdn.com/content/v1/5ebd884a75210107f7810291/60077f00-bfa9-48da-ad43-f65d04583003/pexels-pixabay-220453-min.jpeg" alt="Jordan" className="w-32 h-44 rounded-xl object-cover shadow-lg" />
          </div>
          <div className="flex flex-col items-center mx-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src="https://th.bing.com/th/id/OIP.qKxMhks4rui3ks-DkmHtxwHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain" alt="Colin" className="w-32 h-44 rounded-xl object-cover shadow-lg" />
          </div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold drop-shadow-lg my-1">
            Find the right <span className="text-green-400">freelance</span> 
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold drop-shadow-lg my-1">
            service, right away !! 
          </h1>

          <div className="mt-16 flex justify-center">
            <input type="text" placeholder="Search for any service..." className="w-3/4 lg:w-1/2 p-4 rounded-l-lg text-gray-800 border-2 border-green-300" />
            <button className="p-4 bg-green-300 text-green-900 rounded-r-lg hover:bg-green-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m-3.65 1.85a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex justify-center items-center space-x-6">
            <span className="text-gray-400">Trusted by:</span>
            <GoogleIcon />
            <FacebookIcon />
            <MicrosoftIcon />
          </div>
        </div>
      </div>
      <div><PopularServices/></div>
    </div>
  )
}

export default HomePage
