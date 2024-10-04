import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  githubUrl?: string;
  previewUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, githubUrl, previewUrl }) => {
  return (
    <div>
      <div className='h-52 md:h-72 max-h-52 md:max-h-72 rounded-t-xl relative group' style={{ background: `url(${imageUrl})`, backgroundSize: 'cover' }}>
        {/* Overlay */}
        {(githubUrl || previewUrl) && <div className="justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {githubUrl && <Link href={githubUrl} className='group/link h-14 w-14 mr-5 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>}
          {previewUrl && <Link href={previewUrl} className='group/link h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>}
        </div>}
      </div>
      <div className='text-white rounded-b-xl pt-5 bg-[#181818] py-6 px-4'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard