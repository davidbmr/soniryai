import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './HomeLanding.module.css';
import logo from '../../../public/assets/logo/soniry-color-blanco.svg';
import persona_1 from '../../../public/persona_1.png';
import persona_2 from '../../../public/persona_2.png';
import persona_3 from '../../../public/persona_3.png';

function HomeLanding() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true, // Habilitar autoplay
    autoplaySpeed: 2000, // Intervalo de tiempo en milisegundos
    slidesToScroll: 1,
    arrows: false, // No arrows
    appendDots: dots => (
      <div className={style.customDots}>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button className={style.dotButton}></button>
    )
  };

  return (
    <div className={style.container__main}>
      <div className={style.overlay}></div>
      <div className={style.content}>
        <div className={style.container__logo}>
          <img src={logo} alt="IA" />
        </div>  
      </div>

      <div className={style.container__home}>
        <Slider {...settings} className={style.slider}>
          <div className={style.img_slider}>
            <img src={persona_1} alt="Persona 1" />
          </div>
          <div className={style.img_slider}>
            <img src={persona_2} alt="Persona 2" />
          </div>
          <div className={style.img_slider}>
            <img src={persona_3} alt="Persona 3" />
          </div>
        </Slider>

        <div className={style.text_section}>
          <h2> DINOS CÓMO <span> ERES</span> Y TE <br /> DIREMOS A QUE <span> SUENAS </span></h2>
          <p>DISEÑAMOS EL SONIDO PERFECTO PARA TU <br /> EMPRESA Y COMPARAMOS MATEMÁTICAMENTE <br /> SU RELACIÓN CON TU MARCA</p>

          <div className={style.text__empresa}>
            <h4> ¿A QUÉ SUENA TU <br /> EMPRESA?</h4>
            <div className={style.button}> DESCÚBRELO </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLanding;
