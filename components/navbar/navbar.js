/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import {
  HomeIcon,
  HomeIconClicked,
  DirectIcon,
  DirectIconClicked,
  AddIcon,
  AddIconClicked,
  ExploreIcon,
  ExploreIconClicked,
  LikeIcon,
  LikeIconClicked,
} from "../../Assists/svgs/svgs";

import loader from "../../Assists/loader.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";

import logo from "../../Assists/735145cfe0a4.png";
import SearchLogo from "../../Assists/search_icon.png";

function Navbar(props) {
  const router = useRouter();
  const [likes, setLikes] = useState(false);
  const [navbar, setNavbar] = useState(router.pathname);
  const [display, setDisplay] = useState(true);
  const [porofileCircle, setPorofileCircle] = useState(false);
  const [porofile_options, setPorofile_options] = useState(false);
  const [img_src, setImg_src] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAA1BMVEWFhYWbov8QAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8XAAAG6+KQCAAAAAElFTkSuQmCC"
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user") === null) {
        setDisplay(false);
      } else {
        setDisplay(true);
        setImg_src(JSON.parse(localStorage.getItem("user")).porofile_img);
      }
    } else {
    }
    setNavbar(router.pathname);
    setLikes(false);
  }, [router.pathname]);
  // var loadFile = function (event) {
  //   var output = document.getElementById("output");
  //   console.log(event);
  //   output.setAttribute("style", { display: "block" });
  //   output.src = URL.createObjectURL(event.target.files[0]);
  //   console.log(URL.createObjectURL(event.target.files[0]));
  //   output.onload = function () {
  //     URL.revokeObjectURL(output.src); // free memory
  //   };
  // };

  return (
    <nav
      className={styles.nav}
      style={{ display: display ? "inline" : "none" }}
    >
      <div className={styles.container}>
        <div className={styles.logo_div}>
          <Image
            src={logo}
            alt="Instargam"
            className={styles.logo}
            width={"100%"}
          />
        </div>
        <div className={styles.left_side}>
          <div className={styles.search_div}>
            <div className={styles.input_search_div}>
              <div className={styles.input_search_button_div}>
                <button className={styles.input_search_button}>
                  <Image
                    src={SearchLogo}
                    alt="Picture of the author"
                    className={styles.search_icon}
                  />
                </button>
              </div>
              <div className={styles.input_search_div}>
                <input
                  placeholder="Search"
                  type="text"
                  className={styles.search_input}
                />
              </div>
            </div>
          </div>
          <div className={styles.menu_icon_main_div}>
            <button
              className={styles.menu_icon_button}
              onClick={() => {
                setPorofileCircle(false);
                setNavbar("/");
              }}
            >
              <Link href={"/"}>
                {navbar === "/" ? HomeIconClicked : HomeIcon}
              </Link>
            </button>
            <button
              className={styles.menu_icon_button}
              onClick={() => {
                setNavbar("/direct/inbox");
                setPorofileCircle(false);
              }}
            >
              <Link href={"/direct/inbox"}>
                {navbar === "/direct/inbox" ? DirectIconClicked : DirectIcon}
              </Link>
            </button>
            <button
              className={styles.menu_icon_button}
              onClick={() => {
                setNavbar("/create/select");
                setPorofileCircle(false);
              }}
            >
              <Link href={"/create/select"}>
                {navbar === "/create/select" ? AddIconClicked : AddIcon}
              </Link>
            </button>
            <button
              className={styles.menu_icon_button}
              onClick={() => {
                setNavbar("/explore/");
                setPorofileCircle(false);
              }}
            >
              <Link href={"/explore/"}>
                {navbar === "/explore" ? ExploreIconClicked : ExploreIcon}
              </Link>
            </button>
            <button
              className={styles.menu_icon_button}
              onClick={() => {
                setNavbar("/liked/inbox");
                setPorofileCircle(false);
              }}
            >
              <Link href={"/liked/inbox"}>
                {navbar === "/liked/inbox" ? LikeIconClicked : LikeIcon}
              </Link>
            </button>
            <button className={styles.menu_icon_button}>
              <div
                className={
                  porofileCircle
                    ? styles.porofile_icon_svg_clicked
                    : styles.porofile_icon_svg
                }
                onClick={() => {
                  if (porofile_options) {
                    setPorofile_options(false);
                  } else {
                    setPorofile_options(true);
                  }
                }}
              >
                <img
                  src={img_src}
                  alt={"porofile"}
                  className={styles.porofile_icon_svg}
                  onClick={() => {
                    if (porofileCircle) {
                      setPorofileCircle(false);
                    } else {
                      setPorofileCircle(true);
                    }
                  }}
                />
                {porofile_options ? (
                  <div className={styles.options}>
                    <div className={styles.likes_array_porofile}></div>
                    <div className={styles.options_container}>
                      <div
                        onClick={() => {
                          setNavbar(`/${props.person.username}`);
                          router.push(`/${props.person.username}`);
                        }}
                        className={styles.porofile_option}
                      >
                        <svg
                          aria-label="Profile"
                          className={styles.porofile_option_picture}
                          color="#262626"
                          fill="#262626"
                          role="img"
                          viewBox="0 0 24 24"
                          onClick={() => {
                            setPorofileCircle(true);
                          }}
                        >
                          <circle
                            cx="12.004"
                            cy="12.004"
                            fill="none"
                            r="10.5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          ></circle>
                          <path
                            d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          ></path>
                          <circle
                            cx="12.006"
                            cy="9.718"
                            fill="none"
                            r="4.109"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          ></circle>
                        </svg>
                        <h4 className={styles.porofile_option_heading}>
                          Porofile
                        </h4>
                      </div>
                      <div className={styles.porofile_option}>
                        <svg
                          aria-label="Saved"
                          className={styles.porofile_option_picture}
                          color="#262626"
                          fill="#262626"
                          height="16"
                          role="img"
                          viewBox="0 0 24 24"
                          width="16"
                        >
                          <polygon
                            fill="none"
                            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokelinejoin="round"
                            strokeWidth="2"
                          ></polygon>
                        </svg>
                        <h4 className={styles.porofile_option_heading}>
                          Saved
                        </h4>
                      </div>
                      <div className={styles.porofile_option}>
                        <svg
                          aria-label="Settings"
                          className={styles.porofile_option_picture}
                          color="#262626"
                          fill="#262626"
                          height="16"
                          role="img"
                          viewBox="0 0 24 24"
                          width="16"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="8.635"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></circle>
                          <path
                            d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                        </svg>
                        <h4 className={styles.porofile_option_heading}>
                          Settings
                        </h4>
                      </div>
                      <div className={styles.porofile_option}>
                        <svg
                          aria-label="Switch Accounts"
                          className={styles.porofile_option_picture}
                          color="#262626"
                          fill="#262626"
                          height="16"
                          role="img"
                          viewBox="0 0 24 24"
                          width="16"
                        >
                          <path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path>
                        </svg>
                        <h4 className={styles.porofile_option_heading}>
                          Switch Accounts
                        </h4>
                      </div>
                      <div className={styles.vertical_line}></div>
                      <button
                        onClick={() => {
                          setNavbar("/login");
                          router.push("/login");
                          if (typeof window !== "undefined") {
                            if (localStorage.getItem("user") !== null) {
                              localStorage.removeItem("user");
                            }
                          }
                        }}
                        className={styles.logout_button}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
// .label {
//   /* display: flex;
//   align-items: center;
//   justify-content: center; */
// }
// .divv {
//   width: 300px;
//   background-color: rgba(105, 105, 105, 0.151);
//   border: 0.5px solid rgba(105, 105, 105, 0.151);
//   height: 300px;
//   border-radius: 5%;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* opacity: 0; */
// }
// .g {
//   position: relative;
//   top: -300px;
//   height: 300px;
//   width: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   opacity: 0;
//   background-color: brown;
//   z-index: 1;
//   cursor: pointer;
// }
{
  /* <label className={styles.label} htmlFor="input">
        <div className={styles.divv}>helloo</div>
      </label>
      <input
        type="file"
        accept="image/*"
        className={styles.g}
        onChange={loadFile}
        id="input"
      />
      <img className={styles.img} id="output" style={{ display: "none" }} /> */
}
