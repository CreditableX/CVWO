import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { createComment } from '../../services/commentService';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import getUserId from '../../util/getUserId';

function NewCommentForm() {
    const [body, setBody] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    const user_id = getUserId();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const commentData = {body, user_id};

        try {
            await createComment(id, commentData); 
            navigate(`/posts/${id}`);
        }
        catch (e) {
            console.error("Failed to create comment", e);
        }
    }
    return (
        <div>
            <h2> Create new comment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='commentInput'>Comment:</label>
                    <textarea
                    id="commentInput"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <Button type='submit' variant="contained">Create Comment</Button>
                </div>
            </form>
        </div>
        
    );
}

export default NewCommentForm;