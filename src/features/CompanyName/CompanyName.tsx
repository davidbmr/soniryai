import { MainButton } from "@/components/MainButton/MainButton";
import style from "./CompanyName.module.css";
import logo from "../../../public/assets/logo/soniry-color-blanco.svg";

interface Props {
	nextStep: any;
}

export const CompanyName = ({ nextStep }: Props) => {
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
						name=""
						placeholder={`"Company Name"`}
					/>
				</div>

				<MainButton onClick={() => nextStep(2)} icon={true} text="Start" />
			</div>
		</div>
	);
};
