import React from "react";
import st from "../css/settings.module.css";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useAppContext } from "../context/Context";
import exSt from "../css/posts.module.css";
import Field from "../components/Field";

function Settings() {
  const { chats, setChats, setFavourites } = useAppContext();
  const fav_fields = JSON.parse(localStorage.getItem("fav_fields"));
  const deleteChat = (id) => {
    const copy = chats.filter((chat) => {
      if (chat.id !== id) {
        return chat;
      }
      return null;
    });

    setChats(() => copy);
  };
  const Remove = (remove_now) => {
    fav_fields.splice(fav_fields.indexOf(remove_now), 1);
    localStorage.setItem("fav_fields", JSON.stringify(fav_fields));
    setFavourites(() => fav_fields);
  };

  return (
    <div style={{ display: "flex" }} className={st.settings}>
      <Navbar />
      <SideBar />

      <div className={st.right}>
        <div className={st.profile}>
          <div className={st.avatar}>
            <button>
              <i className="fas fa-user"></i>
            </button>
          </div>
          <div className={st.details}>
            <big>gauti</big>
            <p>z@c.com</p>
            {fav_fields?.map((field, index) => (
              <p
                key={index}
                className={exSt.tag}
                style={{
                  color: "grey",
                  fontSize: "0.9rem",
                  marginRight: "10px",
                  width: "fit-content",
                }}
              >
                {field}
              </p>
            ))}
          </div>
        </div>
        <div className={st.lower}>
          <p>Remove Chat</p>
          <hr />
          {chats.map((chat) => {
            return (
              <Field
                func={() => {
                  deleteChat(chat.id);
                }}
                key={chat.id}
                item={chat.name}
                color={"rgb(231, 105, 31)"}
              />
            );
          })}
        </div>
        <div className={st.lower}>
          <p>Remove Favourite</p>
          <hr />
          {fav_fields?.map((item, index) => (
            <Field
              func={() => {
                Remove(item);
              }}
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
