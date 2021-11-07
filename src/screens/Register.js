import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import st from "../css/login.module.css";
function Login() {
  const history = useHistory();
  const [username, setusername] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className={st.login}>
      <div>
        <div className={`${st.circle} ${st.xxlarge} ${st.shade1}`}></div>
        <div className={`${st.circle} ${st.xlarge} ${st.shade2}`}></div>
        <div className={`${st.circle} ${st.large} ${st.shade3}`}></div>
        <div className={`${st.circle} ${st.medium} ${st.shade4}`}></div>
        <div className={`${st.circle} ${st.small} ${st.shade5}`}></div>
      </div>

      <div className={st.form} style={{ height: "500px" }}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="email"
            value={username}
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
        <div>
          <label htmlFor="Confirm_Password">Confirm Password</label>
          <input
            id="Confirm_Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </div>
        <button>Sign up</button>
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
  );
}

export default Login;
