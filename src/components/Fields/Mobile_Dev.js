import React from "react";
import Post from "../Post";
function Mobile_Dev() {
  const mdList = [
    {
      heading: "Chitti the mobile developer",
      time: "9:00 pm",
      content:
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore." +
        "this is a robo who steals asswarya rai  from rajnikant Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus tenetur veritatis maiores laboriosam, voluptates mollitia dolorem accusamus fuga dolore.",
    },
  ];
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
