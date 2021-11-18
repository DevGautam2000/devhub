import React from "react";
import st from "../css/navbar.module.css";
import { auth } from "../firebase/firebase";
import { useHistory, useLocation } from "react-router-dom";
import { useAppContext } from "../context/Context";

function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const { setAlert } = useAppContext();

  const logout = (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      auth
        .signOut()
        .then(() => {
          history.replace("/login");
          setAlert(() => ({ isVisible: true, msg: "User logged out." }));
        })
        .catch((err) =>
          setAlert(() => ({ isVisible: true, msg: err.message }))
        );
    }
  };

  return (
    <div className={st.navbarMain}>
      <div className={st.navbarText}>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (location.pathname !== "/") history.push("/");
          }}
        >
          <span>DevHub</span>
        </p>
      </div>
      <div className={st.navbarbtns}>
        <button onClick={logout}>
          <i className="fas fa-power-off"></i>
          <div className={st.tooltip}>Logout</div>
        </button>
        <button
          onClick={() => {
            history.push("/settings");
          }}
        >
          <i className="fas fa-user"></i>
          <div className={st.tooltip}>Profile</div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
