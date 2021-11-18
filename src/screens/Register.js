import React, { useState } from "react";
import Footer from "../components/Footer";
import st from "../css/login.module.css";
import { auth } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../context/Context";

function Login() {
  const history = useHistory();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [password, setpassword] = useState("");
  const { setAlert } = useAppContext();

  const cleanInputs = () => {
    setusername("");
    setpassword("");
    setconfirmPassword("");
  };

  const register = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(username, password)
        .then((authUser) => {
          authUser.user
            .updateProfile({
              displayName: name,
              pass: password,
            })
            .then(() => {
              setAlert(() => ({ isVisible: true, msg: "User id registered." }));
              cleanInputs();
              history.replace("/");
            });
        })
        .catch((err) =>
          setAlert(() => ({ isVisible: true, msg: err.message }))
        );
    } else {
      setAlert(() => ({ isVisible: true, msg: "Passwords do not match." }));
    }
  };

  return (
    <>
      <div className={st.login}>
        <div>
          <div className={`${st.circle} ${st.xxlarge} ${st.shade1}`}></div>
          <div className={`${st.circle} ${st.xlarge} ${st.shade2}`}></div>
          <div className={`${st.circle} ${st.large} ${st.shade3}`}></div>
          <div className={`${st.circle} ${st.medium} ${st.shade4}`}></div>
          <div className={`${st.circle} ${st.small} ${st.shade5}`}></div>
        </div>

        <div className={st.form} style={{ height: "580px" }}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="email"
              value={username}
              required
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Confirm_Password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div>
          <button id="sign-up" onClick={register}>
            Sign up
          </button>
          <div>
            <button
              onClick={() => {
                history.replace("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
