import { API_URL } from "../constants";

async function fetchAllPosts() {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function fetchFilteredPosts(flair) {
    if (flair !== 'all'){
        const response = await fetch(`${API_URL}?flair=${flair}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }
    else {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }
}

async function fetchPost(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function createPost(postData) {
    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(postData),
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}


async function updatePost(id, postData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(postData),
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function deletePost(id) {
    const response = await fetch (`${API_URL}/${id}`, {
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

export {createPost, deletePost, fetchAllPosts, fetchPost, updatePost, fetchFilteredPosts};