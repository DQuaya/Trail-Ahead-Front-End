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
                

                <button className="sgn-button">Sign up</button>
            </form>
            <span>
                Already have an account? <a href="/login">Sign in</a>
                <p> <a href="/optional">Complete Profile</a></p>

                <p className="pfont">By clicking Submit, you agree to Trail Ahead's User Agreement, Privacy Policy, and Cookie Policy.</p>
               
            </span>
        </div>
    );
};

export default Signup;
