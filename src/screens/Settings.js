import React, { useState, useRef } from "react";
import st from "../css/settings.module.css";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useAppContext } from "../context/Context";
import exSt from "../css/posts.module.css";
import Field from "../components/Field";
import { storage, auth, db } from "../firebase/firebase";
import style from "../css/popup.module.css";

function Settings() {
  const [imageAsFile, setImageAsFile] = useState("");
  const [popup, setPopup] = useState({ isVisible: false });
  const { imageAsUrl, setImageAsUrl, setAlert } = useAppContext();
  const imageRef = useRef();
  const previewRef = useRef();

  const handleImageAsFile = () => {
    const image = imageRef.current.files[0];
    setImageAsFile(() => image);
    getImage();
  };

  const { chats, setChats, setFavourites } = useAppContext();
  const fav_fields = JSON.parse(localStorage.getItem("fav_fields"));
  const deleteChat = (chat) => {
    const copy = chats.filter((c) => {
      if (chat.name !== c.name) {
        return c;
      }
      return null;
    });

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
  };
  const Remove = (remove_now) => {
    fav_fields.splice(fav_fields.indexOf(remove_now), 1);
    localStorage.setItem("fav_fields", JSON.stringify(fav_fields));
    setFavourites(() => fav_fields);
  };
  const handleFireBaseUpload = (e) => {
    e.preventDefault();

    // async magic goes here...
    if (imageAsFile === "" || imageAsFile.type.split("/")[0] !== "image") {
      setAlert(() => ({ isVisible: true, msg: "Please upload an image." }));
      imageRef.current.value = "";
      setImageAsFile(() => "");
      return;
      // console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    setTimeout(() => {
      setAlert(() => ({
        isVisible: true,
        msg: "Updating...",
      }));
    }, 200);
    imageRef.current.value = "";
    // console.log(imageAsFile);

    //delete image
    const deleteImage = (path) => {
      storage.ref().child(path).delete();
    };
    let path = "";
    storage
      .ref()
      .child(`images/${auth?.currentUser.uid}/`)
      .listAll()
      .then((img) => {
        path = `${img?.items?.at(-1)?._delegate?._location.path_.toString()}`;
        if (path !== "undefined") deleteImage(path);
      })
      .catch((err) => {});

    const uploadTask = storage
      .ref(`/images/${auth?.currentUser.uid}/${imageAsFile.name}`)
      .put(imageAsFile);

    //initiates the firebase side uploading
    uploadTask.on("state_changed", () => {
      const setImage = (uri) => {
        storage.ref(`${uri}`).getDownloadURL().then(onResolve, onReject);

        function onResolve(uri) {
          setImageAsUrl(() => ({
            imgUrl: uri,
          }));
        }
        function onReject(error) {
          //fill not found
        }
      };

      let url = "";

      storage
        .ref()
        .child(`images/${auth?.currentUser.uid}/`)
        .listAll()
        .then((img) => {
          url = `${img?.items?.at(-1)?._delegate?._location.path_.toString()}`;
          if (url !== "undefined") {
            setImage(url);

            setAlert(() => ({
              isVisible: true,
              msg: "Profile picture updated.",
            }));

            setImageAsFile(() => "");
          }
        })
        .catch((err) => {});
    });
  };

  const getImage = () => {
    const files = imageRef.current?.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        document.getElementById("preview").src = this.result;
      });
    }
  };

  return (
    <div style={{ display: "flex" }} className={st.settings}>
      <Navbar />
      <SideBar />

      {popup?.isVisible ? (
        <div className={style.popup}>
          <div className={style.box}>
            <span className={style.text}>Upload an image</span>
            <form onSubmit={handleFireBaseUpload}>
              <div
                style={{
                  // minWidth: "100%",
                  width: "200px",
                  // minHeight: "200px",
                  height: "200px",
                  border: "1px solid #eee",
                  margin: "10px auto",
                  background: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                {imageAsFile ? (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={imageAsFile}
                    alt="image_prev"
                    ref={previewRef}
                    id="preview"
                  />
                ) : (
                  <span style={{ color: "grey" }}>preview</span>
                )}
              </div>
              <div>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    border: "1px solid #eee",
                  }}
                  onChange={handleImageAsFile}
                  ref={imageRef}
                  id="fileInput"
                />
              </div>
            </form>
            <div>
              <button
                style={{ marginRight: "10px" }}
                onClick={() => {
                  imageRef.current.value = "";
                  setImageAsFile(() => "");
                  setPopup(() => ({ isVisible: false }));
                }}
                className={style.ripple}
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  handleFireBaseUpload(e);
                  setPopup(() => ({ isVisible: false }));
                }}
                className={style.ripple}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className={st.right}>
        {/* <img src={imageAsUrl.imgUrl} alt="image tag" /> */}

        <div className={st.profile}>
          <div className={st.avatar}>
            <span
              className={st.upload_tag}
              onClick={() => setPopup(() => ({ isVisible: true }))}
            >
              update profile picture
            </span>

            {!imageAsUrl ? (
              <button>
                <i className="fas fa-user"></i>
              </button>
            ) : (
              <button>
                <img
                  src={imageAsUrl?.imgUrl}
                  alt="image_tag"
                  id={st.profile_picture}
                />
              </button>
            )}
          </div>
          <div className={st.details}>
            <big>
              {auth?.currentUser?.displayName.split(" ")[0].toUpperCase()}
            </big>
            <p>{auth?.currentUser?.email}</p>
            {fav_fields?.map((field, index) => (
              <p
                key={index}
                className={exSt.tag}
                style={{
                  color: "grey",
                  fontSize: "0.9rem",
                  marginRight: "10px",
                  width: "fit-content",
                }}
              >
                {field}
              </p>
            ))}
          </div>
        </div>
        <div className={st.lower}>
          <p>Remove Rooms</p>
          <hr />
          {chats.map((chat, index) => {
            return (
              <Field
                func={() => {
                  deleteChat(chat);
                }}
                key={index}
                item={chat.name}
                color={"#98e71f"}
              />
            );
          })}
        </div>
        <div className={st.lower}>
          <p>Remove Favourite</p>
          <hr />
          {fav_fields?.map((item, index) => (
            <Field
              func={() => {
                Remove(item);
              }}
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
