import React from 'react'

export interface ProjectTagProps {
  name: string;
  isSelected: boolean;
  onClick: (tag: string) => void;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, isSelected, onClick }) => {

  const buttonStyles = isSelected ? 'text-white border-primary' : 'text-[#ADB7BE] border-slate-600 hover:border-white';

  return (
    <button onClick={() => { onClick(name) }} className={`rounded-2xl border-2 px-6 py-3 text-xl mr-3 cursor-pointer ${buttonStyles}`}>{name}</button>
  )
}

export default ProjectTag