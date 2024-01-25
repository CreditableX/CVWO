import { post } from "jquery";
import { API_URL } from "../constants";

async function fetchComment(postid, commentid) {
    const response = await fetch(`${API_URL}/${postid}/comments/${commentid}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function fetchPostComments(postid) {
    const response = await fetch(`${API_URL}/${postid}/comments`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function deleteComment(postid, commentid) {
    const response = await fetch (`${API_URL}/${postid}/comments/${commentid}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    // check for 204 (No Content)
    if (response.status === 204) {
        return null;
    } 
    return response.json();
}


async function createComment(commentid, commentData) {
    const response = await fetch(`${API_URL}/${commentid}/comments`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(commentData),
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function updateComment(postid, commentid, commentData) {
    const response = await fetch(`${API_URL}/${postid}/comments/${commentid}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(commentData),
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}


export {fetchComment, createComment, deleteComment, fetchPostComments, updateComment}