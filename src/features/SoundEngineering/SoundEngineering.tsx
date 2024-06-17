import { useState } from "react";
import style from "./SoundEngineering.module.css";
import { MainButton } from "@/components/MainButton/MainButton";
import { RangeFieldX } from "@/components/RangeFieldX/RangeFieldX";
import { FaPlay } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";

interface Props {
	nextStep: (newStep: number, data: any) => void;
	formData: any;
}

const genres = [
	"Jazz",
	"Rock",
	"Funk",
	"Hip hop",
	"EDM",
	"Salsa",
	"Metal",
	"Cumbia",
	"Reggae",
	"Reggaeton",
	"Clásica",
	"Alternative",
];

export const SoundEngineering = ({ nextStep, formData }: Props) => {
	const [soundData, setSoundData] = useState(formData);
	const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

	const handleRangeChange = (name: string, value: number) => {
		setSoundData((prevSoundData: any) => ({
			...prevSoundData,
			[name]: value,
		}));
	};

	const handleGenreClick = (genre: string) => {
		setSelectedGenres((prevSelectedGenres) => {
			if (prevSelectedGenres.includes(genre)) {
				return prevSelectedGenres.filter((g) => g !== genre);
			} else if (prevSelectedGenres.length < 3) {
				return [...prevSelectedGenres, genre];
			}
			return prevSelectedGenres;
		});
	};

	const handleNext = () => {
		nextStep(6, { ...soundData, selectedGenres });
	};

	return (
		<div className={style.appStructure__container}>
			<div className={style.section__container}>
				<img style={{ width: "200px" }} src="/assets/logo/soniry-color-blanco.svg" alt="" />
				<p className={style.section__text}>
					Tu sonido interior, ¿qué es? El primer sonido que te guste AQUÉL QUE TE DESPIERTE UN
					MOVIMIENTO ESE ES, SIGUE TUS INSTINTOS, chill and chilly
				</p>

				<div className={style.rangeFields__container}>
					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<BsSoundwave fill="#fff" size={50} />
						<RangeFieldX
							name="ritmo"
							firstText={"¿Cuál es el ritmo de su corazón?"}
							initialValue={50}
							onValueChange={(value: number) => handleRangeChange("ritmo", value)}
						/>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<BsSoundwave fill="#fff" size={50} />
						<RangeFieldX
							name="tono"
							firstText={"¿Cuál es su tono de voz?"}
							initialValue={50}
							onValueChange={(value: number) => handleRangeChange("tono", value)}
						/>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<BsSoundwave fill="#fff" size={50} />
						<RangeFieldX
							name="fuerza"
							firstText={"¿Qué tan fuerte suena?"}
							initialValue={50}
							onValueChange={(value: number) => handleRangeChange("fuerza", value)}
						/>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
						<BsSoundwave fill="#fff" size={50} />
						<RangeFieldX
							name="estilo"
							firstText={"¿Clásico o moderno?"}
							initialValue={50}
							onValueChange={(value: number) => handleRangeChange("estilo", value)}
						/>
					</div>
				</div>
				<br />

				<div>
					<p className={style.section__text}>SOUND ENGINEERING GENRES</p>
					<br />
					<div className={style.box__sounds}>
						{genres.map((genre) => (
							<div
								key={genre}
								className={`${style.box__sound__item} ${
									selectedGenres.includes(genre) ? style.active : ""
								}`}
								onClick={() => handleGenreClick(genre)}
							>
								{genre}
							</div>
						))}
					</div>
				</div>
				<br />
				<div style={{ display: "flex", justifyContent: "center" }}>
					<MainButton
						onClick={handleNext}
						text="Let's try / a sonar"
						icon={<FaPlay fill={"#fff"} />}
					/>
				</div>
			</div>
		</div>
	);
};
