import React, { useContext, useState } from "react";
import AppRouter from "../AppRouter";

const AppContext = React.createContext();

const Appcontextfun = () => {
  const [favourites, setFavourites] = useState([]);
  const [users, setUsers] = useState([
    {
      id: "g@c.com",
      favs: ["Artificial Intelligence", "Cyber Security"],
      name: "bhanu",
    },
    {
      id: "a@c.com",
      favs: ["Artificial Intelligence", "Web Development"],
      name: "Albert",
    },
    {
      id: "d@c.com",
      favs: ["Artificial Intelligence", "Mobile Development"],
      name: "D K Bose",
    },
  ]);

  const [chats, setChats] = useState([
    {
      id: "g@g.com",
      name: "Gautam Saha",
      ls: "4:00 pm",
      on: "Tuesday",
      messages: [
        { msg: "this", tag: "user" },
        { msg: "tht", tag: "rishbah" },
        { msg: "can", tag: "rishabh" },
        { msg: "us", tag: "user" },
      ],
    },
    {
      id: "g@r.com",
      name: "Rishabh Prasad",
      ls: "4:00 pm",
      on: "Monday",
      messages: [
        { msg: "hello", tag: "user" },
        { msg: "hi", tag: "rishbah" },
        { msg: "ypu", tag: "rishabh" },
        { msg: "us", tag: "user" },
      ],
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        setFavourites,
        favourites,
        users,
        setUsers,
        chats,
        setChats,
      }}
    >
      <AppRouter />
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { Appcontextfun, useAppContext };
