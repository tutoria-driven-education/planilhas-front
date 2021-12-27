import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./Contexts/User";
import Login from "./Pages/Login";

export default function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}
