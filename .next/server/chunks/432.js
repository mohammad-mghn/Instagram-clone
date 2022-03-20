"use strict";
exports.id = 432;
exports.ids = [432];
exports.modules = {

/***/ 432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./Assists/svgs/svgs.js
var svgs = __webpack_require__(833);
;// CONCATENATED MODULE: ./Assists/loader.svg
/* harmony default export */ const loader = ({"src":"/_next/static/media/loader.b11f00ea.svg","height":64,"width":64});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/navbar/navbar.module.css
var navbar_module = __webpack_require__(290);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./Assists/735145cfe0a4.png
/* harmony default export */ const _735145cfe0a4 = ({"src":"/_next/static/media/735145cfe0a4.f1109b37.png","height":29,"width":103,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANElEQVR4nGNUllcoY2BguAbEikD8Foi/AjEI8ADxH5ACPSCDF4j/ADEHEOsC8SkgBin4DgAc8whX0jf2+QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./Assists/search_icon.png
/* harmony default export */ const search_icon = ({"src":"/_next/static/media/search_icon.1aaea576.png","height":64,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaklEQVR42j2NMQqAMBRDP2px8wIuorgUvIBDF3HpJhSHhA6degrv7m8RAz/55A0R9IgM9MxYRNgIIlZRsUXCoA+CnqFRt3Cl8EoNW/WZRykyO42KOJdYkGg5IeCRjwx0PDFywy116Bd3XC9xKxaviV6HYQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/navbar/navbar.js

/* eslint-disable @next/next/no-img-element */ 








function Navbar(props) {
    const router = (0,router_.useRouter)();
    const { 0: likes , 1: setLikes  } = (0,external_react_.useState)(false);
    const { 0: navbar , 1: setNavbar  } = (0,external_react_.useState)(router.pathname);
    const { 0: display , 1: setDisplay  } = (0,external_react_.useState)(true);
    const { 0: porofileCircle , 1: setPorofileCircle  } = (0,external_react_.useState)(false);
    const { 0: porofile_options , 1: setPorofile_options  } = (0,external_react_.useState)(false);
    const { 0: img_src , 1: setImg_src  } = (0,external_react_.useState)("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKo2KWflj1H9qcvCuHr2j33C9HnXzzkf7BBA&usqp=CAU");
    (0,external_react_.useEffect)(()=>{
        if (false) {} else {}
        setNavbar(router.pathname);
        setLikes(false);
    }, [
        router.pathname
    ]);
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
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (navbar_module_default()).nav,
        style: {
            display: display ? "inline" : "none"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (navbar_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (navbar_module_default()).logo_div,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: _735145cfe0a4,
                        alt: "Instargam",
                        className: (navbar_module_default()).logo,
                        width: "100%"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (navbar_module_default()).left_side,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (navbar_module_default()).search_div,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (navbar_module_default()).input_search_div,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (navbar_module_default()).input_search_button_div,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: (navbar_module_default()).input_search_button,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: search_icon,
                                                alt: "Picture of the author",
                                                className: (navbar_module_default()).search_icon
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (navbar_module_default()).input_search_div,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            placeholder: "Search",
                                            type: "text",
                                            className: (navbar_module_default()).search_input
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (navbar_module_default()).menu_icon_main_div,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (navbar_module_default()).menu_icon_button,
                                    onClick: ()=>{
                                        setPorofileCircle(false);
                                        setNavbar("/");
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: navbar === "/" ? svgs/* HomeIconClicked */.Cq : svgs/* HomeIcon */.tv
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (navbar_module_default()).menu_icon_button,
                                    onClick: ()=>{
                                        setNavbar("/direct/inbox");
                                        setPorofileCircle(false);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/direct/inbox",
                                        children: navbar === "/direct/inbox" ? svgs/* DirectIconClicked */.ko : svgs/* DirectIcon */.$w
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (navbar_module_default()).menu_icon_button,
                                    onClick: ()=>{
                                        setNavbar("/create/select");
                                        setPorofileCircle(false);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/create/select",
                                        children: navbar === "/create/select" ? svgs/* AddIconClicked */.$3 : svgs/* AddIcon */.dt
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (navbar_module_default()).menu_icon_button,
                                    onClick: ()=>{
                                        setNavbar("/explore/");
                                        setPorofileCircle(false);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/explore/",
                                        children: navbar === "/explore" ? svgs/* ExploreIconClicked */.L_ : svgs/* ExploreIcon */.YI
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (navbar_module_default()).menu_icon_button,
                                    onClick: ()=>{
                                        setNavbar("/liked/inbox");
                                        setPorofileCircle(false);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/liked/inbox",
                                        children: navbar === "/liked/inbox" ? svgs/* LikeIconClicked */.zi : svgs/* LikeIcon */.lM
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (navbar_module_default()).menu_icon_button,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: porofileCircle ? (navbar_module_default()).porofile_icon_svg_clicked : (navbar_module_default()).porofile_icon_svg,
                                        onClick: ()=>{
                                            if (porofile_options) {
                                                setPorofile_options(false);
                                            } else {
                                                setPorofile_options(true);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: img_src,
                                                alt: "porofile",
                                                className: (navbar_module_default()).porofile_icon_svg,
                                                onClick: ()=>{
                                                    if (porofileCircle) {
                                                        setPorofileCircle(false);
                                                    } else {
                                                        setPorofileCircle(true);
                                                    }
                                                }
                                            }),
                                            porofile_options ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (navbar_module_default()).options,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: (navbar_module_default()).likes_array_porofile
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (navbar_module_default()).options_container,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                onClick: ()=>{
                                                                    setNavbar(`/${props.person.username}`);
                                                                    router.push(`/${props.person.username}`);
                                                                },
                                                                className: (navbar_module_default()).porofile_option,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                        "aria-label": "Profile",
                                                                        className: (navbar_module_default()).porofile_option_picture,
                                                                        color: "#262626",
                                                                        fill: "#262626",
                                                                        role: "img",
                                                                        viewBox: "0 0 24 24",
                                                                        onClick: ()=>{
                                                                            setPorofileCircle(true);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                                cx: "12.004",
                                                                                cy: "12.004",
                                                                                fill: "none",
                                                                                r: "10.5",
                                                                                stroke: "currentColor",
                                                                                strokeLinecap: "round",
                                                                                strokeMiterlimit: "10",
                                                                                strokeWidth: "2"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                d: "M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeLinecap: "round",
                                                                                strokeMiterlimit: "10",
                                                                                strokeWidth: "2"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                                cx: "12.006",
                                                                                cy: "9.718",
                                                                                fill: "none",
                                                                                r: "4.109",
                                                                                stroke: "currentColor",
                                                                                strokeLinecap: "round",
                                                                                strokeMiterlimit: "10",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: (navbar_module_default()).porofile_option_heading,
                                                                        children: "Porofile"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (navbar_module_default()).porofile_option,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        "aria-label": "Saved",
                                                                        className: (navbar_module_default()).porofile_option_picture,
                                                                        color: "#262626",
                                                                        fill: "#262626",
                                                                        height: "16",
                                                                        role: "img",
                                                                        viewBox: "0 0 24 24",
                                                                        width: "16",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                                                            fill: "none",
                                                                            points: "20 21 12 13.44 4 21 4 3 20 3 20 21",
                                                                            stroke: "currentColor",
                                                                            strokeLinecap: "round",
                                                                            strokelinejoin: "round",
                                                                            strokeWidth: "2"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: (navbar_module_default()).porofile_option_heading,
                                                                        children: "Saved"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (navbar_module_default()).porofile_option,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                        "aria-label": "Settings",
                                                                        className: (navbar_module_default()).porofile_option_picture,
                                                                        color: "#262626",
                                                                        fill: "#262626",
                                                                        height: "16",
                                                                        role: "img",
                                                                        viewBox: "0 0 24 24",
                                                                        width: "16",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                                cx: "12",
                                                                                cy: "12",
                                                                                fill: "none",
                                                                                r: "8.635",
                                                                                stroke: "currentColor",
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                d: "M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: (navbar_module_default()).porofile_option_heading,
                                                                        children: "Settings"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (navbar_module_default()).porofile_option,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        "aria-label": "Switch Accounts",
                                                                        className: (navbar_module_default()).porofile_option_picture,
                                                                        color: "#262626",
                                                                        fill: "#262626",
                                                                        height: "16",
                                                                        role: "img",
                                                                        viewBox: "0 0 24 24",
                                                                        width: "16",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: (navbar_module_default()).porofile_option_heading,
                                                                        children: "Switch Accounts"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (navbar_module_default()).vertical_line
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                onClick: ()=>{
                                                                    setNavbar("/login");
                                                                    router.push("/login");
                                                                    if (false) {}
                                                                },
                                                                className: (navbar_module_default()).logout_button,
                                                                children: "Log Out"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : ""
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const navbar = (Navbar);
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
      <img className={styles.img} id="output" style={{ display: "none" }} /> */ }
;// CONCATENATED MODULE: ./pages/Layout.js



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                style: {
                    position: "relative",
                    zIndex: "3"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                    person: {
                        username:  false ? 0 : "Unknowen",
                        porofile_img:  false ? 0 : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAA1BMVEWFhYWbov8QAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8XAAAG6+KQCAAAAAElFTkSuQmCC"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    }));
}
/* harmony default export */ const pages_Layout = (Layout);


/***/ })

};
;