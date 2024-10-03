'use client';
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
import { title } from 'process';

export enum ENUM_ABOUT_ME_TAB {
  SKILLS = 'Skills',
  EDUCATION = 'Education',
  EXPERIENCE = 'Experience',
}

const TAB_DATA = [
  {
    title: 'Skills',
    id: ENUM_ABOUT_ME_TAB.SKILLS,
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Express</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: ENUM_ABOUT_ME_TAB.EDUCATION,
    content: (
      <ul className='list-disc pl-2'>
        <li>Taylor's University</li>
        <li>Manchester Metropolitan University</li>
      </ul>
    )
  },
  {
    title: 'Experience',
    id: ENUM_ABOUT_ME_TAB.EXPERIENCE,
    content: (
      <ul className='list-disc pl-2'>
        <li>Software Developer at Company A</li>
        <li>Software Developer at Company B</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState(ENUM_ABOUT_ME_TAB.SKILLS);
  const [isPending, startTransition] = useTransition();

  const onTabChanged = (id: ENUM_ABOUT_ME_TAB) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
    <section className='text-white'>
      <div className="flex flex-col justify-center items-center py-8 px-4 sm:py-16 xl:px-16">
        <h2 className='text-4xl font-bold mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum commodi asperiores aliquid ab sint! Iusto debitis minima rem doloribus atque eaque possimus unde ab. Error facere libero adipisci nisi consequatur.
          Adipisci minima rerum itaque magni nisi optio dolorum sunt incidunt vitae sed neque cupiditate, pariatur assumenda aspernatur, quod, aut sit sint qui dolor libero voluptas? Omnis sint ut fugiat fuga!</p>
      </div>
      <div className='flex flex-row justify-center'>
        <TabButton onTabChanged={() => { onTabChanged(ENUM_ABOUT_ME_TAB.SKILLS) }} active={tab === ENUM_ABOUT_ME_TAB.SKILLS} children={ENUM_ABOUT_ME_TAB.SKILLS} />
        <TabButton onTabChanged={() => { onTabChanged(ENUM_ABOUT_ME_TAB.EDUCATION) }} active={tab === ENUM_ABOUT_ME_TAB.EDUCATION} children={ENUM_ABOUT_ME_TAB.EDUCATION} />
        <TabButton onTabChanged={() => { onTabChanged(ENUM_ABOUT_ME_TAB.EXPERIENCE) }} active={tab === ENUM_ABOUT_ME_TAB.EXPERIENCE} children={ENUM_ABOUT_ME_TAB.EXPERIENCE} />
      </div>
      <div className="flex flex-row justify-center mt-8">
        {isPending ? <div className="animate-pulse w-16 h-16 mx-auto" /> : TAB_DATA.find(tabData => tabData.id === tab)?.content}
      </div>
    </section>
  )
}

export default AboutSection