import React, { useRef, useState } from "react";
import style from "./login.module.css";
import Image from "next/image";
import InstargamPicture from "../../Assists/735145cfe0a4.png";
function Login() {
  const [loginEmailButtonStatus, setLoginEmailButtonStatus] = useState("");
  const [loginPasswordButtonStatus, setLoginPasswordButtonStatus] =
    useState("");
  const emailInput = useRef();
  const passwordInput = useRef();
  const [imgSrc, setimgSrc] = useState(
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
  );
  const screeArray = [
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
  ];
  var i = 0;
  const screeeHandler = () => {
    if (i < screeArray.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setimgSrc(screeArray[i]);
  };
  setInterval(screeeHandler, 3000);
  console.log(emailInput);
  return (
    <section className={style.con}>
      <section className={style.main_section}>
        <section className={style.phones_section}>
          <img
            src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
            alt=""
            className={style.phones}
          />
          <img className={style.phone_screen} src={imgSrc} alt="" />
        </section>
        <section className={style.form_section}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={style.login_form}
          >
            <div className={style.instagram_logo_div}>
              <img
                src={"https://i.imgur.com/4j6Ya2k.jpg"}
                alt=""
                className={style.instargam_logo}
                // width="170"
                // height="45"
              />
            </div>
            <div className={style.inputs}>
              <div className={style.input_div}>
                <input
                  type="email"
                  className={style.input}
                  placeholder="Email"
                  ref={emailInput}
                  onChange={() => {
                    setLoginEmailButtonStatus(emailInput.current.value);
                  }}
                />
              </div>
              <div className={style.input_div}>
                <input
                  type="password"
                  className={style.input}
                  placeholder="Password"
                  ref={passwordInput}
                  onChange={() => {
                    setLoginPasswordButtonStatus(passwordInput.current.value);
                  }}
                />
              </div>
            </div>
            <button
              className={
                loginEmailButtonStatus !== "" &&
                loginPasswordButtonStatus !== ""
                  ? style.login_in_btn
                  : style.login_in_btn_disabled
              }
              onClick={() => {
                console.log("adfasd");
              }}
              type="submit"
            >
              Login in
            </button>
            <button
              onClick={() => {
                if (emailInput === null) {
                  console.log("asdfa");
                }
              }}
              className={style.forget_password}
            >
              Forget password?
            </button>
          </form>
        </section>
      </section>
    </section>
  );
}

export default Login;
