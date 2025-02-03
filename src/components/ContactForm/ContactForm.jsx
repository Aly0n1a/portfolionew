import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import s from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "7580837999:AAGDEgQWKiZyKaZZkhS0Q_vIeMMwM9HYQi0"; 
    const chatId = "933436737"; 
    const text = `
      New message from Contact Form:
      - Name: ${formData.name}
      - Email: ${formData.email}
      - Message: ${formData.message}
    `;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please check your network.');
    }
  };

  return (
    <form 
      className={s.contactForm} 
      onSubmit={handleSubmit} 
      data-aos="fade-up" 
    >
      <h2 data-aos="fade-down">Contact me</h2> 
      <div className={s.formGroup} data-aos="fade-right">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={s.formGroup} data-aos="fade-left"> 
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={s.formGroup} data-aos="fade-right"> 
        <label htmlFor="message">Nachricht</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hello, my name is..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button 
        type="submit" 
        className={s.submitButton} 
        data-aos="zoom-in"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
