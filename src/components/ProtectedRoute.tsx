import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../store/GlobalStore"; // Importa o contexto

const ProtectedRoute: React.FC = () => {
	const { name } = useGlobalContext(); // Acessa o nome do contexto

	// Se o nome estiver vazio, redireciona para a página de login
	if (!name) {
		return <Navigate to="/login" replace />;
	}

	// Se o nome estiver presente, renderiza a página filha
	return <Outlet />;
};

export default ProtectedRoute;
