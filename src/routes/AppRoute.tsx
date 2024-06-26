import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/page/Home/Home";
import Landing from "@/page/Landing/Landing";

export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/form" element={<Home />} />

			</Routes>
		</BrowserRouter>
	);
};
