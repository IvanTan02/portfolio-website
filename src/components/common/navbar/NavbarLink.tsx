import Link from 'next/link';
import React from 'react'
import styles from './NavbarLink.module.css';

export interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children, openNewTab }) => {
  return (
    <Link target={openNewTab ? '_blank' : '_self'} href={href} className={`block ${styles.navbar_link}`}>{children}</Link>
  )
}

export default NavbarLink