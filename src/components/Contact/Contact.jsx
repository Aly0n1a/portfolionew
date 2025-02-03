import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import s from './Contact.module.scss';

const Contact = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <>
      <div className={s.contact}>
        <div className="container">
          <h1 
            className={s.title} 
            data-aos="fade-down"
          >
            CONTACT ME
          </h1>
          <p 
            className={s.subtitle} 
            data-aos="fade-up" 
            data-aos-delay="300" 
          >
            SAY HELLO TO ME
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
