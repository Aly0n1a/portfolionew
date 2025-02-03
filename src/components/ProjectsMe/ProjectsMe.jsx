import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import s from './ProjectsMe.module.scss';

const ProjectsMe = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <>
      <div className={s.projectsme}>
        <div className="container">
          <h1 
            className={s.title} 
            data-aos="fade-down"
          >
            MY PROJECTS
          </h1>
          <p 
            className={s.subtitle} 
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            MADE WITH LOVE
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectsMe;
