import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/page/Home/Home";

export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
