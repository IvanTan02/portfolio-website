'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import NavbarLink, { NavbarLinkProps } from './NavbarLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavbarMenuOverlay from './NavbarMenuOverlay';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { CONSTANTS } from '@/environments/constant';

import styles from './Navbar.module.css';
import { FaCode } from 'react-icons/fa';

const navLinks: NavbarLinkProps[] = [
  { children: 'About Me', href: '#about' },
  { children: 'Projects', href: '#projects' },
  // { children: 'Contact', href: '#contact' }
];

const socialLinks: NavbarLinkProps[] = [
  { children: <AiFillGithub className='h-6 w-6' />, href: CONSTANTS.socialLinks.GitHub, openNewTab: true },
  { children: <AiFillLinkedin className='h-6 w-6' />, href: CONSTANTS.socialLinks.LinkedIn, openNewTab: true }
]

const Navbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  const onScrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState({}, document.title, '/');
  }

  return (
    <nav className={`${styles.navbar_container}`}>
      <div className={`${styles.navbar}`}>
        <button onClick={onScrollBackToTop} className={`${styles.navbar_logo}`}><FaCode /></button>

        {/* Full Navbar Menu */}
        <div className='hidden md:block md:w-auto' id='navbar'>
          <ul className='flex md:flex-row items-center space-x-2'>
            {navLinks.map((navLink, index) =>
              (<li key={index}><NavbarLink href={navLink.href} openNewTab={navLink.openNewTab}>{navLink.children}</NavbarLink></li>)
            )}
            {socialLinks.map((navLink, index) =>
              (<li key={index}><NavbarLink href={navLink.href} openNewTab={navLink.openNewTab}>{navLink.children}</NavbarLink></li>)
            )}
          </ul>
        </div>

        {/* Mobile Burger Menu */}
        <div className="block md:hidden">
          {
            isNavbarOpened ?
              (<button onClick={() => setIsNavbarOpened(false)} className={`${styles.burger_menu_button}`}><XMarkIcon className='h-6 w-6' /></button>)
              :
              (<button onClick={() => setIsNavbarOpened(true)} className={`${styles.burger_menu_button}`}><Bars3Icon className='h-6 w-6' /></button>)
          }
        </div>
      </div>
      {/* Mobile Navbar Menu Overlay */}
      {isNavbarOpened ? <NavbarMenuOverlay navLinks={navLinks} socialLinks={socialLinks} /> : null}
    </nav>
  )
}

export default Navbar