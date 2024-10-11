'use client';
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';
import styles from './ProjectSection.module.css';

const projects = [
  {
    title: 'WashCubes',
    description: `A smart laundry locker application system consisting of a user and rider app, a web admin dashboard, and a backend server and database.`,
    image: '/images/projects/washcubes.jpg',
    technologiesUsed: ['Dart', 'Flutter', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/IvanTan02/washcubes-user-app',
    previewUrl: ''
  },
  {
    title: 'EPLCentral',
    description: 'A football information website based around the Premier League that integrates with API Football.',
    image: '/images/projects/eplcentral.png',
    technologiesUsed: ['HTML/CSS', 'Bootstrap.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/IvanTan02/football-web-app',
    previewUrl: ''
  },
  {
    title: 'CampBuddy',
    description: 'A campground review platform that allows users to submit new campground locations and leave reviews on existing campgrounds.',
    image: '/images/projects/campbuddy.png',
    technologiesUsed: ['HTML/CSS', 'Bootstrap.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/IvanTan02/campbuddy',
    previewUrl: ''
  }
];

const ProjectSection = () => {

  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const onTagSelected = (tag: string) => {
  //   setTag(tag);
  // }

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section className="text-neutral-content w-full px-10 lg:px-24">
      <h2 className={`${styles.project_title}`}>My Projects</h2>
      {/* <div className='flex flex-row justify-center items-center gap-5 py-5 mb-5'>
        <ProjectTag name={'All'} onClick={onTagSelected} isSelected={tag === 'All'} />
        <ProjectTag name={'Web'} onClick={onTagSelected} isSelected={tag === 'Web'} />
        <ProjectTag name={'Mobile'} onClick={onTagSelected} isSelected={tag === 'Mobile'} />
      </div> */}
      <ul ref={ref} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) =>
        (<motion.li key={index} variants={cardVariants} initial='initial' animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.3, delay: index * 0.2 }}>
          <div className="col-span-1 px-8 py-4">
            <ProjectCard key={index} title={project.title} description={project.description} technologiesUsed={project.technologiesUsed} imageUrl={project.image} githubUrl={project.githubUrl} />
          </div>
        </motion.li>)
        )}
      </ul>
    </section>
  )
}

export default ProjectSection