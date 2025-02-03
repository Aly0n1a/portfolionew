import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import s from './Header.module.scss';
import { useAppContext } from '../../context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isActive, toggleMenu, closeMenu } = useAppContext();
  const location = useLocation(); // Хук для отслеживания изменений маршрута

  // Инициализация анимаций с помощью AOS
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out',
      once: false, // Чтобы анимации срабатывали каждый раз
    });

    // Перезапуск анимаций при изменении маршрута
    AOS.refresh();
  }, [location]);

  // Прокрутка страницы вверх при каждом изменении маршрута
  useEffect(() => {
    window.scrollTo(0, 0); // Прокручивает страницу вверх
  }, [location]); // Срабатывает при изменении маршрута

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <img
              className={s.burger}
              onClick={toggleMenu}
              src="/burger.svg"
              alt="menu"
              
            />
            <Link
              onClick={() => closeMenu()}
              to={'/'}
              className={s.logo}
              data-aos="fade-right"
            >
              <img src="/Logo.svg" alt="logo" />
            </Link>
            <div className={`${s.menu} ${isActive ? s.active : ''}`} >
              <Link onClick={() => closeMenu()} to={'/'}>
                Home
              </Link>
              <Link onClick={() => closeMenu()} to={'/projects'}>
                Projects
              </Link>
              <Link onClick={() => closeMenu()} to={'/about'}>
                About
              </Link>
              <Link onClick={() => closeMenu()} to={'/contact'}>
                Contact
              </Link>
              <Link onClick={() => closeMenu()} to={'/admin'}>
                Admin
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
