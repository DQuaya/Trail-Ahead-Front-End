import "./Signup.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
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
                <h1>Sign Up</h1>
                <label className="email">
                    <span>Email</span>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </label>
                <div className="horizontalRow">
                    <label className="secondaryRow">
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
                    <label className="secondaryRow">
                        <span>Confirm Password</span>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            required
                        ></input>
                    </label>
                </div>
                <div className="horizontalRow">
                    <label className="secondaryRow">
                        <span>First Name</span>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        ></input>
                    </label>
                    <label className="secondaryRow">
                        <span>Last Name</span>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        ></input>
                    </label>
                </div>
                <p className="pfont">
                    By clicking "Submit", you agree to Trail Ahead's User
                    Agreement, Privacy Policy, and Cookie Policy.
                </p>
                <button type="submit" className="actionButton">
                    Submit
                </button>
            </form>
            <span>Already have an account?</span>
            <span>
                <Link to="/login" className="">
                    Sign in here
                </Link>
            </span>
            <span>
                <Link to="/optional" className="">
                    Complete Profile
                </Link>
            </span>
        </div>
    );
};

export default Signup;
