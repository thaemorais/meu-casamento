import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./ui/pages/Feed";
import Login from "./ui/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // Importa a Rota Protegida

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				{/* Rota protegida */}
				<Route element={<ProtectedRoute />}>
					<Route path="/feed" element={<Feed />} />
					<Route path="/" element={<Feed />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
