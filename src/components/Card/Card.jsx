import React, { useEffect } from "react";
import s from "./Card.module.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import dbjson from "../../db.json"; 

const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className={s.cards}>
      <div className="container">
        <div className={s.gallery}>
          {dbjson.projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={s.card}
              data-aos="zoom-in-down"
              data-aos-delay={`${index * 100}`}
            >
              <div className={s.cardContent}>
                <img src={project.src} alt={project.alt} className={s.image} />
                <div className={s.text}>
                  <h2>{project.title}</h2>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className={s.buttoncontainer} data-aos="fade-up" data-aos-delay="300">
          <Link to="/contact" className={s.button}>
            &rarr; Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
