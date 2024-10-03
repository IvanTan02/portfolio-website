import React, { MouseEventHandler } from 'react'

export interface ProjectTagProps {
  name: string;
  isSelected: boolean;
  onClick: (tag: string) => void;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, isSelected, onClick }) => {

  const buttonStyles = isSelected ? 'text-white border-purple-500' : 'text-[#ADB7BE] border-slate-600 hover:border-white';

  return (
    <button onClick={() => { onClick(name) }} className={`rounded-full border-2 px-6 py-3 text-xl mr-3 cursor-pointer ${buttonStyles}`}>{name}</button>
  )
}

export default ProjectTag