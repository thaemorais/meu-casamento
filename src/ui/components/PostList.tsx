import React, { useEffect, useState } from "react";
//import Post from "../domain/entities/Post";
//import PostService from "../application/services/PostService";

const PostList: React.FC = () => {
	//const [posts, setPosts] = useState<Post[]>([]);
	//const postService = new PostService();

	useEffect(() => {
		const fetchPosts = async () => {
			// const fetchedPosts = await postService.getPosts();
			// setPosts(fetchedPosts);
		};
		fetchPosts();
	}, []);

	return (
		<div>
			{/* {posts.map((post) => (
				<div key={post.postId}>
					<img src={post.photo} alt="Post" />
					<p>{post.caption}</p>
					<span>Postado por: {post.author}</span>
				</div>
			))} */}
		</div>
	);
};

export default PostList;
