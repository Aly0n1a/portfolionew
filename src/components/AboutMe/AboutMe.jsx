import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import s from './AboutMe.module.scss';

const AboutMe = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <>
      <div className={s.aboutme}>
        <div className="container">
          <h2 className={s.heading} data-aos="fade-up">
            About me
          </h2>
          <p className={s.description} data-aos="fade-up" data-aos-delay="300">
            Привет! Меня зовут Алёна, мне 16 лет, и я увлечена миром фронтенд-разработки. Я изучаю современные
            технологии создания веб-приложений, такие как HTML, CSS, JavaScript, и активно погружаюсь в работу с библиотекой React. 
            Вдохновляюсь возможностью создавать удобные и красивые интерфейсы, которые делают жизнь людей проще. 
            Моя цель — стать профессиональным фронтенд-разработчиком и участвовать в интересных и масштабных проектах.
            Я всегда стремлюсь развиваться и учиться чему-то новому. В свободное время люблю экспериментировать с кодом, 
            изучать новые подходы и улучшать свои навыки. Мне нравится решать задачи и разбираться в сложных концепциях, 
            будь то оптимизация производительности сайта или создание красивых анимаций.
            Также мне нравится работать в команде, обмениваться опытом и помогать другим развиваться.
          </p>
          <h3 className={s.subheading} data-aos="fade-up" data-aos-delay="500">
            My Skills
          </h3>
          <div className={s.skills} data-aos="fade-up" data-aos-delay="700">
            <img className={s.skill} src="/html.png" alt="HTML" data-aos="zoom-in" />
            <img className={s.skill} src="/csss.png" alt="CSS" data-aos="zoom-in" data-aos-delay="100" />
            <img className={s.skill} src="/javascripts.png" alt="JavaScript" data-aos="zoom-in" data-aos-delay="200" />
            <img className={s.skill} src="/reactjss.png" alt="ReactJS" data-aos="zoom-in" data-aos-delay="300" />
            <img className={s.skill} src="/figma.png" alt="Figma" data-aos="zoom-in" data-aos-delay="400" />
            <img className={s.skill} src="/vscode.png" alt="VSCode" data-aos="zoom-in" data-aos-delay="500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
