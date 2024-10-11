import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import styles from './ProjectCard.module.css'

export interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  technologiesUsed: string[];
  githubUrl?: string;
  previewUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, technologiesUsed, githubUrl, previewUrl }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="group relative">
        <Image src={imageUrl} alt={title} width={500} height={300} />
        {/* Overlay */}
        {(githubUrl || previewUrl) && <div className={`hidden group-hover:flex group-hover:bg-opacity-80 ${styles.overlay}`}>
          {githubUrl && <Link href={githubUrl} target="_blank" className={`group/link mr-5 ${styles.overlay_link}`}>
            <AiOutlineGithub className={`${styles.overlay_link_icon}`} />
          </Link>}
          {previewUrl && <Link href={previewUrl} className={`group/link ${styles.overlay_link}`}>
            <EyeIcon className={`${styles.overlay_link_icon}`} />
          </Link>}
        </div>}
      </figure>
      <div className="card-body flex flex-col justify-between items-center" style={{ height: '300px' }}>
        <div className="w-full">
          <h2 className={`card-title ${styles.card_title}`}>{title}</h2>
          <p className={`${styles.card_description}`}>{description}</p>
        </div>
        <div className={`card-actions ${styles.technologies_used}`}>
          {
            technologiesUsed.map((tech, index) => {
              return <div key={index} className="badge badge-neutral badge-md">{tech}</div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

