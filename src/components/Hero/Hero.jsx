import React from "react";
import Mailto from "react-mailto-link";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.description}>Frontend Developer</p>
        <h1 className={styles.title}>Hi, I'm Krzysztof</h1>
        <p className={styles.description}>Legacy Code? No Problem.</p>
        <Mailto className={styles.contactBtn} email="cravsky@gmail.com" obfuscated={true} >Contact Me</Mailto>
      </div>
      <img
        src={getImageUrl("hero/heroImage3.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
