import style from './Signature.module.css'
import logo from '../../../public/assets/img/logo-sin-fondo.png'
import img from '../../../public/assets/img/signature.png'

function Signature( {nextStep}:any ) {
  return (  
    <div className={style.container__main}>
      <div className={style.container__purple}>
        <img src={logo} alt="logo" />
        <img src={img} alt="logo" />
      </div>
    </div>
  );
}

export default Signature;