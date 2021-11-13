import React from "react";
import st from "../css/navbar.module.css";
import { useHistory, useLocation } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const location = useLocation();

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
        <button>
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
