import React from "react";
import style from "../css/field.module.css";

function Field({ func, item, color }) {
  return (
    <div className={style.field}>
      <p style={{ background: color }}>
        {item} <span onClick={() => func(item)}>x</span>
      </p>
    </div>
  );
}

export default Field;
