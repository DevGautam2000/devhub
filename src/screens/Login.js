import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import st from "../css/login.module.css";
import { auth } from "../firebase/firebase";
import { useAppContext } from "../context/Context";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setAlert } = useAppContext();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        history.replace("/");
      }
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  const cleanInputs = () => {
    setusername("");
    setpassword("");
  };
  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(username, password)
      .catch((err) => setAlert(() => ({ isVisible: true, msg: err.message })));
    cleanInputs();
  };

  const history = useHistory();
  return (
    <>
      <div className={st.login}>
        <div className={st.circle_wrapper}>
          <div className={`${st.circle} ${st.xxlarge} ${st.shade1}`}></div>
          <div className={`${st.circle} ${st.xlarge} ${st.shade2}`}></div>
          <div className={`${st.circle} ${st.large} ${st.shade3}`}></div>
          <div className={`${st.circle} ${st.medium} ${st.shade4}`}></div>
          <div className={`${st.circle} ${st.small} ${st.shade5}`}></div>
        </div>

        <div className={st.form}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={username}
              type="email"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              id="Password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button onClick={login}>Sign in</button>
          <div>
            <button
              data-testid="register"
              onClick={() => {
                history.push("/register");
              }}
            >
              Create account
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
