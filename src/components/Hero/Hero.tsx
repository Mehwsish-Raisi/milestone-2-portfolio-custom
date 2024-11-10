"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import heroStyle from "./Hero.module.css"

const Hero = () => {
  return (
    <div>
      <section className={heroStyle.style1}>
        <div className={heroStyle.style2}>
          <div className={heroStyle.style3}>
            <h1 className={heroStyle.style4}>
              Hello! I&apos;m
              <br className={heroStyle.br} />
              <Typewriter
                options={{
                  strings: ["Front End Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className={heroStyle.style5}>
              I am a front-end developer specializing in crafting engaging,
              responsive, and accessible user interfaces. I work primarily with
              HTML, CSS, JavaScript, and frameworks like Next.js and React to
              build dynamic, visually appealing web applications. My focus is on
              creating seamless user experiences that not only look great but
              also provide intuitive functionality across devices.
            </p>

            <div className={heroStyle.style6}>
              <Link href="#contact">
                <button className={heroStyle.btn} >
                  Contact
                </button>
              </Link>
            </div>
          </div>
          {
            <div
              className={heroStyle.style7}
              data-aos="zoom-in-right"
            >
              {
                <Image
                  className={heroStyle.img}
                  alt="hero"
                  width={350}
                  height={350}
                  src="/images/anime.png"
                />
              }
            </div>
          }
        </div>
      </section>
    </div>
  );
};

export default Hero;
