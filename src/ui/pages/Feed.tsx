import React from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../../store/GlobalStore"; // Importa o contexto
import Post from "../components/Post";

const Feed: React.FC = () => {
	const { name } = useGlobalContext();

	const firstName = name.split(" ")[0];

	return (
		<div className="h-screen mx-8 flex flex-col justify-start items-center">
			<Header />
			<div className="text-center">
				<h1 className="text-2xl font-bold mb-4">Feed</h1>
				<p className="text-lg">Eii, {firstName}! Bem-vindo(a) ao nosso Feed!</p>
			</div>

			<Post
				imageUrl="https://via.placeholder.com/800x600"
				caption="Este é um exemplo de post com uma imagem e uma legenda."
			/>
			<Post
				imageUrl="https://via.placeholder.com/800x600"
				caption="Outro exemplo com uma imagem e uma legenda diferente."
			/>
		</div>
	);
};

export default Feed;
