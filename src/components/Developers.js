import React, { useState } from "react";
import style from "../css/developers.module.css";
import { developers } from "../utils/devData";
import Card from "./Card";

function Developers() {
  const [isVisible, setIsVisible] = useState(false);

  const maximize = (e) => {
    document.getElementById("devs").style.width = "50vw";
    document.getElementById("devs").style.height = "50vh";
    setIsVisible(() => true);
  };
  const minimize = () => {
    document.getElementById("devs").style.height = "40px";
    document.getElementById("devs").style.width = "200px";
  };

  return (
    <div id="devs" className={style.developers}>
      <button
        onClick={() => {
          isVisible ? minimize() : maximize();
          setIsVisible(() => !isVisible);
        }}
      >
        {isVisible ? (
          <i className="fas fa-chevron-down"></i>
        ) : (
          <i className="fas fa-chevron-up"></i>
        )}
      </button>
      {isVisible ? (
        <div className={style.row}>
          {developers.map((developer) => (
            <Card {...developer} key={developer.name} />
          ))}
        </div>
      ) : (
        "Know the developers!"
      )}
    </div>
  );
}

export default Developers;
