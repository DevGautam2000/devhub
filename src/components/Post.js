import React from "react";
import st from "../css/posts.module.css";

function Post({ heading, time, content, tag, link, color }) {
  return (
    <div className={st.posts}>
      <div
        className={st.header}
        onClick={() => {
          window.open(link);
        }}
      >
        <div className={st.heading}>
          <span>{heading}</span>
        </div>
        <div className={st.time}>{time}</div>
      </div>

      <main>
        <p>{content}</p>
      </main>

      <span className={st.tag} style={{ background: color }}>
        {tag}
      </span>
    </div>
  );
}

export default Post;
