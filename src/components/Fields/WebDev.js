import React from "react";
import Post from "../Post";
function WebDev() {
  const webList = [
    {
      heading: "Chitti the robo",
      time: "9:00 pm",
      content:
        "this is a robo who steals asswarya rai from rajnikant is a robo who steals asswarya rai from rajnikant is a robo who steals asswarya rai from rajnikant is a robo who steals asswarya rai from rajnikant is a robo who steals asswarya rai from rajnikant is a robo who steals asswarya rai from rajnikant is a robo who steals asswarya rai from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore.",
    },
  ];
  return (
    <div>
      {webList.map((post, index) => (
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
