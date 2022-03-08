import { useState } from "react";
// import { Link } from "react-router-dom";
import { loginUser } from "./index";
import "./login.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import UserPage from "./UserPage";

const Login = () => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [state, setState] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    let login = await loginUser(setUser, email, password);
    console.log(login);
    if (login === true) {
      setState(!state);
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
      {state ? (
        <UserPage state={state} setState={setState} email={email} />
      ) : (
        // <>
        //   <div className="login-navbar">
        //     <button className="logout" onClick={() => setState(!state)}>
        //       Logout
        //     </button>
        //     <Link to="/userInfo">
        //       <button className="settings">
        //         <h2>
        //           <IoIosSettings />
        //         </h2>
        //       </button>
        //     </Link>
        //     <button className="delete" onClick={deleteUser}>
        //       <h2>
        //         <MdDelete />
        //       </h2>
        //     </button>
        //   </div>
        //   <h1>User Profile Cards</h1>
        // </>
        <>
          <div className="container">
            <div className="card">
              <div className="inner-box" id="card">
                <div className="card-front">
                  <h2>LOGIN</h2>
                  <form onSubmit={loginHandler}>
                    <div className="icon">
                      <input
                        className="input-box"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                      <MdEmail />
                    </div>
                    <div className="icon">
                      <input
                        className="input-box"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />{" "}
                      <RiLockPasswordFill />
                    </div>
                    <button type="submit" className="submit-btn">
                      Login
                    </button>
                  </form>
                  <button type="button" className="btn" onClick={openRegister}>
                    I'm New Here
                  </button>
                </div>
                <div className="card-back">
                  <h2>REGISTER</h2>
                  <form>
                    <input
                      className="input-box"
                      type="text"
                      placeholder="Enter Username"
                      required
                    />
                    <input
                      className="input-box"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                    <input
                      className="input-box"
                      type="password"
                      placeholder="Password"
                    />
                    <button type="submit" className="submit-btn">
                      Submit
                    </button>
                  </form>
                  <button type="button" className="btn" onClick={openLogin}>
                    I have an account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
