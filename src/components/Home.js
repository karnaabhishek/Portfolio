import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import Picture from "../assets/pic.png"

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <img className=' w-4/12 h-2/7 rounded-full' src={Picture} alt="profile"></img>
            <p className='text-pink-600'>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Abhishek Karna</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a React Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a React frontend developer specializing in building responsive websites. I have been working in improving full stack skills in MERN.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home