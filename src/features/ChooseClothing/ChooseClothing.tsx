import React, { useState } from "react";
import styles from "./ChooseClothing.module.css";

type Option = {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  textColor: string;
};

type Look = {
  title: string;
  image: string;
};

const options: Option[] = [
  {
    title: "Formal, elegante",
    description: "Inspiracional, no deportivo, fresco sin llegar a la camisa, colores oscuros por la seriedad",
    image: "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backgroundColor: "#f0f0f0",
    textColor: "#333",
  },
  {
    title: "Relajado",
    description: "Aspiracional, simple, colores básicos que combinen y cómodo.",
    image: "https://cdn.pixabay.com/photo/2018/03/12/22/15/clothing-3221103_640.jpg",
    backgroundColor: "#f0f0f0",
    textColor: "#333",
  },
  {
    title: "Elegante sport",
    description: "Inspiracional, tranquilo, llamante de atención, colores vivos, cómodo y suelto.",
    image: "https://images.pexels.com/photos/4641825/pexels-photo-4641825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backgroundColor: "#f0f0f0",
    textColor: "#333",
  },
];

const looks: Look[] = [
  {
    title: "Seriedad",
    image: "https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770_640.jpg",
  },
  {
    title: "Normal",
    image: "https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_640.jpg",
  },
  {
    title: "Seducción",
    image: "https://cdn.pixabay.com/photo/2015/05/03/14/40/woman-751236_640.jpg",
  },
  {
    title: "Esquiva",
    image: "https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_640.jpg",
  },
];

type ChooseClothingProps = {
  nextStep?: any;
};

const ChooseClothing: React.FC<ChooseClothingProps> = ({ nextStep }) => {
  const [selectedOption, setSelectedOption] = useState<Option | any>(null);
  const [selectedLook, setSelectedLook] = useState<Look | any>(null);

  const handleSelectOption = (option: Option) => {
    if (selectedOption && selectedOption.title === option.title) {
      setSelectedOption(null);
      setSelectedLook(null);
    } else {
      setSelectedOption(option);
      setSelectedLook(null);
    }
  };

  const handleSelectLook = (look: Look) => {
    setSelectedLook(look);
  };

  // const handleBack = () => {
  //   if (selectedLook) {
  //     setSelectedLook(null);
  //   } else {
  //     setSelectedOption(null);
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer} style={{ height: selectedOption ? "60%" : "60%" }}>
        {!selectedOption ? (
          <>
            <h1 className={styles.title}>¿Qué polo usas?</h1>
            <p className={styles.description}>Una prenda dice más que mil palabras</p>

            {options.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                style={{
                  backgroundColor: option.backgroundColor,
                }}
                onClick={() => handleSelectOption(option)}
              >
                <img src={option.image} alt={option.title} />
                <div className={styles.optionText}>
                  <div
                    className={styles.optionTitle}
                    style={{
                      color: selectedOption?.title === option.title ? "#fff" : option.textColor,
                      backgroundColor: selectedOption?.title === option.title ? "#8115FB" : "transparent",
                    }}
                  >
                    {option.title}
                  </div>
                  <div className={styles.optionDescription} style={{ color: option.textColor }}>
                    {option.description}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className={styles.option} style={{ backgroundColor: "#8115FB" }} onClick={() => handleSelectOption(selectedOption)}>
              <img src={selectedOption.image} alt={selectedOption.title} />
              <div className={styles.optionText}>
                <div className={styles.optionTitle} style={{ color: "#fff" }}>
                  {selectedOption.title}
                </div>
                <div className={styles.optionDescription} style={{ color: "#fff" }}>
                  {selectedOption.description}
                </div>
              </div>
            </div>
            <div className={styles.selectedOption}>
              <h3>Mirada .-. -.- &gt;.&lt; ñ_ñ</h3>
              <p>Ahora sí, una mirada dice más que mil palabras</p>
              <div className={styles.lookcontainer}>
                {looks.map((look, index) => (
                  <div key={index} className={styles.look} onClick={() => handleSelectLook(look)}>
                    <img src={look.image} alt={look.title} />
                    <div
                      className={styles.lookTitle}
                      style={{
                        color: selectedLook?.title === look.title ? "#fff" : "#000",
                        backgroundColor: selectedLook?.title === look.title ? "#8115FB" : "transparent",
                      }}
                    >
                      {look.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
         <div className={styles.container__button}>
                <button onClick={() => nextStep(8)}> Continuar </button>
            </div>
      </div>
    </div>
  );
};

export default ChooseClothing;
