import { useState } from "react";
import style from "./RangeFieldX.module.css";
import { Slider, SliderChangeEvent } from "primereact/slider";

export const RangeFieldX = ({ firstText }: any) => {
	const [value, setValue] = useState<any>(50);
	return (
		<>
			<div className={style.rangeField__container}>
				<div className={style.box__text}>
					<p>{firstText}</p>
				</div>
				<Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} />
			</div>
		</>
	);
};
