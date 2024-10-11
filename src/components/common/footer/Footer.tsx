import React from 'react'
import { FaLaughBeam } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full bg-base-100 text-neutral-content'>
      <div className='px-16 py-8 flex justify-center items-center'>
        <p>Thanks for scrolling <span><FaLaughBeam className="inline ms-1 h-5 w-5" /></span></p>
      </div>
    </footer>
  )
}

export default Footer