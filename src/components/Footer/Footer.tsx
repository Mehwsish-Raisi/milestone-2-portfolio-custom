import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa";
import footStyle from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
      <footer className={footStyle.div1}>
  <div className={footStyle.div2}>
    <a className={footStyle.div3}>
    <Image src="/images/m-logo-png-transparent.png" alt="m logo" width={100} height={100} className={footStyle.wid}/>
      <span className={footStyle.span}>Designs</span>
    </a>
    
    <p className={footStyle.para}>
      © 2024 Next.js
      
    </p>
    
    <span className={footStyle.div4}>
      <Link target='_blank' href="https://www.linkedin.com/feed/" className={footStyle.link1}>
      <FaLinkedin className={footStyle.icon1} />
      </Link>
      <Link target='_blank' href="https://www.linkedin.com/feed/" className={footStyle.link2}>
      <FaGithub className={footStyle.icon1} />
      </Link>
      
    </span>
    
  </div>
</footer>

    </div>
  )
}

export default Footer
