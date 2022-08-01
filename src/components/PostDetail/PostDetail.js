import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div className="flex justify-center  ">
      <div className="border-4 border-blue-600 w-1/2 rounded-lg shadow-lg p-3 mt-4">
        <h1>This is post Detail: {postId}</h1>
        <p className="text-3xl font-bold text-pink-600"> {post.title}</p>
        <p className="tex-xl font-bold">{post.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
