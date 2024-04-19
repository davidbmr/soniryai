import { SelectField } from "@/components/SelectField/SelectField";
import style from "./PersonalInformation.module.css";
import { MainButton } from "@/components/MainButton/MainButton";

interface Props {
	nextStep: (newStep: number) => void;
}

export const PersonalInformation = ({ nextStep }: Props) => {
	return (
		<div className={style.appStructure__container}>
			<div className={style.appStructure__header}>
				<img src="/public/assets/logo-fondo-morado.png" alt="" />
				<div className={style.appStructure__text__container}>
					<p className={style.appStructure__text}>
						Conocer superficialmente es el primer paso para ver en el interior
					</p>
				</div>
			</div>
			<div className={style.appStructure__contain}>
				<div className={style.branding__container}>
					<p className={style.branding__text}>PERSONAL INFORMATION</p>
				</div>

				<div className={style.appStructure__select__container}>
					<SelectField
						value={""}
						name={""}
						onChange={() => {}}
						options={[]}
						textLabel="Género"
						direction="row"
						labelWidth="120px"
						placeholder="Qué genero es"
					/>
					<SelectField
						value={""}
						name={""}
						onChange={() => {}}
						options={[]}
						textLabel="Edad"
						direction="row"
						labelWidth="120px"
						placeholder="Qué edad tiene"
					/>
					<SelectField
						value={""}
						name={""}
						onChange={() => {}}
						options={[]}
						textLabel="Ubicación"
						direction="row"
						labelWidth="120px"
						placeholder="De donde es"
					/>
					<SelectField
						value={""}
						name={""}
						onChange={() => {}}
						options={[]}
						textLabel="Transporte"
						direction="row"
						labelWidth="120px"
						placeholder="Qué suele transportarse"
					/>
					<SelectField
						value={""}
						name={""}
						onChange={() => {}}
						options={[]}
						textLabel="Casa"
						direction="row"
						labelWidth="120px"
						placeholder="Donde viviría"
					/>
				</div>

				<MainButton onClick={() => nextStep(4)} text="Continuar" />
			</div>
		</div>
	);
};
