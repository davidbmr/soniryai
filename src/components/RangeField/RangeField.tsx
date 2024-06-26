import { useState, useEffect } from "react";
import style from "./RangeField.module.css";
import { Slider, SliderChangeEvent } from "primereact/slider";

interface RangeFieldProps {
    firstText: string;
    secondText: string;
    initialValue: number;
    onValueChange: (value: number) => void;
    name: string;
}

export const RangeField = ({ firstText, secondText, initialValue, onValueChange, name }: RangeFieldProps) => {
    const [value, setValue] = useState<number>(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleChange = (e: SliderChangeEvent) => {
        const newValue = e.value as number;
        setValue(newValue);
        onValueChange(newValue);
    };

    return (
        <div className={style.rangeField__container}>
            <div className={style.box__text}>
                <p>{firstText}</p>
            </div>
            <Slider
                value={value}
                onChange={handleChange}
                orientation="vertical"
            />
            <div className={style.box__text}>
                <p>{secondText}</p>
            </div>
        </div>
    );
};
