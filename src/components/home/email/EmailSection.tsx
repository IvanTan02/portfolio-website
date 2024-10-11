'use client';
import React, { FormEvent, useState } from 'react'
import { GiftIcon, LinkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import styles from './EmailSection.module.css';
import { FaCheck, FaEnvelope } from 'react-icons/fa6';

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
    <section className="text-neutral-content w-full px-10 lg:px-24">
      <h2 className="section-title">Contact Me</h2>
      <div className='flex justify-center'>
        {/* Email Form */}
        <div className={`${styles.contact_form}`}>
          <form className='flex flex-col gap-6' onSubmit={onContactFormSubmitted}>
            {/* Email */}
            <div>
              <label htmlFor='email' className={`${styles.form_label}`}>Your email</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaEnvelope className="text-primary mr-2" />
                <input id="email" type="email" className="grow" placeholder="johndoe@mail.com" />
              </label>
            </div>
            {/* Subject */}
            <div>
              <label htmlFor='subject' className={`${styles.form_label}`}>Subject</label>
              <label className="input input-bordered flex items-center gap-2">
                <FaCheck className="text-primary mr-2" />
                <input id="subject" type="text" className="grow" placeholder="Subject" />
              </label>
            </div>
            {/* Text Area */}
            <div>
              <label htmlFor="message" className={`${styles.form_label}`}>Message</label>
              <textarea id="message" className="textarea textarea-bordered w-full text-base" placeholder="Send me your deepest darkest secrets!"></textarea>
            </div>
            {/* Submit */}
            <button type="submit" className="btn btn-outline btn-primary font-semibold mt-3">Send Message</button>
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