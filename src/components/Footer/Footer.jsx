import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss'; 

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className={styles.contact}>
          <p>meloman.ytxd@gmail.com</p>
          <p>@respectxd</p>
        </div>
        <div className={styles.logo}>
          <img src="/Logo.svg" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;