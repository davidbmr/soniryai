import { useState } from "react";
import style from "./RangeField.module.css";
import { Slider, SliderChangeEvent } from "primereact/slider";

export const RangeField = ({ firstText, secondText }: any) => {
	const [value, setValue] = useState<any>(50);
	return (
		<div className={style.rangeField__container}>
			<div className={style.box__text}>
				<p>{firstText}</p>
			</div>
			<Slider
				value={value}
				onChange={(e: SliderChangeEvent) => setValue(e.value)}
				orientation="vertical"
			/>
			<div className={style.box__text}>
				<p>{secondText}</p>
			</div>
		</div>
	);
};
