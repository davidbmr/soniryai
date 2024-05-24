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
				<img style={{ width: "500px" }} src="/public/assets/logo/soniry-color-blanco.svg" alt="Logo" />
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
						placeholder="Qué género es"
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
						placeholder="De dónde es"
					/>
					<SelectField
						value={""}
						name={""}
						onChange={() => {}}
						options={[]}
						textLabel="Transporte"
						direction="row"
						labelWidth="120px"
						placeholder="Cómo suele transportarse"
					/>
					<SelectField
						value={""}
						name={""}
						onChange={() => {}}
						options={[]}
						textLabel="Casa"
						direction="row"
						labelWidth="120px"
						placeholder="Dónde viviría"
					/>
				</div>

				<MainButton onClick={() => nextStep(4)} text="Continuar" />
			</div>
		</div>
	);
};
