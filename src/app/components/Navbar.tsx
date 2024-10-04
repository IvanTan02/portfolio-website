'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import NavbarLink, { NavbarLinkProps } from './NavbarLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavbarMenuOverlay from './NavbarMenuOverlay';

const navLinks: NavbarLinkProps[] = [
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className='flex container flex-wrap justify-between items-center mx-auto px-4 py-2 lg:py-4'>
        <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>

        {/* Mobile Burger Menu */}
        <div className="block md:hidden">
          {
            isNavbarOpened ?
              (<button onClick={() => setIsNavbarOpened(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><XMarkIcon className='h-5 w-5' /></button>)
              :
              (<button onClick={() => setIsNavbarOpened(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5' /></button>)
          }
        </div>

        {/* Full Navbar Menu */}
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row items-center md:space-x-8 mt-10'>
            {navLinks.map((navLink, index) =>
              (<li key={index}><NavbarLink href={navLink.href} title={navLink.title} /></li>)
            )}
          </ul>
        </div>
      </div>
      {/* Mobile Navbar Menu Overlay */}
      {isNavbarOpened ? <NavbarMenuOverlay navLinks={navLinks} /> : null}
    </nav>
  )
}

export default Navbar