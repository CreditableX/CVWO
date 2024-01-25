import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

function LogoutUI() {
    function clearAuthCookies() {
        document.cookie = `user_id=; expires=Thu 01 Jan 1970 00:00:00 UTC;`;
        document.cookie = `JWT=; expires=Thu 01 Jan 1970 00:00:00 UTC;`;
        window.location.href="/";
    }
    return (
        <div>
            <h2>Logout?</h2>
            <Link to="/"><Button type='submit' variant="contained" onClick={clearAuthCookies}>Yes</Button></Link>
            {" | "}
            <Link to="/"><Button type='submit' variant="contained" >No</Button></Link>
        </div>

    );
}

export default LogoutUI;