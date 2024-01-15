import React, {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import { fetchPost, deletePost} from "../../services/postService";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import PostEditForm from "./PostEditForm";

function PostDetails () {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

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
            <Link to="/">Back to posts</Link>
            {" | "}
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
            {" | "}
            <button onClick={deletePostHandler}>Delete</button>
        </div>
    );
}

export default PostDetails;