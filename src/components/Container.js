import React, { useState, useEffect } from "react";
import st from "../css/container.module.css";
import Chat from "./Chat";
import Message from "./Message";
import SideBar from "./SideBar";
import { useAppContext } from "../context/Context";
import { db, auth } from "../firebase/firebase";

function Container() {
  const [index, setIndex] = useState(0);
  const { chats, setChats } = useAppContext();
  const [message, setMessage] = useState("");
  const [fetchedMessages, setFetchedMessages] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const getChats = async () => {
      const snapshot = await db
        .collection("users")
        .doc(auth?.currentUser?.email)
        .collection("details")
        .doc(auth?.currentUser?.email)
        .get();

      const copy = snapshot?.data();
      if (copy) {
        setChats(() => copy?.rooms);
        fetchMessages(copy?.rooms[index]?.id);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser && isMounted) {
        getChats();
      }
    });

    unsubscribe();
    return () => {
      isMounted = false;
    };

    //eslint-disable-next-line
  }, [fetchedMessages]);
  const submit = (e) => {
    e.preventDefault();

    if (message) {
      const setMessageToDatabase = () => {
        const time = new Date().getTime();
        db.collection("rooms")
          .doc(chats[index]?.id)
          .collection("messages")
          .add({
            msg: message,
            tag: auth.currentUser.uid,
            timeStamp: time,
            name: auth?.currentUser?.displayName.split(" ")[0],
          });
      };

      const copy = fetchedMessages;
      copy.push({ msg: message, tag: auth.currentUser.uid });
      setMessageToDatabase();
      setFetchedMessages(() => copy);
      setMessage(() => "");
    }
  };

  const fetchMessages = async (id) => {
    const snapshot = await db
      .collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timeStamp")
      .get();

    setFetchedMessages(snapshot?.docs.map((doc) => doc?.data()));
  };

  return (
    <div className={st.container}>
      <SideBar />
      <div className={st.right}>
        {chats.length > 0 ? (
          <div className={st.chats}>
            {chats.map((chat, index) => (
              <Chat
                key={index}
                {...chat}
                func={() => {
                  fetchMessages(chat.id);
                  setIndex(() => index);
                }}
              />
            ))}
          </div>
        ) : (
          <div
            className={st.chats}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "grey",
            }}
          >
            chats appear here
          </div>
        )}
        <div className={st.viewer}>
          {chats.length > 0 ? (
            <div className={st.toolbar}>
              <div>
                <button>
                  <img
                    src={chats[index]?.link}
                    alt="prof"
                    style={{ width: "100%", height: "100%" }}
                  />
                </button>
                <div>
                  <div>{chats[index]?.name}</div>
                </div>
              </div>
            </div>
          ) : null}

          {chats.length > 0 ? (
            <div className={st.messages}>
              {fetchedMessages?.map((message, ind) => (
                <Message {...message} key={ind} />
              ))}
            </div>
          ) : (
            <div
              className={st.messages}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "grey",
              }}
            >
              messages appear here
            </div>
          )}

          {chats.length > 0 ? (
            <div className={st.textBox}>
              <div className={st.textInput}>
                <form onSubmit={submit}>
                  <input
                    type="text"
                    id="input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                  />
                </form>
              </div>
              <div className={st.send}>
                <button
                  type="submit"
                  onClick={submit}
                  disabled={message.length === 0 ? true : false}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Container;
