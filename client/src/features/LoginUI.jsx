import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
import { API_URL } from '../constants';

function LoginUI() {
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
        const response = await fetch("http://localhost:3000/api/v1/login", {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        if (!response.ok) {
            console.log(`error: ${response.message}`);
        }
        const responses = await response.json();
        document.cookie = `user_id=${responses.user_id}; Secure`;
        document.cookie = `JWT=${responses.token}; Secure`;
        window.location.href="/";
        return responses;
    }

    return (
        <div>
            <h2>Login</h2>
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
                    <Button type='submit' variant="contained">Login</Button>
                </div>
            </form>
        </div>
    );
}

export default LoginUI;