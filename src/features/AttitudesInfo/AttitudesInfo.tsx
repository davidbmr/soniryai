import { useState } from "react";
import { RangeField } from "@/components/RangeField/RangeField";
import style from "./AttitudesInfo.module.css";
import { MainButton } from "@/components/MainButton/MainButton";

interface Props {
    nextStep: (newStep: number, data: any) => void;
    formData: {
        [key: string]: number;
    };
}

export const AttitudesInfo = ({ nextStep, formData }: Props) => {
    const [attitudes, setAttitudes] = useState(formData);

    const handleRangeChange = (name: string, value: number) => {
        setAttitudes((prevAttitudes) => ({
            ...prevAttitudes,
            [name]: value,
        }));
    };

    const handleNext = () => {
        nextStep(5, attitudes);
    };

    return (
        <div className={style.appStructure__container}>
            <div className={style.section__container}>
                <img style={{ width: "200px" }} src="/assets/logo/soniry-color-blanco.svg" alt="" />
                <p className={style.section__text}>
                    Las actitudes personales juegan un rol importante para la personalidad, vamos a actualizar
                    tu forma de ser
                </p>

                <div className={style.box__container}>
                    <p>
                        Responelo así: ¿Qué tan entusiasta/ relajado/pacífico eres? Bien podrías ser entusiasta
                        y pausado o relajado pero frontal O no... It’s up to you
                    </p>
                </div>

                <div className={style.rangeFields__container}>
                    <RangeField name="entusiasta" firstText="Entusiasta" secondText="Relajado" initialValue={formData.entusiasta} onValueChange={(value: number) => handleRangeChange("entusiasta", value)} />
                    <RangeField name="rapido" firstText="Rápido" secondText="Pausado" initialValue={formData.rapido} onValueChange={(value: number) => handleRangeChange("rapido", value)} />
                    <RangeField name="pacifico" firstText="Pacífico" secondText="Frontal" initialValue={formData.pacifico} onValueChange={(value: number) => handleRangeChange("pacifico", value)} />
                    <RangeField name="regional" firstText="Regional" secondText="Globalizado" initialValue={formData.regional} onValueChange={(value: number) => handleRangeChange("regional", value)} />
                    <RangeField name="moderno" firstText="Moderno" secondText="Tradicional" initialValue={formData.moderno} onValueChange={(value: number) => handleRangeChange("moderno", value)} />
                    <RangeField name="nocturno" firstText="Nocturno" secondText="Diurno" initialValue={formData.nocturno} onValueChange={(value: number) => handleRangeChange("nocturno", value)} />
                </div>
                <br />

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <MainButton onClick={handleNext} text="Continuar" />
                </div>
            </div>
        </div>
    );
};
