'use client';
import React, { useState, useTransition } from 'react'
import TabButton from '../../common/TabButton';

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
        <li>{`Taylor's University`}</li>
        <li>{`Manchester Metropolitan University`}</li>
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
      <div className="flex flex-col justify-center items-center">
        <h2 className='w-full text-center text-4xl font-bold border border-transparent border-b-neutral mb-5 pb-4'>Skills</h2>
      </div>
      {/* <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" onClick={() => { onTabChanged(ENUM_ABOUT_ME_TAB.SKILLS) }} className={`tab ${tab === ENUM_ABOUT_ME_TAB.SKILLS }`}>Tab 1</a>
        <a role="tab" className="tab tab-active">Tab 2</a>
        <a role="tab" className="tab">Tab 3</a>
      </div>
      <div className='flex flex-row justify-center'>
        <TabButton onTabChanged={() => { onTabChanged(ENUM_ABOUT_ME_TAB.SKILLS) }} active={tab === ENUM_ABOUT_ME_TAB.SKILLS}>{ENUM_ABOUT_ME_TAB.SKILLS}</TabButton>
        <TabButton onTabChanged={() => { onTabChanged(ENUM_ABOUT_ME_TAB.EDUCATION) }} active={tab === ENUM_ABOUT_ME_TAB.EDUCATION}>{ENUM_ABOUT_ME_TAB.EDUCATION}</TabButton>
        <TabButton onTabChanged={() => { onTabChanged(ENUM_ABOUT_ME_TAB.EXPERIENCE) }} active={tab === ENUM_ABOUT_ME_TAB.EXPERIENCE}>{ENUM_ABOUT_ME_TAB.EXPERIENCE}</TabButton>
      </div> */}
      {/* <div className="flex flex-row justify-center mt-8">
        {isPending ? <div className="animate-pulse w-16 h-16 mx-auto" /> : TAB_DATA.find(tabData => tabData.id === tab)?.content}
      </div> */}
    </section>
  )
}

export default AboutSection