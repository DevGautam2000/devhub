import React, { useState, useEffect } from "react";
import Favourite from "../components/Favourite";
import st from "../css/home.module.css";
import { useAppContext } from "../context/Context";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import AI from "../components/Fields/AI";
import WebDev from "../components/Fields/WebDev";
import MobileDev from "../components/Fields/Mobile_Dev";
import CyberSecurity from "../components/Fields/CyberSecurity";
import { keys } from "../utils/keys";

function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const { favourites, setFavourites } = useAppContext();

  useEffect(() => {
    const effect = () => {
      const favs = JSON.parse(localStorage.getItem("fav_fields"));
      setFavourites(() => favs);

      if (favourites?.length === 0 && favs?.length === 0) {
        localStorage.setItem("devhub_modal", "true");
        setIsVisible(() => true);
      }
    };

    return effect();
    // eslint-disable-next-line
  }, [isVisible]);

  const getItem = () => {
    const isLocalVisible = localStorage.getItem("devhub_modal");
    return JSON.parse(isLocalVisible);
  };

  return (
    <>
      <Navbar />
      <div className={st.home}>
        {getItem() && isVisible ? (
          <Favourite setIsVisible={setIsVisible} />
        ) : null}
        <SideBar />
        <div className={st.right}>
          {favourites?.map((field, index) => {
            if (field === keys.ai) {
              return <AI key={index} />;
            } else if (field === keys.wd) return <WebDev key={index} />;
            else if (field === keys.md) return <MobileDev key={index} />;
            else if (field === keys.cs) return <CyberSecurity key={index} />;

            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
