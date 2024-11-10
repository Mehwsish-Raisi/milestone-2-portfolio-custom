import React from "react";
import Image from "next/image";
import aboutStyle from "./About.module.css"

const About = () => {
  return (
    <div id="about">
      <section className={aboutStyle.div1}>
        <div className={aboutStyle.div2} data-aos="zoom-out-up">
          <div className={aboutStyle.div3}>
            <Image
              className={aboutStyle.img}
              alt="about picture"
              src="/images/pic.4.webp"
              width={400}
              height={300}
            />
          </div>
          <div className={aboutStyle.div4}>
            <h1 className={aboutStyle.div5}>
              About Me
            </h1>
            <p className={aboutStyle.para}>
              I am a frontend developer with a strong foundation in HTML, CSS, and
              TypeScript, currently expanding my skills by learning Next.js.
              With a Bachelor of Commerce (BCom) from the University of Karachi,
              I bring both technical expertise and a solid understanding of
              business principles to my projects.</p>
              <p className={aboutStyle.para2}> I enjoy building dynamic,
              responsive web applications and am always eager to explore new
              technologies and frameworks to enhance my development skills
            </p>
            <div className={aboutStyle.div6} id="about">
              <a href="/images/cv/resume.pdf">
              <button className={aboutStyle.btn}>
                View CV
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
