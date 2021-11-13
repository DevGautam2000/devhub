import React from "react";
import Post from "../Post";
function AI() {
  const aiList = [
    {
      link: "",
      heading: "Chitti the robo",
      time: "9:00 pm",
      content:
        "this is a robo who steals asswarya rai from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore" +
        "this is a robo who steals asswarya rai from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore.",
    },
  ];

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
