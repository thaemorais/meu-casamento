import React, { useState } from "react";
//import PostService from "../application/services/PostService";

const PhotoUpload: React.FC = () => {
	const [photo, setPhoto] = useState<File | null>(null);
	const [caption, setCaption] = useState("");
	//const postService = new PostService();

	const handleUpload = async () => {
		if (photo) {
			//const photoUrl = await uploadPhoto(photo); // Implementar uploadPhoto
			//await postService.createPost(photoUrl, caption, "Author Name");
			// Limpar campos ou atualizar a UI conforme necessário
		}
	};

	return (
		<div>
			<input
				type="file"
				onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
			/>
			<textarea value={caption} onChange={(e) => setCaption(e.target.value)} />
			<button onClick={handleUpload}>Upload</button>
		</div>
	);
};

export default PhotoUpload;
