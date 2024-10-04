'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import NavbarLink, { NavbarLinkProps } from './NavbarLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavbarMenuOverlay from './NavbarMenuOverlay';

import styles from './Navbar.module.css';

const navLinks: NavbarLinkProps[] = [
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  return (
    <nav className={styles.navbar_container}>
      <div className={`container ${styles.navbar}`}>
        <Link href={'/'} className={`${styles.navbar_logo}`}>LOGO</Link>

        {/* Full Navbar Menu */}
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row items-center md:space-x-8'>
            {navLinks.map((navLink, index) =>
              (<li key={index}><NavbarLink href={navLink.href} title={navLink.title} /></li>)
            )}
          </ul>
        </div>

        {/* Mobile Burger Menu */}
        <div className="block md:hidden">
          {
            isNavbarOpened ?
              (<button onClick={() => setIsNavbarOpened(false)} className={`${styles.burger_menu_button}`}><XMarkIcon className='h-5 w-5' /></button>)
              :
              (<button onClick={() => setIsNavbarOpened(true)} className={`${styles.burger_menu_button}`}><Bars3Icon className='h-5 w-5' /></button>)
          }
        </div>
      </div>
      {/* Mobile Navbar Menu Overlay */}
      {isNavbarOpened ? <NavbarMenuOverlay navLinks={navLinks} /> : null}
    </nav>
  )
}

export default Navbar