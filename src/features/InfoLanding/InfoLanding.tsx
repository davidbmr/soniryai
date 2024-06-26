import React from 'react';
import { FaBrain, FaMusic, FaGuitar } from 'react-icons/fa';
import { GiMusicalNotes, GiDrumKit } from 'react-icons/gi';
import styles from './InforLanding.module.css';
import logo from '../../../public/assets/logo/soniry-color-blanco.svg';

const InfoLanding = () => {
  return (
    <div className={styles.container}>
         <div className={styles.container__logo}>
          <img src={logo} alt="IA" />
        </div>  
     <div className={styles.title}>
     <h1>Convertimos los atributos de tu marca en música</h1>
     <p>Con:</p>
     </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconItem}>
          <FaBrain className={styles.icon} />
          <p>Psico musicalidad</p>
        </div>
        <div className={styles.iconItem}>
          <GiMusicalNotes className={styles.icon} />
          <p>Escala Musical</p>
        </div>
        <div className={styles.iconItem}>
          <FaMusic className={styles.icon} />
          <p>Armonía Musical</p>
        </div>
        <div className={styles.iconItem}>
          <GiDrumKit className={styles.icon} />
          <p>Ritmo Musical</p>
        </div>
        <div className={styles.iconItem}>
          <FaGuitar className={styles.icon} />
          <p>Instrumentos Musicales</p>
        </div>
      </div>
      <div className={styles.diagnosis}>
        <p>
          TÚ CONOCES A TU MARCA, NOSOTROS DE MATEMÁTICAS Y MÚSICA. SONIRY HARÁ
          UN DIAGNÓSTICO PSICOCOMPORTAMENTAL Y DEFINIRÁ TU IDENTIDAD SONORA
        </p>
      </div>
      <div className={styles.phases}>
        <h2>NUESTRO PROCESO CONSTA DE 3 FASES</h2>
        <div className={styles.phase}>
          <div className={styles.phaseItem}>
            <h3>Consultoría sonora</h3>
            <p>ANALIZA TU MARCA CON NOSOTROS Y OBTÉN UN DIAGNÓSTICO SONORO</p>
          </div>
          <div className={styles.phaseItem}>
            <h3>Inteligencia Artificial</h3>
            <p>
              LA IA REALIZARÁ MILES DE COMBINACIONES Y GENERA UN REPORTE SONORO
              DE TU MARCA
            </p>
          </div>
          <div className={styles.phaseItem}>
            <h3>Composición musical</h3>
            <p>
              BASADO EN EL ANÁLISIS DE LA IA, COMPONEMOS EL SONIDO SEGÚN TUS
              NECESIDADES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLanding;
