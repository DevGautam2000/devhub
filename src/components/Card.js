import React from "react";
import style from "../css/card.module.css";

function Card({ name, contribution, image, links }) {
  return (
    <div className={style.card}>
      <div className={style.avatar}>
        <div className={style.circle}>
          <img src={image} alt="dev_image" />
        </div>
      </div>
      <div className={style.info}>
        <strong>{name}</strong>
        <article>{contribution}</article>

        <hr />
        <div className={style.links}>
          {links?.map(({ id, link, name }) => (
            <div key={id} onClick={() => window.open(link)}>
              <i className={name}></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
