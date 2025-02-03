import React, { useEffect } from 'react';
import s from './Cards.module.scss';
import { Link } from 'react-router-dom';   
import AOS from "aos";
import "aos/dist/aos.css"; 

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,     
    });
  }, []);

  const images = [
    { src: '/castaway.png', link: 'https://aly0n1a.github.io/castaway/', alt: 'Project Image 1' },
    { src: '/shibuya.png', link: 'https://shibuya-eosin.vercel.app/', alt: 'Project Image 2' },
    { src: '/shop.png', link: 'https://shopcogfchgf.vercel.app/', alt: 'Project Image 3' },
  ];

  return (
    <div className={s.cards}>
      <div className="container">
        <div className={s.gallery}>
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className={s.card}
              data-aos="zoom-in-down" 
              data-aos-delay={`${index * 100}`} 
            >
              <div className={s.cardContent}>
                <img src={image.src} alt={image.alt} className={s.image} />
                <div className={s.text}>
                  <h2>Projects</h2>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className={s.buttoncontainer} data-aos="fade-up" 
          data-aos-delay="500">
      <Link to="/projects" className={s.button}>
        &rarr; All Projects
      </Link>
      <Link to="/contact" className={s.button}>
        &rarr; Contact me
      </Link>
    </div>
      </div>
    </div>
  );
};

export default Cards;
