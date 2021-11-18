import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import st from "../css/rooms.module.css";
import { useAppContext } from "../context/Context";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase/firebase";

var internalFavorites;
function Rooms() {
  const [filteredList, setfilteredList] = useState([]);

  const { rooms, chats, setChats, setRooms, setFavourites } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    const getUsers = async () => {
      var copy = [];

      const snapshot = await db.collection("rooms").get();
      snapshot?.docs?.forEach((doc) => {
        const objectNew = {
          ...doc.data(),
          id: doc.id,
        };
        copy.push(objectNew);
      });

      if (copy.length > 0) {
        setRooms(() => copy);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser && isMounted) {
        getUsers();
      }
    });
    unsubscribe();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, []);

  const filterList = () => {
    const local = [];

    rooms?.forEach((room) => {
      var count = 0;

      if (internalFavorites?.includes(room.name.trim()) && count === 0) {
        local.push(room);
      }
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
  }, [rooms]);

  let temp = 0;

  const add = (room) => {
    chats.forEach((item) => {
      if (item.id === room.id) {
        temp = 1;
      }
    });
    if (temp === 0) {
      const copy = [...chats, room];
      setChats(() => copy);

      db.collection("users")
        .doc(auth?.currentUser?.email)
        .collection("details")
        .doc(auth?.currentUser?.email)
        .set({
          email: auth?.currentUser?.email,
          name: auth?.currentUser?.displayName,
          rooms: copy,
        });
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
          <span>Add Rooms To Chats</span>
        </div>
        {filteredList.length > 0 ? (
          <div className={st.box}>
            {filteredList.map((room, index) => (
              <Chat key={index} {...room} show={true} add={() => add(room)} />
            ))}
          </div>
        ) : (
          <div
            className={st.box}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "grey",
            }}
          >
            rooms appear here
          </div>
        )}
      </div>
    </div>
  );
}

export default Rooms;
