import style from "./Footer.module.css";
import logo from '../../../public/assets/logo/soniry-color-blanco.svg';

function Footer() {
  return (
    <div className={style.container__main}>
      <div className={style.top__section}>
          <div>

            <img src={logo} alt="Soniry Logo" className={style.logo} />
            <div className={style.nav__links}>
            <p>Soniry tool</p>
            <p>Nosotros</p>
            <p>Audiobranding Servicios</p>
            <p>Diferencial</p>
            <p>Contacto</p>
          </div>
        </div>

        <div className={style.contact__section}>
          <h5>¿Trabajas cómo, productor, músico, agencia, creador de contenido o marca?</h5>
          <div className={style.button}>Contáctanos</div>
        </div>
      </div>

      <hr className={style.separator} />

      <div className={style.bottom__section}>
        <p>Términos y condiciones</p>
        <p>Política de privacidad</p>
        <p>Accesibilidad</p>
        <p>Legal</p>
      </div>
    </div>
  );
}

export default Footer;
