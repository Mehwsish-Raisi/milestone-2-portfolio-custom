import React from "react";
import Link from "next/link";
import Image from "next/image";
import projStyle from "./Project.module.css"


const Projects = () => {
  return (
    <div id="projects">
      <section className={projStyle.con1}>
        <div className={projStyle.con2}>
          <div className={projStyle.con3}>
            <h1 className={projStyle.h1}>
              My Projects
            </h1>
            <p className={projStyle.con4}>
              Here are my some projects... Bringing ideas to life with
              TypeScript, Next.js, and Tailwind CSS, Explore my latest web
              development projects and see innovation in action!
            </p>
          </div>
          <div className={projStyle.con5}>
            {/* Projects */}

            <div className={projStyle.con6}  data-aos="flip-up">
              <Link
                href="https://countdown-timer-01-zeta.vercel.app/"
                target="_blank"
              >
                <div className={projStyle.con7}>
                  <Image
                    alt="project 01"
                    className={projStyle.img}
                    src="/images/istockphoto.jpg"
                    width={600}
                    height={360}
                  />
                  <div className={projStyle.con8}>
                    <h2 className={projStyle.head1}>
                      Project 01
                    </h2>
                    <h1 className={projStyle.head2}>
                      Countdown Timer
                    </h1>
                    <p className={projStyle.p1}>
                      Built with Next.js and Tailwind CSS for sleek and dynamic
                      time tracking!
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={projStyle.con6} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <Link href="https://my3rd-assignment.vercel.app/" target="_blank">
                <div className={projStyle.con7}>
                  <Image
                    alt="project 02"
                    className={projStyle.img}
                    src="/images/assignment-2.webp"
                    width={600}
                    height={360}
                  />
                  <div className={projStyle.con8}>
                    <h2 className={projStyle.head1}>
                      Project 02
                    </h2>
                    <h1 className={projStyle.head2}>
                      Class Assignment
                    </h1>
                    <p className={projStyle.p1}>
                      Completed my 3rd assignment given by{" "}
                      <strong>Sir Hamza</strong>, using Next.js and Tailwind
                      CSS!
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className={projStyle.con6} data-aos="flip-up">
              <Link
                href="https://resume-iota-hazel.vercel.app/"
                target="_blank"
              >
                <div className={projStyle.con7}>
                  <Image
                    alt="project 03"
                    className={projStyle.img}
                    src="/images/resume.jpg"
                    width={600}
                    height={360}
                  />
                  <div className={projStyle.con8}>
                    <h2 className={projStyle.head1}>
                      Project 03
                    </h2>
                    <h1 className={projStyle.head2}>
                      Dynamic Resume Builder
                    </h1>
                    <p className={projStyle.p1}>
                      I&apos;m thrilled to announce that I&apos;ve completed a
                      challenging 5-milestone hackathon!
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
