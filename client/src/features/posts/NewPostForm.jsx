import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { createPost } from '../../services/postService';
import { Button } from '@mui/material';

function NewPostForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {title, body};

        try {
            const response = await createPost(postData);
            navigate(`/posts/${response.id}`);
        }
        catch (e) {
            console.error("Failed to create post", e);
        }
    }


    return (
        <div>
            <h2> Create new post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='titleInput'>Title:</label>
                    <input
                    id="titleInput"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='bodyInput'>Body:</label>
                    <textarea
                    id="bodyInput"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <Button type='submit' variant="contained">Create Post</Button>
                </div>
            </form>
        </div>
    );
}

export default NewPostForm;