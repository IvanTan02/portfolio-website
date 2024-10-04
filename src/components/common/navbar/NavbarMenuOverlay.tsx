import React from 'react'
import NavbarLink, { NavbarLinkProps } from './NavbarLink'

export interface NavbarMenuOverlayProps {
  navLinks: NavbarLinkProps[];
}

const NavbarMenuOverlay: React.FC<NavbarMenuOverlayProps> = ({ navLinks }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {navLinks.map((navLink, index) => (
        <li key={index}>
          <NavbarLink href={navLink.href} title={navLink.title} />
        </li>
      ))}
    </ul>
  )
}

export default NavbarMenuOverlay