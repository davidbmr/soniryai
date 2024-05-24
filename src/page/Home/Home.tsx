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

	const nextStep = (newStep: number) => {
		setStep(newStep);
	};

	return (
		<>
			{step === 1 && <CompanyName nextStep={nextStep} />}
			{step === 2 && <RouteInfo nextStep={nextStep} />}
			{step === 3 && <PersonalInformation nextStep={nextStep} />}
			{step === 4 && <AttitudesInfo nextStep={nextStep} />}
			{step === 5 && <SoundEngineering nextStep={nextStep} />}
			{step === 6 && <WayToBe nextStep={nextStep} />}
			{step === 7 && <ChooseClothing nextStep={nextStep} />}
			{step === 8 && <LookFor nextStep={nextStep} />}
			{step === 9 && <Signature nextStep={nextStep} />}

		</>
	);
};
