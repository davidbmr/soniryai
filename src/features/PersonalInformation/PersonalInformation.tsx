import React, { useState, useEffect } from "react";
import { SelectField } from "@/components/SelectField/SelectField";
import style from "./PersonalInformation.module.css";
import { MainButton } from "@/components/MainButton/MainButton";

interface Props {
    nextStep: (newStep: number, data: any) => void;
    formData: {
        gender: string;
        age: string;
        location: string;
        transport: string;
        home: string;
    };
}

const genderOptions = [
    { label: "Masculino", value: "male" },
    { label: "Femenino", value: "female" },
    { label: "Otro", value: "other" },
];

const ageOptions = [
    { label: "Menos de 18", value: "<18" },
    { label: "18-24", value: "18-24" },
    { label: "25-34", value: "25-34" },
    { label: "35-44", value: "35-44" },
    { label: "45-54", value: "45-54" },
    { label: "55-64", value: "55-64" },
    { label: "65 o más", value: "65+" },
];

const locationOptions = [
    { label: "Ciudad", value: "city" },
    { label: "Suburbio", value: "suburb" },
    { label: "Rural", value: "rural" },
];

const transportOptions = [
    { label: "Coche", value: "car" },
    { label: "Bicicleta", value: "bicycle" },
    { label: "Transporte público", value: "public_transport" },
    { label: "A pie", value: "walk" },
];

const homeOptions = [
    { label: "Apartamento", value: "apartment" },
    { label: "Casa", value: "house" },
    { label: "Otro", value: "other" },
];

export const PersonalInformation = ({ nextStep, formData }: Props) => {
    const [formValues, setFormValues] = useState(formData);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleNext = () => {
        nextStep(4, formValues);
    };

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
                        value={formValues.gender}
                        name="gender"
                        onChange={handleChange}
                        options={genderOptions}
                        textLabel="Género"
                        direction="row"
                        labelWidth="120px"
                        placeholder="Qué género es"
                        optionLabel="label"
                    />
                    <SelectField
                        value={formValues.age}
                        name="age"
                        onChange={handleChange}
                        options={ageOptions}
                        textLabel="Edad"
                        direction="row"
                        labelWidth="120px"
                        placeholder="Qué edad tiene"
                        optionLabel="label"
                    />
                    <SelectField
                        value={formValues.location}
                        name="location"
                        onChange={handleChange}
                        options={locationOptions}
                        textLabel="Ubicación"
                        direction="row"
                        labelWidth="120px"
                        placeholder="De dónde es"
                        optionLabel="label"
                    />
                    <SelectField
                        value={formValues.transport}
                        name="transport"
                        onChange={handleChange}
                        options={transportOptions}
                        textLabel="Transporte"
                        direction="row"
                        labelWidth="120px"
                        placeholder="Cómo suele transportarse"
                        optionLabel="label"
                    />
                    <SelectField
                        value={formValues.home}
                        name="home"
                        onChange={handleChange}
                        options={homeOptions}
                        textLabel="Casa"
                        direction="row"
                        labelWidth="120px"
                        placeholder="Dónde viviría"
                        optionLabel="label"
                    />
                </div>

                <MainButton onClick={handleNext} text="Continuar" />
            </div>
        </div>
    );
};
