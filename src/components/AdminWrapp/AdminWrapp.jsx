import React, { useState, useEffect } from "react";
import s from "./AdminWrapp.module.scss";

const AdminWrapp = ({ onAddProject }) => {
  const [newProject, setNewProject] = useState({
    src: "",
    link: "",
    alt: "",
    title: ""
  });

  const [showModal, setShowModal] = useState(false); // Состояние для модального окна

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject)
    });

    if (response.ok) {
      const addedProject = await response.json();
      onAddProject(addedProject);
      setNewProject({ src: "", link: "", alt: "", title: "" });

      setShowModal(true); // Показываем модальное окно
    } else {
      console.error("Ошибка при добавлении проекта");
    }
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 3000); // Закрываем через 3 секунды
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className={s.adminwrapp}>
      <div className={s.adminPanel}>
        <h2>Добавить новый проект</h2>
        <form onSubmit={handleSubmit} className={s.addForm}>
          <input
            type="text"
            placeholder="Image URL"
            value={newProject.src}
            onChange={(e) => setNewProject({ ...newProject, src: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Project Link"
            value={newProject.link}
            onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Alt text"
            value={newProject.alt}
            onChange={(e) => setNewProject({ ...newProject, alt: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            required
          />
          <button type="submit">Добавить проект</button>
        </form>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className={s.modalOverlay}>
          <div className={s.modal}>
            <p>✅ Новая карточка добавлена на страницу Project!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminWrapp;
