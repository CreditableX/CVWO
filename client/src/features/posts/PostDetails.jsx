import React, {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import { fetchPost, deletePost} from "../../services/postService";
import getJWT from "../../util/getJWT";
import getUserId from "../../util/getUserId";

function PostDetails () {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    const user_id = getUserId();

    useEffect(() => {
        const fetchCurrentPost = async () => {
            try {
                const json = await fetchPost(id);
                setPost(json);
            }
            
            catch (e) {
                console.log("error", e);
            }
        };
        fetchCurrentPost();

    }, [id]);

    const deletePostHandler = async () => {
        try {
            await deletePost(post.id);
            navigate("/");
        }
        catch (e) {
            console.error("failed to delete: ", e);
        }
    };

    if (!post) return <h2> Loading... </h2>;
    
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to= {`/posts/${post.id}/comments`}>Add comment</Link>
            {" | "}
            <Link to="/">Back to posts</Link>
            {user_id === post.user_id && " | "}
            {user_id === post.user_id && (<Link to={`/posts/${post.id}/edit`}>Edit</Link>)}
            {user_id === post.user_id && " | "}
            {user_id === post.user_id && (<button onClick={deletePostHandler}>Delete</button>)}
        </div>
    );
}

export default PostDetails;