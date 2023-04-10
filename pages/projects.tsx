import React from "react";
import Image from "next/image";
import classes from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import Head from "next/head";

const projects = () => {
  return (
    <div>
      <Head>
        <title>Proyektlərimiz</title>
      </Head>
      <section id={classes.projects}>
        <Fade bottom big>
          <div className={classes.project_wrapper}>
            <a href="">
              <Image
                alt="name"
                width="600"
                height="342"
                src="/project-1.webp"
                priority
              />
            </a>
          </div>

          <div className={classes.project_wrapper}>
            <a href="">
              <Image
                alt="name"
                width="600"
                height="342"
                src="/project-2.webp"
                priority
              />
            </a>
          </div>
          <div className={classes.project_wrapper}>
            <a href="">
              <Image
                alt="name"
                width="600"
                height="342"
                src="/project-3.webp"
                priority
              />
            </a>
          </div>
          <div className={classes.project_wrapper}>
            <a href="">
              <Image
                alt="name"
                width="600"
                height="342"
                src="/project-4.webp"
                priority
              />
            </a>
          </div>
          <div className={classes.project_wrapper}>
            <a href="">
              <Image
                alt="name"
                width="600"
                height="342"
                src="/project-5.webp"
                priority
              />
            </a>
          </div>
          <div className={classes.project_wrapper}>
            <a href="">
              <Image
                alt="name"
                width="600"
                height="342"
                src="/project-6.webp"
                priority
              />
            </a>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default projects;
