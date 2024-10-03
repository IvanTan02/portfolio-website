'use client';
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200">Ivan Tan</div>
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Entrepreneur',
                1000,
                'Chelsea FC Fan',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis vero ipsam quos temporibus necessitatibus! Delectus maxime ducimus sint rem quo iusto quae mollitia voluptate eos nesciunt, nulla itaque quibusdam eligendi.</p>
          <div className="">
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 sm:mb-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white'>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-10 lg:mt-0'>
          <div className='h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]'>
            <Image className='rounded-full' src='/images/profile-picture.jpg' alt='Portrait of Ivan Tan' width={300} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection