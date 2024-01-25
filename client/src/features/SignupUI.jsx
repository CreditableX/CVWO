import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { Button } from '@mui/material';
import { API_URL } from '../constants';


function SignupUI() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {username, password};

        try {
            const response = await createUser(userData);
            navigate(`/`);
        }
        catch (e) {
            console.error("Failed to create post", e);
        }
    }

    async function createUser(userData) {
        const response = await fetch("http://localhost:3000/api/v1/users/signup", {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responses = await response.json();
        document.cookie = `user_id=${responses.user_id}; Secure`;
        document.cookie = `JWT=${responses.token}; Secure`;
        return responses;
    }

    return (
        <div>
            <h2> Signup </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='titleInput'>Username:</label>
                    <input
                    id="usernameInput"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor='passwordInput'>Password:</label>
                    <textarea
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />

                </div>
                <div>
                    <Link to="/"><Button type='submit' variant="contained">Signup</Button></Link>
                </div>
            </form>
        </div>
    );
}

export default SignupUI;