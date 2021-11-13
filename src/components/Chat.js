import React from "react";
import st from "../css/container.module.css";
import exSt from "../css/posts.module.css";
function Chat({ name, ls, msg, func, favs, avatar, show, add }) {
  return (
    <div className={`${st.chat} ${st.ripple}`} onClick={func}>
      <div className={st.avatar}>
        {show ? (
          <span className={st.add} onClick={add}>
            <i className="fas fa-user-plus"></i>
          </span>
        ) : null}
        <button>{!avatar ? <i className="fas fa-user"></i> : avatar}</button>
      </div>
      <div className={st.info}>
        <div className={st.name}>{name}</div>
        <div className={st.sub}>
          <span className={st.msg}>{msg}</span>
          <span className={st.lastseen}>{ls}</span>
        </div>
      </div>

      {favs && (
        <div>
          {favs.map((item) => {
            return (
              <span
                className={exSt.tag}
                key={item}
                style={{
                  color: "grey",
                  fontSize: "0.9rem",
                  marginRight: "10px",
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Chat;
