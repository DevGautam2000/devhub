import React from "react";
import { aiList } from "../../utils/data";
import Post from "../Post";

function AI() {
  return (
    <div>
      {aiList.map((post, index) => (
        <Post
          key={index}
          {...post}
          tag={"Artificial Intelligence"}
          color={"linear-gradient(50deg,#8095ea,#5773e1)"}
        />
      ))}
    </div>
  );
}

export default AI;
