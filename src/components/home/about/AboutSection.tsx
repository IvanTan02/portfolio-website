'use client';
import React, { useState, useTransition } from 'react'
import TabButton from '../../common/TabButton';
import { CONSTANTS, MY_SKILLS } from '@/environments/constant';
import Image from "next/image"
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className='text-white'>
      <div className="flex flex-col justify-center items-center">
        <h2 className={styles.about_me_title}>About Me</h2>
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <div className={`col-span-11 mx-16 pt-5 ${styles.about_me_text}`}>
          {CONSTANTS.heroContent.summary}
        </div>
      </div>
    </section>
  )
}

export default AboutSection