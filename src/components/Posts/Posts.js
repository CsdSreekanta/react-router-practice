import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([])
    console.log(posts)
    

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data => setPosts(data))
    return (
        <div>
            <h1>This is for Post</h1>

            {
                posts.map(post => <Link 
                    key={post.id}
                    to= {`/posts/${post.id}`}
                    >{post.id}   </Link>)
            }
            {
                posts.map(post => <Link key={post.id} to={`posts/${post.id}`}></Link>)
            }
            
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;