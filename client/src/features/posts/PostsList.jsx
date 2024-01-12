import React, {useState, useEffect} from 'react';
import {API_URL} from "../../constants";
import { Link } from 'react-router-dom';

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetch(API_URL);
                if (response.ok){
                    const json = await response.json();
                    setPosts(json);
                }
                else {
                    throw response;
                }
            }

            catch (e) {
                setError("error");
                console.log("error:", e);
            }

            finally {
                setLoading(false);
            }
        }
        loadPosts();
    }, [])
    
    const deletePost = async (id) => {
        try {
            //delete request to http://localhost:3000/api/v1/posts/:id
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setPosts(posts.filter((post) => post.id !== id));
            }

            else {
                throw response;
            }
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