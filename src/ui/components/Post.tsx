import React from "react";

interface PostProps {
	imageUrl: string; // URL da imagem
	caption: string; // Legenda do post
}

const Post: React.FC<PostProps> = ({ imageUrl, caption }) => {
	return (
		<div className="w-full max-w-md mx-auto mb-4 border rounded-lg shadow-md overflow-hidden">
			<img
				src={imageUrl}
				alt="Post Image"
				className="w-full h-64 object-cover"
			/>
			<div className="p-4">
				<p className="text-gray-700">{caption}</p>
			</div>
		</div>
	);
};

export default Post;
