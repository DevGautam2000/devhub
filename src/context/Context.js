import React, { useContext, useState } from "react";
import AppRouter from "../AppRouter";

const AppContext = React.createContext();

const Appcontextfun = () => {
  const [favourites, setFavourites] = useState([]);
  const [alert, setAlert] = useState({ isVisible: false, msg: "" });
  const [imageAsUrl, setImageAsUrl] = useState(null);
  const [rooms, setRooms] = useState([]);

  const [chats, setChats] = useState([]);

  return (
    <AppContext.Provider
      value={{
        setFavourites,
        favourites,
        rooms,
        setRooms,
        chats,
        setChats,
        alert,
        setAlert,
        imageAsUrl,
        setImageAsUrl,
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
