import React from "react";
import Post from "../Post";
import { mdList } from "../../utils/data";
function Mobile_Dev() {
  return (
    <div>
      {mdList.map((post, index) => (
        <Post
          key={index}
          {...post}
          tag={"Mobile Development"}
          color={"linear-gradient(50deg,#ff6347,#e34d33)"}
        />
      ))}
    </div>
  );
}

export default Mobile_Dev;
