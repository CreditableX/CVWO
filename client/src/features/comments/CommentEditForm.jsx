import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchComment, updateComment} from "../../services/commentService";

function CommentEditForm() {
    const [comment, setComment] = useState(null);
    const{postid, commentid} = useParams();
    const[, setLoading] = useState(true);
    const[, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // fetch current post by id
        const fetchCurrentComment = async () => {
            try {
                const json = await fetchComment(postid, commentid);
                setComment(json);
            }
            catch (e) {
                setError(e);
            }
            finally {
                setLoading(false);
            }
        };
        fetchCurrentComment();
    },[postid, commentid])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedComment = {
            body: comment.body,
        };

        try {
            await updateComment(postid, commentid, updatedComment);
            navigate(`/posts/${postid}`);
        }
        catch (e) {
            console.error("Failed to update post:", e);
        }
        finally {
            setLoading(false);
        }
    };

    if(!comment) return <h2>Loading...</h2>

    return (
        <div>
            <h2>Edit Comment</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="comment-body">Body</label>
                    <br />
                    <textarea
                    id="comment-body"
                    value={comment.body}
                    onChange={(e) => setComment({...comment, body:e.target.value})}
                    />
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default CommentEditForm;