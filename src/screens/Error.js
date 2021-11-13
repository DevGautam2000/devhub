import React from "react";
import { Link } from "react-router-dom";
import style from "../css/error.module.css";
import error from "../assets/error1.svg";
function Error() {
  return (
    <div className={style.error}>
      <img src={error} alt="error" />
      <div className={style.container}>
        <section>
          <p>
            <i className="fas fa-exclamation-triangle" />
            Page Not Found
          </p>
          <Link to="/" className={style.route}>
            click here to go back to home
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Error;
