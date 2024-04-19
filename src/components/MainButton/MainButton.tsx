import style from "./MainButton.module.css";
import { FaPlay } from "react-icons/fa6";

export const MainButton = ({ onClick, icon = false, text }: any) => {
	return (
		<button className={style.appStructure__button} onClick={onClick}>
			{icon && <FaPlay fill="#fff" size={20} />}
			{text}
		</button>
	);
};
