import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';
import s from './Text.module.scss';

const Text = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <>
      <div className="text">
        <div className="container">
          <h2 
            className={s.heading} 
            data-aos="fade-down" 
          >
            About me
          </h2>
          <p 
            className={s.description} 
            data-aos="fade-up"
            data-aos-delay="200" 
          >
Hi! My name is Alena, I’m 16 years old, and I’m passionate about frontend development. 
I’m learning modern web application technologies like HTML, CSS, JavaScript, and I’m diving deep into working with the React library. 
I’m inspired by the ability to create user-friendly and beautiful interfaces that make people’s lives easier. My goal is to become a professional frontend developer 
and participate in interesting and large-scale projects. I always strive to grow and learn something new. In my free time, I love experimenting with code, exploring new approaches, 
and improving my skills. I enjoy solving problems and understanding complex concepts, 
whether it’s optimizing website performance or creating beautiful animations. I also enjoy working in a team, exchanging experiences, and helping others develop.
          </p>

          <h2 
            className={s.heading} 
            data-aos="fade-down" 
            data-aos-delay="400" 
          >
            Обо мне
          </h2>
          <p 
            className={s.description} 
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            Привет! Меня зовут Алёна, мне 16 лет, и я увлечена миром фронтенд-разработки. Я изучаю современные 
            технологии создания веб-приложений, такие как HTML, CSS, JavaScript, и активно погружаюсь в работу с библиотекой React. Вдохновляюсь возможностью создавать удобные и красивые интерфейсы, которые делают жизнь людей проще. 
            Моя цель — стать профессиональным фронтенд-разработчиком и участвовать в интересных и масштабных проектах.
            Я всегда стремлюсь развиваться и учиться чему-то новому. В свободное время люблю экспериментировать с кодом, 
            изучать новые подходы и улучшать свои навыки. Мне нравится решать задачи и разбираться в сложных концепциях, 
            будь то оптимизация производительности сайта или создание красивых анимаций.
            Также мне нравится работать в команде, обмениваться опытом и помогать другим развиваться.
          </p>

          <div 
            className={s.buttoncontainer} 
            data-aos="zoom-in" 
            data-aos-delay="500" 
          >
            <Link to="/contact" className={s.button}>
              &rarr; Contact me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
