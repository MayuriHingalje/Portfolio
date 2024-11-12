import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mayuri Hingalaje</h1>
        <p className={styles.description}>
        Passionate and dedicated technology professional in Computer Engineering seeks 
        a full-time role in a forward- thinking organization where I can use my 
        problem-solving skills and my desire for continuous learning to be a driving force for the growth of the company and its success.
     
       </p>
        <a href="mayurihingalje@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
