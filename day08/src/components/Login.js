import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../assets/form.css'
import '../assets/basic.css'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const authenticate = (event) => {
        event.preventDefault();
        if (username === "admin" && password === "123") {
            navigate('/dashboard');
        } else {
            alert("Incorrect username or password");
        }
    };


    return (
        <div>
            <h1 className="header">Login here</h1>
            <form onSubmit={authenticate} className="paragraph">
                <table>
                    <tbody>
                        <tr>
                            <td>User Name</td>
                            <td>
                                <input
                                    type='text'
                                    name='uname'
                                    id="uname"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input
                                    type='password'
                                    name='pass'
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
