'use client';
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'EPLCentral',
    description: 'Football web app centered around the English Premier League (EPL)',
    image: '/images/projects/epl-central.png',
    category: ['All', 'Web'],
    githubUrl: 'https://github.com/IvanTan02/football-web-app',
    previewUrl: ''
  },
  {
    id: 2,
    title: 'CampBuddy',
    description: 'Campground review platform that allows users to submit information about campgrounds all over the world.',
    image: '/images/projects/camp-buddy.png',
    category: ['All', 'Web'],
    githubUrl: 'https://github.com/IvanTan02/campbuddy',
    previewUrl: ''
  },
  {
    id: 3,
    title: 'FoodX Kitchen Inventory App',
    description: 'App that helps users to keep track and manage their household food inventory.',
    image: '/images/projects/foodx-kitchen-inventory-management.png',
    category: ['All', 'Mobile'],
    githubUrl: 'https://github.com/IvanTan02/kitchen-inventory-app',
    previewUrl: ''
  }
];

const ProjectSection = () => {

  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onTagSelected = (tag: string) => {
    setTag(tag);
  }

  const filteredProjects = projects.filter((project) => project.category.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section>
      <h2 className='text-center text-4xl font-bold text-white mt-20 mb-10'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag name={'All'} onClick={onTagSelected} isSelected={tag === 'All'} />
        <ProjectTag name={'Web'} onClick={onTagSelected} isSelected={tag === 'Web'} />
        <ProjectTag name={'Mobile'} onClick={onTagSelected} isSelected={tag === 'Mobile'} />
      </div>
      <ul ref={ref} className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) =>
        (<motion.li key={index} variants={cardVariants} initial='initial' animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.3, delay: index * 0.2 }}>
          <ProjectCard key={project.id} title={project.title} description={project.description} imageUrl={project.image} githubUrl={project.githubUrl} />
        </motion.li>)
        )}
      </ul>
    </section>
  )
}

export default ProjectSection