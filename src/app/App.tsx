import { Home, Login, Register, RouteNotFound } from "@app/pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const App = () =>
{
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/login" Component={Login} />
				<Route path="/auth/register" Component={Register} />
				<Route path="/home" Component={Home}/>
				<Route path="/" Component={() => <Navigate to="/home" />} />
				<Route path="*" Component={RouteNotFound} />
			</Routes>
		</BrowserRouter>
	);
}