'use client';
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='grid grid-cols-1 sm:grid-cols-12'>

        {/* Hero Text */}
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200">{`Hello, I'm Ivan`}</div>
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'Entrepreneur',
                2000,
                'Chelsea FC Fan',
                2000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 text-justify' style={{ maxWidth: '90%' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis vero ipsam quos temporibus necessitatibus! Delectus maxime ducimus sint rem quo iusto quae mollitia voluptate eos nesciunt, nulla itaque quibusdam eligendi.</p>
          <div className="">
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 sm:mb-0 bg-gradient-to-r from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-r from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white'>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>

        {/* Personal Portrait */}
        <div className='col-span-4 mt-10 lg:mt-0'>
          <div className='flex justify-center items-center h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]'>
            <Image className='rounded-full' src='/images/profile-picture.jpg' alt='Portrait of Ivan Tan' width={300} height={500} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection