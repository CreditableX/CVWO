import React from 'react';
import {Route, Routes} from "react-router-dom";

import PostsList from '../features/posts/PostsList';
import PostDetails from '../features/posts/PostDetails';
import NewPostForm from '../features/posts/NewPostForm';
import PostEditForm from '../features/posts/PostEditForm';
import NewCommentForm from '../features/comments/NewCommentForm';
import CommentsList from '../features/comments/CommentsList';
import CommentEditForm from '../features/comments/CommentEditForm';
import SignupUI from '../features/SignupUI';
import LoginUI from '../features/LoginUI';
import LogoutUI from '../features/LogoutUI';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<PostsList />} />
            <Route path='posts/:id' element={<><PostDetails /><CommentsList /></>} />
            <Route path='posts/:id/edit' element={<PostEditForm />} />
            <Route path='/new' element={<NewPostForm />} />
            <Route path='/posts/:id/comments' element={<NewCommentForm />} />
            <Route path='/posts/:postid/comments/:commentid/edit' element={<CommentEditForm />} />
            <Route path='/signup' element={<SignupUI />} />
            <Route path='/login' element={<LoginUI />} />
            <Route path='/logout' element={<LogoutUI />} />
        </Routes>
    )
}

export default AppRoutes;