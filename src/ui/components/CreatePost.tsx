import React, { useState } from "react";
import Post from "./Post"; // Importa o componente Post

const CreatePost: React.FC = () => {
	const [image, setImage] = useState<File | null>(null); // Armazena o arquivo da imagem
	const [caption, setCaption] = useState("");
	const [posts, setPosts] = useState<{ imageUrl: string; caption: string }[]>(
		[]
	);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImage(file);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (image && caption) {
			// Cria um URL para o arquivo da imagem
			const imageUrl = URL.createObjectURL(image);

			// Adiciona o novo post à lista de posts
			setPosts([...posts, { imageUrl, caption }]);

			// Limpa os campos de entrada
			setImage(null);
			setCaption("");
		}
	};

	return (
		<div className="w-full max-w-lg mx-auto my-8 p-4 border rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">Criar Post</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					className="w-full px-3 py-2 border rounded"
					required
				/>
				<textarea
					value={caption}
					onChange={(e) => setCaption(e.target.value)}
					placeholder="Legenda"
					className="w-full px-3 py-2 border rounded"
					rows={3}
					required
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white px-4 py-2 rounded"
					disabled={!image || !caption}
				>
					Publicar
				</button>
			</form>

			{/* Lista de posts criados */}
			<div className="mt-8">
				{posts.map((post, index) => (
					<Post key={index} imageUrl={post.imageUrl} caption={post.caption} />
				))}
			</div>
		</div>
	);
};

export default CreatePost;
