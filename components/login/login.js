import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import style from "./login.module.css";
import Image from "next/image";
import InstargamPicture from "../../Assists/735145cfe0a4.png";
function Login() {
  const [loginError, setLoginError] = useState(false);
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
  const [passwordIsShowing, setPasswordIsShowing] = useState(false);
  var i = 0;
  const screeeHandler = () => {
    if (i < screeArray.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setimgSrc(screeArray[i]);
  };
  useEffect(() => {
    setInterval(screeeHandler, 3000);
  }, []);

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
                  required
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
                  type={passwordIsShowing ? "text" : "password"}
                  required
                  className={style.input}
                  style={{
                    marginLeft:
                      loginPasswordButtonStatus !== ""
                        ? passwordIsShowing
                          ? "-1rem"
                          : "-0.75rem"
                        : "",
                  }}
                  placeholder="Password"
                  ref={passwordInput}
                  onChange={() => {
                    setLoginPasswordButtonStatus(passwordInput.current.value);
                  }}
                />
                <span
                  className={style.show_hide_btn}
                  style={{
                    display:
                      loginPasswordButtonStatus === "" ? "none" : "inline",
                  }}
                  onClick={() => {
                    if (passwordIsShowing) {
                      setPasswordIsShowing(false);
                    } else {
                      setPasswordIsShowing(true);
                    }
                  }}
                >
                  {passwordIsShowing ? "hide" : "show"}
                </span>
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
            {loginError ? (
              <div className={style.erorr_txt}>
                Sorry, your password was incorrect. Please double-check your
                password.
              </div>
            ) : (
              ""
            )}
            <button
              onClick={() => {
                setLoginError(true);
                // alert("Sorry, but It's none of my business😂😂😊");
              }}
              className={style.forget_password}
            >
              Forget password?
            </button>
          </form>
          <section className={style.sign_up_section}>
            <div className={style.sign_up_txt}>Don't have a account?</div>
            <Link href={"/accounts/emailsignup"}>
              <span className={style.Sign_up_link}>Sign up</span>
            </Link>
          </section>
          <section className={style.get_apps}>
            <div className={style.get_apps_txt}>Get the app.</div>
            <div className={style.stores_section}>
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt=""
                className={style.store_box}
              />
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt=""
                className={style.store_box}
              />
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Login;
