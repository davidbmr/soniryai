import { useState } from "react";
import { CompanyName } from "@/features/CompanyName/CompanyName";
import { RouteInfo } from "@/features/RouteInfo/RouteInfo";
import { PersonalInformation } from "@/features/PersonalInformation/PersonalInformation";
import { AttitudesInfo } from "@/features/AttitudesInfo/AttitudesInfo";
import { SoundEngineering } from "@/features/SoundEngineering/SoundEngineering";
import LookFor from "@/features/LookFor/LookFor";
import ChooseClothing from "@/features/ChooseClothing/ChooseClothing";
import WayToBe from "@/features/WayToBe/WayToBe";
import Signature from "@/features/Signature/Signature";

export const Home = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        companyName: "",
        routeInfo: {},
        personalInformation: {
            gender: "",
            age: "",
            location: "",
            transport: "",
            home: "",
        },
        attitudes: {
            entusiasta: 50,
            rapido: 50,
            pacifico: 50,
            regional: 50,
            moderno: 50,
            nocturno: 50,
        },
        soundEngineering: {},
        wayToBe: {},
        chooseClothing: {},
        lookFor: {},
        signature: {},
    });

    const updateFormData = (key: string, data: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: data,
        }));
    };

    const nextStep = (newStep: any, key?: string, data?: any) => {
        if (key && data) {
            updateFormData(key, data);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        setStep(newStep);
    };

	console.log(formData)
    return (
        <>
            {step === 1 && <CompanyName nextStep={(newStep: number, data: any) => nextStep(newStep, "companyName", data)} />}
            {step === 2 && <RouteInfo nextStep={(newStep: number, data: any) => nextStep(newStep, "routeInfo", data)} />}
            {step === 3 && <PersonalInformation nextStep={(newStep: number, data: any) => nextStep(newStep, "personalInformation", data)} formData={formData.personalInformation} />}
            {step === 4 && <AttitudesInfo nextStep={(newStep: number, data: any) => nextStep(newStep, "attitudes", data)} formData={formData.attitudes} />}
            {step === 5 && <SoundEngineering nextStep={(newStep: number, data: any) => nextStep(newStep, "soundEngineering", data)} />}
            {step === 6 && <WayToBe nextStep={(newStep: number, data: any) => nextStep(newStep, "wayToBe", data)} />}
            {step === 7 && <ChooseClothing nextStep={(newStep: number, data: any) => nextStep(newStep, "chooseClothing", data)} />}
            {step === 8 && <LookFor nextStep={(newStep: number, data: any) => nextStep(newStep, "lookFor", data)} />}
            {step === 9 && <Signature nextStep={(newStep: number, data: any) => nextStep(newStep, "signature", data)} />}
        </>
    );
};
