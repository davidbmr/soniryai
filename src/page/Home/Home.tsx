import { useState } from "react";
import { CompanyName } from "@/features/CompanyName/CompanyName";
import { RouteInfo } from "@/features/RouteInfo/RouteInfo";
import { PersonalInformation } from "@/features/PersonalInformation/PersonalInformation";
import { AttitudesInfo } from "@/features/AttitudesInfo/AttitudesInfo";

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
		</>
	);
};
