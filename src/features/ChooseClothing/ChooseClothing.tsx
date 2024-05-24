import React from 'react';
import styles from "./ChooseClothing.module.css";

const options = [
  {
    title: "Formal, elegante",
    description: "Inspiracional, no deportivo, fresco sin llegar a la camisa, colores oscuros por la seriedad",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png",
    backgroundColor: "#9b4dff",
    textColor: "#fff"
  },
  {
    title: "Relajado",
    description: "Aspiracional, simple, colores básicos que combinen y cómodo.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png",
    backgroundColor: "#f0f0f0",
    textColor: "#333"
  },
  {
    title: "Elegante sport",
    description: "Inspiracional, tranquilo, llamante de atención, colores vivos, cómodo y suelto.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png",
    backgroundColor: "#f0f0f0",
    textColor: "#333"
  }
];

const ChooseClothing = ({ nextStep }:any) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>¿Qué polo usas?</h1>
        <p className={styles.description}>Una prenda dice más que mil palabras</p>
      <div className={styles.contentContainer}>
        
        {options.map((option, index) => (
          <div
            key={index}
            className={styles.option}
            style={{ backgroundColor: option.backgroundColor }}
          >
            <img src={option.image} alt={option.title} />
            <div className={styles.optionText}>
              <div
                className={styles.optionTitle}
                style={{ color: option.textColor }}
              >
                {option.title}
              </div>
              <div
                className={styles.optionDescription}
                style={{ color: option.textColor }}
              >
                {option.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseClothing;
