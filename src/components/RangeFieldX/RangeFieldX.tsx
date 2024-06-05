import { useState, useEffect } from "react";
import style from "./RangeFieldX.module.css";
import { Slider, SliderChangeEvent } from "primereact/slider";

interface RangeFieldXProps {
    firstText: string;
    initialValue: number;
    onValueChange: (value: number) => void;
    name: string;
}

export const RangeFieldX = ({ firstText, initialValue, onValueChange, name }: RangeFieldXProps) => {
    const [value, setValue] = useState<number>(initialValue);

    useEffect(() => {
        onValueChange(value);
    }, [value, onValueChange]);

    const handleChange = (e: SliderChangeEvent) => {
        setValue(e.value as number);
    };

    return (
        <div className={style.rangeField__container}>
            <div className={style.box__text}>
                <p>{firstText}</p>
            </div>
            <Slider
                value={value}
                onChange={handleChange}
                orientation="horizontal"
            />
        </div>
    );
};
