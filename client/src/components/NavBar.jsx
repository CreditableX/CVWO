import React from 'react';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

function NavBar() {
    return (
        <nav>
            <Button variant="outlined"><Link to="/">Post List</Link></Button>
            {" | "}
            <Button variant="outlined"><Link to="/new">New Post</Link></Button>
        </nav>
    )
}

export default NavBar;