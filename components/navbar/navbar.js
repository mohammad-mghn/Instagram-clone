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

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";

import logo from "../../Assists/735145cfe0a4.png";
import SearchLogo from "../../Assists/search_icon.png";

function Navbar(props) {
  const router = useRouter();
  useEffect(() => {
    setNavbar(router.pathname);
  }, [router.pathname]);
  const [navbar, setNavbar] = useState(router.pathname);
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
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo_div}>
          <Image
            src={logo}
            alt="Picture of the author"
            className={styles.logo}
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
                router.push("/liked/inbox");
              }}
            >
              <Link href={"/liked/inbox"}>
                {navbar === "/liked/inbox" ? LikeIconClicked : LikeIcon}
              </Link>
            </button>
            <button className={styles.menu_icon_button}>
              <div
                className={
                  navbar === `/[user]` || navbar === `/${props.person.username}`
                    ? styles.porofile_icon_svg_clicked
                    : styles.porofile_icon_svg
                }
                onClick={() => {
                  setNavbar(`/${props.person.username}`);
                  router.push(`/${props.person.username}`);
                }}
              >
                <Image
                  src={require("../../Assists/porofile.jpg")}
                  alt="Picture of the author"
                  className={styles.porofile_icon_svg}
                />
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
