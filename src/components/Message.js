import React from "react";
import st from "../css/container.module.css";

function Message({ msg, tag, time }) {
  return tag === "user" ? (
    <div className={st.user}>
      {msg} <span>{time}</span>
    </div>
  ) : (
    <div className={st.sender}>
      {msg} <span>{time}</span>
    </div>
  );
}

export default Message;
