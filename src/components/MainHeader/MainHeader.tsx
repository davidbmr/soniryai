import { Link } from "react-router-dom";
import style from "./MainHeader.module.css";
import { Button } from "primereact/button";

export const MainHeader = () => {
	return (
		<div className={style.mainHeader__container}>
			<div className={style.logo__container}>
				<img src="/public/assets/logo-masterability.png" alt="logo" className={style.logo__img} />
			</div>

			<ul className={style.mainHeader__navList}>
				<Link to="/" className={style.mainHeader__navItem}>
					Webinars
				</Link>
				<Link to="/" className={style.mainHeader__navItem}>
					Mentorías
				</Link>
				<Link to="/" className={style.mainHeader__navItem}>
					Cursos
				</Link>
				<Link to="/" className={style.mainHeader__navItem}>
					Nosotros
				</Link>
			</ul>

			<div>
				<Button className={style.mainHeader__button}>Ingresar</Button>
			</div>
		</div>
	);
};
