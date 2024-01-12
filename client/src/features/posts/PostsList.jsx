import React, {useState, useEffect} from 'react';
import {API_URL} from "../../constants";
import { Link } from 'react-router-dom';
import { fetchAllPosts, deletePost as deletePostService } from '../../services/postService';

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await fetchAllPosts();
                setPosts(data);
                setLoading(false);
            }

            catch (e) {
                setError("error");
                console.log("error:", e);
                setLoading(false);
            }
        }
        loadPosts();
    }, [])
    
    const deletePost = async (id) => {
        try {
            await deletePostService(id);
            setPosts(posts.filter((post) => post.id !== id));
        }
        catch (e) {
            console.log(e);
        }

    };

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className='post-container'>
                    <h2>
                        <Link to={`/posts/${post.id}`} className="post-title">
                            Post #{post.id}: {post.title}
                        </Link>
                        {" | "}
                        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                    </h2>
                    <div className='post-links'>
                        <button onClick={() => deletePost(post.id)}>Delete post #{post.id}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostsList;