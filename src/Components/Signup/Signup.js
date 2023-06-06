const Signup = () => {
    return (
        <div>
            <form>
                <input required placeholder="Enter first name here..."></input>
                <input required placeholder="Enter last name here..."></input>
                <input required placeholder="Enter email here..."></input>
                <input required placeholder="Enter password here..."></input>
                <input required placeholder="Confirm password here..."></input>
                <input required placeholder="Enter age here..."></input>
                <input placeholder="Enter sex here..."></input>
                <input required placeholder="Enter experience here..."></input>
                <button>Sign up</button>
            </form>
            <span>
                Already have an account? <a href="">Sign in</a>
            </span>
        </div>
    );
};

export default Signup;
