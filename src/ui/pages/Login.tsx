import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useGlobalContext } from "../../store/GlobalStore"; // Importa o contexto

const Login: React.FC = () => {
	const [name, setNameLocal] = useState("");
	const navigate = useNavigate(); // Hook para navegação
	const { setName } = useGlobalContext(); // Acessa a função setName do contexto

	const handleLogin = () => {
		setName(name); // Salva o nome no estado global
		navigate("/feed"); // Navega para a página /feed
	};

	const handleClick = () => {
		if (name) {
			handleLogin();
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleClick();
		}
	};

	return (
		<div className="h-screen mx-8 flex flex-col justify-between items-center gap-5">
			<Header />
			<div className="text-center">
				<h1 className="text-2xl font-bold mb-2">
					Bem-vindo(a) ao nosso casamento!
				</h1>
				<h2 className="my-4 text-lg leading-none">
					Esperamos que curta bastante esse dia lindo que preparamos com muito
					amor!
				</h2>
				<p className="text-gray-700">
					Para entrar no [nome da rede] é bem simples. Você só precisa colocar
					seu nome completo abaixo e entrar.
				</p>
			</div>
			<div className="mx-auto w-full flex flex-col">
				<input
					type="text" // Corrige o tipo do input para "text"
					value={name}
					onChange={(e) => setNameLocal(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Seu nome completo"
					className="w-full px-3 py-2 mb-4 border rounded"
					required
				/>
				<button
					onClick={handleClick}
					className={`w-full bg-blue-500 text-white px-4 py-2 rounded ${
						name ? "bg-red-900" : "bg-gray-500"
					}`}
					disabled={!name}
				>
					Entrar
				</button>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
