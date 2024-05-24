import { RangeField } from "@/components/RangeField/RangeField";
import style from "./AttitudesInfo.module.css";
import { MainButton } from "@/components/MainButton/MainButton";

export const AttitudesInfo = ({ nextStep }: any) => {
	return (
		<div className={style.appStructure__container}>
			<div className={style.section__container}>
				<img style={{ width: "200px" }} src="/public/assets/logo/soniry-color-blanco.svg" alt="" />
				<p className={style.section__text}>
					Las actitudes personales juegan un rol importante para la personalidad, vamos a acualizar
					tu forma de ser
				</p>

				<div className={style.box__container}>
					<p>
						Responelo así: ¿Que tan entusiasta/ relajado/pacífico eres? Bien podrías ser entusiasta
						y pausado o relajado pero frontal O no... It’s up to you
					</p>
				</div>

				<div className={style.rangeFields__container}>
					<RangeField firstText="Entusiasta" secondText="Relajado" />
					<RangeField firstText="Rápido" secondText="Pausado" />
					<RangeField firstText="Pacífico" secondText="Frontal" />
					<RangeField firstText="Regional" secondText="Globalizado" />
					<RangeField firstText="Moderno" secondText="Tradicional" />
					<RangeField firstText="Nocturno" secondText="Diurno" />
				</div>
				<br />

				<div style={{ display: "flex", justifyContent: "center" }}>
					<MainButton onClick={() => nextStep(5)} text="Continuar" />
				</div>
			</div>
		</div>
	);
};
