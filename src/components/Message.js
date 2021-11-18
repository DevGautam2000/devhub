import React from "react";
import st from "../css/container.module.css";
import { auth } from "../firebase/firebase";

function Message({ msg, tag, name }) {
  return tag === auth?.currentUser?.uid ? (
    <div className={st.user}>
      {msg} <span>{name}</span>
    </div>
  ) : (
    <div className={st.sender}>
      {msg} <span>{name}</span>
    </div>
  );
}

export default Message;
