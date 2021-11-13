import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import st from "../css/container.module.css";

function SideBar() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const effect = () => {
      const tabs = [];
      const names = [];

      for (let i = 0; i < 4; i++) {
        tabs.push(document.getElementById(`tab-${+i + 1}`));
        names.push(tabs[i].innerText.toLocaleLowerCase());
      }

      var path = location.pathname.slice(1);
      if (location.pathname === "/") {
        path = "home";
      } else if (location.pathname === "/settings") path = "user settings";
      const index = names.indexOf(path);

      tabs[index].style.background = "white";
      tabs[index].style.color = "royalblue";
    };
    return effect();

    // eslint-disable-next-line
  }, []);

  const navs = [
    { i: "fas fa-home", n: "Home", r: "/" },
    { i: "fas fa-comment-alt", n: "Chats", r: "chats" },
    { i: "fas fa-users", n: "Users", r: "users" },
    { i: "fas fa-user-edit", n: "User Settings", r: "settings" },
  ];

  return (
    <div className={st.left}>
      {navs.map(({ i, n, r }, index) => (
        <div
          className={st.tab}
          id={`tab-${+index + 1}`}
          key={index}
          onClick={() => history.replace(r)}
        >
          <button>
            <i className={i}></i>
          </button>
          {n}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
