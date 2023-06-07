import './Signup.css';

const Signup = () => {
    return (
        <div className="form-container">
            <form>
                <h1><strong>Sign Up</strong></h1>
                <p>It's quick and easy.</p>
                <hr></hr>
                
                <input required placeholder="First name"></input>
                <input required placeholder="Last name "></input>             
                <input required placeholder="Email "></input>
                <input required placeholder="New Password "></input>
                <input required placeholder="Confirm password "></input>
                <input required placeholder="Age"></input>
                <input placeholder="Sex"></input>
                <input required placeholder="Experience"></input>
            
                <button className="sgn-button">Sign up</button>
            </form>
            <span>
                Already have an account? <a href="">Sign in</a>
            </span>
            </div>
    
    );
};

export default Signup;
