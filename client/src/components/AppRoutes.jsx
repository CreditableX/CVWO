import React from 'react';
import {Route, Routes} from "react-router-dom";

import PostsList from '../features/posts/PostsList';
import PostDetails from '../features/posts/PostDetails';
import NewPostForm from '../features/posts/NewPostForm';
import PostEditForm from '../features/posts/PostEditForm';
import NewCommentForm from '../features/comments/NewCommentForm';
import CommentsList from '../features/comments/CommentsList';
import CommentEditForm from '../features/comments/CommentEditForm';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<PostsList />} />
            <Route path='posts/:id' element={<><PostDetails /><CommentsList /></>} />
            <Route path='posts/:id/edit' element={<PostEditForm />} />
            <Route path='/new' element={<NewPostForm />} />
            <Route path='/posts/:id/comments' element={<NewCommentForm />} />
            <Route path='/posts/:postid/comments/:commentid/edit' element={<CommentEditForm />} />
        </Routes>
    )
}

export default AppRoutes;