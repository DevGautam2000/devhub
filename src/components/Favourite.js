import React, { useState } from "react";
import { useAppContext } from "../context/Context";
import st from "../css/favourite.module.css";
import { auth } from "../firebase/firebase";
import { keys } from "../utils/keys";

function Favourite({ setIsVisible }) {
  const { setFavourites } = useAppContext();

  const fields = [keys.ai, keys.wd, keys.cs, keys.md];
  const colors = [
    "linear-gradient(50deg,#8095ea,#5773e1)",
    "linear-gradient(50deg,#80baea, #59a7e6)",
    "linear-gradient(50deg,#80ea80,#66cb66)",
    "linear-gradient(50deg,#ff6347,#e34d33)",
  ];
  const [selectedFields, setSelectedFields] = useState([]);

  const pushToSelectedFields = (item) => {
    if (!selectedFields.includes(item)) {
      setSelectedFields(() => [...selectedFields, item]);
    }
  };

  const removeSelectedField = (item) => {
    if (selectedFields.includes(item)) {
      const index = selectedFields.indexOf(item);
      const copy = selectedFields;
      copy.splice(index, 1);
      setSelectedFields(() => [...copy]);
    }
  };

  const submitted = () => {
    if (selectedFields.length > 0) {
      setIsVisible(() => false);
      setFavourites(selectedFields);
      localStorage.setItem("devhub_modal", "false");
      localStorage.setItem("fav_fields", JSON.stringify(selectedFields));
    }
  };

  return (
    <div className={st.favourite}>
      <div className={st.fields}>
        <div className={st.selected}>
          {selectedFields.length === 0 ? (
            <span>
              Hi! {auth?.currentUser?.displayName?.split(" ")[0]} select your
              interest
            </span>
          ) : null}
          {selectedFields.map((item) => (
            <p key={item}>
              {item} <span onClick={() => removeSelectedField(item)}>x</span>
            </p>
          ))}
        </div>
        {fields.map((item, index) => {
          return (
            <button
              onClick={() => pushToSelectedFields(item)}
              key={item}
              style={{ background: `${colors[index]}` }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <button
          type="submit"
          onClick={submitted}
          className={st.submitBtn}
          disabled={selectedFields.length > 0 ? false : true}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Favourite;
