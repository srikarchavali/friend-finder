import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "./login.css";
import { loginUser, fetchRequest } from "../index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const logo = require("../assets/logo.png");

const Login = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [state, setState] = useState(false);
  const navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    const data = fetchRequest(setUser, username, email, password);
    if (data) {
      openLogin();
      const customId = "custom-id-yes";
      const notify = () => {
        toast("Successfully Registered", {
          toastId: customId,
        });
      };
      notify();
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    let login = await loginUser(email, password);
    if (login === true) {
      // const data = await allUsers();
      // setUserData(data);
      // setState(!state);
      navigate("/user");
      const notify = () => {
        toast(`Welcome ${email}`);
      };
      notify(email);
    }
  };

  const openRegister = () => {
    let card = document.getElementById("card");
    card.style.transform = "rotateY(-180deg)";
  };

  const openLogin = () => {
    let card = document.getElementById("card");
    card.style.transform = "rotateY(0deg)";
  };

  return (
    <div>
      <div className="login-container">
        <img src={logo} alt="logo" />
        <div className="login-card">
          <div className="login-inner-box" id="card">
            <div className="login-card-front">
              <h2>LOGIN</h2>
              <form onSubmit={loginHandler}>
                <div className="login-icon">
                  <input
                    className="login-input-box"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                  <MdEmail />
                </div>
                <div className="login-icon">
                  <input
                    className="login-input-box"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />{" "}
                  <RiLockPasswordFill />
                </div>
                <button type="submit" className="login-submit-btn">
                  Login
                </button>
              </form>
              <button
                type="button"
                className="login-btn"
                onClick={openRegister}
              >
                I'm New Here
              </button>
              <ToastContainer />
            </div>
            <div className="login-card-back">
              <h2>REGISTER</h2>
              <form onSubmit={signUpHandler}>
                <input
                  className="login-input-box"
                  type="text"
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  className="login-input-box"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="login-input-box"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="login-submit-btn">
                  Submit
                </button>
                {/* <ToastContainer /> */}
              </form>
              <button type="button" className="login-btn" onClick={openLogin}>
                I have an account
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </>
      )} */}
    </div>
  );
};
export default Login;
