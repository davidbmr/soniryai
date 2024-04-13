import style from "./MainFooter.module.css";

export const MainFooter = () => {
	return (
		<div className={style.mainFooter__container}>
			<div className={style.logo__container}>
				<img
					src="/public/assets/logo-masterability-v2.png"
					alt="logo"
					className={style.logo__img}
				/>
			</div>
		</div>
	);
};
