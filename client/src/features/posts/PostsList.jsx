import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPosts, deletePost, fetchFilteredPosts} from '../../services/postService';

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await fetchFilteredPosts(filter);
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
    }, [filter])
    
    const deletePostHandler = async (id) => {
        try {
            await deletePost(id);
            setPosts(posts.filter((post) => post.id !== id));
        }
        catch (e) {
            console.log(e);
        }

    };
      
    return (

        <div>
        {/* Filter dropdown */}
        <label htmlFor="filter">Filter by: </label>
        <select
            id="filter"
            value={filter}
            onChange={(e) => {
                setFilter(e.target.value);
            }}
        >
                <option value="all">All</option>
                <option value="discussion">Discussion</option>
                <option value="meme">Meme</option>
                <option value="question">Question</option>
        </select>
            {posts.map((post) => (
                <div key={post.id} className='post-container'>
                    <h2>
                        <Link to={`/posts/${post.id}`} className="post-title">
                        Post #{post.id}: {post.title} Flair: {post.flair}
                        </Link> 
                        {" | "}
                        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                    </h2>
                    <div className='post-links'>
                        <button onClick={() => deletePostHandler(post.id)}>Delete post #{post.id}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostsList;