import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import st from "../css/login.module.css";
function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
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
          <button>Sign in</button>
          <div>
            <button
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
