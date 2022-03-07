/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */

import React, { useRef, useState, useEffect } from "react";

import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import style from "./login.module.css";

function Login() {
  const router = useRouter();

  const emailInput = useRef();
  const passwordInput = useRef();

  var date = new Date();

  const [loginError, setLoginError] = useState(false);
  const [loginEmailButtonStatus, setLoginEmailButtonStatus] = useState("");
  const [passwordIsShowing, setPasswordIsShowing] = useState(false);
  const [loginPasswordButtonStatus, setLoginPasswordButtonStatus] =
    useState("");
  const [imgSrc, setimgSrc] = useState(
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
  );

  var i = 0;
  const screeeHandler = () => {
    const screeArray = [
      "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
      "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
    ];
    if (i < screeArray.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setimgSrc(screeArray[i]);
  };
  useEffect(() => {
    setInterval(screeeHandler, 3000);
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user") === null) {
        router.push("/login");
      } else {
        router.push("/");
      }
    }
  }, []);

  return (
    <section className={style.container}>
      <Head>
        <title>Login • Instagram</title>
      </Head>
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
                src={
                  "https://iconape.com/wp-content/files/mc/369575/png/369575.png"
                }
                alt=""
                className={style.instargam_logo}
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
                    setLoginError(false);
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
                          : "-0.65rem"
                        : "",
                  }}
                  placeholder="Password"
                  ref={passwordInput}
                  onChange={() => {
                    setLoginPasswordButtonStatus(passwordInput.current.value);
                    setLoginError(false);
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
              onClick={async () => {
                var user = {
                  email: emailInput.current.value,
                  password: passwordInput.current.value,
                };
                const fetching = await fetch("/api/userLogIn", {
                  method: "POST",
                  body: JSON.stringify(user),
                  headers: {
                    "Content-type": "application/json",
                  },
                });
                const response = await fetching.json();
                if (response.message !== "unsuccessful") {
                  localStorage.setItem(
                    "user",
                    JSON.stringify(response.message[0])
                  );
                  router.push("/");
                } else {
                  setLoginError(true);
                }
              }}
              type="submit"
            >
              Login in
            </button>
            {loginError ? (
              <div className={style.erorr_txt}>
                Sorry, your password or email was incorrect. Please double-check
                your password.
              </div>
            ) : (
              ""
            )}
            <button
              onClick={() => {
                alert("Sorry, but It's none of my business😂😂😊");
              }}
              className={style.forget_password}
            >
              Forgot password?
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
              <a target={"_blank"} rel="noreferrer" href="https:/lcoalhosttt">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt=""
                  className={style.store_box}
                />
              </a>
              <a target={"_blank"} rel="noreferrer" href="https:/lcoalhosttt">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt=""
                  className={style.store_box}
                />
              </a>
            </div>
          </section>
        </section>
      </section>
      <section className={style.links}>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Meta
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          About
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Blog
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Jobs
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Help
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          API
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Privacy
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Terms
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Top
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Accounts
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Hashtags
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Locations
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Instagram
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Lite
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Dance
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Food & Drink
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Home & Garden
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Music
        </a>
        <a href="https://about.facebook.com/meta" className={style.link}>
          Visual Arts
        </a>
      </section>
      <section className={style.copy_right_and_language}>
        <select
          aria-label="Switch Display Language"
          className={style.language_select}
        >
          <option value="af">Afrikaans</option>
          <option value="cs">Čeština</option>
          <option value="da">Dansk</option>
          <option value="de">Deutsch</option>
          <option value="el">Ελληνικά</option>
          <option value="en" selected>
            English
          </option>
          <option value="en-gb">English (UK)</option>
          <option value="es">Español (España)</option>
          <option value="es-la">Español</option>
          <option value="fi">Suomi</option>
          <option value="fr">Français</option>
          <option value="id">Bahasa Indonesia</option>
          <option value="it">Italiano</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="ms">Bahasa Melayu</option>
          <option value="nb">Norsk</option>
          <option value="nl">Nederlands</option>
          <option value="pl">Polski</option>
          <option value="pt-br">Português (Brasil)</option>
          <option value="pt">Português (Portugal)</option>
          <option value="ru">Русский</option>
          <option value="sv">Svenska</option>
          <option value="th">ภาษาไทย</option>
          <option value="tl">Filipino</option>
          <option value="tr">Türkçe</option>
          <option value="zh-cn">中文(简体)</option>
          <option value="zh-tw">中文(台灣)</option>
          <option value="bn">বাংলা</option>
          <option value="gu">ગુજરાતી</option>
          <option value="hi">हिन्दी</option>
          <option value="hr">Hrvatski</option>
          <option value="hu">Magyar</option>
          <option value="kn">ಕನ್ನಡ</option>
          <option value="ml">മലയാളം</option>
          <option value="mr">मराठी</option>
          <option value="ne">नेपाली</option>
          <option value="pa">ਪੰਜਾਬੀ</option>
          <option value="si">සිංහල</option>
          <option value="sk">Slovenčina</option>
          <option value="ta">தமிழ்</option>
          <option value="te">తెలుగు</option>
          <option value="vi">Tiếng Việt</option>
          <option value="zh-hk">中文(香港)</option>
          <option value="bg">Български</option>
          <option value="fr-ca">Français (Canada)</option>
          <option value="ro">Română</option>
          <option value="sr">Српски</option>
          <option value="uk">Українська</option>
        </select>

        <div className={style.copy_right_part}>
          © {date.getFullYear()} Instagram from Meta
        </div>
      </section>
    </section>
  );
}

export default Login;
