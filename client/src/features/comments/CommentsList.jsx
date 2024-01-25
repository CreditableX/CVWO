import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPostComments, deleteComment} from '../../services/commentService';

function CommentsList() {
    const [comments, setComments] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        async function loadPostComments() {
            try {
                const data = await fetchPostComments(id);
                setComments(data);
                setLoading(false);
            }

            catch (e) {
                setError("error");
                console.log("error:", e);
                setLoading(false);
            }
        }
        loadPostComments();
    }, [])
    
    const deleteCommentHandler = async (postid, id) => {
        try {
            await deleteComment(postid, id);
            setComments(comments.filter((comment) => comment.id !== id));
        }
        catch (e) {
            console.log(e);
        }

    };

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id} className='comment-container'>
                    <h2>
                        Comment #{comment.id}: {comment.body}
                        {" | "}
                        <Link to={`/posts/${id}/comments/${comment.id}/edit`}>Edit</Link>
                    </h2>
                    <div className='post-links'>
                        <button onClick={() => deleteCommentHandler(id, comment.id)}>Delete comment #{comment.id}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentsList;