import { useState } from 'react'
import './App.css';
import PostsList from './features/posts/PostsList';

function App() {
  return <>
  <div className="app">
    <h1> React Blog </h1>
    <p> Find this app layout in client/src/App.jsx </p>
    <PostsList />
  </div>
  </>
}

export default App
