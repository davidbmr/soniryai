import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/features/Home/Home";

export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
