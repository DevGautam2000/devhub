import React from "react";
import Post from "../Post";
import { csList } from "../../utils/data";
function CyberSecurity() {
  return (
    <div>
      {csList.map((post, index) => (
        <Post
          key={index}
          {...post}
          tag={"Cyber Security"}
          color={"linear-gradient(50deg,#80ea80,#66cb66)"}
        />
      ))}
    </div>
  );
}

export default CyberSecurity;
