import React from "react";
import Mailto from "react-mailto-link";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Krzysztof</h1>
        <h2 className={styles.description}>
        Frontend Developer
        </h2>
        <p className={styles.description}>
        Legacy Code? No Problem.
        </p>
        <Mailto className={styles.contactBtn} email="cravsky@gmail.com" obfuscated={true} >Contact Me</Mailto>
        {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
