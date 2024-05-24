import style from "./SoundEngineering.module.css";
import { MainButton } from "@/components/MainButton/MainButton";
import { RangeFieldX } from "@/components/RangeFieldX/RangeFieldX";
import { FaPlay } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";

export const SoundEngineering = ({ nextStep }: any) => {
	return (
		<div className={style.appStructure__container}>
			<div className={style.section__container}>
				<img style={{ width: "200px" }} src="/public/assets/logo/soniry-color-blanco.svg" alt="" />
				<p className={style.section__text}>
					Tu sonido interior, ¿que es? El primer sonido que te guste AQUÉL QUE TE DESPIERTE UN
					MOVIMIENTO ESE ES, SIGUE TUS INSTINTOS, chill and chilly
				</p>

				<div className={style.rangeFields__container}>
					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<BsSoundwave fill="#fff" size={50} />
						<RangeFieldX firstText={"¿Cúal es el ritmo de su corazón?"} />
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<BsSoundwave fill="#fff" size={50} />
						<RangeFieldX firstText={"¿Cúal es su tono de voz?"} />
					</div>

					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<BsSoundwave fill="#fff" size={50} />
						<RangeFieldX firstText={"¿Qué tan fuerte suena?"} />
					</div>

					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<BsSoundwave fill="#fff" size={50} />
						<RangeFieldX firstText={"¿Clásico o moderno?"} />
					</div>
				</div>
				<br />

				<div>
					<p className={style.section__text}>SOUND ENGINEERING GENRES</p>
					<br />
					<div className={style.box__sounds}>
						<div className={style.box__sound__item}>Jazz</div>
						<div className={style.box__sound__item}>Rock</div>
						<div className={style.box__sound__item}>Funk</div>
						<div className={style.box__sound__item}>Hip hop</div>
						<div className={style.box__sound__item}>EDM</div>
						<div className={style.box__sound__item}>Salsa</div>
						<div className={style.box__sound__item}>Metal</div>
						<div className={style.box__sound__item}>Cumbia</div>
						<div className={style.box__sound__item}>Reggea</div>
						<div className={style.box__sound__item}>Reggeaton</div>
						<div className={style.box__sound__item}>Clásica</div>
						<div className={style.box__sound__item}>Alternative</div>
					</div>
				</div>
				<br />
				<div style={{ display: "flex", justifyContent: "center" }}>
					<MainButton
						onClick={() => nextStep(6)}
						text="Let's try / a sonar"
						icon={<FaPlay fill={"#fff"} />}
					/>
				</div>
			</div>
		</div>
	);
};
