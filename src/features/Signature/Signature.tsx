import React from "react";
import { FaArrowUp } from "react-icons/fa";
import style from "./Signature.module.css";
import logo from "../../../public/assets/img/logo-sin-fondo.png";
import img from "../../../public/assets/img/signature.png";

function Signature({ nextStep }: any) {
  return (
    <div className={style.container__main}>
      <div className={style.container__purple}>
        <img src={logo} alt="logo" />
        <img src={img} alt="firma soniry" width={480} height={380}/>
        <p className={style.signature__label}>FIRMA SONIRY</p>
      </div>

      <div className={style.container__text}>
        <div className={style.signature__line}></div>
        <p className={style.signature__label}>FIRMA tú</p>
      </div>

     

      <div className={style.floating__button} onClick={() => nextStep(1)}>
        <FaArrowUp size={20} color="white" />
      </div>
    </div>
  );
}

export default Signature;
