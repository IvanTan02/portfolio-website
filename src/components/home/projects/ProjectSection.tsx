'use client';
import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import styles from './ProjectSection.module.css';

const projects = [
  {
    title: 'WashCubes',
    description: `A full stack smart laundry locker application system consisting of a user and rider app, a web admin dashboard, and a backend server and database.`,
    image: '/images/projects/epl-central.png',
    technologiesUsed: ['Dart', 'Flutter', 'Node.js', 'Express.js', 'MongoDB'],
    category: ['All', 'Web'],
    githubUrl: 'https://github.com/IvanTan02/football-web-app',
    previewUrl: ''
  },
  {
    title: 'EPLCentral',
    description: 'Football web app centered around the English Premier League (EPL)',
    image: '/images/projects/epl-central.png',
    technologiesUsed: ['HTML/CSS', 'Bootstrap.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/IvanTan02/football-web-app',
    previewUrl: ''
  },
  {
    title: 'EPLCentral',
    description: 'Football web app centered around the English Premier League (EPL) Football web app centered around the English Premier League (EPL)',
    image: '/images/projects/epl-central.png',
    technologiesUsed: ['HTML/CSS', 'Bootstrap.js', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/IvanTan02/football-web-app',
    previewUrl: ''
  }
  // {
  //   title: 'CampBuddy',
  //   description: 'Campground review platform that allows users to submit information about campgrounds all over the world.',
  //   image: '/images/projects/camp-buddy.png',
  //   category: ['All', 'Web'],
  //   githubUrl: 'https://github.com/IvanTan02/campbuddy',
  //   previewUrl: ''
  // },
  // {
  //   title: 'FoodX Kitchen Inventory App',
  //   description: 'App that helps users to keep track and manage their household food inventory.',
  //   image: '/images/projects/foodx-kitchen-inventory-management.png',
  //   category: ['All', 'Mobile'],
  //   githubUrl: 'https://github.com/IvanTan02/kitchen-inventory-app',
  //   previewUrl: ''
  // }
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
      <ul ref={ref} className='flex flex-row gap-8 md:gap-12 justify-between items-stretch flex-wrap'>
        {projects.map((project, index) =>
        (<motion.li key={index} variants={cardVariants} initial='initial' animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.3, delay: index * 0.2 }}>
          <div className="w-96 flex flex-col">
            <ProjectCard key={index} title={project.title} description={project.description} technologiesUsed={project.technologiesUsed} imageUrl={project.image} githubUrl={project.githubUrl} />
          </div>
        </motion.li>)
        )}
      </ul>
    </section>
  )
}

export default ProjectSection