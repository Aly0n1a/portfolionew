import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import s from './Name.module.scss';

const Name = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <section className={s.name}>
        <div className="container">
          <h1 className={s.title} data-aos="fade-up">ALYONA</h1>
          <p className={s.subtitle} data-aos="fade-up" data-aos-delay="300">
            DEVELOPER
          </p>
        </div>
      </section>
    </>
  );
};

export default Name;
