import React from 'react';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import getUserId from '../util/getUserId';

function NavBar() {
    // const [user_id, setUserId] = React.useState(getUserId());

    // React.useEffect(() => {setUserId(getUserId()); console.log(user_id);},[])

    return (
        <nav>
            {/* onChange={(e) => getUserId} */}
            <Button variant="outlined"><Link to="/">All Posts</Link></Button>
            {" | "}
            {getUserId() !== null && <Button variant="outlined"><Link to="/new">New Post</Link></Button>}
            {getUserId() === null && <Button variant="outlined"><Link to="/signup">Signup</Link></Button>}
            {getUserId() === null && " | "}
            {getUserId() === null && <Button variant="outlined"><Link to="/login">Login</Link></Button>} 
            {getUserId() !== null && " | "}
            {getUserId() !== null && <Button variant="outlined"><Link to="/logout">Logout</Link></Button>}
            {/* <Button variant="outlined"><Link to="/logout">Logout</Link></Button> */}
        </nav>
    )
}

export default NavBar;