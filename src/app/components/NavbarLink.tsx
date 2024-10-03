import Link from 'next/link';
import React from 'react'

export interface NavbarLinkProps {
  href: string;
  title: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className='block py-2 px-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>{title}</Link>
  )
}

export default NavbarLink