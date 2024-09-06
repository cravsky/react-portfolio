import React from "react";
import Mailto from "react-mailto-link";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Mailto email="cravsky@gmail.com" obfuscated={true} ><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></Mailto>
          {/* <a href="mailto:myemail@email.com">myemail@email.com</a> */}
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/cravsky"><img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/cravsky"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>
      </ul>
    </footer>
  );
};
