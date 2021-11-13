import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import st from "../css/users.module.css";
import { useAppContext } from "../context/Context";
import { useHistory } from "react-router-dom";

var internalFavorites;
function Users() {
  const [filteredList, setfilteredList] = useState([]);

  const { users, chats, setChats, setFavourites } = useAppContext();
  const history = useHistory();

  const filterList = () => {
    const local = [];
    users.forEach((user) => {
      var count = 0;

      user.favs.forEach((fav) => {
        if (internalFavorites?.includes(fav) && count === 0) {
          count = 1;
          local.push(user);
        }
      });
      count = 0;
    });

    setfilteredList(() => local);
  };

  useEffect(() => {
    const effect = () => {
      internalFavorites = JSON.parse(localStorage.getItem("fav_fields"));
      setFavourites(() => internalFavorites);
      filterList();
    };
    return effect();
    // eslint-disable-next-line
  }, []);

  let temp = 0;

  const add = (user) => {
    chats.forEach((item) => {
      if (item.id === user.id) {
        temp = 1;
      }
    });
    if (temp === 0) {
      const ucopy = {
        ...user,
        ls: "7:00 pm",
        on: "Wed",
        messages: [],
        favs: [],
      };
      const copy = [...chats, ucopy];
      setChats(() => copy);
      history.replace("/chats");
    }
    temp = 0;
  };

  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <SideBar />
      <div className={st.right}>
        <div className={st.box}>
          <span>Add People You May Know</span>
        </div>
        <div className={st.box}>
          {filteredList.map((user, index) => (
            <Chat key={index} {...user} show={true} add={() => add(user)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
