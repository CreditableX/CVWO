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
        try {
            const response = await fetch("http://localhost:3000/api/v1/login", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(userData),
            });
    
            if (!response.ok) {
                throw new Error(`Failed to login: ${response.statusText}`);
            }
    
            const responseData = await response.json();
            document.cookie = `user_id=${responseData.user_id}; Secure`;
            document.cookie = `JWT=${responseData.token}; Secure`;
            window.location.href = "/";
            return responseData;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
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