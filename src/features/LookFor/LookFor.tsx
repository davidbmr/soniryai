import { useState, useEffect } from "react";
import logo from "../../../public/assets/logo/soniry-color-blanco.svg";
import style from "./LookFor.module.css";

type LookForProps = {
	nextStep: (step: number) => void;
};

type SelectionState = {
  selectedRitmo: string | null;
  selectedGeneros: string[];
  selectedFinal: string | null;
};

function LookFor({ nextStep }: LookForProps) {
  const [selections, setSelections] = useState<SelectionState>({
    selectedRitmo: null,
    selectedGeneros: [],
    selectedFinal: null,
  });

  const handleRitmoClick = (item: string) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      selectedRitmo: item,
    }));
  };

  const handleGeneroClick = (item: string) => {
    setSelections((prevSelections) => {
      const newGeneros = prevSelections.selectedGeneros.includes(item)
        ? prevSelections.selectedGeneros.filter((i) => i !== item)
        : prevSelections.selectedGeneros.length < 5
        ? [...prevSelections.selectedGeneros, item]
        : prevSelections.selectedGeneros;
      return {
        ...prevSelections,
        selectedGeneros: newGeneros,
      };
    });
  };

  const handleFinalClick = (item: string) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      selectedFinal: item,
    }));
  };

  const isActive = (item: string, category: "ritmo" | "genero" | "final"): boolean => {
    if (category === "ritmo") return selections.selectedRitmo === item;
    if (category === "genero") return selections.selectedGeneros.includes(item);
    if (category === "final") return selections.selectedFinal === item;
    return false;
  };

  useEffect(() => {
    document.querySelector(`.${style.container__options__main}`)?.classList.add(style.show);
  }, []);

  return (
    <div className={style.main__container}>
      <img src={logo} alt="IMG" className={style.logo} />
      <div className={style.container__text}>
        <h2>LOOK FOR</h2>
        <p>
          ¿Qué es lo que uno busca en las cosas? al elegir una película, al decidir algo... Al decir algo,
          ¿cómo llega a eso?
        </p>
      </div>

      <div className={style.container__white}>
        <h2>
          AL ELEGIR UNA <br /> <span>PELÍCULA</span>
        </h2>
        <div className={style.container__options__main}>
          <div className={style.container__options}>
            <h4>Ritmo: que la película vaya...</h4>
            <div>
              {["Lenta", "Rápida", "Regular"].map((item) => (
                <div
                  key={item}
                  className={`${style.option} ${isActive(item, "ritmo") ? style.active : ""}`}
                  onClick={() => handleRitmoClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={style.container__options}>
            <h4>Género</h4>
            <div>
              {[
                "Suspense",
                "filosófica",
                "Acción",
                "Fantástica",
                "Simple",
                "Compleja",
                "Drama",
                "clásicas",
                "Espirituales",
                "Mental",
                "Crimen",
                "Locura",
                "Realista",
                "Mágica",
                "Explosiva",
              ].map((item) => (
                <div
                  key={item}
                  className={`${style.option} ${isActive(item, "genero") ? style.active : ""}`}
                  onClick={() => handleGeneroClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={style.container__options}>
            <h4>Qué el final sea...</h4>
            <div>
              {["Triste", "Feliz", "Normal", "Da igual", "Abierto", "Sin final"].map((item) => (
                <div
                  key={item}
                  className={`${style.option} ${isActive(item, "final") ? style.active : ""}`}
                  onClick={() => handleFinalClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.container__button}>
          <button className={style.submitButton} onClick={() => nextStep(9)}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LookFor;
