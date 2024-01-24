import React from 'react';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

function NavBar() {

    const handleChange = (e) => {
        setFlair(e.target.value);
        console.log(flair); // Check the value in the console
      };
    
    return (
        <nav>
            <Button variant="outlined"><Link to="/">All Posts</Link></Button>
            {" | "}
            <Button variant="outlined"><Link to="/new">New Post</Link></Button>
        </nav>
    )
}

export default NavBar;