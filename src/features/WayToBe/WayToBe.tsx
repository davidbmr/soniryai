import React, { useState, useEffect } from 'react';
import { Slider } from 'primereact/slider';
import style from './WayToBe.module.css'; 
import BasicKnop from '@/components/MainKnop/MainKnop';
import logo from '../../../public/assets/logo/soniry-color-morado.svg';

const WayToBe: React.FC = ({ nextStep }: any) => {
    const [contrast, setContrast] = useState<number>(50);

    useEffect(() => {
        const logoElement = document.querySelector(`.${style.logo}`);
        const h1Element = document.querySelector(`.${style.headerContent} h1`);
        const h2Element = document.querySelector(`.${style.headerContent} h2`);
        
        logoElement?.classList.add(style.animateFromLeft);
        h1Element?.classList.add(style.animateFromRight);
        h2Element?.classList.add(style.animateFromLeft);
    }, []);

    return (
        <div className={style.mainContainer}>
            <header className={style.header}>
                <img src={logo} alt="Soniry Logo" className={style.logo} />
            </header>
            <div className={style.headerContent}>
                <h1>WAY TO BE!</h1>
                <h2>¡TU FORMA DE SER!</h2>
                <p>
                    <span className={style.highlight1}> En tu forma de ser, dinos a qué color suenas, 
                    cómo reaccionas o </span> <span className={style.highlight2}>reaccionarías</span> 
                    <span className={style.highlight1}> y también tu </span> <span className={style.highlight3}>tipo de letra si es toda uniforme o es un garabato.</span>
                </p>
            </div>

            <div className={style.colorSection}>
                <div className={style.colorRow}>
                    <div className={style.colorBox}>#000000</div>
                    <div className={style.colorBox}>#000000</div>
                    <div className={style.colorBox}>#000000</div>
                    <div className={style.colorBox}>#000000</div>
                </div>
                <div className={style.colorLabel}>COLORS</div>
            </div>

            <div className={style.colorSection__2}>
                <div className={style.colorRow__2}>
                    <div className={style.colorBox}>#000000</div>
                    <div className={style.colorBox}>#000000</div>
                    <div className={style.colorBox}>#000000</div>
                    <div className={style.colorBox}>#000000</div>
                </div>
                <div className={style.colorLabel}>COLORS</div>
            </div>

            <div className={style.knobsSection}>
                <BasicKnop label="Temperamento (Innato)" />
                <BasicKnop label="Carácter (Adquirido)" />
                <BasicKnop label="Conversador" />
            </div>

            <div className={style.sliderSection}>
                <button className={style.generateTextButton}>GENERATE TEXT:</button>
                <Slider value={contrast} onChange={(e) => setContrast(e.value as number)} className={style.slider} />
                <div className={style.sliderLabels}>
                    <span>HIGH CONTRAST</span>
                    <span>VERY SIMILAR</span>
                </div>
            </div>

            <div className={style.container__button}>
                <button onClick={() => nextStep(7)}> Continuar </button>
            </div>
        </div>
    );
};

export default WayToBe;
