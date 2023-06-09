import "./Signup.css";
import Login from "../Login/Login";

const Signup = () => {
    

    return (
        <div className="formContainer">
            <form>
                <h1>
                    <strong>Sign Up</strong>
                </h1>
                <p>It's quick and easy.</p>
                <hr></hr>
                <div className="horizontalRow">
                    <label className="fname"> First Name
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                        ></input>
                    </label>
                    <label className="lname">
                        Last Name
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                        ></input>
                    </label>
                </div>
                <label className="email">
                    Email
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                    ></input>
                </label>
                <label className="password">
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    ></input>
                </label>
                <label className="confirm">
                    Confirm Password
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                    ></input>
                </label>
                <div className="horizontalRow">
                    <label className="age">
                        Age
                        <input name="age" placeholder="Age" required></input>
                    </label>
                    <label>
                        Gender
                        <input name="gender" placeholder="Gender"></input>
                    </label>
                    <label>
                        Experience
                        <input
                            name="experience"
                            placeholder="Experience"
                            required
                        ></input>
                    </label>
                </div>

                <button className="sgn-button">Sign up</button>
            </form>
            <span>
                Already have an account? <a href="/login">Sign in</a>
            </span>
        </div>
    );
};

export default Signup;
