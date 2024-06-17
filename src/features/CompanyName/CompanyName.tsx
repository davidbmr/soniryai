import { MainButton } from "@/components/MainButton/MainButton";
import style from "./CompanyName.module.css";
import logo from "../../../public/assets/logo/soniry-color-blanco.svg";
import { useState } from "react";

interface Props {
	nextStep: any;
	formData?: any;
}

export const CompanyName = ({ nextStep, formData }: Props) => {
	const [formValues, setFormValues] = useState("");

	const handleChange = (e: any) => {
		const { value } = e.target;
		setFormValues(value);
	};

	const handleNext = () => {
		nextStep(2, formValues);
	};

	return (
		<div className={style.appStructure__container}>
			<div className={style.appStructure__header}>
				<img className={style.appStructure__logo} src={logo} alt="" />
			</div>
			<div className={style.appStructure__contain}>
				<div className={style.appStructure__text__contain}>
					<p className={style.appStructure__text}>Hello</p>
					<input
						className={style.appStructure__input}
						type="text"
						placeholder={`"Company Name"`}
						value={formData.companyName}
						onChange={handleChange}
					/>
				</div>

				<MainButton onClick={handleNext} icon={true} text="Start" />
			</div>
		</div>
	);
};
