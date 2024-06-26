import { useState, useEffect, useRef } from "react";
import style from "./WayToBe.module.css";
import BasicKnop from "@/components/MainKnop/MainKnop";
import logo from "../../../public/assets/logo/soniry-color-morado.svg";
import { Slider } from "primereact/slider";

interface Props {
    nextStep: (newStep: number, data: any) => void;
    formData: {
        contrast: number;
        temperament: number;
        character: number;
        conversador: number;
    };
}

const WayToBe = ({ nextStep, formData }: Props) => {
    const [values, setValues] = useState(formData);
    const [colors, setColors] = useState<string[]>([
        '#5d3dcf', '#62c5fd', '#4ffdd0', '#7942e3', 
        '#7c71c4', '#8cc1df', '#6fd5b9', '#7761b2'
    ]);
    const colorInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        const logoElement = document.querySelector(`.${style.logo}`);
        const h1Element = document.querySelector(`.${style.headerContent} h1`);
        const h2Element = document.querySelector(`.${style.headerContent} h2`);

        logoElement?.classList.add(style.animateFromLeft);
        h1Element?.classList.add(style.animateFromRight);
        h2Element?.classList.add(style.animateFromLeft);
    }, []);

    const handleKnobChange = (name: string, value: number) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleNext = () => {
        nextStep(7, values);
    };

    const handleColorClick = (index: number) => {
        if (colorInputRefs.current[index]) {
            colorInputRefs.current[index]?.click();
        }
    };

    const handleColorChange = (index: number, color: string) => {
        setColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[index] = color;
            return newColors;
        });
    };

    return (
      <div className={style.mainContainer}>
        <header className={style.header}>
            <img src={logo} alt="Soniry Logo" className={style.logo} />
        </header>
          <div className={style.headerContent}>
              <h1>WAY TO BE!</h1>
              <h2>¡TU FORMA DE SER!</h2>
              <p>
                  <span className={style.highlight1}>
                      En tu forma de ser, dinos a qué color suenas, cómo reaccionas o{" "}
                  </span>
                  <span className={style.highlight2}>reaccionarías</span>
                  <span className={style.highlight1}> y también tu </span>
                  <span className={style.highlight3}>
                      tipo de letra si es toda uniforme o es un garabato.
                  </span>
              </p>
          </div>

          <div className={style.colorSection}>
              <div className={style.colorRow}>
                  {[0, 1, 2, 3].map((index) => (
                      <div
                          key={index}
                          className={style.colorBox}
                          onClick={() => handleColorClick(index)}
                          style={{ backgroundColor: colors[index], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                          {colors[index]}
                          <input
                              type="color"
                              ref={(el) => (colorInputRefs.current[index] = el)}
                              onChange={(e) => handleColorChange(index, e.target.value)}
                              style={{ display: 'none' }}
                          />
                      </div>
                  ))}
              </div>
              <div className={style.colorLabel}>COLORS</div>
          </div>

          <div className={style.colorSection__2}>
              <div className={style.colorRow__2}>
                  {[4, 5, 6, 7].map((index) => (
                      <div
                          key={index}
                          className={style.colorBox}
                          onClick={() => handleColorClick(index)}
                          style={{ backgroundColor: colors[index], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                          {colors[index]}
                          <input
                              type="color"
                              ref={(el) => (colorInputRefs.current[index] = el)}
                              onChange={(e) => handleColorChange(index, e.target.value)}
                              style={{ display: 'none' }}
                          />
                      </div>
                  ))}
              </div>
              <div className={style.colorLabel}>COLORS</div>
          </div>

          <div className={style.knobsSection}>
              <BasicKnop label="Temperamento (Innato)" value={values.temperament} onChange={(val) => handleKnobChange('temperament', val)} />
              <BasicKnop label="Carácter (Adquirido)" value={values.character} onChange={(val) => handleKnobChange('character', val)} />
              <BasicKnop label="Conversador" value={values.conversador} onChange={(val) => handleKnobChange('conversador', val)} />
          </div>

          <div className={style.sliderSection}>
              <button className={style.generateTextButton}>GENERATE TEXT:</button>
              <Slider
                  value={values.contrast}
                  onChange={(e) => handleKnobChange('contrast', e.value as number)}
                  className={style.slider}
              />
              <div className={style.sliderLabels}>
                  <span>HIGH CONTRAST</span>
                  <span>VERY SIMILAR</span>
              </div>
          </div>

          <div className={style.container__button}>
              <button onClick={handleNext}> Continuar </button>
          </div>
      </div>
    );
};

export default WayToBe;
