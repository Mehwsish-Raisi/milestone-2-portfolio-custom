"use client";

import Hero from '@/components/Hero/Hero'
import React, { useEffect } from 'react'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <div> 
      
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default Home