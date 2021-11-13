import React, { useState } from "react";
import st from "../css/container.module.css";
import Chat from "./Chat";
import Message from "./Message";
import SideBar from "./SideBar";
import { useAppContext } from "../context/Context";

function Container() {
  const [index, setIndex] = useState(0);
  const { chats, setChats } = useAppContext();
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const copy = chats;
    copy[index].messages.push({ msg: message, tag: "user" });
    setChats(() => copy);
    setMessage(() => "");
  };

  return (
    <div className={st.container}>
      <SideBar />
      <div className={st.right}>
        <div className={st.chats}>
          {chats.map((chat, index) => (
            <Chat
              key={index}
              {...chat}
              func={() => setIndex(() => index)}
              msg={chats[index]?.messages?.at(-1)?.msg}
            />
          ))}
        </div>
        <div className={st.viewer}>
          <div className={st.toolbar}>
            <div>
              <button>
                <i className="fas fa-user"></i>
              </button>
              <div>
                <div>{chats[index]?.name}</div>
                <div className={st.ls}>
                  {chats[index]?.ls} on {chats[index]?.on}
                </div>
              </div>
            </div>
          </div>

          <div className={st.messages}>
            {chats[index]?.messages?.map((message, ind) => (
              <Message {...message} key={ind} time={"4:00 pm"} />
            ))}
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default Container;
