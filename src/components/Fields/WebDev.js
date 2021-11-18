import React from "react";
import Post from "../Post";
import { wdList } from "../../utils/data";
function WebDev() {
  return (
    <div>
      {wdList.map((post, index) => (
        <Post
          key={index}
          {...post}
          tag={"Web Development"}
          color={"linear-gradient(50deg,#80baea, #59a7e6)"}
        />
      ))}
    </div>
  );
}

export default WebDev;
