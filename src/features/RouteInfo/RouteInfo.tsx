import style from "./RouteInfo.module.css";
import { MainButton } from "@/components/MainButton/MainButton";

interface Props {
	nextStep: (newStep: number) => void;
}

export const RouteInfo = ({ nextStep }: Props) => {
	return (
		<div className={style.appStructure__container}>
			<div className={style.appStructure__header}>
				<img src="/public/assets/logo-fondo-morado.png" alt="" />
				<div className={style.appStructure__text__container}>
					<p className={style.appStructure__text}>
						Describe tu empresa para tener una{" "}
						<span className={style.appStructure__text__span}>mejor idea</span>
					</p>
				</div>
			</div>
			<div className={style.appStructure__contain}>
				<div className={style.branding__container}>
					<p className={style.branding__text}>BRANDING SETTING COMPANY</p>
				</div>
				<div className={style.appStructure__img__container}>
					<img className={style.appStructure__img} src="/public/assets/img/route-info.png" alt="" />
				</div>

				<MainButton onClick={() => nextStep(3)} text="Continuar" />
			</div>
		</div>
	);
};
