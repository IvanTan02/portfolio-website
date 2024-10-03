import React, { MouseEventHandler } from 'react'

export interface TabButtonProps {
  active: boolean;
  onTabChanged: MouseEventHandler;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onTabChanged, children }) => {

  const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]';

  return (
    <button onClick={onTabChanged}>
      <p className={`mr-10 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  )
}

export default TabButton