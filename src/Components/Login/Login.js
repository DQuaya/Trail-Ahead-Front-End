import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setError(data.message);
                console.log("inside fetch", error);
            });
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <label className="loginInput">
                    <span>Email</span>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </label>
                <label className="loginInput">
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    ></input>
                </label>

                <button className="actionButton">Log In</button>
            </form>
            <span>Don't have an account?</span>
            <span>
                <Link to="/register">Sign up here</Link>
            </span>
        </div>
    );
};

export default Login;
