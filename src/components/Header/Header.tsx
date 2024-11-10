

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import headerStyle from "./Header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={headerStyle.navbar}>
      <div className={headerStyle.head}>
        <div>
          <Link href="/">
            <div className={headerStyle.anchor}>
              <Image
                src="/images/m-logo-png-transparent.png"
                alt="m logo"
                width={100}
                height={100}
                className={headerStyle.img}
              />
              <span className={headerStyle.logoname}>Designs</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className={`${headerStyle.navLinks} ${isMenuOpen ? headerStyle.show : ""}`}>
          <li className={headerStyle.navLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={headerStyle.navLink}>
            <Link href="#about">About</Link>
          </li>
          <li className={headerStyle.navLink}>
            <Link href="#contact">Contact</Link>
          </li>
          <li className={headerStyle.navLink}>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className={headerStyle.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className={headerStyle.mobileMenu}>
          <li className={headerStyle.navLink} onClick={toggleMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className={headerStyle.navLink} onClick={toggleMenu}>
            <Link href="#about">About</Link>
          </li>
          <li className={headerStyle.navLink} onClick={toggleMenu}>
            <Link href="#contact">Contact</Link>
          </li>
          <li className={headerStyle.navLink} onClick={toggleMenu}>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;