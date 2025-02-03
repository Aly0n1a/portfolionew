import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import s from './About.module.scss';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <>
      <div className={s.about}>
        <div className="container">
          <h1 
            className={s.title} 
            data-aos="fade-down"
          >
            ABOUT ME
          </h1>
          <p 
            className={s.subtitle} 
            data-aos="fade-up" 
            data-aos-delay="300" 
          >
            IT’S A-ME, MARIO!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
