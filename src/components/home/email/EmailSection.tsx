'use client';
import React, { FormEvent, useState } from 'react'
import { GiftIcon, LinkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export interface ContactFormRequest {
  email: string;
  subject: string;
  message: string;
}

const EmailSection = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onContactFormSubmitted = async (event: any) => {
    event.preventDefault();
    const data: ContactFormRequest = {
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(`/api/send`, options);
    const responseData = await response.json();
    setIsFormSubmitted(true);
    console.log(responseData);
  }

  return (
    <section>
      <h2 className='text-center text-4xl font-bold text-white mt-20'>Contact Me</h2>
      <div className='grid md:grid-cols-2 my-12 gap-4 relative'>
        <div>
          <h5 className='text-xl font-bold text-white my-2'>{`Let's Connect`}</h5>
          <p className='text-[#ADB7BE] mb-4 max-w-md'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quos dolore ipsum iusto ducimus blanditiis eum possimus. Vel sint doloremque animi! Nam, expedita officiis in necessitatibus fugit adipisci fuga autem.
          </p>
          {/* Socials */}
          <div className='flex flex-row gap-2'>
            <Link href='https://github.com/IvanTan02'>
              <GiftIcon className='h-6 w-6 text-white' />
            </Link>
            <Link href='https://www.linkedin.com/in/ivantan02/'>
              <LinkIcon className='h-6 w-6 text-white' />
            </Link>
          </div>
        </div>
        {/* Email Form */}
        <div>
          <form className='flex flex-col gap-6' onSubmit={onContactFormSubmitted}>
            {/* Email */}
            <div>
              <label htmlFor='email' className='text-white block mb-2 text-small font-medium'>Your email</label>
              <input type="email" name="email" id="email" required placeholder='your-email@mail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3' />
            </div>
            {/* Subject */}
            <div>
              <label htmlFor='subject' className='text-white block mb-2 text-small font-medium'>Subject</label>
              <input type="text" name="subject" id="subject" required placeholder='Subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3' />
            </div>
            {/* Text Area */}
            <div>
              <label htmlFor='message' className='text-white block mb-2 text-small font-medium'>Message</label>
              <textarea name="message" id="message" required placeholder='Hello!' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3' />
            </div>
            {/* Submit */}
            <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-5 rounded-lg w-full'>Send Message</button>
            {
              isFormSubmitted && (
                <p className='text-green-500 text-sm mt-2'>Email Sent Successfully!</p>
              )
            }
          </form>
        </div>
      </div>
    </section>
  )
}

export default EmailSection;