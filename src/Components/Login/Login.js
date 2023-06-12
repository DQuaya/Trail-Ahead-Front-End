import Hikedetails from "../Hikedetails/Hikedetails";
import "./Login.css";


const Login = () => {

  return (
    <div className="frm-contain">
    <form>
        <h1><strong>Log In</strong></h1>
        <label className="username">Username<input type="text" name="Username" placeholder="username" required></input></label>
        <label className="psswrd">  password<input type="text" name="psswrd" placeholder="password" required></input></label>
        <button className="log-bttn">Log In</button>
    </form>
    </div>

    
    
  )
};

export default Login