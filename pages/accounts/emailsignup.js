/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";

import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import style from "../../styles/signup.module.css";

function Emailsignup() {
  const router = useRouter();

  const emailInput = useRef();
  const fullNameInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();

  var date = new Date();

  const [Porofile, setPorofile] = useState("data");
  const [bio, setBio] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [passwordIsShowing, setPasswordIsShowing] = useState(false);
  const [loginEmailButtonStatus, setLoginEmailButtonStatus] = useState("");
  const [loginPasswordButtonStatus, setLoginPasswordButtonStatus] =
    useState("");

  const SignUpHandler = async () => {
    var URL = prompt("Enter image URl 👇👇👇");
    var BIO = prompt("Enter your bio 👇👇👇");

    var user = {
      username: usernameInput.current.value,
      fullname: fullNameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
      porofile_img:
        URL !== "" || URL !== " " || URL !== undefined || URL !== null
          ? URL
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grey_background.jpg/1200px-Grey_background.jpg",
      bio: URL !== undefined || URL !== null ? BIO : "",
      followers: [],
      following: [],
      posts: [],
      story: [],
    };
    const fetching = await fetch("/api/userSignUp", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });

    const response = await fetching.json();
    console.log(response);
    if (response.message === "successful") {
      passwordInput.current.value = "";
      emailInput.current.value = "";
      fullNameInput.current.value = "";
      usernameInput.current.value = "";
      localStorage.setItem("saved", JSON.stringify({ Posts: [] }));
      localStorage.setItem("user", JSON.stringify(user));
      router.replace("/");
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className={style.container}>
      <Head>
        <title>Login • Instagram</title>
      </Head>
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
        <div className={style.description}>
          Sign up to see photos and videos from your friends.
        </div>
        <div className={style.inputs}>
          <div className={style.input_div}>
            <input
              type="email"
              required
              className={style.input}
              placeholder="Email"
              name="email"
              ref={emailInput}
              onChange={() => {
                setLoginEmailButtonStatus(emailInput.current.value);
              }}
            />
          </div>
          <div className={style.input_div}>
            <input
              type="text"
              required
              className={style.input}
              placeholder="Full Name"
              name="fullname"
              ref={fullNameInput}
              onChange={() => {
                setLoginEmailButtonStatus(fullNameInput.current.value);
              }}
            />
          </div>
          <div className={style.input_div}>
            <input
              type="text"
              required
              className={style.input}
              placeholder="Username"
              name="username"
              ref={usernameInput}
              onChange={() => {
                setLoginEmailButtonStatus(usernameInput.current.value);
              }}
            />
          </div>
          <div className={style.input_div}>
            <input
              type={passwordIsShowing ? "text" : "password"}
              name="password"
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
              }}
            />
            <span
              className={style.show_hide_btn}
              style={{
                display: loginPasswordButtonStatus === "" ? "none" : "inline",
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
            loginEmailButtonStatus !== "" && loginPasswordButtonStatus !== ""
              ? style.login_in_btn
              : style.login_in_btn_disabled
          }
          onClick={() => {
            if (
              loginEmailButtonStatus !== "" &&
              loginPasswordButtonStatus !== ""
            ) {
              SignUpHandler();
            }
          }}
          type="submit"
        >
          Next
        </button>
        {loginError ? (
          <div className={style.erorr_txt}>
            This username isn't available. Please try another.
          </div>
        ) : (
          ""
        )}
        <div className={style.terms_description}>
          By signing up, you agree to our Terms , Data Policy and Cookies
          Policy.
        </div>
      </form>
      <section className={style.sign_up_section}>
        <div className={style.sign_up_txt}>Have an account?</div>
        <Link href={"/login"}>
          <span className={style.Sign_up_link}>Log in</span>
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
          <option value="en">English</option>
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
    </div>
  );
}

export default Emailsignup;
