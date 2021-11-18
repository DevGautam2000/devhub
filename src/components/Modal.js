import React from "react";
import { useAppContext } from "../context/Context";
import style from "../css/modal.module.css";

function Modal({ msg }) {
  const { setAlert } = useAppContext();
  return (
    <div className={style.modal}>
      <div className={style.box}>
        <span className={style.text}>Alert !</span>
        <p>{msg}</p>
        <div>
          <button
            onClick={() => {
              setAlert(() => ({ isVisible: false, msg: "" }));
            }}
            className={style.ripple}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
