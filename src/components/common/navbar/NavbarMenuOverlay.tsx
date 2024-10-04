import React from 'react'
import NavbarLink, { NavbarLinkProps } from './NavbarLink'

export interface NavbarMenuOverlayProps {
  navLinks: NavbarLinkProps[];
  socialLinks?: NavbarLinkProps[];
}

const NavbarMenuOverlay: React.FC<NavbarMenuOverlayProps> = ({ navLinks, socialLinks }) => {
  return (
    <>
      <ul className='flex flex-col items-center md:hidden'>
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <NavbarLink href={navLink.href} openNewTab={navLink.openNewTab}>{navLink.children}</NavbarLink>
          </li>
        ))}
      </ul>
      <ul className='flex flex-row justify-center items-center md:hidden py-2'>
        {socialLinks && socialLinks.map((navLink, index) => (
          <li key={index}>
            <NavbarLink href={navLink.href} openNewTab={navLink.openNewTab}>{navLink.children}</NavbarLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavbarMenuOverlay